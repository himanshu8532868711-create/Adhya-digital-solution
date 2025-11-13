"use client";

import { useState } from "react";
import { Briefcase, Upload, Loader2, CheckCircle, ChevronDown, ChevronUp, Home, Clock, BookOpen, Heart, Zap, Users, Trophy, Coffee } from "lucide-react";
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
import { toast } from "sonner";

// Comprehensive vacancies data
const vacancies = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    location: "Remote / Hybrid",
    type: "Full-time",
    department: "Engineering",
    experience: "5+ years",
    description: "We're seeking an experienced Full Stack Developer to build scalable web applications using modern technologies.",
    responsibilities: [
      "Design and develop full-stack web applications using React, Next.js, and Node.js",
      "Build RESTful APIs and integrate third-party services",
      "Write clean, maintainable, and well-documented code",
      "Collaborate with designers and product managers to implement features",
      "Optimize applications for maximum speed and scalability",
      "Mentor junior developers and conduct code reviews"
    ],
    expectations: [
      "5+ years of experience in full-stack development",
      "Strong proficiency in React, Next.js, TypeScript, and Node.js",
      "Experience with database systems (PostgreSQL, MongoDB)",
      "Knowledge of cloud platforms (AWS, Vercel, Azure)",
      "Excellent problem-solving and communication skills",
      "Bachelor's degree in Computer Science or equivalent experience"
    ],
    niceToHave: [
      "Experience with CI/CD pipelines and DevOps practices",
      "Knowledge of containerization (Docker, Kubernetes)",
      "Contributions to open-source projects"
    ]
  },
  {
    id: 2,
    title: "AI/ML Engineer",
    location: "Remote / On-site",
    type: "Full-time",
    department: "Engineering",
    experience: "3+ years",
    description: "Join our AI team to develop intelligent solutions using machine learning, computer vision, and generative AI technologies.",
    responsibilities: [
      "Develop and deploy machine learning models for various business applications",
      "Implement computer vision solutions using OpenCV and deep learning frameworks",
      "Build and train chatbots and conversational AI systems",
      "Work with generative AI technologies to create innovative solutions",
      "Optimize model performance and ensure scalability",
      "Collaborate with cross-functional teams to integrate AI solutions"
    ],
    expectations: [
      "3+ years of experience in AI/ML development",
      "Strong knowledge of Python, TensorFlow, PyTorch, and scikit-learn",
      "Experience with OpenCV, NLP, and generative AI models",
      "Understanding of MLOps and model deployment practices",
      "Strong mathematical and statistical background",
      "Master's degree in Computer Science, AI, or related field preferred"
    ],
    niceToHave: [
      "Experience with large language models (LLMs)",
      "Knowledge of reinforcement learning",
      "Published research in AI/ML conferences"
    ]
  },
  {
    id: 3,
    title: "Digital Marketing Specialist",
    location: "Remote / Hybrid",
    type: "Full-time",
    department: "Marketing",
    experience: "2+ years",
    description: "Drive growth and brand awareness through strategic digital marketing campaigns across multiple channels.",
    responsibilities: [
      "Develop and execute comprehensive digital marketing strategies",
      "Manage SEO/SEM campaigns and optimize for search rankings",
      "Create and manage social media content across platforms",
      "Analyze campaign performance using Google Analytics and other tools",
      "Manage PPC advertising campaigns (Google Ads, Meta Ads)",
      "Collaborate with content team to create engaging marketing materials"
    ],
    expectations: [
      "2+ years of experience in digital marketing",
      "Proficiency in SEO, SEM, and social media marketing",
      "Experience with Google Analytics, SEMrush, and HubSpot",
      "Strong analytical skills and data-driven mindset",
      "Excellent written and verbal communication skills",
      "Bachelor's degree in Marketing, Communications, or related field"
    ],
    niceToHave: [
      "Experience with marketing automation tools (HubSpot, Mailchimp)",
      "Knowledge of graphic design tools (Canva, Photoshop)",
      "Certifications in Google Ads or Facebook Blueprint"
    ]
  },
  {
    id: 4,
    title: "UI/UX Designer",
    location: "Remote / Hybrid",
    type: "Full-time",
    department: "Design",
    experience: "3+ years",
    description: "Create beautiful, intuitive user experiences for web and mobile applications with a focus on user-centered design.",
    responsibilities: [
      "Design user interfaces for web and mobile applications",
      "Conduct user research and usability testing",
      "Create wireframes, prototypes, and high-fidelity mockups",
      "Develop and maintain design systems and component libraries",
      "Collaborate with developers to ensure design implementation",
      "Stay updated with latest design trends and best practices"
    ],
    expectations: [
      "3+ years of experience in UI/UX design",
      "Expert proficiency in Figma, Sketch, or Adobe XD",
      "Strong portfolio demonstrating design thinking and problem-solving",
      "Understanding of responsive design and accessibility standards",
      "Experience with user research methodologies",
      "Bachelor's degree in Design, HCI, or related field"
    ],
    niceToHave: [
      "Experience with HTML/CSS and front-end frameworks",
      "Motion design and animation skills",
      "Knowledge of design systems and atomic design principles"
    ]
  },
  {
    id: 5,
    title: "Business Development Manager",
    location: "On-site / Hybrid",
    type: "Full-time",
    department: "Sales",
    experience: "4+ years",
    description: "Lead business growth initiatives, build client relationships, and identify new market opportunities.",
    responsibilities: [
      "Identify and pursue new business opportunities and partnerships",
      "Build and maintain strong client relationships",
      "Develop and present proposals and presentations to clients",
      "Negotiate contracts and close deals",
      "Collaborate with internal teams to ensure client satisfaction",
      "Track and report on sales metrics and business development KPIs"
    ],
    expectations: [
      "4+ years of experience in business development or sales",
      "Proven track record of meeting or exceeding sales targets",
      "Strong networking and relationship-building skills",
      "Experience with CRM tools (Salesforce, HubSpot)",
      "Excellent presentation and negotiation skills",
      "Bachelor's degree in Business, Marketing, or related field"
    ],
    niceToHave: [
      "Network in the technology or digital services industry",
      "Experience selling to enterprise clients",
      "Background in account management"
    ]
  },
  {
    id: 6,
    title: "Content Writer",
    location: "Remote",
    type: "Part-time",
    department: "Content",
    experience: "2+ years",
    description: "Create engaging, high-quality content that resonates with our audience across various digital channels.",
    responsibilities: [
      "Write clear, compelling copy for websites, blogs, social media, and marketing materials",
      "Research industry-related topics and stay current with trends",
      "Edit and proofread content to ensure quality and consistency",
      "Collaborate with marketing and design teams on content strategy",
      "Optimize content for SEO and user engagement",
      "Maintain brand voice and style guidelines across all content"
    ],
    expectations: [
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
  }
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    position: "General Application",
    experience: "",
    portfolio: "",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [expandedVacancy, setExpandedVacancy] = useState<number | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          position: formData.position,
          experience: formData.experience,
          location: formData.location,
          portfolioUrl: formData.portfolio || undefined,
          resumeUrl: resumeFile ? `Resume: ${resumeFile.name}` : undefined,
          message: formData.message || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      setIsSuccess(true);
      toast.success("Application submitted successfully!");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        position: "General Application",
        experience: "",
        portfolio: "",
        message: "",
      });
      setResumeFile(null);
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/10 to-background">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
          
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00bfa610_1px,transparent_1px),linear-gradient(to_bottom,#00bfa610_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full border border-accent/30 backdrop-blur-sm">
              <Briefcase className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Join Our Team</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
              Build Your <span className="text-accent drop-shadow-[0_0_15px_rgba(0,191,166,0.5)]">Career</span> With Us
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a team of passionate innovators shaping the future of digital experiences. We're always looking for talented individuals who share our passion.
            </p>
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/10 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full border border-accent/30 backdrop-blur-sm mb-4">
              <Heart className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Benefits & Perks</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Why Join <span className="text-accent">Aadhya digital Solution</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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

      {/* Open Positions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full border border-accent/30 backdrop-blur-sm mb-4">
              <Briefcase className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Open Positions</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Current <span className="text-accent">Vacancies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our open positions and find your perfect role
            </p>
          </div>

          <div className="space-y-4">
            {vacancies.map((vacancy) => (
              <Card 
                key={vacancy.id} 
                className="border-2 hover:border-accent/50 transition-all cursor-pointer"
                onClick={() => setExpandedVacancy(expandedVacancy === vacancy.id ? null : vacancy.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 flex flex-wrap items-center gap-2">
                        {vacancy.title}
                        <span className="text-sm font-normal text-accent bg-accent/10 px-3 py-1 rounded-full">
                          {vacancy.type}
                        </span>
                      </CardTitle>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          📍 {vacancy.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          💼 {vacancy.experience}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          🏢 {vacancy.department}
                        </span>
                      </div>
                      <p className="text-muted-foreground">
                        {vacancy.description}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="shrink-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedVacancy(expandedVacancy === vacancy.id ? null : vacancy.id);
                      }}
                    >
                      {expandedVacancy === vacancy.id ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </Button>
                  </div>
                </CardHeader>

                {expandedVacancy === vacancy.id && (
                  <CardContent className="pt-0 space-y-6 animate-in slide-in-from-top-2">
                    {/* Key Responsibilities */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-accent">
                        🎯 Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {vacancy.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-accent mt-1">•</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expectations/Requirements */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-accent">
                        ✅ Requirements & Expectations
                      </h4>
                      <ul className="space-y-2">
                        {vacancy.expectations.map((expectation, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-accent mt-1">•</span>
                            <span>{expectation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Nice to Have */}
                    {vacancy.niceToHave && vacancy.niceToHave.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-accent">
                          ⭐ Nice to Have
                        </h4>
                        <ul className="space-y-2">
                          {vacancy.niceToHave.map((nice, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-muted-foreground mt-1">○</span>
                              <span>{nice}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Apply Button */}
                    <div className="pt-4">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          setFormData({ ...formData, position: vacancy.title });
                          document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full sm:w-auto bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90"
                      >
                        Apply for this Position
                        <Briefcase className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 shadow-2xl">
            <CardHeader className="text-center space-y-2 pb-8">
              <CardTitle className="text-3xl font-bold">Submit Your Application</CardTitle>
              <p className="text-muted-foreground">
                Fill in your details and we'll get back to you within 48 hours
              </p>
            </CardHeader>
            
            <CardContent className="p-8">
              {isSuccess ? (
                <div className="text-center py-12 space-y-4">
                  <div className="mx-auto w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-10 w-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-500">Application Submitted!</h3>
                  <p className="text-muted-foreground">
                    Thank you for your interest. We'll review your application and contact you soon.
                  </p>
                  <Button 
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                    className="mt-4"
                  >
                    Submit Another Application
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base">
                        Email ID <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 text-base"
                      />
                    </div>
                  </div>

                  {/* Phone and Position */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position" className="text-base">
                        Position Applying For <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={formData.position}
                        onValueChange={(value) => setFormData({ ...formData, position: value })}
                        required
                      >
                        <SelectTrigger id="position" className="h-12 text-base">
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="General Application">General Application</SelectItem>
                          {vacancies.map((vacancy) => (
                            <SelectItem key={vacancy.id} value={vacancy.title}>
                              {vacancy.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Location and Experience */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-base">
                        Location <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="location"
                        type="text"
                        placeholder="City, State, Country"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="h-12 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience" className="text-base">
                        Years of Experience <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="experience"
                        type="text"
                        placeholder="e.g., 3 years"
                        required
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="h-12 text-base"
                      />
                    </div>
                  </div>

                  {/* Portfolio URL */}
                  <div className="space-y-2">
                    <Label htmlFor="portfolio" className="text-base">
                      Portfolio / LinkedIn URL
                    </Label>
                    <Input
                      id="portfolio"
                      type="url"
                      placeholder="https://..."
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      className="h-12 text-base"
                    />
                  </div>

                  {/* Resume Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="resume" className="text-base">
                      Resume / CV <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                        onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                        className="h-12 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-accent file:text-accent-foreground hover:file:bg-accent/90"
                      />
                    </div>
                    {resumeFile && (
                      <p className="text-sm text-accent flex items-center gap-2">
                        <Upload className="h-4 w-4" />
                        {resumeFile.name}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      Accepted formats: PDF, DOC, DOCX (Max 5MB)
                    </p>
                  </div>

                  {/* Cover Letter */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base">
                      Cover Letter / Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us why you'd be a great fit for our team..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="text-base"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Briefcase className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}