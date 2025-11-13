import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

// Blog posts table
export const blogPosts = sqliteTable('blog_posts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  content: text('content').notNull(),
  excerpt: text('excerpt').notNull(),
  thumbnailUrl: text('thumbnail_url').notNull(),
  category: text('category').notNull(), // Design/Marketing/Tech/Tips
  authorName: text('author_name').notNull(),
  authorId: integer('author_id').notNull(),
  publishedAt: text('published_at'),
  readTime: integer('read_time').notNull(),
  status: text('status').notNull().default('draft'), // draft/published
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Portfolio items table
export const portfolioItems = sqliteTable('portfolio_items', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  category: text('category').notNull(), // Web/App/Design/Marketing
  imageUrl: text('image_url').notNull(),
  description: text('description').notNull(),
  tags: text('tags', { mode: 'json' }).notNull(),
  projectLink: text('project_link'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Testimonials table
export const testimonials = sqliteTable('testimonials', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  clientName: text('client_name').notNull(),
  clientRole: text('client_role').notNull(),
  companyName: text('company_name').notNull(),
  clientImageUrl: text('client_image_url').notNull(),
  quote: text('quote').notNull(),
  rating: integer('rating').notNull(),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Team members table
export const teamMembers = sqliteTable('team_members', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  role: text('role').notNull(),
  bio: text('bio').notNull(),
  imageUrl: text('image_url').notNull(),
  linkedinUrl: text('linkedin_url'),
  twitterUrl: text('twitter_url'),
  email: text('email').notNull(),
  orderPosition: integer('order_position').notNull(),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Contact submissions table
export const contactSubmissions = sqliteTable('contact_submissions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  message: text('message').notNull(),
  status: text('status').notNull().default('new'), // new/contacted/resolved
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Career applications table
export const careerApplications = sqliteTable('career_applications', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  position: text('position').notNull(),
  experience: text('experience').notNull(),
  location: text('location').notNull(), // New field
  portfolioUrl: text('portfolio_url'),
  resumeUrl: text('resume_url'),
  message: text('message'),
  status: text('status').notNull().default('new'), // new/reviewing/accepted/rejected
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Client projects table
export const clientProjects = sqliteTable('client_projects', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  clientId: integer('client_id').notNull(),
  projectName: text('project_name').notNull(),
  description: text('description').notNull(),
  status: text('status').notNull().default('planning'), // planning/in_progress/completed/on_hold
  budget: integer('budget'),
  startDate: text('start_date'),
  endDate: text('end_date'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Invoices table
export const invoices = sqliteTable('invoices', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  clientId: integer('client_id').notNull(),
  projectId: integer('project_id').notNull(),
  amount: integer('amount').notNull(),
  dueDate: text('due_date').notNull(),
  paidDate: text('paid_date'),
  status: text('status').notNull().default('pending'), // pending/paid/overdue
  invoiceNumber: text('invoice_number').notNull().unique(),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Services table
export const services = sqliteTable('services', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  categoryIcon: text('category_icon').notNull(),
  categoryTitle: text('category_title').notNull(),
  categoryDescription: text('category_description').notNull(),
  categoryGradient: text('category_gradient').notNull(),
  displayOrder: integer('display_order').notNull().default(0),
  isActive: integer('is_active', { mode: 'boolean' }).notNull().default(true),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Service items table
export const serviceItems = sqliteTable('service_items', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  serviceId: integer('service_id').notNull().references(() => services.id, { onDelete: 'cascade' }),
  icon: text('icon').notNull(),
  title: text('title').notNull(),
  items: text('items', { mode: 'json' }).notNull(),
  displayOrder: integer('display_order').notNull().default(0),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Auth tables for better-auth
export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("email_verified", { mode: "boolean" })
    .$defaultFn(() => false)
    .notNull(),
  image: text("image"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
});

export const session = sqliteTable("session", {
  id: text("id").primaryKey(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  token: text("token").notNull().unique(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = sqliteTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: integer("access_token_expires_at", {
    mode: "timestamp",
  }),
  refreshTokenExpiresAt: integer("refresh_token_expires_at", {
    mode: "timestamp",
  }),
  scope: text("scope"),
  password: text("password"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});

export const verification = sqliteTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
});