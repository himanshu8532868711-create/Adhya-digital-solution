"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, User, ArrowRight, Tag, Sparkles, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

type Category = "All" | "Design" | "Marketing" | "Tech" | "Tips";

interface BlogPost {
  id: number;
  title: string;
  category: Category;
  thumbnail: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
  gradient: string;
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "10 UI/UX Design Trends to Watch in 2025",
      category: "Design",
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
      excerpt: "Discover the latest design trends that will shape the digital landscape in 2025. From AI-powered interfaces to immersive experiences...",
      author: "Priya Patel",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      slug: "ui-ux-design-trends-2025",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "The Complete Guide to SEO in 2025",
      category: "Marketing",
      thumbnail: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=500&fit=crop",
      excerpt: "Master the art of search engine optimization with our comprehensive guide. Learn about keyword research, on-page SEO, and link building strategies...",
      author: "Rahul Sharma",
      date: "Jan 12, 2025",
      readTime: "8 min read",
      slug: "complete-guide-seo-2025",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Building Scalable React Applications",
      category: "Tech",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
      excerpt: "Learn best practices for building scalable and maintainable React applications. From component architecture to state management...",
      author: "Amit Kumar",
      date: "Jan 10, 2025",
      readTime: "10 min read",
      slug: "building-scalable-react-apps",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      title: "5 Tips for Effective Brand Storytelling",
      category: "Tips",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
      excerpt: "Transform your brand with compelling storytelling. Learn how to connect with your audience on an emotional level and build lasting relationships...",
      author: "Neha Singh",
      date: "Jan 8, 2025",
      readTime: "6 min read",
      slug: "effective-brand-storytelling",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Color Psychology in Web Design",
      category: "Design",
      thumbnail: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=500&fit=crop",
      excerpt: "Understand how colors influence user behavior and emotions. Learn to choose the perfect color palette for your next project...",
      author: "Priya Patel",
      date: "Jan 5, 2025",
      readTime: "7 min read",
      slug: "color-psychology-web-design",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 6,
      title: "Social Media Marketing Strategies That Work",
      category: "Marketing",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
      excerpt: "Boost your social media presence with proven strategies. From content creation to community engagement, we cover it all...",
      author: "Neha Singh",
      date: "Jan 3, 2025",
      readTime: "9 min read",
      slug: "social-media-marketing-strategies",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 7,
      title: "Introduction to Next.js 15: What's New?",
      category: "Tech",
      thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=500&fit=crop",
      excerpt: "Explore the latest features in Next.js 15. From improved performance to new routing capabilities, discover what makes this release special...",
      author: "Amit Kumar",
      date: "Dec 30, 2024",
      readTime: "8 min read",
      slug: "nextjs-15-whats-new",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 8,
      title: "Productivity Hacks for Remote Workers",
      category: "Tips",
      thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
      excerpt: "Stay productive while working from home with these proven tips. From time management to workspace setup, maximize your efficiency...",
      author: "Rahul Sharma",
      date: "Dec 28, 2024",
      readTime: "5 min read",
      slug: "productivity-hacks-remote-workers",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 9,
      title: "The Art of Minimalist Design",
      category: "Design",
      thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=500&fit=crop",
      excerpt: "Less is more. Discover the principles of minimalist design and how to create clean, effective user interfaces that delight users...",
      author: "Priya Patel",
      date: "Dec 25, 2024",
      readTime: "6 min read",
      slug: "art-of-minimalist-design",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const categories: Category[] = ["All", "Design", "Marketing", "Tech", "Tips"];

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-background">
          <div className="absolute top-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <BookOpen className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Our Blog</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
              Insights & <span className="text-accent">Inspiration</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tips, trends, and best practices from the world of digital design, development, and marketing
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 sticky top-16 z-20 backdrop-blur-sm bg-background/80 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Tag className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filter by Category</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={`${activeCategory === category ? "bg-accent hover:bg-accent/90" : ""} transition-all duration-300`}
                size="lg"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card 
                key={post.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-transparent hover:-translate-y-2 relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r ${post.gradient} text-white text-sm font-semibold shadow-lg flex items-center gap-1`}>
                    <Tag className="h-3 w-3" />
                    {post.category}
                  </div>
                </div>
                
                <CardContent className="p-6 relative z-10">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-accent transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 pb-4 border-b">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span className="font-medium">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full group-hover:bg-accent group-hover:text-white transition-all"
                    asChild
                  >
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="h-24 w-24 rounded-full bg-muted mx-auto mb-6 flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground text-xl">
                No blog posts found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/30">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6TTAgMTRjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMlMwIDIwLjYyNyAwIDE0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-4">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">Stay Updated</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Get the Latest<br />
            <span className="text-accent">Insights Delivered</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly tips, trends, and best practices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto pt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-xl flex-1 text-foreground shadow-lg"
            />
            <Button size="lg" variant="secondary" className="bg-white hover:bg-white/90 text-primary px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}