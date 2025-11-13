import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { clientProjects } from '@/db/schema';
import { eq, like, and, or, desc } from 'drizzle-orm';

const VALID_STATUSES = ['planning', 'in_progress', 'completed', 'on_hold'] as const;

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    // Single record fetch
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json(
          { error: 'Valid ID is required', code: 'INVALID_ID' },
          { status: 400 }
        );
      }

      const record = await db
        .select()
        .from(clientProjects)
        .where(eq(clientProjects.id, parseInt(id)))
        .limit(1);

      if (record.length === 0) {
        return NextResponse.json(
          { error: 'Client project not found', code: 'NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(record[0], { status: 200 });
    }

    // List with pagination, search, and filters
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');
    const status = searchParams.get('status');
    const clientId = searchParams.get('clientId');

    let query = db.select().from(clientProjects);

    const conditions = [];

    // Search across projectName and description
    if (search) {
      conditions.push(
        or(
          like(clientProjects.projectName, `%${search}%`),
          like(clientProjects.description, `%${search}%`)
        )
      );
    }

    // Filter by status
    if (status) {
      conditions.push(eq(clientProjects.status, status));
    }

    // Filter by clientId
    if (clientId && !isNaN(parseInt(clientId))) {
      conditions.push(eq(clientProjects.clientId, parseInt(clientId)));
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions)) as any;
    }

    const results = await query
      .orderBy(desc(clientProjects.createdAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { clientId, projectName, description, status, budget, startDate, endDate } = body;

    // Validate required fields
    if (!clientId) {
      return NextResponse.json(
        { error: 'clientId is required', code: 'MISSING_CLIENT_ID' },
        { status: 400 }
      );
    }

    if (isNaN(parseInt(clientId))) {
      return NextResponse.json(
        { error: 'clientId must be a valid integer', code: 'INVALID_CLIENT_ID' },
        { status: 400 }
      );
    }

    if (!projectName || typeof projectName !== 'string' || projectName.trim() === '') {
      return NextResponse.json(
        { error: 'projectName is required and must be a non-empty string', code: 'MISSING_PROJECT_NAME' },
        { status: 400 }
      );
    }

    if (!description || typeof description !== 'string' || description.trim() === '') {
      return NextResponse.json(
        { error: 'description is required and must be a non-empty string', code: 'MISSING_DESCRIPTION' },
        { status: 400 }
      );
    }

    // Validate status if provided
    const finalStatus = status || 'planning';
    if (!VALID_STATUSES.includes(finalStatus)) {
      return NextResponse.json(
        { 
          error: `status must be one of: ${VALID_STATUSES.join(', ')}`, 
          code: 'INVALID_STATUS' 
        },
        { status: 400 }
      );
    }

    // Validate budget if provided
    if (budget !== undefined && budget !== null && isNaN(parseInt(budget))) {
      return NextResponse.json(
        { error: 'budget must be a valid integer', code: 'INVALID_BUDGET' },
        { status: 400 }
      );
    }

    const now = new Date().toISOString();

    const insertData: any = {
      clientId: parseInt(clientId),
      projectName: projectName.trim(),
      description: description.trim(),
      status: finalStatus,
      createdAt: now,
      updatedAt: now
    };

    if (budget !== undefined && budget !== null) {
      insertData.budget = parseInt(budget);
    }

    if (startDate) {
      insertData.startDate = startDate;
    }

    if (endDate) {
      insertData.endDate = endDate;
    }

    const newRecord = await db
      .insert(clientProjects)
      .values(insertData)
      .returning();

    return NextResponse.json(newRecord[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { clientId, projectName, description, status, budget, startDate, endDate } = body;

    // Check if record exists
    const existing = await db
      .select()
      .from(clientProjects)
      .where(eq(clientProjects.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'Client project not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    const updates: any = {
      updatedAt: new Date().toISOString()
    };

    // Validate and add clientId if provided
    if (clientId !== undefined) {
      if (isNaN(parseInt(clientId))) {
        return NextResponse.json(
          { error: 'clientId must be a valid integer', code: 'INVALID_CLIENT_ID' },
          { status: 400 }
        );
      }
      updates.clientId = parseInt(clientId);
    }

    // Validate and add projectName if provided
    if (projectName !== undefined) {
      if (typeof projectName !== 'string' || projectName.trim() === '') {
        return NextResponse.json(
          { error: 'projectName must be a non-empty string', code: 'INVALID_PROJECT_NAME' },
          { status: 400 }
        );
      }
      updates.projectName = projectName.trim();
    }

    // Validate and add description if provided
    if (description !== undefined) {
      if (typeof description !== 'string' || description.trim() === '') {
        return NextResponse.json(
          { error: 'description must be a non-empty string', code: 'INVALID_DESCRIPTION' },
          { status: 400 }
        );
      }
      updates.description = description.trim();
    }

    // Validate and add status if provided
    if (status !== undefined) {
      if (!VALID_STATUSES.includes(status)) {
        return NextResponse.json(
          { 
            error: `status must be one of: ${VALID_STATUSES.join(', ')}`, 
            code: 'INVALID_STATUS' 
          },
          { status: 400 }
        );
      }
      updates.status = status;
    }

    // Validate and add budget if provided
    if (budget !== undefined) {
      if (budget === null) {
        updates.budget = null;
      } else if (isNaN(parseInt(budget))) {
        return NextResponse.json(
          { error: 'budget must be a valid integer', code: 'INVALID_BUDGET' },
          { status: 400 }
        );
      } else {
        updates.budget = parseInt(budget);
      }
    }

    // Add optional fields if provided
    if (startDate !== undefined) {
      updates.startDate = startDate;
    }

    if (endDate !== undefined) {
      updates.endDate = endDate;
    }

    const updated = await db
      .update(clientProjects)
      .set(updates)
      .where(eq(clientProjects.id, parseInt(id)))
      .returning();

    return NextResponse.json(updated[0], { status: 200 });
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    // Check if record exists
    const existing = await db
      .select()
      .from(clientProjects)
      .where(eq(clientProjects.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'Client project not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    const deleted = await db
      .delete(clientProjects)
      .where(eq(clientProjects.id, parseInt(id)))
      .returning();

    return NextResponse.json(
      { 
        message: 'Client project deleted successfully',
        deletedRecord: deleted[0]
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}