import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { testimonials } from '@/db/schema';
import { eq, like, and, or, desc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Single testimonial by ID
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json(
          { error: 'Valid ID is required', code: 'INVALID_ID' },
          { status: 400 }
        );
      }

      const testimonial = await db
        .select()
        .from(testimonials)
        .where(eq(testimonials.id, parseInt(id)))
        .limit(1);

      if (testimonial.length === 0) {
        return NextResponse.json(
          { error: 'Testimonial not found', code: 'NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(testimonial[0], { status: 200 });
    }

    // List testimonials with pagination, search, and filtering
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');
    const ratingFilter = searchParams.get('rating');

    let query = db.select().from(testimonials);

    const conditions = [];

    // Search functionality
    if (search) {
      const searchCondition = or(
        like(testimonials.clientName, `%${search}%`),
        like(testimonials.companyName, `%${search}%`),
        like(testimonials.quote, `%${search}%`)
      );
      conditions.push(searchCondition);
    }

    // Rating filter
    if (ratingFilter) {
      const rating = parseInt(ratingFilter);
      if (!isNaN(rating) && rating >= 1 && rating <= 5) {
        conditions.push(eq(testimonials.rating, rating));
      }
    }

    // Apply all conditions
    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    // Apply sorting, pagination
    const results = await query
      .orderBy(desc(testimonials.createdAt))
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
    const { clientName, clientRole, companyName, clientImageUrl, quote, rating } = body;

    // Validate required fields
    if (!clientName || typeof clientName !== 'string' || clientName.trim() === '') {
      return NextResponse.json(
        { error: 'clientName is required and must be a non-empty string', code: 'MISSING_CLIENT_NAME' },
        { status: 400 }
      );
    }

    if (!clientRole || typeof clientRole !== 'string' || clientRole.trim() === '') {
      return NextResponse.json(
        { error: 'clientRole is required and must be a non-empty string', code: 'MISSING_CLIENT_ROLE' },
        { status: 400 }
      );
    }

    if (!companyName || typeof companyName !== 'string' || companyName.trim() === '') {
      return NextResponse.json(
        { error: 'companyName is required and must be a non-empty string', code: 'MISSING_COMPANY_NAME' },
        { status: 400 }
      );
    }

    if (!clientImageUrl || typeof clientImageUrl !== 'string' || clientImageUrl.trim() === '') {
      return NextResponse.json(
        { error: 'clientImageUrl is required and must be a non-empty string', code: 'MISSING_CLIENT_IMAGE_URL' },
        { status: 400 }
      );
    }

    if (!quote || typeof quote !== 'string' || quote.trim() === '') {
      return NextResponse.json(
        { error: 'quote is required and must be a non-empty string', code: 'MISSING_QUOTE' },
        { status: 400 }
      );
    }

    if (rating === undefined || rating === null || typeof rating !== 'number' || !Number.isInteger(rating)) {
      return NextResponse.json(
        { error: 'rating is required and must be an integer', code: 'MISSING_RATING' },
        { status: 400 }
      );
    }

    // Validate rating range
    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'rating must be between 1 and 5', code: 'INVALID_RATING' },
        { status: 400 }
      );
    }

    // Create new testimonial
    const now = new Date().toISOString();
    const newTestimonial = await db
      .insert(testimonials)
      .values({
        clientName: clientName.trim(),
        clientRole: clientRole.trim(),
        companyName: companyName.trim(),
        clientImageUrl: clientImageUrl.trim(),
        quote: quote.trim(),
        rating,
        createdAt: now,
        updatedAt: now,
      })
      .returning();

    return NextResponse.json(newTestimonial[0], { status: 201 });
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
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    // Check if testimonial exists
    const existing = await db
      .select()
      .from(testimonials)
      .where(eq(testimonials.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'Testimonial not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const updates: Record<string, any> = {};

    // Validate and add fields to update
    if (body.clientName !== undefined) {
      if (typeof body.clientName !== 'string' || body.clientName.trim() === '') {
        return NextResponse.json(
          { error: 'clientName must be a non-empty string', code: 'INVALID_CLIENT_NAME' },
          { status: 400 }
        );
      }
      updates.clientName = body.clientName.trim();
    }

    if (body.clientRole !== undefined) {
      if (typeof body.clientRole !== 'string' || body.clientRole.trim() === '') {
        return NextResponse.json(
          { error: 'clientRole must be a non-empty string', code: 'INVALID_CLIENT_ROLE' },
          { status: 400 }
        );
      }
      updates.clientRole = body.clientRole.trim();
    }

    if (body.companyName !== undefined) {
      if (typeof body.companyName !== 'string' || body.companyName.trim() === '') {
        return NextResponse.json(
          { error: 'companyName must be a non-empty string', code: 'INVALID_COMPANY_NAME' },
          { status: 400 }
        );
      }
      updates.companyName = body.companyName.trim();
    }

    if (body.clientImageUrl !== undefined) {
      if (typeof body.clientImageUrl !== 'string' || body.clientImageUrl.trim() === '') {
        return NextResponse.json(
          { error: 'clientImageUrl must be a non-empty string', code: 'INVALID_CLIENT_IMAGE_URL' },
          { status: 400 }
        );
      }
      updates.clientImageUrl = body.clientImageUrl.trim();
    }

    if (body.quote !== undefined) {
      if (typeof body.quote !== 'string' || body.quote.trim() === '') {
        return NextResponse.json(
          { error: 'quote must be a non-empty string', code: 'INVALID_QUOTE' },
          { status: 400 }
        );
      }
      updates.quote = body.quote.trim();
    }

    if (body.rating !== undefined) {
      if (typeof body.rating !== 'number' || !Number.isInteger(body.rating)) {
        return NextResponse.json(
          { error: 'rating must be an integer', code: 'INVALID_RATING' },
          { status: 400 }
        );
      }
      if (body.rating < 1 || body.rating > 5) {
        return NextResponse.json(
          { error: 'rating must be between 1 and 5', code: 'INVALID_RATING_RANGE' },
          { status: 400 }
        );
      }
      updates.rating = body.rating;
    }

    // Always update updatedAt
    updates.updatedAt = new Date().toISOString();

    const updated = await db
      .update(testimonials)
      .set(updates)
      .where(eq(testimonials.id, parseInt(id)))
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
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    // Check if testimonial exists
    const existing = await db
      .select()
      .from(testimonials)
      .where(eq(testimonials.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'Testimonial not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    const deleted = await db
      .delete(testimonials)
      .where(eq(testimonials.id, parseInt(id)))
      .returning();

    return NextResponse.json(
      {
        message: 'Testimonial deleted successfully',
        deleted: deleted[0],
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