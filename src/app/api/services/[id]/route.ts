import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { services, serviceItems } from '@/db/schema';
import { eq, like, and, or, asc } from 'drizzle-orm';
import { getCurrentUser } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');
    const isActiveParam = searchParams.get('isActive');
    const withItems = searchParams.get('withItems') === 'true';
    const id = searchParams.get('id');

    // Single record fetch
    if (id) {
      if (isNaN(parseInt(id))) {
        return NextResponse.json({ 
          error: "Valid ID is required",
          code: "INVALID_ID" 
        }, { status: 400 });
      }

      const service = await db.select()
        .from(services)
        .where(eq(services.id, parseInt(id)))
        .limit(1);

      if (service.length === 0) {
        return NextResponse.json({ 
          error: 'Service not found',
          code: "SERVICE_NOT_FOUND" 
        }, { status: 404 });
      }

      if (withItems) {
        const items = await db.select()
          .from(serviceItems)
          .where(eq(serviceItems.serviceId, parseInt(id)))
          .orderBy(asc(serviceItems.displayOrder));

        return NextResponse.json({
          ...service[0],
          items
        });
      }

      return NextResponse.json(service[0]);
    }

    // List query - build conditions array
    const conditions = [];

    // Search condition
    if (search) {
      conditions.push(
        or(
          like(services.categoryTitle, `%${search}%`),
          like(services.categoryDescription, `%${search}%`)
        )
      );
    }

    // Filter by isActive
    if (isActiveParam !== null) {
      const isActive = isActiveParam === 'true';
      conditions.push(eq(services.isActive, isActive));
    }

    // Build query with conditions
    let results;
    if (conditions.length > 0) {
      results = await db.select()
        .from(services)
        .where(conditions.length === 1 ? conditions[0] : and(...conditions))
        .orderBy(asc(services.displayOrder))
        .limit(limit)
        .offset(offset);
    } else {
      results = await db.select()
        .from(services)
        .orderBy(asc(services.displayOrder))
        .limit(limit)
        .offset(offset);
    }

    // If withItems is true, fetch items for each service
    if (withItems) {
      const servicesWithItems = await Promise.all(
        results.map(async (service: { id: any; }) => {
          const items = await db.select()
            .from(serviceItems)
            .where(eq(serviceItems.serviceId, service.id))
            .orderBy(asc(serviceItems.displayOrder));

          return {
            ...service,
            items
          };
        })
      );

      return NextResponse.json(servicesWithItems);
    }

    return NextResponse.json(results);

  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error as Error).message 
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const body = await request.json();

    // Security check: reject if userId provided in body
    if ('userId' in body || 'user_id' in body) {
      return NextResponse.json({ 
        error: "User ID cannot be provided in request body",
        code: "USER_ID_NOT_ALLOWED" 
      }, { status: 400 });
    }

    const { 
      categoryIcon, 
      categoryTitle, 
      categoryDescription, 
      categoryGradient,
      displayOrder,
      isActive
    } = body;

    // Validate required fields
    if (!categoryIcon || typeof categoryIcon !== 'string' || categoryIcon.trim() === '') {
      return NextResponse.json({ 
        error: "categoryIcon is required and must be a non-empty string",
        code: "MISSING_CATEGORY_ICON" 
      }, { status: 400 });
    }

    if (!categoryTitle || typeof categoryTitle !== 'string' || categoryTitle.trim() === '') {
      return NextResponse.json({ 
        error: "categoryTitle is required and must be a non-empty string",
        code: "MISSING_CATEGORY_TITLE" 
      }, { status: 400 });
    }

    if (!categoryDescription || typeof categoryDescription !== 'string' || categoryDescription.trim() === '') {
      return NextResponse.json({ 
        error: "categoryDescription is required and must be a non-empty string",
        code: "MISSING_CATEGORY_DESCRIPTION" 
      }, { status: 400 });
    }

    if (!categoryGradient || typeof categoryGradient !== 'string' || categoryGradient.trim() === '') {
      return NextResponse.json({ 
        error: "categoryGradient is required and must be a non-empty string",
        code: "MISSING_CATEGORY_GRADIENT" 
      }, { status: 400 });
    }

    // Validate displayOrder if provided
    let validatedDisplayOrder = 0;
    if (displayOrder !== undefined && displayOrder !== null) {
      const parsedDisplayOrder = parseInt(displayOrder);
      if (isNaN(parsedDisplayOrder)) {
        return NextResponse.json({ 
          error: "displayOrder must be a valid integer",
          code: "INVALID_DISPLAY_ORDER" 
        }, { status: 400 });
      }
      validatedDisplayOrder = parsedDisplayOrder;
    }

    // Validate isActive if provided
    let validatedIsActive = true;
    if (isActive !== undefined && isActive !== null) {
      if (typeof isActive !== 'boolean') {
        return NextResponse.json({ 
          error: "isActive must be a boolean",
          code: "INVALID_IS_ACTIVE" 
        }, { status: 400 });
      }
      validatedIsActive = isActive;
    }

    const now = new Date().toISOString();

    const newService = await db.insert(services)
      .values({
        categoryIcon: categoryIcon.trim(),
        categoryTitle: categoryTitle.trim(),
        categoryDescription: categoryDescription.trim(),
        categoryGradient: categoryGradient.trim(),
        displayOrder: validatedDisplayOrder,
        isActive: validatedIsActive,
        createdAt: now,
        updatedAt: now
      })
      .returning();

    return NextResponse.json(newService[0], { status: 201 });

  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error as Error).message 
    }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    const body = await request.json();

    // Security check: reject if userId provided in body
    if ('userId' in body || 'user_id' in body) {
      return NextResponse.json({ 
        error: "User ID cannot be provided in request body",
        code: "USER_ID_NOT_ALLOWED" 
      }, { status: 400 });
    }

    // Check if service exists
    const existingService = await db.select()
      .from(services)
      .where(eq(services.id, parseInt(id)))
      .limit(1);

    if (existingService.length === 0) {
      return NextResponse.json({ 
        error: 'Service not found',
        code: "SERVICE_NOT_FOUND" 
      }, { status: 404 });
    }

    const updates: Record<string, any> = {};

    // Validate and add fields if provided
    if (body.categoryIcon !== undefined) {
      if (typeof body.categoryIcon !== 'string' || body.categoryIcon.trim() === '') {
        return NextResponse.json({ 
          error: "categoryIcon must be a non-empty string",
          code: "INVALID_CATEGORY_ICON" 
        }, { status: 400 });
      }
      updates.categoryIcon = body.categoryIcon.trim();
    }

    if (body.categoryTitle !== undefined) {
      if (typeof body.categoryTitle !== 'string' || body.categoryTitle.trim() === '') {
        return NextResponse.json({ 
          error: "categoryTitle must be a non-empty string",
          code: "INVALID_CATEGORY_TITLE" 
        }, { status: 400 });
      }
      updates.categoryTitle = body.categoryTitle.trim();
    }

    if (body.categoryDescription !== undefined) {
      if (typeof body.categoryDescription !== 'string' || body.categoryDescription.trim() === '') {
        return NextResponse.json({ 
          error: "categoryDescription must be a non-empty string",
          code: "INVALID_CATEGORY_DESCRIPTION" 
        }, { status: 400 });
      }
      updates.categoryDescription = body.categoryDescription.trim();
    }

    if (body.categoryGradient !== undefined) {
      if (typeof body.categoryGradient !== 'string' || body.categoryGradient.trim() === '') {
        return NextResponse.json({ 
          error: "categoryGradient must be a non-empty string",
          code: "INVALID_CATEGORY_GRADIENT" 
        }, { status: 400 });
      }
      updates.categoryGradient = body.categoryGradient.trim();
    }

    if (body.displayOrder !== undefined && body.displayOrder !== null) {
      const parsedDisplayOrder = parseInt(body.displayOrder);
      if (isNaN(parsedDisplayOrder)) {
        return NextResponse.json({ 
          error: "displayOrder must be a valid integer",
          code: "INVALID_DISPLAY_ORDER" 
        }, { status: 400 });
      }
      updates.displayOrder = parsedDisplayOrder;
    }

    if (body.isActive !== undefined && body.isActive !== null) {
      if (typeof body.isActive !== 'boolean') {
        return NextResponse.json({ 
          error: "isActive must be a boolean",
          code: "INVALID_IS_ACTIVE" 
        }, { status: 400 });
      }
      updates.isActive = body.isActive;
    }

    updates.updatedAt = new Date().toISOString();

    const updated = await db.update(services)
      .set(updates)
      .where(eq(services.id, parseInt(id)))
      .returning();

    return NextResponse.json(updated[0]);

  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error as Error).message 
    }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    // Check if service exists
    const existingService = await db.select()
      .from(services)
      .where(eq(services.id, parseInt(id)))
      .limit(1);

    if (existingService.length === 0) {
      return NextResponse.json({ 
        error: 'Service not found',
        code: "SERVICE_NOT_FOUND" 
      }, { status: 404 });
    }

    const deleted = await db.delete(services)
      .where(eq(services.id, parseInt(id)))
      .returning();

    return NextResponse.json({
      message: 'Service deleted successfully',
      service: deleted[0]
    });

  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error as Error).message 
    }, { status: 500 });
  }
}