"use client";

import Link from "next/link";
import { Check, Zap, Rocket, Crown, Code, Database, Cloud, Cpu, Server, Binary, Terminal, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "Inr 34,999",
      period: "/Year",
      description: "Perfect for startups and Grow businesses launching their digital presence",
      features: [
        "5-Page Responsive Website",
        "Mobile-First Design",
        "Basic SEO Optimization",
        "Contact Form Integration",
        "Social Media Integration",
        "1 Month Free Support",
        "SSL Certificate",
        "Hosting Setup Assistance"
      ],
      color: "from-blue-500 to-cyan-500",
      popular: false,
      cta: "Get Started",
      gradient: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
    },
    {
      name: "Professional",
      icon: Rocket,
      price: "Inr 64,999",
      period: "/Year",
      description: "Ideal for growing businesses seeking advanced features and scalability",
      features: [
        "15-Page Custom Website",
        "Advanced UI/UX Design",
        "CMS Integration (WordPress/Custom)",
        "E-commerce Functionality",
        "Advanced SEO & Analytics",
        "API Integration",
        "3 Months Priority Support",
        "Performance Optimization",
        "Database Integration",
        "Custom Dashboard"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true,
      cta: "Most Popular",
      gradient: "bg-gradient-to-br from-purple-500/10 to-pink-500/10"
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "Custom",
      period: "/project",
      description: "Comprehensive solutions for large-scale applications and complex requirements",
      features: [
        "Unlimited Pages & Features",
        "Next.js/React Architecture",
        "Microservices Architecture",
        "Cloud Infrastructure (AWS/Azure)",
        "Advanced Security Features",
        "AI/ML Integration",
        "Real-time Data Processing",
        "DevOps & CI/CD Pipeline",
        "Dedicated Project Manager",
        "24/7 Premium Support",
        "Scalable Infrastructure",
        "Custom Integrations"
      ],
      color: "from-orange-500 to-red-500",
      popular: false,
      cta: "Contact Sales",
      gradient: "bg-gradient-to-br from-orange-500/10 to-red-500/10"
    }
  ];

  const addons = [
    {
      icon: Code,
      title: "Custom Features",
      description: "Tailored functionality to meet your specific business needs",
      price: "From Inr 15000"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Scalable database architecture with migration support",
      price: "From Inr 18000"
    },
    {
      icon: Cloud,
      title: "Cloud Deployment",
      description: "AWS, Vercel, or Azure setup with auto-scaling",
      price: "From Inr 24000"
    },
    {
      icon: Server,
      title: "API Development",
      description: "RESTful/GraphQL API with documentation",
      price: "From Inr 60000"
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero Section - Double Color Gradient with Tech Elements */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
        {/* Double Color Background - Black to Dark Slate */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-slate-900">
          {/* Glowing orbs */}
          <div className="absolute top-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          
          {/* Matrix-style falling code */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute text-accent/40 font-mono text-xs animate-float"
                style={{
                  left: `${(i * 7) % 100}%`,
                  top: `${-20 + (i * 10) % 120}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${3 + (i % 3)}s`
                }}
              >
                {[...Array(20)].map((_, j) => (
                  <div key={j}>{Math.random() > 0.5 ? '1' : '0'}</div>
                ))}
              </div>
            ))}
          </div>
          
          {/* Tech icons floating */}
          <Database className="absolute top-20 left-[10%] w-8 h-8 text-accent/30 animate-float drop-shadow-[0_0_10px_rgba(0,191,166,0.5)]" />
          <Cloud className="absolute top-40 right-[15%] w-10 h-10 text-accent/40 animate-float-delayed drop-shadow-[0_0_15px_rgba(0,191,166,0.5)]" />
          <Cpu className="absolute bottom-32 left-[20%] w-7 h-7 text-cyan-400/30 animate-float drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
          <Server className="absolute bottom-20 right-[25%] w-9 h-9 text-accent/30 animate-float-delayed drop-shadow-[0_0_10px_rgba(0,191,166,0.5)]" />
          <Binary className="absolute top-1/2 left-[5%] w-8 h-8 text-cyan-400/40 animate-float drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
          <Terminal className="absolute top-1/3 right-[10%] w-10 h-10 text-accent/35 animate-float-delayed drop-shadow-[0_0_12px_rgba(0,191,166,0.5)]" />
          
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00BFA620_1px,transparent_1px),linear-gradient(to_bottom,#00BFA620_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full border border-accent/40 backdrop-blur-sm shadow-[0_0_20px_rgba(0,191,166,0.3)]">
              <Box className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Transparent Pricing</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_0_30px_rgba(0,191,166,0.3)]">
              Choose Your <span className="text-accent drop-shadow-[0_0_30px_rgba(0,191,166,0.8)]">Digital Future</span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Flexible pricing plans powered by cutting-edge technology. From startups to enterprise, we've got you covered with Next.js, React, and Cloud solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards - Double Color Gradient Background */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Double Color Background - Slate to Dark with Accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
          {/* Glowing accent orbs */}
          <div className="absolute top-40 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-40 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          
          {/* Code snippets */}
          <div className="absolute top-20 left-10 text-xs font-mono text-accent/15 animate-float">
            <code className="drop-shadow-[0_0_10px_rgba(0,191,166,0.3)]">const app = () =&gt; &#123;</code><br/>
            <code className="drop-shadow-[0_0_10px_rgba(0,191,166,0.3)]">&nbsp;&nbsp;return &lt;Website /&gt;</code><br/>
            <code className="drop-shadow-[0_0_10px_rgba(0,191,166,0.3)]">&#125;</code>
          </div>
          <div className="absolute top-1/2 right-20 text-xs font-mono text-cyan-400/15 animate-float-delayed">
            <code className="drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">function build() &#123;</code><br/>
            <code className="drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">&nbsp;&nbsp;deploy();</code><br/>
            <code className="drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">&#125;</code>
          </div>
          <div className="absolute bottom-32 left-1/4 text-xs font-mono text-accent/15 animate-float">
            <code className="drop-shadow-[0_0_10px_rgba(0,191,166,0.3)]">&lt;Component /&gt;</code>
          </div>
          
          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00BFA608_1px,transparent_1px),linear-gradient(to_bottom,#00BFA608_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          {/* Floating shapes */}
          <div className="absolute top-40 right-1/4 w-32 h-32 border-2 border-accent/10 rounded-2xl rotate-12 animate-float shadow-[0_0_20px_rgba(0,191,166,0.2)]" />
          <div className="absolute bottom-40 left-1/3 w-24 h-24 border-2 border-cyan-400/10 rounded-full animate-float-delayed shadow-[0_0_20px_rgba(6,182,212,0.2)]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <Card 
                  key={index} 
                  className={`relative overflow-hidden border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-accent shadow-lg shadow-accent/20 scale-105' 
                      : 'hover:border-accent/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-br from-accent to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg shadow-[0_0_20px_rgba(0,191,166,0.5)]">
                      POPULAR
                    </div>
                  )}
                  
                  <div className={`absolute inset-0 ${plan.gradient} opacity-50`} />
                  
                  <CardHeader className="relative z-10">
                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-sm mt-2">
                      {plan.description}
                    </CardDescription>
                    <div className="mt-6">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 bg-gradient-to-br ${plan.color} rounded-full p-1 text-white`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      asChild 
                      className={`w-full h-12 text-base ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-accent to-cyan-500 hover:from-accent/90 hover:to-cyan-600 shadow-[0_0_20px_rgba(0,191,166,0.3)]' 
                          : ''
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      <Link href="/contact">
                        {plan.cta}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons Section - Double Color Gradient Background */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Double Color Background - Dark Slate to Black with Tech Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-slate-900">
          {/* Circuit board pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="circuit" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00BFA6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <line x1="0" y1="100" x2="200" y2="100" stroke="url(#circuit)" strokeWidth="2" />
            <line x1="200" y1="100" x2="200" y2="200" stroke="url(#circuit)" strokeWidth="2" />
            <line x1="200" y1="200" x2="400" y2="200" stroke="url(#circuit)" strokeWidth="2" />
            <circle cx="200" cy="100" r="4" fill="#00BFA6" className="drop-shadow-[0_0_10px_rgba(0,191,166,0.8)]" />
            <circle cx="200" cy="200" r="4" fill="#06B6D4" className="drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
            <circle cx="400" cy="200" r="4" fill="#00BFA6" className="drop-shadow-[0_0_10px_rgba(0,191,166,0.8)]" />
          </svg>
          
          {/* Floating orbs */}
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px] bg-gradient-to-br from-cyan-500/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
          
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00BFA610_1px,transparent_1px),linear-gradient(to_bottom,#00BFA610_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full border border-accent/40 backdrop-blur-sm mb-6 shadow-[0_0_20px_rgba(0,191,166,0.3)]">
              <Code className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Add-ons & Extensions</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Enhance Your <span className="text-accent drop-shadow-[0_0_30px_rgba(0,191,166,0.8)]">Tech Stack</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powerful add-ons to supercharge your digital infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, index) => {
              const Icon = addon.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50 backdrop-blur-sm bg-background/80">
                  <CardContent className="p-6">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-accent/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,191,166,0.2)]">
                      <Icon className="h-7 w-7 text-accent drop-shadow-[0_0_10px_rgba(0,191,166,0.5)]" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{addon.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{addon.description}</p>
                    <p className="text-lg font-bold text-accent">{addon.price}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section - Double Color Gradient */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Double Color Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
          <div className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00BFA608_1px,transparent_1px),linear-gradient(to_bottom,#00BFA608_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Frequently Asked <span className="text-accent drop-shadow-[0_0_30px_rgba(0,191,166,0.8)]">Questions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What technologies do you use?",
                a: "We use modern tech stacks including Next.js 15, React 19, TypeScript, Tailwind CSS, Node.js, and cloud platforms like AWS and Vercel."
              },
              {
                q: "Can I upgrade or downgrade my plan?",
                a: "Absolutely! You can change your plan at any time to match your growing needs."
              },
              {
                q: "Do you offer custom development?",
                a: "Yes, our Enterprise plan includes fully custom solutions tailored to your specific requirements."
              },
              {
                q: "What's included in support?",
                a: "Support includes bug fixes, technical assistance, and guidance. Premium plans get priority response times and dedicated support channels."
              },
              {
                q: "How long does development take?",
                a: "Starter projects typically take 2-3 weeks, Professional 4-8 weeks, and Enterprise timelines are customized based on scope."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-2 hover:border-accent/50 transition-colors backdrop-blur-sm bg-background/80">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Double Color with Neon Glow */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Double Color Background - Black to Accent Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-primary">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-accent/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-cyan-500/40 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Ready to Build Something <span className="text-accent drop-shadow-[0_0_30px_rgba(0,191,166,0.8)]">Amazing?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Let's discuss your project and find the perfect plan for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" variant="secondary" className="text-lg h-14 px-8 bg-white hover:bg-white/90 text-primary shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <Link href="/contact">
                Get Free Consultation
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