import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { careerApplications } from '@/db/schema';
import { eq, like, and, or, desc } from 'drizzle-orm';

const VALID_STATUSES = ['new', 'reviewing', 'accepted', 'rejected'] as const;

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    // Single record fetch
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json({ 
          error: "Valid ID is required",
          code: "INVALID_ID" 
        }, { status: 400 });
      }

      const application = await db.select()
        .from(careerApplications)
        .where(eq(careerApplications.id, parseInt(id)))
        .limit(1);

      if (application.length === 0) {
        return NextResponse.json({ 
          error: 'Career application not found',
          code: "NOT_FOUND" 
        }, { status: 404 });
      }

      return NextResponse.json(application[0], { status: 200 });
    }

    // List with pagination, search, and filtering
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');
    const statusFilter = searchParams.get('status');
    const positionFilter = searchParams.get('position');

    let query = db.select().from(careerApplications);

    const conditions = [];

    // Search across name, email, position, location
    if (search) {
      conditions.push(
        or(
          like(careerApplications.name, `%${search}%`),
          like(careerApplications.email, `%${search}%`),
          like(careerApplications.position, `%${search}%`),
          like(careerApplications.location, `%${search}%`)
        )
      );
    }

    // Filter by status
    if (statusFilter) {
      conditions.push(eq(careerApplications.status, statusFilter));
    }

    // Filter by position
    if (positionFilter) {
      conditions.push(like(careerApplications.position, `%${positionFilter}%`));
    }

    if (conditions.length > 0) {
      query = (query as any).where(and(...conditions));
    }

    const applications = await query
      .orderBy(desc(careerApplications.createdAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json(applications, { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error as Error).message 
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, position, experience, location, portfolioUrl, resumeUrl, message, status } = body;

    // Validate required fields
    if (!name || !name.trim()) {
      return NextResponse.json({ 
        error: "Name is required",
        code: "MISSING_NAME" 
      }, { status: 400 });
    }

    if (!email || !email.trim()) {
      return NextResponse.json({ 
        error: "Email is required",
        code: "MISSING_EMAIL" 
      }, { status: 400 });
    }

    if (!phone || !phone.trim()) {
      return NextResponse.json({ 
        error: "Phone is required",
        code: "MISSING_PHONE" 
      }, { status: 400 });
    }

    if (!position || !position.trim()) {
      return NextResponse.json({ 
        error: "Position is required",
        code: "MISSING_POSITION" 
      }, { status: 400 });
    }

    if (!experience || !experience.trim()) {
      return NextResponse.json({ 
        error: "Experience is required",
        code: "MISSING_EXPERIENCE" 
      }, { status: 400 });
    }

    if (!location || !location.trim()) {
      return NextResponse.json({ 
        error: "Location is required",
        code: "MISSING_LOCATION" 
      }, { status: 400 });
    }

    // Validate status if provided
    const applicationStatus = status ?? 'new';
    if (!VALID_STATUSES.includes(applicationStatus)) {
      return NextResponse.json({ 
        error: "Status must be one of: new, reviewing, accepted, rejected",
        code: "INVALID_STATUS" 
      }, { status: 400 });
    }

    // Prepare insert data
    const currentTimestamp = new Date().toISOString();
    const insertData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      position: position.trim(),
      experience: experience.trim(),
      location: location.trim(),
      status: applicationStatus as typeof VALID_STATUSES[number],
      createdAt: currentTimestamp,
      updatedAt: currentTimestamp,
      portfolioUrl: null as string | null,
      resumeUrl: null as string | null,
      message: null as string | null
    };

    // Add optional fields if provided
    if (portfolioUrl) {
      insertData.portfolioUrl = portfolioUrl.trim();
    }

    if (resumeUrl) {
      insertData.resumeUrl = resumeUrl.trim();
    }

    if (message) {
      insertData.message = message.trim();
    }

    const newApplication = await db.insert(careerApplications)
      .values(insertData)
      .returning();

    return NextResponse.json(newApplication[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error as Error).message 
    }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    // Check if record exists
    const existing = await db.select()
      .from(careerApplications)
      .where(eq(careerApplications.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json({ 
        error: 'Career application not found',
        code: "NOT_FOUND" 
      }, { status: 404 });
    }

    const body = await request.json();
    const updates: Record<string, any> = {
      updatedAt: new Date().toISOString()
    };

    // Update only provided fields
    if (body.name !== undefined) {
      if (!body.name.trim()) {
        return NextResponse.json({ 
          error: "Name cannot be empty",
          code: "INVALID_NAME" 
        }, { status: 400 });
      }
      updates.name = body.name.trim();
    }

    if (body.email !== undefined) {
      if (!body.email.trim()) {
        return NextResponse.json({ 
          error: "Email cannot be empty",
          code: "INVALID_EMAIL" 
        }, { status: 400 });
      }
      updates.email = body.email.trim().toLowerCase();
    }

    if (body.phone !== undefined) {
      if (!body.phone.trim()) {
        return NextResponse.json({ 
          error: "Phone cannot be empty",
          code: "INVALID_PHONE" 
        }, { status: 400 });
      }
      updates.phone = body.phone.trim();
    }

    if (body.position !== undefined) {
      if (!body.position.trim()) {
        return NextResponse.json({ 
          error: "Position cannot be empty",
          code: "INVALID_POSITION" 
        }, { status: 400 });
      }
      updates.position = body.position.trim();
    }

    if (body.experience !== undefined) {
      if (!body.experience.trim()) {
        return NextResponse.json({ 
          error: "Experience cannot be empty",
          code: "INVALID_EXPERIENCE" 
        }, { status: 400 });
      }
      updates.experience = body.experience.trim();
    }

    if (body.location !== undefined) {
      if (!body.location.trim()) {
        return NextResponse.json({ 
          error: "Location cannot be empty",
          code: "INVALID_LOCATION" 
        }, { status: 400 });
      }
      updates.location = body.location.trim();
    }

    if (body.portfolioUrl !== undefined) {
      updates.portfolioUrl = body.portfolioUrl ? body.portfolioUrl.trim() : null;
    }

    if (body.resumeUrl !== undefined) {
      updates.resumeUrl = body.resumeUrl ? body.resumeUrl.trim() : null;
    }

    if (body.message !== undefined) {
      updates.message = body.message ? body.message.trim() : null;
    }

    if (body.status !== undefined) {
      if (!VALID_STATUSES.includes(body.status)) {
        return NextResponse.json({ 
          error: "Status must be one of: new, reviewing, accepted, rejected",
          code: "INVALID_STATUS" 
        }, { status: 400 });
      }
      updates.status = body.status;
    }

    const updated = await db.update(careerApplications)
      .set(updates)
      .where(eq(careerApplications.id, parseInt(id)))
      .returning();

    return NextResponse.json(updated[0], { status: 200 });
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error as Error).message 
    }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    // Check if record exists
    const existing = await db.select()
      .from(careerApplications)
      .where(eq(careerApplications.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json({ 
        error: 'Career application not found',
        code: "NOT_FOUND" 
      }, { status: 404 });
    }

    const deleted = await db.delete(careerApplications)
      .where(eq(careerApplications.id, parseInt(id)))
      .returning();

    return NextResponse.json({ 
      message: 'Career application deleted successfully',
      data: deleted[0]
    }, { status: 200 });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error as Error).message 
    }, { status: 500 });
  }
}