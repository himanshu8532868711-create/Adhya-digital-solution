import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { serviceItems } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { getCurrentUser } from '@/lib/auth';

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required', code: 'UNAUTHORIZED' },
        { status: 401 }
      );
    }

    const { id } = await context.params;

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid service item ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const itemId = parseInt(id);

    const existingItem = await db
      .select()
      .from(serviceItems)
      .where(eq(serviceItems.id, itemId))
      .limit(1);

    if (existingItem.length === 0) {
      return NextResponse.json(
        { error: 'Service item not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    const body = await request.json();

    if ('userId' in body || 'user_id' in body) {
      return NextResponse.json(
        {
          error: 'User ID cannot be provided in request body',
          code: 'USER_ID_NOT_ALLOWED',
        },
        { status: 400 }
      );
    }

    const { icon, title, items, displayOrder, serviceId } = body;

    const updates: any = {
      updatedAt: new Date().toISOString(),
    };

    if (icon !== undefined) {
      if (typeof icon !== 'string' || icon.trim() === '') {
        return NextResponse.json(
          { error: 'Icon must be a non-empty string', code: 'INVALID_ICON' },
          { status: 400 }
        );
      }
      updates.icon = icon.trim();
    }

    if (title !== undefined) {
      if (typeof title !== 'string' || title.trim() === '') {
        return NextResponse.json(
          { error: 'Title must be a non-empty string', code: 'INVALID_TITLE' },
          { status: 400 }
        );
      }
      updates.title = title.trim();
    }

    if (items !== undefined) {
      let parsedItems;
      try {
        if (typeof items === 'string') {
          parsedItems = JSON.parse(items);
        } else {
          parsedItems = items;
        }

        if (!Array.isArray(parsedItems)) {
          return NextResponse.json(
            { error: 'Items must be a valid JSON array', code: 'INVALID_ITEMS' },
            { status: 400 }
          );
        }

        updates.items = JSON.stringify(parsedItems);
      } catch (error) {
        return NextResponse.json(
          { error: 'Items must be a valid JSON array', code: 'INVALID_ITEMS' },
          { status: 400 }
        );
      }
    }

    if (displayOrder !== undefined) {
      if (typeof displayOrder !== 'number' || !Number.isInteger(displayOrder)) {
        return NextResponse.json(
          {
            error: 'Display order must be a valid integer',
            code: 'INVALID_DISPLAY_ORDER',
          },
          { status: 400 }
        );
      }
      updates.displayOrder = displayOrder;
    }

    if (serviceId !== undefined) {
      if (typeof serviceId !== 'number' || !Number.isInteger(serviceId)) {
        return NextResponse.json(
          {
            error: 'Service ID must be a valid integer',
            code: 'INVALID_SERVICE_ID',
          },
          { status: 400 }
        );
      }
      updates.serviceId = serviceId;
    }

    const updatedItem = await db
      .update(serviceItems)
      .set(updates)
      .where(eq(serviceItems.id, itemId))
      .returning();

    if (updatedItem.length === 0) {
      return NextResponse.json(
        { error: 'Failed to update service item', code: 'UPDATE_FAILED' },
        { status: 500 }
      );
    }

    return NextResponse.json(updatedItem[0], { status: 200 });
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error: ' + (error instanceof Error ? error.message : 'Unknown error'),
        code: 'INTERNAL_ERROR',
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required', code: 'UNAUTHORIZED' },
        { status: 401 }
      );
    }

    const { id } = await context.params;

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid service item ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const itemId = parseInt(id);

    const existingItem = await db
      .select()
      .from(serviceItems)
      .where(eq(serviceItems.id, itemId))
      .limit(1);

    if (existingItem.length === 0) {
      return NextResponse.json(
        { error: 'Service item not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    const deletedItem = await db
      .delete(serviceItems)
      .where(eq(serviceItems.id, itemId))
      .returning();

    if (deletedItem.length === 0) {
      return NextResponse.json(
        { error: 'Failed to delete service item', code: 'DELETE_FAILED' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: 'Service item deleted successfully',
        deletedItem: deletedItem[0],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error: ' + (error instanceof Error ? error.message : 'Unknown error'),
        code: 'INTERNAL_ERROR',
      },
      { status: 500 }
    );
  }
}