import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { teamMembers } from '@/db/schema';
import { eq, like, or, asc } from 'drizzle-orm';

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
        .from(teamMembers)
        .where(eq(teamMembers.id, parseInt(id)))
        .limit(1);

      if (record.length === 0) {
        return NextResponse.json(
          { error: 'Team member not found', code: 'NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(record[0], { status: 200 });
    }

    // List with pagination and search
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');

    let whereCondition = undefined;

    if (search) {
      whereCondition = or(
        like(teamMembers.name, `%${search}%`),
        like(teamMembers.role, `%${search}%`),
        like(teamMembers.email, `%${search}%`)
      );
    }

    const results = await db
      .select()
      .from(teamMembers)
      .where(whereCondition)
      .orderBy(asc(teamMembers.orderPosition))
      .limit(limit)
      .offset(offset);

    return NextResponse.json(results, { status: 200 });
  } catch (error: any) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, role, bio, imageUrl, linkedinUrl, twitterUrl, email, orderPosition } = body;

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json(
        { error: 'Name is required and must be a non-empty string', code: 'MISSING_NAME' },
        { status: 400 }
      );
    }

    if (!role || typeof role !== 'string' || role.trim() === '') {
      return NextResponse.json(
        { error: 'Role is required and must be a non-empty string', code: 'MISSING_ROLE' },
        { status: 400 }
      );
    }

    if (!bio || typeof bio !== 'string' || bio.trim() === '') {
      return NextResponse.json(
        { error: 'Bio is required and must be a non-empty string', code: 'MISSING_BIO' },
        { status: 400 }
      );
    }

    if (!imageUrl || typeof imageUrl !== 'string' || imageUrl.trim() === '') {
      return NextResponse.json(
        { error: 'Image URL is required and must be a non-empty string', code: 'MISSING_IMAGE_URL' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || email.trim() === '') {
      return NextResponse.json(
        { error: 'Email is required and must be a non-empty string', code: 'MISSING_EMAIL' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Invalid email format', code: 'INVALID_EMAIL' },
        { status: 400 }
      );
    }

    if (orderPosition === undefined || orderPosition === null || isNaN(parseInt(String(orderPosition)))) {
      return NextResponse.json(
        { error: 'Order position is required and must be a valid integer', code: 'MISSING_ORDER_POSITION' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: name.trim(),
      role: role.trim(),
      bio: bio.trim(),
      imageUrl: imageUrl.trim(),
      email: email.trim().toLowerCase(),
      orderPosition: parseInt(String(orderPosition)),
      linkedinUrl: linkedinUrl ? linkedinUrl.trim() : null,
      twitterUrl: twitterUrl ? twitterUrl.trim() : null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const newRecord = await db.insert(teamMembers).values(sanitizedData).returning();

    return NextResponse.json(newRecord[0], { status: 201 });
  } catch (error: any) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
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

    // Check if record exists
    const existing = await db
      .select()
      .from(teamMembers)
      .where(eq(teamMembers.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'Team member not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const updates: any = {};

    // Validate and sanitize provided fields
    if (body.name !== undefined) {
      if (typeof body.name !== 'string' || body.name.trim() === '') {
        return NextResponse.json(
          { error: 'Name must be a non-empty string', code: 'INVALID_NAME' },
          { status: 400 }
        );
      }
      updates.name = body.name.trim();
    }

    if (body.role !== undefined) {
      if (typeof body.role !== 'string' || body.role.trim() === '') {
        return NextResponse.json(
          { error: 'Role must be a non-empty string', code: 'INVALID_ROLE' },
          { status: 400 }
        );
      }
      updates.role = body.role.trim();
    }

    if (body.bio !== undefined) {
      if (typeof body.bio !== 'string' || body.bio.trim() === '') {
        return NextResponse.json(
          { error: 'Bio must be a non-empty string', code: 'INVALID_BIO' },
          { status: 400 }
        );
      }
      updates.bio = body.bio.trim();
    }

    if (body.imageUrl !== undefined) {
      if (typeof body.imageUrl !== 'string' || body.imageUrl.trim() === '') {
        return NextResponse.json(
          { error: 'Image URL must be a non-empty string', code: 'INVALID_IMAGE_URL' },
          { status: 400 }
        );
      }
      updates.imageUrl = body.imageUrl.trim();
    }

    if (body.email !== undefined) {
      if (typeof body.email !== 'string' || body.email.trim() === '') {
        return NextResponse.json(
          { error: 'Email must be a non-empty string', code: 'INVALID_EMAIL' },
          { status: 400 }
        );
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(body.email.trim())) {
        return NextResponse.json(
          { error: 'Invalid email format', code: 'INVALID_EMAIL_FORMAT' },
          { status: 400 }
        );
      }
      updates.email = body.email.trim().toLowerCase();
    }

    if (body.orderPosition !== undefined) {
      if (isNaN(parseInt(String(body.orderPosition)))) {
        return NextResponse.json(
          { error: 'Order position must be a valid integer', code: 'INVALID_ORDER_POSITION' },
          { status: 400 }
        );
      }
      updates.orderPosition = parseInt(String(body.orderPosition));
    }

    if (body.linkedinUrl !== undefined) {
      updates.linkedinUrl = body.linkedinUrl ? body.linkedinUrl.trim() : null;
    }

    if (body.twitterUrl !== undefined) {
      updates.twitterUrl = body.twitterUrl ? body.twitterUrl.trim() : null;
    }

    // Always update updatedAt
    updates.updatedAt = new Date().toISOString();

    const updated = await db
      .update(teamMembers)
      .set(updates)
      .where(eq(teamMembers.id, parseInt(id)))
      .returning();

    return NextResponse.json(updated[0], { status: 200 });
  } catch (error: any) {
    console.error('PUT error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
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
      .from(teamMembers)
      .where(eq(teamMembers.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'Team member not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    const deleted = await db
      .delete(teamMembers)
      .where(eq(teamMembers.id, parseInt(id)))
      .returning();

    return NextResponse.json(
      {
        message: 'Team member deleted successfully',
        deleted: deleted[0]
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('DELETE error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    );
  }
}