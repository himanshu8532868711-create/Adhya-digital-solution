import Link from "next/link";
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Tag, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

interface BlogPost {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
  gradient: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
    }[];
    conclusion: string;
  };
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 UI/UX Design Trends to Watch in 2025",
    category: "Design",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
    excerpt: "Discover the latest design trends that will shape the digital landscape in 2025.",
    author: "Priya Patel",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    slug: "ui-ux-design-trends-2025",
    gradient: "from-purple-500 to-pink-500",
    content: {
      intro: "The world of UI/UX design is constantly evolving, and 2025 promises to bring exciting new trends that will reshape how we interact with digital products. From AI-powered interfaces to immersive experiences, here are the top 10 trends you need to watch.",
      sections: [
        {
          heading: "1. AI-Powered Personalization",
          paragraphs: [
            "Artificial intelligence is revolutionizing the way we design user experiences. AI-powered personalization allows interfaces to adapt in real-time based on user behavior, preferences, and context.",
            "This means websites and applications can now offer truly unique experiences to each user, improving engagement and conversion rates significantly."
          ]
        },
        {
          heading: "2. Immersive 3D Elements",
          paragraphs: [
            "3D design elements are becoming more accessible and performant, allowing designers to create depth and visual interest without sacrificing load times.",
            "From subtle 3D icons to full immersive environments, this trend adds a new dimension to user interfaces."
          ]
        },
        {
          heading: "3. Voice User Interfaces",
          paragraphs: [
            "Voice-activated interfaces are no longer just for smart speakers. Modern web and mobile applications are integrating voice commands to make interactions more natural and accessible.",
            "This trend is particularly important for accessibility, allowing users with disabilities to navigate digital products more easily."
          ]
        },
        {
          heading: "4. Dark Mode as Default",
          paragraphs: [
            "Dark mode has evolved from a trendy feature to an expected standard. In 2025, we're seeing more products adopt dark mode as their default interface, with light mode as an alternative.",
            "This shift reflects user preferences for reduced eye strain and better battery life on mobile devices."
          ]
        },
        {
          heading: "5. Micro-Interactions and Animations",
          paragraphs: [
            "Subtle animations and micro-interactions continue to play a crucial role in creating delightful user experiences. These small details provide feedback, guide users, and add personality to interfaces.",
            "The key is keeping them smooth, purposeful, and performance-optimized."
          ]
        }
      ],
      conclusion: "As we move through 2025, these trends will continue to evolve and shape the digital landscape. The key to staying relevant is balancing innovation with usability, always keeping the user's needs at the forefront of design decisions."
    }
  },
  {
    id: 2,
    title: "The Complete Guide to SEO in 2025",
    category: "Marketing",
    thumbnail: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&h=600&fit=crop",
    excerpt: "Master the art of search engine optimization with our comprehensive guide.",
    author: "Rahul Sharma",
    date: "Jan 12, 2025",
    readTime: "8 min read",
    slug: "complete-guide-seo-2025",
    gradient: "from-green-500 to-emerald-500",
    content: {
      intro: "Search engine optimization has evolved dramatically over the years. In 2025, SEO is more sophisticated than ever, requiring a holistic approach that combines technical excellence, quality content, and user experience optimization.",
      sections: [
        {
          heading: "Understanding Modern SEO",
          paragraphs: [
            "Today's SEO is about much more than keywords. Search engines now use advanced AI algorithms to understand content context, user intent, and page quality.",
            "This means creating valuable, authentic content that genuinely serves your audience is more important than ever."
          ]
        },
        {
          heading: "Technical SEO Fundamentals",
          paragraphs: [
            "Technical SEO forms the foundation of your search visibility. This includes site speed optimization, mobile responsiveness, proper URL structure, and clean code.",
            "Core Web Vitals have become critical ranking factors, making performance optimization essential for SEO success."
          ]
        },
        {
          heading: "Content Strategy and Creation",
          paragraphs: [
            "Quality content remains king in SEO. Focus on creating comprehensive, well-researched content that answers user questions and provides genuine value.",
            "Use semantic keywords naturally, structure content with proper headings, and include multimedia elements to enhance engagement."
          ]
        },
        {
          heading: "Link Building in 2025",
          paragraphs: [
            "Link building has evolved from quantity to quality. Focus on earning links from authoritative, relevant sources through valuable content and genuine relationships.",
            "Guest posting, digital PR, and creating linkable assets are effective strategies for building a strong backlink profile."
          ]
        },
        {
          heading: "Local SEO Optimization",
          paragraphs: [
            "For businesses serving local markets, local SEO is crucial. Optimize your Google Business Profile, maintain consistent NAP information, and gather authentic customer reviews.",
            "Local content and location-specific landing pages can significantly boost your visibility in local search results."
          ]
        }
      ],
      conclusion: "SEO in 2025 requires a balanced approach combining technical excellence, quality content, and authentic link building. By focusing on user experience and providing genuine value, you can achieve sustainable search visibility and drive meaningful traffic to your website."
    }
  },
  {
    id: 3,
    title: "Building Scalable React Applications",
    category: "Tech",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
    excerpt: "Learn best practices for building scalable and maintainable React applications.",
    author: "Amit Kumar",
    date: "Jan 10, 2025",
    readTime: "10 min read",
    slug: "building-scalable-react-apps",
    gradient: "from-blue-500 to-cyan-500",
    content: {
      intro: "Building a React application is easy, but building one that scales well as your codebase and team grow requires careful planning and adherence to best practices. In this guide, we'll explore the key principles and patterns for creating maintainable React applications.",
      sections: [
        {
          heading: "Component Architecture",
          paragraphs: [
            "A well-structured component architecture is the foundation of any scalable React application. Organize your components by feature rather than by type, and keep components small and focused on a single responsibility.",
            "Use composition over inheritance and create reusable UI components in a shared component library."
          ]
        },
        {
          heading: "State Management Strategy",
          paragraphs: [
            "Choose the right state management solution for your application's needs. While React's built-in hooks are sufficient for many applications, larger apps may benefit from solutions like Redux, Zustand, or Jotai.",
            "Keep state as local as possible and lift it up only when necessary. Use context for truly global state and avoid prop drilling."
          ]
        },
        {
          heading: "Code Organization and Structure",
          paragraphs: [
            "Organize your code in a way that makes it easy to find and understand. Use a feature-based folder structure, grouping related components, hooks, and utilities together.",
            "Implement clear naming conventions and maintain consistent code formatting across your project."
          ]
        },
        {
          heading: "Performance Optimization",
          paragraphs: [
            "Performance should be a consideration from day one. Use React.memo, useMemo, and useCallback appropriately to prevent unnecessary re-renders.",
            "Implement code splitting and lazy loading for routes and heavy components. Monitor bundle size and use tools like Lighthouse to track performance metrics."
          ]
        },
        {
          heading: "Testing and Documentation",
          paragraphs: [
            "Write tests for critical functionality and aim for meaningful coverage rather than 100% coverage. Use unit tests for business logic and integration tests for user flows.",
            "Document complex logic, API contracts, and component props. Good documentation saves time for both current and future team members."
          ]
        }
      ],
      conclusion: "Building scalable React applications requires discipline, planning, and adherence to best practices. By focusing on solid architecture, clean code organization, and performance from the start, you can create applications that remain maintainable as they grow."
    }
  },
  {
    id: 4,
    title: "5 Tips for Effective Brand Storytelling",
    category: "Tips",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    excerpt: "Transform your brand with compelling storytelling.",
    author: "Neha Singh",
    date: "Jan 8, 2025",
    readTime: "6 min read",
    slug: "effective-brand-storytelling",
    gradient: "from-orange-500 to-red-500",
    content: {
      intro: "In today's crowded marketplace, brand storytelling has become essential for connecting with audiences on an emotional level. A compelling brand story can differentiate your business, build trust, and create lasting customer relationships.",
      sections: [
        {
          heading: "1. Know Your Audience Deeply",
          paragraphs: [
            "Effective storytelling starts with understanding who you're talking to. Research your audience's pain points, aspirations, and values.",
            "Create detailed buyer personas and craft stories that resonate with their experiences and emotions."
          ]
        },
        {
          heading: "2. Define Your Brand's Core Values",
          paragraphs: [
            "Your brand story should reflect your core values and mission. What do you stand for? What change do you want to create in the world?",
            "Authentic values create authentic stories that people can connect with and believe in."
          ]
        },
        {
          heading: "3. Make Your Customer the Hero",
          paragraphs: [
            "The most effective brand stories position the customer as the hero, with your brand as the guide helping them overcome challenges.",
            "Show how your product or service enables customers to achieve their goals and transform their lives."
          ]
        },
        {
          heading: "4. Use Multiple Channels Consistently",
          paragraphs: [
            "Tell your brand story across all touchpoints - your website, social media, email marketing, and customer interactions.",
            "Consistency in messaging and tone helps reinforce your story and build recognition."
          ]
        },
        {
          heading: "5. Show, Don't Just Tell",
          paragraphs: [
            "Bring your story to life with real examples, customer testimonials, and behind-the-scenes content.",
            "Visual storytelling through photos, videos, and graphics makes your narrative more engaging and memorable."
          ]
        }
      ],
      conclusion: "Brand storytelling is an ongoing journey, not a one-time effort. Keep refining your narrative based on audience feedback and evolving market needs. When done right, storytelling transforms your brand from just another business into a meaningful part of your customers' lives."
    }
  },
  {
    id: 5,
    title: "Color Psychology in Web Design",
    category: "Design",
    thumbnail: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&h=600&fit=crop",
    excerpt: "Understand how colors influence user behavior and emotions.",
    author: "Priya Patel",
    date: "Jan 5, 2025",
    readTime: "7 min read",
    slug: "color-psychology-web-design",
    gradient: "from-purple-500 to-pink-500",
    content: {
      intro: "Color is one of the most powerful tools in a web designer's arsenal. It influences emotions, drives actions, and shapes perceptions of your brand. Understanding color psychology can help you make informed design decisions that enhance user experience and achieve business goals.",
      sections: [
        {
          heading: "The Fundamentals of Color Psychology",
          paragraphs: [
            "Different colors evoke different emotional responses. Blue conveys trust and stability, red creates urgency and excitement, green suggests growth and health, while yellow radiates optimism and energy.",
            "Cultural context matters too - colors can have different meanings in different cultures, so always consider your target audience."
          ]
        },
        {
          heading: "Choosing Your Primary Color",
          paragraphs: [
            "Your primary color should align with your brand personality and the emotions you want to evoke. Tech companies often use blue for trust, while creative agencies might choose vibrant colors to showcase innovation.",
            "Consider your industry standards and how you want to position yourself - following conventions builds trust, while breaking them can make you stand out."
          ]
        },
        {
          heading: "Creating Effective Color Combinations",
          paragraphs: [
            "Use color theory principles like complementary, analogous, or triadic color schemes to create harmonious palettes.",
            "Maintain sufficient contrast for accessibility, especially between text and backgrounds. Tools like the WCAG contrast checker can help ensure your design is readable for all users."
          ]
        },
        {
          heading: "Using Color to Guide User Actions",
          paragraphs: [
            "Strategic use of color can direct user attention and encourage desired actions. Use high-contrast colors for call-to-action buttons to make them stand out.",
            "Create visual hierarchy with color - important elements should use attention-grabbing colors, while less critical content can use more subdued tones."
          ]
        },
        {
          heading: "Dark Mode and Color Adaptation",
          paragraphs: [
            "With dark mode becoming increasingly popular, consider how your color palette adapts to different themes. Colors appear different on dark backgrounds, so test thoroughly.",
            "Design with both light and dark modes in mind from the start, adjusting saturation and brightness levels as needed."
          ]
        }
      ],
      conclusion: "Color psychology is a powerful tool that, when used thoughtfully, can significantly enhance user experience and drive business results. Experiment with different palettes, test with real users, and always prioritize accessibility alongside aesthetics."
    }
  },
  {
    id: 6,
    title: "Social Media Marketing Strategies That Work",
    category: "Marketing",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop",
    excerpt: "Boost your social media presence with proven strategies.",
    author: "Neha Singh",
    date: "Jan 3, 2025",
    readTime: "9 min read",
    slug: "social-media-marketing-strategies",
    gradient: "from-green-500 to-emerald-500",
    content: {
      intro: "Social media marketing has evolved from a nice-to-have to an essential component of any digital marketing strategy. With billions of active users across platforms, mastering social media can significantly impact your brand's reach and engagement.",
      sections: [
        {
          heading: "Platform Selection and Focus",
          paragraphs: [
            "Not all social platforms are right for every business. Identify where your target audience spends their time and focus your efforts there.",
            "LinkedIn is ideal for B2B companies, Instagram and TikTok excel for visual brands and younger demographics, while Facebook remains strong for community building."
          ]
        },
        {
          heading: "Content Strategy and Planning",
          paragraphs: [
            "Develop a content calendar that balances promotional content with educational and entertaining posts. The 80/20 rule is a good starting point - 80% value-driven content, 20% promotional.",
            "Use a mix of content formats including images, videos, stories, and live streams to keep your feed diverse and engaging."
          ]
        },
        {
          heading: "Community Engagement",
          paragraphs: [
            "Social media is a two-way conversation. Respond promptly to comments and messages, engage with your followers' content, and participate in relevant discussions.",
            "Build relationships by showing genuine interest in your community. This creates loyal brand advocates who will promote your business organically."
          ]
        },
        {
          heading: "Leveraging User-Generated Content",
          paragraphs: [
            "Encourage customers to share their experiences with your brand. User-generated content is authentic, trustworthy, and provides social proof.",
            "Create branded hashtags, run contests, and feature customer content on your channels to build a sense of community."
          ]
        },
        {
          heading: "Analytics and Optimization",
          paragraphs: [
            "Track key metrics like engagement rate, reach, and conversions. Use platform analytics and third-party tools to understand what content resonates with your audience.",
            "Continuously test different content types, posting times, and formats. Let data guide your strategy adjustments."
          ]
        }
      ],
      conclusion: "Successful social media marketing requires consistency, authenticity, and a willingness to adapt. Focus on building genuine connections with your audience rather than chasing vanity metrics. With the right strategy and execution, social media can become your most powerful marketing channel."
    }
  },
  {
    id: 7,
    title: "Introduction to Next.js 15: What's New?",
    category: "Tech",
    thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&h=600&fit=crop",
    excerpt: "Explore the latest features in Next.js 15.",
    author: "Amit Kumar",
    date: "Dec 30, 2024",
    readTime: "8 min read",
    slug: "nextjs-15-whats-new",
    gradient: "from-blue-500 to-cyan-500",
    content: {
      intro: "Next.js 15 brings significant improvements in performance, developer experience, and new features that make building modern web applications even better. Let's explore the most important updates and what they mean for your projects.",
      sections: [
        {
          heading: "Enhanced App Router",
          paragraphs: [
            "The App Router continues to mature with improved stability and new features. Partial prerendering allows mixing static and dynamic content seamlessly.",
            "Better error handling and improved debugging make development faster and more enjoyable."
          ]
        },
        {
          heading: "Improved Performance",
          paragraphs: [
            "Next.js 15 introduces optimizations that reduce JavaScript bundle sizes and improve initial load times. Automatic code splitting has become more intelligent.",
            "Server Components are more efficient, with better streaming support and reduced client-side JavaScript."
          ]
        },
        {
          heading: "TypeScript Support",
          paragraphs: [
            "TypeScript integration is now even better with improved type inference and better error messages. The framework provides more accurate types out of the box.",
            "New TypeScript features make working with Server Actions and Server Components more type-safe."
          ]
        },
        {
          heading: "Enhanced Image Optimization",
          paragraphs: [
            "The Image component has received updates with better automatic optimization and support for more image formats.",
            "Improved caching strategies ensure images load faster while maintaining quality."
          ]
        },
        {
          heading: "Developer Experience Improvements",
          paragraphs: [
            "Better error messages, improved Fast Refresh, and enhanced development server make building with Next.js more productive.",
            "New CLI commands and configuration options provide more control over your build process."
          ]
        }
      ],
      conclusion: "Next.js 15 represents another solid step forward for the framework. Whether you're starting a new project or upgrading an existing one, these improvements make Next.js an even more compelling choice for modern web development."
    }
  },
  {
    id: 8,
    title: "Productivity Hacks for Remote Workers",
    category: "Tips",
    thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=600&fit=crop",
    excerpt: "Stay productive while working from home with these proven tips.",
    author: "Rahul Sharma",
    date: "Dec 28, 2024",
    readTime: "5 min read",
    slug: "productivity-hacks-remote-workers",
    gradient: "from-orange-500 to-red-500",
    content: {
      intro: "Remote work offers flexibility and freedom, but it also presents unique challenges for productivity. These proven strategies will help you stay focused, efficient, and maintain work-life balance while working from home.",
      sections: [
        {
          heading: "Create a Dedicated Workspace",
          paragraphs: [
            "Establish a specific area in your home that's exclusively for work. This physical boundary helps your brain switch into work mode and signals to others that you're working.",
            "Invest in a comfortable chair, good lighting, and minimize distractions in your workspace."
          ]
        },
        {
          heading: "Establish a Routine",
          paragraphs: [
            "Maintain consistent start and end times for your workday. Get dressed as if you were going to an office - this mental preparation can significantly boost productivity.",
            "Include regular breaks in your routine using techniques like the Pomodoro method."
          ]
        },
        {
          heading: "Use Time-Blocking",
          paragraphs: [
            "Schedule specific blocks of time for different types of tasks. Deep work sessions for complex projects, communication windows for meetings and emails, and breaks for rest.",
            "Protect your focus time by closing unnecessary tabs and silencing notifications during deep work blocks."
          ]
        },
        {
          heading: "Leverage Productivity Tools",
          paragraphs: [
            "Use project management tools like Trello or Asana to organize tasks. Time tracking apps help you understand where your time goes.",
            "Communication tools like Slack keep you connected with your team without constant email checking."
          ]
        },
        {
          heading: "Maintain Work-Life Balance",
          paragraphs: [
            "Set clear boundaries between work and personal time. When your workday ends, physically leave your workspace.",
            "Make time for exercise, hobbies, and social connections. These activities recharge you and prevent burnout."
          ]
        }
      ],
      conclusion: "Productivity in remote work comes down to creating structure, maintaining discipline, and being intentional about how you spend your time. Experiment with these strategies to find what works best for your situation and work style."
    }
  },
  {
    id: 9,
    title: "The Art of Minimalist Design",
    category: "Design",
    thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&h=600&fit=crop",
    excerpt: "Less is more. Discover the principles of minimalist design.",
    author: "Priya Patel",
    date: "Dec 25, 2024",
    readTime: "6 min read",
    slug: "art-of-minimalist-design",
    gradient: "from-purple-500 to-pink-500",
    content: {
      intro: "Minimalist design is about stripping away the unnecessary to focus on what truly matters. It's not about creating sparse or empty designs, but about intentional simplicity that enhances usability and creates beautiful, functional interfaces.",
      sections: [
        {
          heading: "Core Principles of Minimalism",
          paragraphs: [
            "Minimalism emphasizes simplicity, clarity, and purpose. Every element should serve a function - if it doesn't, it shouldn't be there.",
            "Focus on content hierarchy, generous whitespace, and limited color palettes to create clean, focused designs."
          ]
        },
        {
          heading: "The Power of White Space",
          paragraphs: [
            "White space (or negative space) is not wasted space - it's a crucial design element that gives content room to breathe and guides user attention.",
            "Proper use of white space improves readability, creates visual hierarchy, and makes interfaces feel premium and sophisticated."
          ]
        },
        {
          heading: "Typography in Minimalist Design",
          paragraphs: [
            "In minimalist design, typography often carries more weight. Choose clean, legible typefaces and use type hierarchy to organize information.",
            "Limit yourself to 2-3 font families maximum, and use size, weight, and spacing to create visual interest."
          ]
        },
        {
          heading: "Color and Contrast",
          paragraphs: [
            "Minimalist designs typically use limited color palettes - often just one or two accent colors alongside neutrals.",
            "Strategic use of color draws attention to important elements and creates focal points without visual clutter."
          ]
        },
        {
          heading: "Functional Simplicity",
          paragraphs: [
            "Minimalism isn't just aesthetic - it improves usability by reducing cognitive load. Users can focus on their goals without distraction.",
            "Simplify navigation, streamline user flows, and remove any features or elements that don't add clear value."
          ]
        }
      ],
      conclusion: "Minimalist design requires discipline and careful decision-making about what to include and what to omit. When executed well, it creates elegant, timeless interfaces that users love. Remember: simplicity is the ultimate sophistication."
    }
  }
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-background">
          <div className="absolute top-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${post.gradient} text-white text-sm font-semibold shadow-lg mb-6`}>
            <Tag className="h-4 w-4" />
            {post.category}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex items-center justify-between flex-wrap gap-4 mb-8 text-muted-foreground">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${post.gradient} opacity-20`} />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-muted-foreground mb-12">
              {post.content.intro}
            </p>

            {post.content.sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-lg leading-relaxed text-muted-foreground mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            <div className="mt-16 p-8 bg-accent/10 border border-accent/20 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Conclusion</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {post.content.conclusion}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card 
                  key={relatedPost.id}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-transparent hover:-translate-y-2 relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${relatedPost.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedPost.thumbnail}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <CardContent className="p-6 relative z-10">
                    <h3 className="font-bold text-xl mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full group-hover:bg-accent group-hover:text-white transition-all"
                      asChild
                    >
                      <Link href={`/blog/${relatedPost.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/30">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6TTAgMTRjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMlMwIDIwLjYyNyAwIDE0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Want More Insights?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest tips, trends, and best practices delivered to your inbox
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