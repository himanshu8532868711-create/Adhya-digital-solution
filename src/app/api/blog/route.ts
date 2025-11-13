import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { blogPosts } from '@/db/schema';
import { eq, like, and, or, desc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Single record fetch
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json(
          { error: 'Valid ID is required', code: 'INVALID_ID' },
          { status: 400 }
        );
      }

      const post = await db
        .select()
        .from(blogPosts)
        .where(eq(blogPosts.id, parseInt(id)))
        .limit(1);

      if (post.length === 0) {
        return NextResponse.json(
          { error: 'Blog post not found', code: 'POST_NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(post[0], { status: 200 });
    }

    // List with pagination, search, and filters
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');
    const category = searchParams.get('category');
    const status = searchParams.get('status');

    let query = db.select().from(blogPosts);
    const conditions = [];

    // Search across title, excerpt, authorName
    if (search) {
      conditions.push(
        or(
          like(blogPosts.title, `%${search}%`),
          like(blogPosts.excerpt, `%${search}%`),
          like(blogPosts.authorName, `%${search}%`)
        )
      );
    }

    // Filter by category
    if (category) {
      conditions.push(eq(blogPosts.category, category));
    }

    // Filter by status
    if (status) {
      conditions.push(eq(blogPosts.status, status));
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    const results = await query
      .orderBy(desc(blogPosts.createdAt))
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

    // Validate required fields
    const requiredFields = [
      'title',
      'slug',
      'content',
      'excerpt',
      'thumbnailUrl',
      'category',
      'authorName',
      'authorId',
      'readTime'
    ];

    for (const field of requiredFields) {
      if (!body[field] || (typeof body[field] === 'string' && body[field].trim() === '')) {
        return NextResponse.json(
          { 
            error: `${field} is required and cannot be empty`, 
            code: 'MISSING_REQUIRED_FIELD' 
          },
          { status: 400 }
        );
      }
    }

    // Validate category
    const validCategories = ['Design', 'Marketing', 'Tech', 'Tips'];
    if (!validCategories.includes(body.category)) {
      return NextResponse.json(
        { 
          error: `Category must be one of: ${validCategories.join(', ')}`, 
          code: 'INVALID_CATEGORY' 
        },
        { status: 400 }
      );
    }

    // Validate status if provided
    if (body.status) {
      const validStatuses = ['draft', 'published'];
      if (!validStatuses.includes(body.status)) {
        return NextResponse.json(
          { 
            error: `Status must be one of: ${validStatuses.join(', ')}`, 
            code: 'INVALID_STATUS' 
          },
          { status: 400 }
        );
      }
    }

    // Validate authorId is a valid integer
    if (isNaN(parseInt(body.authorId))) {
      return NextResponse.json(
        { error: 'authorId must be a valid integer', code: 'INVALID_AUTHOR_ID' },
        { status: 400 }
      );
    }

    // Validate readTime is a valid positive integer
    if (isNaN(parseInt(body.readTime)) || parseInt(body.readTime) <= 0) {
      return NextResponse.json(
        { error: 'readTime must be a valid positive integer', code: 'INVALID_READ_TIME' },
        { status: 400 }
      );
    }

    // Check if slug is unique
    const existingPost = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.slug, body.slug.trim()))
      .limit(1);

    if (existingPost.length > 0) {
      return NextResponse.json(
        { error: 'Slug must be unique', code: 'DUPLICATE_SLUG' },
        { status: 400 }
      );
    }

    // Prepare data for insertion
    const now = new Date().toISOString();
    const newPost = await db
      .insert(blogPosts)
      .values({
        title: body.title.trim(),
        slug: body.slug.trim(),
        content: body.content.trim(),
        excerpt: body.excerpt.trim(),
        thumbnailUrl: body.thumbnailUrl.trim(),
        category: body.category,
        authorName: body.authorName.trim(),
        authorId: parseInt(body.authorId),
        publishedAt: body.publishedAt || null,
        readTime: parseInt(body.readTime),
        status: body.status || 'draft',
        createdAt: now,
        updatedAt: now
      })
      .returning();

    return NextResponse.json(newPost[0], { status: 201 });
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

    // Check if record exists
    const existing = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'Blog post not found', code: 'POST_NOT_FOUND' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const updates: any = {};

    // Validate and update fields if provided
    if (body.title !== undefined) {
      if (typeof body.title !== 'string' || body.title.trim() === '') {
        return NextResponse.json(
          { error: 'title cannot be empty', code: 'INVALID_TITLE' },
          { status: 400 }
        );
      }
      updates.title = body.title.trim();
    }

    if (body.slug !== undefined) {
      if (typeof body.slug !== 'string' || body.slug.trim() === '') {
        return NextResponse.json(
          { error: 'slug cannot be empty', code: 'INVALID_SLUG' },
          { status: 400 }
        );
      }

      // Check if slug is unique (excluding current post)
      const existingSlug = await db
        .select()
        .from(blogPosts)
        .where(eq(blogPosts.slug, body.slug.trim()))
        .limit(1);

      if (existingSlug.length > 0 && existingSlug[0].id !== parseInt(id)) {
        return NextResponse.json(
          { error: 'Slug must be unique', code: 'DUPLICATE_SLUG' },
          { status: 400 }
        );
      }

      updates.slug = body.slug.trim();
    }

    if (body.content !== undefined) {
      if (typeof body.content !== 'string' || body.content.trim() === '') {
        return NextResponse.json(
          { error: 'content cannot be empty', code: 'INVALID_CONTENT' },
          { status: 400 }
        );
      }
      updates.content = body.content.trim();
    }

    if (body.excerpt !== undefined) {
      if (typeof body.excerpt !== 'string' || body.excerpt.trim() === '') {
        return NextResponse.json(
          { error: 'excerpt cannot be empty', code: 'INVALID_EXCERPT' },
          { status: 400 }
        );
      }
      updates.excerpt = body.excerpt.trim();
    }

    if (body.thumbnailUrl !== undefined) {
      if (typeof body.thumbnailUrl !== 'string' || body.thumbnailUrl.trim() === '') {
        return NextResponse.json(
          { error: 'thumbnailUrl cannot be empty', code: 'INVALID_THUMBNAIL_URL' },
          { status: 400 }
        );
      }
      updates.thumbnailUrl = body.thumbnailUrl.trim();
    }

    if (body.category !== undefined) {
      const validCategories = ['Design', 'Marketing', 'Tech', 'Tips'];
      if (!validCategories.includes(body.category)) {
        return NextResponse.json(
          { 
            error: `Category must be one of: ${validCategories.join(', ')}`, 
            code: 'INVALID_CATEGORY' 
          },
          { status: 400 }
        );
      }
      updates.category = body.category;
    }

    if (body.authorName !== undefined) {
      if (typeof body.authorName !== 'string' || body.authorName.trim() === '') {
        return NextResponse.json(
          { error: 'authorName cannot be empty', code: 'INVALID_AUTHOR_NAME' },
          { status: 400 }
        );
      }
      updates.authorName = body.authorName.trim();
    }

    if (body.authorId !== undefined) {
      if (isNaN(parseInt(body.authorId))) {
        return NextResponse.json(
          { error: 'authorId must be a valid integer', code: 'INVALID_AUTHOR_ID' },
          { status: 400 }
        );
      }
      updates.authorId = parseInt(body.authorId);
    }

    if (body.publishedAt !== undefined) {
      updates.publishedAt = body.publishedAt;
    }

    if (body.readTime !== undefined) {
      if (isNaN(parseInt(body.readTime)) || parseInt(body.readTime) <= 0) {
        return NextResponse.json(
          { error: 'readTime must be a valid positive integer', code: 'INVALID_READ_TIME' },
          { status: 400 }
        );
      }
      updates.readTime = parseInt(body.readTime);
    }

    if (body.status !== undefined) {
      const validStatuses = ['draft', 'published'];
      if (!validStatuses.includes(body.status)) {
        return NextResponse.json(
          { 
            error: `Status must be one of: ${validStatuses.join(', ')}`, 
            code: 'INVALID_STATUS' 
          },
          { status: 400 }
        );
      }
      updates.status = body.status;
    }

    // Always update updatedAt
    updates.updatedAt = new Date().toISOString();

    const updated = await db
      .update(blogPosts)
      .set(updates)
      .where(eq(blogPosts.id, parseInt(id)))
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

    // Check if record exists
    const existing = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'Blog post not found', code: 'POST_NOT_FOUND' },
        { status: 404 }
      );
    }

    const deleted = await db
      .delete(blogPosts)
      .where(eq(blogPosts.id, parseInt(id)))
      .returning();

    return NextResponse.json(
      { message: 'Blog post deleted successfully', post: deleted[0] },
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