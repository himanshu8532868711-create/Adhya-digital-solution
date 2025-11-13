"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Star, Sparkles, Award, TrendingUp, Users as UsersIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FloatingButtons } from "@/components/FloatingButtons";

export default function ClientsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const clientLogos = [
    { name: "TechCorp", logo: "https://via.placeholder.com/200x80/0F172A/FFFFFF?text=TechCorp" },
    { name: "DesignHub", logo: "https://via.placeholder.com/200x80/0F172A/FFFFFF?text=DesignHub" },
    { name: "MarketPro", logo: "https://via.placeholder.com/200x80/0F172A/FFFFFF?text=MarketPro" },
    { name: "StartupX", logo: "https://via.placeholder.com/200x80/0F172A/FFFFFF?text=StartupX" },
    { name: "GlobalBiz", logo: "https://via.placeholder.com/200x80/0F172A/FFFFFF?text=GlobalBiz" },
    { name: "InnovateNow", logo: "https://via.placeholder.com/200x80/0F172A/FFFFFF?text=InnovateNow" },
    { name: "FutureApp", logo: "https://via.placeholder.com/200x80/0F172A/FFFFFF?text=FutureApp" },
    { name: "BrandWorks", logo: "https://via.placeholder.com/200x80/0F172A/FFFFFF?text=BrandWorks" },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO",
      company: "TechCorp India",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      quote: "Hum Digital Studio transformed our online presence completely. Their team is professional, creative, and delivers beyond expectations. Highly recommended!"
    },
    {
      name: "Sarah Williams",
      role: "Marketing Director",
      company: "DesignHub",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      quote: "Working with Hum Digital was a game-changer for our brand. They understood our vision and brought it to life with stunning designs and seamless execution."
    },
    {
      name: "Amit Patel",
      role: "Founder",
      company: "StartupX",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      quote: "The best digital agency we've worked with! Their expertise in app development and marketing helped us scale from 0 to 10,000 users in just 6 months."
    },
    {
      name: "Priya Sharma",
      role: "Operations Manager",
      company: "GlobalBiz",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      quote: "Exceptional service and outstanding results! The team at Hum Digital Studio is responsive, talented, and truly cares about client success."
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "FutureApp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      quote: "From concept to launch, they handled everything perfectly. Our e-commerce platform is now generating 5x more revenue thanks to their expertise."
    },
    {
      name: "Neha Gupta",
      role: "Brand Manager",
      company: "BrandWorks",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      quote: "Creative, professional, and results-driven. Hum Digital Studio helped us rebrand and the response from our customers has been phenomenal!"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % clientLogos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [clientLogos.length]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-background">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <UsersIcon className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Our Clients</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
              Trusted By <span className="text-accent">80+ Businesses</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're proud to deliver exceptional digital solutions for amazing companies worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/5 via-background to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "98%", label: "Client Satisfaction", icon: Award, color: "from-blue-500 to-cyan-500" },
              { value: "80+", label: "Happy Clients", icon: UsersIcon, color: "from-purple-500 to-pink-500" },
              { value: "150+", label: "Projects Delivered", icon: TrendingUp, color: "from-orange-500 to-red-500" },
              { value: "5.0", label: "Average Rating", icon: Star, color: "from-green-500 to-emerald-500" }
            ].map((stat, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-transparent text-center relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <CardContent className="p-8 relative z-10">
                  <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Partners</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Trusted By <span className="text-accent">Leading Brands</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're proud to work with amazing companies
            </p>
          </div>

          <div className="hidden md:grid grid-cols-4 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-8 bg-white rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/50 grayscale hover:grayscale-0"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full h-auto"
                />
              </div>
            ))}
          </div>

          <div className="md:hidden overflow-hidden relative rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {clientLogos.map((client, index) => (
                <div
                  key={index}
                  className="min-w-full flex items-center justify-center p-6"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-accent/20">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full h-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {clientLogos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index ? "bg-accent w-8" : "bg-muted-foreground/30 w-2"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-6">
              <Star className="h-4 w-4 text-accent fill-accent" />
              <span className="text-sm font-medium text-accent">Testimonials</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              What Our <span className="text-accent">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/30">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6TTAgMTRjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMlMwIDIwLjYyNyAwIDE0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Become Our Next<br />
            <span className="text-accent">Happy Client</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join 80+ satisfied clients who trust us with their digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" variant="secondary" className="text-lg h-14 px-8 bg-white hover:bg-white/90 text-primary">
              <Link href="/contact">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg h-14 px-8 border-2 border-white text-white hover:bg-white/10">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}