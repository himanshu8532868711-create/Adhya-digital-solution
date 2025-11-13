"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Sparkles, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

type Category = "All" | "Web" | "App" | "Design" | "Marketing";

interface Project {
  id: number;
  title: string;
  category: Category;
  image: string;
  description: string;
  tags: string[];
  link?: string;
  gradient: string;
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      description: "Full-featured online store with payment integration",
      tags: ["Next.js", "Stripe", "MongoDB"],
      link: "#",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Fitness Mobile App",
      category: "App",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      description: "iOS & Android app for workout tracking",
      tags: ["React Native", "Firebase"],
      link: "#",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      description: "Complete brand identity for tech startup",
      tags: ["Logo", "Branding", "Guidelines"],
      link: "#",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "SEO Campaign Success",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop",
      description: "300% increase in organic traffic",
      tags: ["SEO", "Content", "Analytics"],
      link: "#",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 5,
      title: "SaaS Dashboard",
      category: "Web",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description: "Analytics dashboard for B2B platform",
      tags: ["React", "D3.js", "API"],
      link: "#",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 6,
      title: "Food Delivery App",
      category: "App",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
      description: "Real-time order tracking and delivery",
      tags: ["Flutter", "GPS", "Payments"],
      link: "#",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 7,
      title: "Luxury Hotel Branding",
      category: "Design",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      description: "Premium branding for luxury hotel chain",
      tags: ["Branding", "Print", "Digital"],
      link: "#",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 8,
      title: "Social Media Campaign",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      description: "Viral campaign reaching 2M+ users",
      tags: ["Instagram", "Facebook", "Ads"],
      link: "#",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 9,
      title: "Corporate Website",
      category: "Web",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      description: "Professional website for consulting firm",
      tags: ["WordPress", "Custom", "Responsive"],
      link: "#",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  const categories: Category[] = ["All", "Web", "App", "Design", "Marketing"];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-slate-900">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          <div className="absolute top-32 left-[10%] text-6xl opacity-20 animate-float">🎨</div>
          <div className="absolute top-40 right-[15%] text-5xl opacity-20 animate-float-delayed">💼</div>
          <div className="absolute bottom-32 left-[20%] text-7xl opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>📱</div>
          <div className="absolute bottom-40 right-[25%] text-6xl opacity-20 animate-float-delayed">🚀</div>
          
          <div className="absolute top-24 right-[20%] text-xs text-accent/30 font-mono">
            {'{ projects: "showcase" }'}
          </div>
          <div className="absolute bottom-24 left-[15%] text-xs text-cyan-500/30 font-mono">
            {'<Portfolio />'}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full border border-accent/30 backdrop-blur-sm shadow-lg shadow-accent/20">
              <Sparkles className="h-4 w-4 text-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">Our Work</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-400 to-accent animate-gradient drop-shadow-[0_0_30px_rgba(0,191,166,0.5)]">Portfolio</span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Explore our latest projects and success stories across web, app, design, and marketing
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 sticky top-16 z-20 backdrop-blur-md bg-slate-950/90 border-b border-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium text-slate-300">Filter by Category</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={`${
                  activeCategory === category 
                    ? "bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/50" 
                    : "border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-accent/50"
                } transition-all duration-300`}
                size="lg"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
          <div className="absolute top-40 right-[10%] w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-40 left-[15%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          
          <div className="absolute top-[20%] left-[5%] w-32 h-32 border border-accent/20 rounded-lg rotate-12 animate-float" />
          <div className="absolute bottom-[30%] right-[8%] w-24 h-24 border border-cyan-500/20 rounded-lg -rotate-12 animate-float-delayed" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 border-2 border-slate-800 hover:border-accent/50 hover:-translate-y-2 relative bg-slate-900/50 backdrop-blur-sm"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <Button 
                      variant="secondary" 
                      size="lg"
                      className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/50"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className={`absolute top-4 right-4 px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold shadow-lg`}>
                    {project.category}
                  </div>
                </div>
                
                <CardContent className="p-6 relative z-10">
                  <h3 className="font-bold text-2xl mb-2 text-white group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-3 py-1 bg-slate-800/80 text-slate-300 rounded-full font-medium border border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="h-24 w-24 rounded-full bg-slate-800 mx-auto mb-6 flex items-center justify-center border-2 border-slate-700">
                <Sparkles className="h-12 w-12 text-slate-500" />
              </div>
              <p className="text-slate-400 text-xl">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-primary">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6TTAgMTRjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMlMwIDIwLjYyNyAwIDE0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          
          <div className="absolute top-20 left-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
            Want to Be Our<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-400 to-accent animate-gradient drop-shadow-[0_0_30px_rgba(0,191,166,0.8)]">Next Success Story?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
            Let's create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" variant="secondary" className="text-lg h-14 px-8 bg-white hover:bg-white/90 text-primary shadow-2xl hover:shadow-accent/50 transition-all duration-300">
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg h-14 px-8 border-2 border-white text-white hover:bg-white/10 shadow-2xl backdrop-blur-sm">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}