"use client";

import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Award, Sparkles, Users, Zap, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TeamCard } from "@/components/TeamCard";
import { FloatingButtons } from "@/components/FloatingButtons";
import Image from "next/image";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Rahul Sharma",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Visionary leader with 10+ years in digital transformation",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "rahul@humdigitalstudio.com"
    },
    {
      name: "Priya Patel",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Award-winning designer specializing in brand identity",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "priya@humdigitalstudio.com"
    },
    {
      name: "Amit Kumar",
      role: "Head of Development",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Full-stack expert building scalable digital solutions",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "amit@humdigitalstudio.com"
    },
    {
      name: "Kuldeep Sharma",
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Digital marketing strategist driving measurable growth",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "neha@humdigitalstudio.com"
    }
  ];

  const milestones = [
    { year: "2023", title: "The Beginning", description: "Founded with a vision to transform businesses" },
    { year: "2024", title: "Expansion", description: "Grew team and expanded service offerings" },
    { year: "2025", title: "50+ Projects", description: "Successfully delivered across various industries" },
    { year: "2025", title: "Recognition", description: "Best Digital Agency winner" },
    { year: "2025", title: "100+ Clients", description: "Crossed major milestone with global reach" },
    { year: "2025", title: "Global Reach", description: "International expansion with AI-driven solutions" }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero Section - Split Design */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-background">
          <div className="absolute top-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">About Us</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
              Meet <span className="text-accent">Aadhya digital Solution</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A team of passionate creators, developers, and strategists dedicated to 
              helping businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Card Layout */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/50">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-10 relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the leading digital agency that empowers businesses worldwide with 
                  innovative technology and creative solutions. We envision a future where 
                  every business can harness digital transformation to achieve extraordinary success.
                </p>
              </CardContent>
            </Card>

            {/* Mission Card */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-10 relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To deliver exceptional digital experiences that drive real business results. 
                  We are committed to understanding our clients' unique challenges and crafting 
                  tailored solutions that exceed expectations as your trusted partner.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values - Creative Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 mb-6">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Core Values</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              What <span className="text-accent">Drives Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Client-Centric", desc: "Your success is our success. We prioritize understanding your needs.", color: "from-red-500 to-pink-500" },
              { icon: Award, title: "Excellence", desc: "Striving for excellence in every project with continuous improvement.", color: "from-yellow-500 to-orange-500" },
              { icon: Zap, title: "Innovation", desc: "Embracing new technologies to solve complex challenges creatively.", color: "from-blue-500 to-cyan-500" }
            ].map((value, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-transparent overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg`}>
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Modern Cards */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-6">
              <Users className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Our Team</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Meet the <span className="text-accent">Dream Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Talented professionals dedicated to your digital success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline - Horizontal Modern */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/5 via-background to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 mb-6">
              <Trophy className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Journey</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              From <span className="text-accent">Humble Beginnings</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              To becoming a trusted digital partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 text-8xl font-bold text-accent/5 group-hover:text-accent/10 transition-colors">
                  {milestone.year}
                </div>
                <CardContent className="p-8 relative z-10">
                  <div className="text-3xl font-bold text-accent mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </CardContent>
              </Card>
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
            Ready to Work<br />
            <span className="text-accent">Together?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Let's create something amazing for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" variant="secondary" className="text-lg h-14 px-8 bg-white hover:bg-white/90 text-primary">
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
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