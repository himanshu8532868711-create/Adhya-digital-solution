import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { portfolioItems } from '@/db/schema';
import { eq, like, and, or, desc } from 'drizzle-orm';

const VALID_CATEGORIES = ['Web', 'App', 'Design', 'Marketing'];

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json(
          { error: 'Valid ID is required', code: 'INVALID_ID' },
          { status: 400 }
        );
      }

      const item = await db
        .select()
        .from(portfolioItems)
        .where(eq(portfolioItems.id, parseInt(id)))
        .limit(1);

      if (item.length === 0) {
        return NextResponse.json(
          { error: 'Portfolio item not found', code: 'NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(item[0], { status: 200 });
    }

    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');
    const category = searchParams.get('category');

    let baseQuery = db.select().from(portfolioItems);

    const conditions = [];

    if (search) {
      conditions.push(
        or(
          like(portfolioItems.title, `%${search}%`),
          like(portfolioItems.description, `%${search}%`)
        )
      );
    }

    if (category) {
      conditions.push(eq(portfolioItems.category, category));
    }

    const filteredQuery =
      conditions.length > 0
        ? baseQuery.where(and(...conditions))
        : baseQuery;

    const results = await filteredQuery
      .orderBy(desc(portfolioItems.createdAt))
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
    const { title, category, imageUrl, description, tags, projectLink } = body;

    if (!title || typeof title !== 'string' || title.trim() === '') {
      return NextResponse.json(
        { error: 'Title is required and must be a non-empty string', code: 'INVALID_TITLE' },
        { status: 400 }
      );
    }

    if (!category || !VALID_CATEGORIES.includes(category)) {
      return NextResponse.json(
        {
          error: `Category is required and must be one of: ${VALID_CATEGORIES.join(', ')}`,
          code: 'INVALID_CATEGORY',
        },
        { status: 400 }
      );
    }

    if (!imageUrl || typeof imageUrl !== 'string' || imageUrl.trim() === '') {
      return NextResponse.json(
        { error: 'Image URL is required and must be a non-empty string', code: 'INVALID_IMAGE_URL' },
        { status: 400 }
      );
    }

    if (!description || typeof description !== 'string' || description.trim() === '') {
      return NextResponse.json(
        { error: 'Description is required and must be a non-empty string', code: 'INVALID_DESCRIPTION' },
        { status: 400 }
      );
    }

    if (!tags) {
      return NextResponse.json(
        { error: 'Tags are required', code: 'MISSING_TAGS' },
        { status: 400 }
      );
    }

    let parsedTags;
    try {
      if (typeof tags === 'string') {
        parsedTags = JSON.parse(tags);
      } else if (Array.isArray(tags)) {
        parsedTags = tags;
      } else {
        throw new Error('Invalid tags format');
      }

      if (!Array.isArray(parsedTags)) {
        throw new Error('Tags must be an array');
      }
    } catch (e) {
      return NextResponse.json(
        { error: 'Tags must be a valid JSON array', code: 'INVALID_TAGS' },
        { status: 400 }
      );
    }

    const currentTimestamp = new Date().toISOString();

    const newItem = await db
      .insert(portfolioItems)
      .values({
        title: title.trim(),
        category,
        imageUrl: imageUrl.trim(),
        description: description.trim(),
        tags: JSON.stringify(parsedTags),
        projectLink: projectLink ? projectLink.trim() : null,
        createdAt: currentTimestamp,
        updatedAt: currentTimestamp,
      })
      .returning();

    return NextResponse.json(newItem[0], { status: 201 });
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

    const existing = await db
      .select()
      .from(portfolioItems)
      .where(eq(portfolioItems.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'Portfolio item not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const { title, category, imageUrl, description, tags, projectLink } = body;

    const updates: any = {
      updatedAt: new Date().toISOString(),
    };

    if (title !== undefined) {
      if (typeof title !== 'string' || title.trim() === '') {
        return NextResponse.json(
          { error: 'Title must be a non-empty string', code: 'INVALID_TITLE' },
          { status: 400 }
        );
      }
      updates.title = title.trim();
    }

    if (category !== undefined) {
      if (!VALID_CATEGORIES.includes(category)) {
        return NextResponse.json(
          {
            error: `Category must be one of: ${VALID_CATEGORIES.join(', ')}`,
            code: 'INVALID_CATEGORY',
          },
          { status: 400 }
        );
      }
      updates.category = category;
    }

    if (imageUrl !== undefined) {
      if (typeof imageUrl !== 'string' || imageUrl.trim() === '') {
        return NextResponse.json(
          { error: 'Image URL must be a non-empty string', code: 'INVALID_IMAGE_URL' },
          { status: 400 }
        );
      }
      updates.imageUrl = imageUrl.trim();
    }

    if (description !== undefined) {
      if (typeof description !== 'string' || description.trim() === '') {
        return NextResponse.json(
          { error: 'Description must be a non-empty string', code: 'INVALID_DESCRIPTION' },
          { status: 400 }
        );
      }
      updates.description = description.trim();
    }

    if (tags !== undefined) {
      let parsedTags;
      try {
        if (typeof tags === 'string') {
          parsedTags = JSON.parse(tags);
        } else if (Array.isArray(tags)) {
          parsedTags = tags;
        } else {
          throw new Error('Invalid tags format');
        }

        if (!Array.isArray(parsedTags)) {
          throw new Error('Tags must be an array');
        }
      } catch (e) {
        return NextResponse.json(
          { error: 'Tags must be a valid JSON array', code: 'INVALID_TAGS' },
          { status: 400 }
        );
      }
      updates.tags = JSON.stringify(parsedTags);
    }

    if (projectLink !== undefined) {
      updates.projectLink = projectLink ? projectLink.trim() : null;
    }

    const updated = await db
      .update(portfolioItems)
      .set(updates)
      .where(eq(portfolioItems.id, parseInt(id)))
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

    const existing = await db
      .select()
      .from(portfolioItems)
      .where(eq(portfolioItems.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'Portfolio item not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    const deleted = await db
      .delete(portfolioItems)
      .where(eq(portfolioItems.id, parseInt(id)))
      .returning();

    return NextResponse.json(
      {
        message: 'Portfolio item deleted successfully',
        deletedItem: deleted[0],
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