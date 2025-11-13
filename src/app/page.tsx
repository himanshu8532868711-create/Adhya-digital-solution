"use client";

import Link from "next/link";
import { MoveRight, Target, Palette, Terminal, Zap, LineChart, Stars, Bolt, UsersRound, BadgeCheck, Database, Cloud, Smartphone, Cpu, Layers, Globe, Lightbulb, Rocket, TrendingUp, Award, Users, Code2, Sparkles, Brain, Bot, Network, Workflow, ShoppingBag, CreditCard, Package, TrendingUp as Trending, Building2, ClipboardCheck, UserCog, Truck, Settings, FolderKanban, Archive, BoxIcon, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import Image from "next/image";

export default function Home() {
  const services = [
    {
      icon: Terminal,
      title: "Modern/customization Web Development",
      description: "Next.js 15, React 19, TypeScript, Tailwind CSS & Serverless Architecture",
      color: "from-blue-500 to-cyan-500",
      tech: ["Next.js", "React", "TypeScript", "Node.js"]
    },
    {
      icon: Brain,
      title: "AI & ML",
      description: "AI Chatbot, Intelligent Chatbots, ML Models & Generative AI Solutions",
      color: "from-purple-500 to-pink-500",
      tech: ["Face Recognization", "Chatbot", "ML Model", "Generative AI"]
    },
    {
      icon: LineChart,
      title: "Growth Marketing",
      description: "AI-Powered Analytics, Automation & Performance Optimization",
      color: "from-orange-500 to-red-500",
      tech: ["Google Analytics", "SEMrush", "HubSpot", "Meta Ads"]
    },
    {
      icon: Zap,
      title: "Cloud Solutions",
      description: "AWS, Vercel, Docker & Scalable Infrastructure",
      color: "from-green-500 to-emerald-500",
      tech: ["AWS", "Vercel", "Docker", "MongoDB"]
    }
  ];

  const features = [
    "150+ Successful Projects",
    "80+ Happy Clients Worldwide",
    "5+ Years Industry Experience",
    "24/7 Dedicated Support"
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section - 3D Glowing Light Bulb Background */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Double Shade Background with 3D Light Bulb Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-slate-900">
          {/* Central 3D Glowing Light Bulb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30">
            {/* Light bulb glow layers - creating 3D depth */}
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-yellow-300/40 via-yellow-500/20 to-transparent blur-3xl animate-pulse" />
            <div className="absolute inset-[10%] rounded-full bg-gradient-radial from-yellow-200/50 via-yellow-400/30 to-transparent blur-2xl animate-pulse delay-500" />
            <div className="absolute inset-[20%] rounded-full bg-gradient-radial from-yellow-100/60 via-yellow-300/40 to-transparent blur-xl animate-pulse delay-1000" />
            <div className="absolute inset-[30%] rounded-full bg-gradient-radial from-white/70 via-yellow-200/50 to-transparent blur-lg" />
            
            {/* Light rays emanating from bulb */}
            <div className="absolute inset-0">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-1 h-40 bg-gradient-to-t from-yellow-400/30 to-transparent origin-bottom"
                  style={{
                    transform: `rotate(${i * 30}deg) translateX(-50%)`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Radial glow effect around the scene */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-yellow-500/10 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/5 to-transparent" />
          
          {/* Floating light particles */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-yellow-300/20 animate-float"
                style={{
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${Math.random() * 3 + 4}s`
                }}
              />
            ))}
          </div>

          {/* Tech grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#FCD34D08_1px,transparent_1px),linear-gradient(to_bottom,#FCD34D08_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          
          {/* Floating tech icons with glow */}
          <div className="absolute inset-0 overflow-hidden">
            <Database className="absolute top-20 left-[10%] w-8 h-8 text-yellow-300/30 animate-float drop-shadow-[0_0_10px_rgba(253,224,71,0.3)]" />
            <Cloud className="absolute top-40 right-[15%] w-10 h-10 text-yellow-400/40 animate-float-delayed drop-shadow-[0_0_15px_rgba(250,204,21,0.4)]" />
            <Smartphone className="absolute bottom-32 left-[20%] w-7 h-7 text-yellow-300/35 animate-float drop-shadow-[0_0_12px_rgba(253,224,71,0.3)]" />
            <Cpu className="absolute bottom-20 right-[25%] w-9 h-9 text-yellow-400/30 animate-float-delayed drop-shadow-[0_0_10px_rgba(250,204,21,0.3)]" />
            <Layers className="absolute top-1/2 left-[5%] w-8 h-8 text-yellow-300/40 animate-float drop-shadow-[0_0_15px_rgba(253,224,71,0.4)]" />
            <Globe className="absolute top-1/3 right-[10%] w-10 h-10 text-yellow-400/35 animate-float-delayed drop-shadow-[0_0_12px_rgba(250,204,21,0.3)]" />
            <Lightbulb className="absolute bottom-40 left-[15%] w-12 h-12 text-yellow-200/50 animate-pulse drop-shadow-[0_0_20px_rgba(254,240,138,0.5)]" />
          </div>
          
          {/* Ambient light spots */}
          <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-yellow-300/10 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 rounded-full border border-yellow-400/40 backdrop-blur-sm shadow-[0_0_20px_rgba(250,204,21,0.3)]">
                <Lightbulb className="h-4 w-4 text-yellow-300" />
                <span className="text-sm font-medium text-yellow-200">Illuminating Digital Ideas</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_0_30px_rgba(253,224,71,0.3)]">
                We <span className="text-yellow-300 drop-shadow-[0_0_40px_rgba(250,204,21,0.6)]">Innovate.</span>
                <br />We <span className="text-yellow-300 drop-shadow-[0_0_40px_rgba(250,204,21,0.6)]">Create.</span>
                <br />We <span className="text-yellow-300 drop-shadow-[0_0_40px_rgba(250,204,21,0.6)]">Transform</span>
                <br />With Modern Tech.
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed max-w-xl drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                Cutting-edge solutions powered by Next.js, React, AI, and Cloud Technologies.
                Transform your business with future-ready digital experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-semibold text-lg h-14 px-8 group shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:shadow-[0_0_40px_rgba(250,204,21,0.6)]">
                  <Link href="/contact">
                    Get Started 
                    <MoveRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg h-14 px-8 border-2 border-yellow-400/50 text-yellow-200 hover:bg-yellow-400/10 backdrop-blur-sm shadow-[0_0_20px_rgba(250,204,21,0.2)]">
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="space-y-1 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-yellow-400/20 shadow-[0_0_20px_rgba(250,204,21,0.1)]">
                  <div className="text-4xl font-bold text-yellow-300 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">150+</div>
                  <div className="text-sm text-gray-300">Projects Completed</div>
                </div>
                <div className="space-y-1 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-yellow-400/20 shadow-[0_0_20px_rgba(250,204,21,0.1)]">
                  <div className="text-4xl font-bold text-yellow-300 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">80+</div>
                  <div className="text-sm text-gray-300">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Right Visual Element - Enhanced with glow */}
            <div className="relative lg:h-[600px] hidden lg:block">
              <div className="absolute inset-0">
                {/* Floating Cards with glow effects */}
                <div className="absolute top-10 right-0 w-64 h-80 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-3xl backdrop-blur-md border border-yellow-400/30 p-6 animate-float shadow-[0_0_40px_rgba(250,204,21,0.2)]">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-yellow-400/40 flex items-center justify-center mb-4 backdrop-blur-sm shadow-[0_0_20px_rgba(250,204,21,0.4)]">
                        <Bolt className="h-6 w-6 text-yellow-200" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">Blazing Fast</h3>
                      <p className="text-sm text-gray-200">Next.js 15 & Edge Computing</p>
                    </div>
                    <div className="text-5xl font-bold text-yellow-400/40">01</div>
                  </div>
                </div>

                <div className="absolute bottom-20 right-20 w-56 h-72 bg-gradient-to-br from-amber-500/20 to-yellow-600/20 rounded-3xl backdrop-blur-md border border-amber-400/30 p-6 animate-float-delayed shadow-[0_0_40px_rgba(245,158,11,0.2)]">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-amber-500/40 flex items-center justify-center mb-4 backdrop-blur-sm shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                        <UsersRound className="h-6 w-6 text-amber-200" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">User-Centric</h3>
                      <p className="text-sm text-gray-200">AI-Powered Experiences</p>
                    </div>
                    <div className="text-5xl font-bold text-amber-400/40">02</div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-0 w-48 h-48 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full blur-2xl opacity-30 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are - Double Shade with Lightbulb Theme */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Modern Technology Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black">
          {/* AI Neural Network Visualization */}
          <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="neural-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.8" />
              </linearGradient>
              <filter id="glow-effect">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Network connections */}
            <line x1="150" y1="100" x2="350" y2="200" stroke="url(#neural-grad)" strokeWidth="2" className="animate-pulse" filter="url(#glow-effect)" />
            <line x1="350" y1="200" x2="550" y2="150" stroke="url(#neural-grad)" strokeWidth="2" className="animate-pulse delay-500" filter="url(#glow-effect)" />
            <line x1="550" y1="150" x2="750" y2="250" stroke="url(#neural-grad)" strokeWidth="2" className="animate-pulse" filter="url(#glow-effect)" />
            <line x1="150" y1="100" x2="450" y2="300" stroke="url(#neural-grad)" strokeWidth="1" className="animate-pulse delay-1000" opacity="0.5" />
            
            {/* Neural nodes */}
            <circle cx="150" cy="100" r="8" fill="#FCD34D" className="animate-pulse" filter="url(#glow-effect)" />
            <circle cx="350" cy="200" r="10" fill="#F59E0B" className="animate-pulse delay-500" filter="url(#glow-effect)" />
            <circle cx="550" cy="150" r="8" fill="#FCD34D" className="animate-pulse delay-1000" filter="url(#glow-effect)" />
            <circle cx="750" cy="250" r="10" fill="#F59E0B" className="animate-pulse" filter="url(#glow-effect)" />
          </svg>
          
          {/* Glowing orbs */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
          
          {/* Tech grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#FCD34D08_1px,transparent_1px),linear-gradient(to_bottom,#FCD34D08_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          
          {/* Floating particles */}
          <div className="absolute top-20 left-20 w-3 h-3 bg-yellow-400 rounded-full animate-float blur-sm" />
          <div className="absolute top-40 right-32 w-2 h-2 bg-amber-500 rounded-full animate-float-delayed blur-sm" />
          <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-yellow-300 rounded-full animate-float blur-sm" />
          
          {/* Floating tech icons */}
          <Lightbulb className="absolute top-20 right-20 w-12 h-12 text-yellow-300/20 animate-float drop-shadow-[0_0_15px_rgba(253,224,71,0.3)]" />
          <Lightbulb className="absolute bottom-40 left-20 w-10 h-10 text-amber-300/20 animate-float-delayed drop-shadow-[0_0_15px_rgba(251,191,36,0.2)]" />
          <Zap className="absolute top-1/3 left-1/4 w-8 h-8 text-yellow-400/25 animate-float drop-shadow-[0_0_10px_rgba(250,204,21,0.3)]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 rounded-full border border-yellow-400/20 shadow-[0_0_20px_rgba(250,204,21,0.1)] mb-6">
              <Lightbulb className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-300">Who we are</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white leading-tight">
              We Provide the Best <span className="text-yellow-300 drop-shadow-[0_0_30px_rgba(250,204,21,0.5)]">Digital Marketing Services</span> for Small Business, Setting Creative Trends
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Leave the art of digital marketing to us and let the world see you. We Innovate. Design. Empower.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                icon: Target,
                title: "Transforming Ideas",
                desc: "It all starts with our digital marketing solutions which meet the road of innovation and design.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Zap,
                title: "Creativity Meets Technology",
                desc: "It all starts with our digital marketing solutions which meet the road of innovation and design.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Palette,
                title: "Crafting Solutions With Passion",
                desc: "Explore the rollercoaster of your success with a spark of artistic adventures",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: Stars,
                title: "Bomb features at fingertips",
                desc: "Embroider cool features into your business and fire up your existence with our expert guidance.",
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-yellow-400/50 backdrop-blur-sm bg-slate-900/80 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-yellow-500/20`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coding & Digital Marketing Mix Image */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative w-full aspect-square">
              {/* Glowing effect layers */}
              <div className="absolute inset-0 bg-gradient-radial from-yellow-300/30 via-purple-500/20 to-transparent blur-3xl animate-pulse" />
              <div className="absolute inset-[5%] bg-gradient-radial from-cyan-400/30 via-blue-500/20 to-transparent blur-2xl animate-pulse delay-500" />
              <div className="absolute inset-[10%] bg-gradient-radial from-orange-400/20 via-yellow-500/20 to-transparent blur-xl animate-pulse delay-1000" />
              
              {/* Light rays */}
              <div className="absolute inset-0">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-1 h-40 bg-gradient-to-t from-yellow-400/20 to-transparent origin-bottom"
                    style={{
                      transform: `rotate(${i * 22.5}deg) translateX(-50%)`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Main Image */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(250,204,21,0.4)] border-4 border-yellow-400/30 backdrop-blur-sm">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ecd994c6-0c82-4475-b7be-2bdb1150cf46/generated_images/modern-digital-illustration-showing-a-se-0723d0f5-20251029041920.jpg"
                    alt="Coding and Digital Marketing Integration"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 via-transparent to-purple-500/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compelling Business-Centric Solutions Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Modern Business Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black">
          {/* Business network visualization */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="business-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00BFA6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
              </linearGradient>
              <filter id="business-glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Network connections */}
            <line x1="100" y1="100" x2="300" y2="200" stroke="url(#business-grad)" strokeWidth="2" className="animate-pulse" filter="url(#business-glow)" />
            <line x1="300" y1="200" x2="500" y2="150" stroke="url(#business-grad)" strokeWidth="2" className="animate-pulse delay-500" filter="url(#business-glow)" />
            <line x1="500" y1="150" x2="700" y2="250" stroke="url(#business-grad)" strokeWidth="2" className="animate-pulse" filter="url(#business-glow)" />
            <circle cx="100" cy="100" r="8" fill="#00BFA6" className="animate-pulse" filter="url(#business-glow)" />
            <circle cx="300" cy="200" r="10" fill="#06B6D4" className="animate-pulse delay-500" filter="url(#business-glow)" />
            <circle cx="500" cy="150" r="8" fill="#00BFA6" className="animate-pulse delay-1000" filter="url(#business-glow)" />
          </svg>
          
          {/* Glowing orbs */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
          
          {/* Tech grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00BFA608_1px,transparent_1px),linear-gradient(to_bottom,#00BFA608_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          
          {/* Floating business icons */}
          <Building2 className="absolute top-20 right-20 w-12 h-12 text-accent/20 animate-float drop-shadow-[0_0_15px_rgba(0,191,166,0.3)]" />
          <Settings className="absolute bottom-40 left-20 w-10 h-10 text-cyan-400/20 animate-float-delayed drop-shadow-[0_0_15px_rgba(6,182,212,0.2)]" />
          <Network className="absolute top-1/3 left-1/4 w-8 h-8 text-accent/25 animate-float drop-shadow-[0_0_10px_rgba(0,191,166,0.3)]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 shadow-[0_0_20px_rgba(0,191,166,0.1)] mb-6">
              <Building2 className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Business Solutions</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white leading-tight">
              Compelling <span className="text-accent drop-shadow-[0_0_30px_rgba(0,191,166,0.5)]">Business-Centric Solutions</span> We Deliver
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Unlock operational excellence with our suite of intelligent management solutions designed to streamline every aspect of your business. From HR to fleet, assets to content — we deliver powerful tools to optimize, automate, and scale your operations effortlessly. As a trusted <span className="text-accent font-semibold">Software Development company India</span>, we build unique software that evolves with your business and delights customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: "CRM",
                desc: "Streamline customer relationships, boost sales, and enhance engagement with a custom CRM tailored to your business needs.",
                gradient: "from-cyan-500 to-blue-500"
              },
              {
                icon: ClipboardCheck,
                title: "Workforce Management",
                desc: "Optimize schedules, track productivity, and simplify tasks with a smart workforce management solution built for efficiency.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: UserCog,
                title: "Human Resource Management",
                desc: "Simplify hiring, onboarding, payroll, and performance tracking with a comprehensive HRM system tailored for your growing workforce.",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: Network,
                title: "Supply Chain Management",
                desc: "Enhance visibility, reduce costs, and optimize logistics with a smart supply chain solution that adapts to your operations.",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: Truck,
                title: "Fleet Management",
                desc: "Track vehicles, monitor performance, and improve route planning with a real-time fleet management system for better efficiency.",
                gradient: "from-blue-500 to-indigo-500"
              },
              {
                icon: Settings,
                title: "Operations Management",
                desc: "Streamline daily operations, boost productivity, and ensure process efficiency with an intelligent, integrated operations management platform.",
                gradient: "from-teal-500 to-cyan-500"
              },
              {
                icon: FolderKanban,
                title: "Asset Management",
                desc: "Gain 100% control of your physical and digital assets with a centralized system that facilitates tracking, maintenance, and ROI.",
                gradient: "from-violet-500 to-purple-500"
              },
              {
                icon: Archive,
                title: "Inventory Management",
                desc: "Maintain optimal stock levels, reduce waste, and improve order accuracy with a real-time inventory management system.",
                gradient: "from-amber-500 to-yellow-500"
              },
              {
                icon: FileText,
                title: "Content Management System",
                desc: "Manage, publish, and scale digital content easily with a secure, user-friendly CMS tailored to your brand's voice and goals.",
                gradient: "from-rose-500 to-pink-500"
              }
            ].map((solution, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50 backdrop-blur-sm bg-slate-900/80 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <CardContent className="p-6 relative z-10">
                  <div className="flex flex-col items-start gap-4">
                    <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-accent/20`}>
                      <solution.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {solution.desc}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-accent to-cyan-500 hover:from-accent/90 hover:to-cyan-600 text-white font-semibold text-lg h-14 px-8 group shadow-[0_0_30px_rgba(0,191,166,0.4)]">
              <Link href="/services">
                Explore All Solutions
                <MoveRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process - Enhanced Creative Background */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Tech Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00BFA608_1px,transparent_1px),linear-gradient(to_bottom,#00BFA608_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 border-4 border-accent/20 rounded-2xl rotate-12 animate-float" />
          <div className="absolute top-40 right-20 w-24 h-24 border-4 border-primary/20 rounded-full animate-float-delayed" />
          <div className="absolute bottom-32 left-1/4 w-40 h-40 border-4 border-accent/15 rotate-45 animate-float" />
          <div className="absolute bottom-20 right-1/3 w-28 h-28 border-4 border-primary/15 rounded-full animate-float-delayed" />
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
          
          {/* Circuit Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path d="M0,100 Q250,50 500,100 T1000,100" stroke="url(#circuit-gradient)" strokeWidth="2" fill="none" className="animate-pulse" />
            <path d="M0,200 Q250,150 500,200 T1000,200" stroke="url(#circuit-gradient)" strokeWidth="2" fill="none" className="animate-pulse delay-500" />
            <path d="M0,300 Q250,250 500,300 T1000,300" stroke="url(#circuit-gradient)" strokeWidth="2" fill="none" className="animate-pulse delay-1000" />
            <circle cx="250" cy="100" r="4" fill="var(--accent)" className="animate-pulse" />
            <circle cx="500" cy="200" r="4" fill="var(--primary)" className="animate-pulse delay-500" />
            <circle cx="750" cy="300" r="4" fill="var(--accent)" className="animate-pulse delay-1000" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-6 backdrop-blur-sm">
              <Target className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Our Process</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              From Concept to <span className="text-accent">Launch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology powered by modern tech stacks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Target, title: "Discover", desc: "Requirements & Strategy", step: "01", detail: "Market research & tech stack planning" },
              { icon: Palette, title: "Design", desc: "UI/UX & Prototyping", step: "02", detail: "Figma design & component systems" },
              { icon: Terminal, title: "Develop", desc: "Modern Tech Stack", step: "03", detail: "Next.js, React & TypeScript" },
              { icon: Zap, title: "Deploy", desc: "Cloud Infrastructure", step: "04", detail: "Vercel, AWS & CI/CD pipeline" },
              { icon: LineChart, title: "Optimize", desc: "Performance & Growth", step: "05", detail: "Analytics & A/B testing" }
            ].map((item, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50 backdrop-blur-sm bg-background/80">
                <div className="absolute top-0 right-0 text-8xl font-bold text-accent/5 group-hover:text-accent/10 transition-colors">
                  {item.step}
                </div>
                {/* Step Connector Line */}
                {index < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent/50 to-transparent z-20" />
                )}
                <CardContent className="p-6 relative z-10">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="mb-2 text-xs font-bold text-accent uppercase tracking-wider">{item.step}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
                  <p className="text-xs text-muted-foreground/70">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Modern Tech Showcase */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Holographic background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary/90 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,191,166,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00BFA610_1px,transparent_1px),linear-gradient(to_bottom,#00BFA610_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full border border-accent/40 mb-6 backdrop-blur-sm">
              <Stars className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">What We Build</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Powered by <span className="text-accent">Modern Technology</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Cutting-edge solutions with the latest frameworks and tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/50 overflow-hidden relative bg-slate-900/50 backdrop-blur-sm">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <CardContent className="p-8 relative z-10">
                  <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 group-hover:text-accent transition-colors text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {service.description}
                  </p>
                  
                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tech.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md border border-accent/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Link href="/services" className="text-accent font-medium text-sm inline-flex items-center group-hover:gap-2 transition-all">
                    Learn More 
                    <MoveRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-accent to-cyan-500 hover:from-accent/90 hover:to-cyan-600 text-lg h-14 px-8">
              <Link href="/services">
                Explore All Services <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section - Neon Glow */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent/50 to-primary">
          {/* Neon grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          {/* Glowing orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-accent/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/40 rounded-full blur-3xl animate-pulse delay-1000" />
          
          {/* Diagonal lines */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse delay-500" />
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Ready to Build the Future?<br />
            <span className="text-white drop-shadow-[0_0_30px_rgba(0,191,166,0.8)]">Let's Create Magic Together.</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Next.js. React. TypeScript. Cloud-native. Future-proof solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" variant="secondary" className="text-lg h-14 px-8 bg-white hover:bg-white/90 text-primary shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <Link href="/contact">
                Start Your Project <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg h-14 px-8 border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm">
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