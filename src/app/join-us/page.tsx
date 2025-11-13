"use client";

import { useState } from "react";
import { Home, Clock, BookOpen, Heart, Zap, Users, Trophy, Coffee, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export default function JoinUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [expandedPosition, setExpandedPosition] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData, file);
    alert("Application submitted successfully! We'll get back to you soon.");
  };

  const perks = [
    {
      icon: Home,
      title: "Remote Work",
      description: "Work from anywhere in the world. We believe in flexibility and trust."
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Choose your own working hours that fit your lifestyle best."
    },
    {
      icon: BookOpen,
      title: "Learning & Growth",
      description: "Access to courses, conferences, and continuous learning opportunities."
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Comprehensive health insurance for you and your family."
    },
    {
      icon: Zap,
      title: "Latest Tech",
      description: "Work with cutting-edge tools and technologies."
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Collaborate with talented and passionate professionals."
    },
    {
      icon: Trophy,
      title: "Performance Bonus",
      description: "Rewarding performance with competitive bonuses."
    },
    {
      icon: Coffee,
      title: "Fun Culture",
      description: "Team outings, celebrations, and a positive work environment."
    }
  ];

  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      description: "We're looking for an experienced Full Stack Developer to join our engineering team and help build scalable web applications.",
      responsibilities: [
        "Design, develop, and maintain full-stack web applications using modern technologies",
        "Collaborate with cross-functional teams to define, design, and ship new features",
        "Write clean, maintainable, and efficient code following best practices",
        "Optimize applications for maximum speed and scalability",
        "Troubleshoot and debug applications to ensure optimal performance",
        "Mentor junior developers and conduct code reviews"
      ],
      requirements: [
        "5+ years of experience in full-stack web development",
        "Proficiency in React, Next.js, Node.js, and TypeScript",
        "Strong understanding of RESTful APIs and database design (SQL/NoSQL)",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Excellent problem-solving skills and attention to detail",
        "Strong communication and teamwork abilities"
      ],
      niceToHave: [
        "Experience with CI/CD pipelines and DevOps practices",
        "Knowledge of containerization (Docker, Kubernetes)",
        "Contributions to open-source projects"
      ]
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      type: "Full-time",
      location: "Remote",
      description: "Join our creative team as a UI/UX Designer to craft beautiful, intuitive user experiences that delight our clients.",
      responsibilities: [
        "Create user-centered designs by understanding business requirements and user feedback",
        "Design wireframes, prototypes, and high-fidelity mockups for web and mobile applications",
        "Develop and maintain design systems and component libraries",
        "Collaborate with developers to ensure accurate implementation of designs",
        "Conduct user research, usability testing, and analyze user behavior",
        "Stay up-to-date with the latest design trends and best practices"
      ],
      requirements: [
        "3+ years of experience in UI/UX design",
        "Proficiency in Figma, Adobe XD, or similar design tools",
        "Strong portfolio showcasing web and mobile design projects",
        "Understanding of responsive design and accessibility standards",
        "Excellent visual design skills with attention to typography, color, and layout",
        "Ability to communicate design decisions effectively"
      ],
      niceToHave: [
        "Experience with HTML/CSS and front-end frameworks",
        "Motion design and animation skills",
        "Knowledge of user research methodologies"
      ]
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      type: "Full-time",
      location: "Remote",
      description: "We're seeking a data-driven Digital Marketing Specialist to develop and execute marketing strategies that drive growth.",
      responsibilities: [
        "Plan and execute digital marketing campaigns across multiple channels (SEO, SEM, social media, email)",
        "Analyze campaign performance and provide actionable insights for optimization",
        "Manage social media accounts and create engaging content",
        "Conduct keyword research and implement SEO strategies",
        "Monitor and report on website analytics and KPIs",
        "Collaborate with content team to create marketing materials"
      ],
      requirements: [
        "3+ years of experience in digital marketing",
        "Proven track record of successful marketing campaigns",
        "Strong knowledge of SEO, Google Ads, and social media advertising",
        "Proficiency in Google Analytics, SEMrush, or similar tools",
        "Excellent written and verbal communication skills",
        "Data-driven mindset with strong analytical abilities"
      ],
      niceToHave: [
        "Experience with marketing automation tools (HubSpot, Mailchimp)",
        "Knowledge of graphic design tools (Canva, Photoshop)",
        "Certifications in Google Ads or Facebook Blueprint"
      ]
    },
    {
      title: "Content Writer",
      department: "Content",
      type: "Part-time",
      location: "Remote",
      description: "Looking for a creative Content Writer to produce engaging, high-quality content that resonates with our audience.",
      responsibilities: [
        "Write clear, compelling copy for websites, blogs, social media, and marketing materials",
        "Research industry-related topics and stay current with trends",
        "Edit and proofread content to ensure quality and consistency",
        "Collaborate with marketing and design teams on content strategy",
        "Optimize content for SEO and user engagement",
        "Maintain brand voice and style guidelines across all content"
      ],
      requirements: [
        "2+ years of professional writing experience",
        "Excellent writing, editing, and proofreading skills",
        "Strong research skills and ability to grasp technical concepts",
        "Portfolio of published work demonstrating writing versatility",
        "Understanding of SEO best practices",
        "Self-motivated and able to meet deadlines"
      ],
      niceToHave: [
        "Experience in tech or digital marketing industry",
        "Knowledge of content management systems (WordPress, etc.)",
        "Basic understanding of HTML and web publishing"
      ]
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      type: "Full-time",
      location: "Hybrid",
      description: "Join our sales team as a Business Development Manager to identify new opportunities and build lasting client relationships.",
      responsibilities: [
        "Identify and pursue new business opportunities through research and networking",
        "Build and maintain strong relationships with clients and partners",
        "Develop and deliver compelling sales presentations and proposals",
        "Negotiate contracts and close deals to meet sales targets",
        "Collaborate with internal teams to ensure client satisfaction",
        "Track and report on sales metrics and pipeline activities"
      ],
      requirements: [
        "4+ years of experience in business development or sales",
        "Proven track record of meeting or exceeding sales targets",
        "Strong understanding of digital services and technology solutions",
        "Excellent communication, negotiation, and presentation skills",
        "Self-motivated with strong relationship-building abilities",
        "Experience with CRM tools (Salesforce, HubSpot, etc.)"
      ],
      niceToHave: [
        "Network in the technology or digital services industry",
        "Experience selling to enterprise clients",
        "Background in account management"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Join Our <span className="text-accent">Amazing Team</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of a creative, innovative team that's shaping the future of digital experiences.
            We're always looking for talented individuals who share our passion.
          </p>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Join Hum Digital Studio?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We offer more than just a job – we offer a career with growth, flexibility, and purpose
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => {
              const Icon = perk.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/50">
                  <CardContent className="p-6 text-center">
                    <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{perk.title}</h3>
                    <p className="text-sm text-muted-foreground">{perk.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find your perfect role and join our growing team
            </p>
          </div>

          <div className="space-y-6 mb-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="cursor-pointer" onClick={() => setExpandedPosition(expandedPosition === index ? null : index)}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <div className="flex items-center gap-1">
                          <span className="text-muted-foreground">Department:</span>
                          <span className="font-medium">{position.department}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-muted-foreground">•</span>
                          <span className="font-medium">{position.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-muted-foreground">•</span>
                          <span className="font-medium">{position.location}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      {expandedPosition === index ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
                
                {expandedPosition === index && (
                  <CardContent className="space-y-6 pt-0">
                    <p className="text-muted-foreground">{position.description}</p>
                    
                    <div>
                      <h4 className="font-bold text-lg mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((resp, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span className="text-muted-foreground">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span className="text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg mb-3">Nice to Have:</h4>
                      <ul className="space-y-2">
                        {position.niceToHave.map((nice, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-muted-foreground mt-1">○</span>
                            <span className="text-muted-foreground">{nice}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      className="w-full bg-accent hover:bg-accent/90"
                      onClick={() => {
                        // Scroll to application form
                        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                        // Pre-select the position in the form
                        setFormData({ ...formData, position: position.title });
                      }}
                    >
                      Apply for this Position
                    </Button>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Apply Now</h2>
            <p className="text-muted-foreground text-lg">
              Fill out the form below and we'll get back to you soon
            </p>
          </div>

          <Card>
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position *</Label>
                    <Select
                      value={formData.position}
                      onValueChange={(value) => setFormData({ ...formData, position: value })}
                    >
                      <SelectTrigger id="position">
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Senior Full Stack Developer">Senior Full Stack Developer</SelectItem>
                        <SelectItem value="UI/UX Designer">UI/UX Designer</SelectItem>
                        <SelectItem value="Digital Marketing Specialist">Digital Marketing Specialist</SelectItem>
                        <SelectItem value="Content Writer">Content Writer</SelectItem>
                        <SelectItem value="Business Development Manager">Business Development Manager</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience *</Label>
                    <Input
                      id="experience"
                      type="text"
                      placeholder="e.g., 3 years"
                      required
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio/LinkedIn URL</Label>
                    <Input
                      id="portfolio"
                      type="url"
                      placeholder="https://..."
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume">Upload Resume (PDF) *</Label>
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="cursor-pointer"
                  />
                  <p className="text-xs text-muted-foreground">
                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Cover Letter / Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us why you'd be a great fit for our team..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}