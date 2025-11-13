import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { services, serviceItems } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { getCurrentUser } from '@/lib/auth';

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // Authentication check
    const user = await getCurrentUser(request);
    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required', code: 'UNAUTHORIZED' },
        { status: 401 }
      );
    }

    // Extract and validate service ID from route params
    const { id } = await context.params;
    const serviceId = parseInt(id);

    if (!id || isNaN(serviceId)) {
      return NextResponse.json(
        { error: 'Valid service ID is required', code: 'INVALID_SERVICE_ID' },
        { status: 400 }
      );
    }

    // Check if parent service exists
    const existingService = await db
      .select()
      .from(services)
      .where(eq(services.id, serviceId))
      .limit(1);

    if (existingService.length === 0) {
      return NextResponse.json(
        { error: 'Parent service not found', code: 'SERVICE_NOT_FOUND' },
        { status: 404 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { icon, title, items, displayOrder } = body;

    // Validate required fields
    if (!icon || typeof icon !== 'string' || icon.trim() === '') {
      return NextResponse.json(
        { error: 'Icon is required and must be a non-empty string', code: 'MISSING_ICON' },
        { status: 400 }
      );
    }

    if (!title || typeof title !== 'string' || title.trim() === '') {
      return NextResponse.json(
        { error: 'Title is required and must be a non-empty string', code: 'MISSING_TITLE' },
        { status: 400 }
      );
    }

    if (!items) {
      return NextResponse.json(
        { error: 'Items field is required', code: 'MISSING_ITEMS' },
        { status: 400 }
      );
    }

    // Validate and parse items as JSON array
    let itemsArray: string[];
    try {
      if (typeof items === 'string') {
        itemsArray = JSON.parse(items);
      } else if (Array.isArray(items)) {
        itemsArray = items;
      } else {
        return NextResponse.json(
          { error: 'Items must be a valid JSON array', code: 'INVALID_ITEMS_FORMAT' },
          { status: 400 }
        );
      }

      if (!Array.isArray(itemsArray) || itemsArray.length === 0) {
        return NextResponse.json(
          { error: 'Items must be a non-empty array', code: 'EMPTY_ITEMS_ARRAY' },
          { status: 400 }
        );
      }
    } catch (error) {
      return NextResponse.json(
        { error: 'Items must be a valid JSON array', code: 'INVALID_JSON_ITEMS' },
        { status: 400 }
      );
    }

    // Validate displayOrder if provided
    const validatedDisplayOrder = displayOrder !== undefined && displayOrder !== null
      ? parseInt(displayOrder)
      : 0;

    if (displayOrder !== undefined && isNaN(validatedDisplayOrder)) {
      return NextResponse.json(
        { error: 'Display order must be a valid integer', code: 'INVALID_DISPLAY_ORDER' },
        { status: 400 }
      );
    }

    // Prepare insert data with auto-generated timestamps
    const now = new Date().toISOString();
    const insertData = {
      serviceId,
      icon: icon.trim(),
      title: title.trim(),
      items: itemsArray,
      displayOrder: validatedDisplayOrder,
      createdAt: now,
      updatedAt: now,
    };

    // Insert new service item
    const newServiceItem = await db
      .insert(serviceItems)
      .values(insertData)
      .returning();

    // Return created service item with 201 status
    return NextResponse.json(newServiceItem[0], { status: 201 });

  } catch (error) {
    console.error('POST service item error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error: ' + (error instanceof Error ? error.message : 'Unknown error'),
        code: 'INTERNAL_ERROR'
      },
      { status: 500 }
    );
  }
}