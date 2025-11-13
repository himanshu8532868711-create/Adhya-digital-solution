"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { 
  LogOut, 
  FileText, 
  FolderKanban, 
  Users, 
  MessageSquare, 
  Briefcase,
  Star,
  Mail,
  BarChart3,
  TrendingUp,
  Sparkles,
  Target,
  Zap,
  Code,
  Database,
  Cloud,
  Cpu,
  Server,
  Terminal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { authClient, useSession } from "@/lib/auth-client";
import { toast } from "sonner";

interface Stats {
  blogPosts: number;
  portfolioItems: number;
  testimonials: number;
  teamMembers: number;
  contactSubmissions: number;
  careerApplications: number;
}

interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  status: string;
  createdAt: string;
}

interface CareerApplication {
  id: number;
  name: string;
  email: string;
  position: string;
  status: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState<Stats>({
    blogPosts: 0,
    portfolioItems: 0,
    testimonials: 0,
    teamMembers: 0,
    contactSubmissions: 0,
    careerApplications: 0,
  });
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [careerApplications, setCareerApplications] = useState<CareerApplication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  useEffect(() => {
    if (session?.user) {
      fetchData();
    }
  }, [session]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("bearer_token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      // Fetch all stats
      const [
        blogRes,
        portfolioRes,
        testimonialsRes,
        teamRes,
        contactRes,
        careersRes,
      ] = await Promise.all([
        fetch("/api/blog", { headers }),
        fetch("/api/portfolio", { headers }),
        fetch("/api/testimonials", { headers }),
        fetch("/api/team", { headers }),
        fetch("/api/contact", { headers }),
        fetch("/api/careers", { headers }),
      ]);

      const [
        blogData,
        portfolioData,
        testimonialsData,
        teamData,
        contactData,
        careersData,
      ] = await Promise.all([
        blogRes.json(),
        portfolioRes.json(),
        testimonialsRes.json(),
        teamRes.json(),
        contactRes.json(),
        careersRes.json(),
      ]);

      setStats({
        blogPosts: blogData.length,
        portfolioItems: portfolioData.length,
        testimonials: testimonialsData.length,
        teamMembers: teamData.length,
        contactSubmissions: contactData.length,
        careerApplications: careersData.length,
      });

      setContactSubmissions(contactData.slice(0, 5));
      setCareerApplications(careersData.slice(0, 5));

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to load dashboard data");
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    const token = localStorage.getItem("bearer_token");
    const { error } = await authClient.signOut({
      fetchOptions: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
    
    if (error?.code) {
      toast.error(error.code);
    } else {
      localStorage.removeItem("bearer_token");
      router.push("/");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400";
      case "contacted":
      case "reviewing":
        return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400";
      case "resolved":
      case "accepted":
        return "bg-green-500/10 text-green-600 dark:text-green-400";
      case "rejected":
        return "bg-red-500/10 text-red-600 dark:text-red-400";
      default:
        return "bg-gray-500/10 text-gray-600 dark:text-gray-400";
    }
  };

  const handleStatusUpdate = async (type: "contact" | "career", id: number, newStatus: string) => {
    try {
      const token = localStorage.getItem("bearer_token");
      const endpoint = type === "contact" ? "/api/contact" : "/api/careers";
      
      const response = await fetch(`${endpoint}?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        toast.success("Status updated successfully");
        fetchData(); // Refresh data
      } else {
        toast.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("An error occurred");
    }
  };

  if (isPending || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!session?.user) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground mt-1">
                Welcome back, {session.user.name}!
              </p>
              <p className="text-sm text-accent mt-1 font-medium">
                "Innovating Digital Excellence Through Modern Technology"
              </p>
            </div>
            <Button onClick={handleSignOut} variant="outline">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>

          {/* Who We Are Section - Tech Background */}
          <section className="relative mb-12 overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary/90 to-slate-900">
              {/* Matrix-style grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#00BFA620_1px,transparent_1px),linear-gradient(to_bottom,#00BFA620_1px,transparent_1px)] bg-[size:3rem_3rem] animate-pulse opacity-30" />
              
              {/* Floating tech icons */}
              <Database className="absolute top-8 left-[10%] w-6 h-6 text-accent/20 animate-float" />
              <Cloud className="absolute top-12 right-[15%] w-8 h-8 text-accent/30 animate-float-delayed" />
              <Cpu className="absolute bottom-8 left-[20%] w-5 h-5 text-accent/25 animate-float" />
              <Server className="absolute bottom-12 right-[25%] w-7 h-7 text-accent/20 animate-float-delayed" />
              <Terminal className="absolute top-1/2 right-[10%] w-8 h-8 text-accent/25 animate-float" />
              <Code className="absolute top-1/3 left-[8%] w-6 h-6 text-accent/30 animate-float-delayed" />
              
              {/* Glowing orbs */}
              <div className="absolute top-10 right-8 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-10 left-8 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
              
              {/* Digital particles */}
              <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-accent/30 rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10 p-8 md:p-12">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full border border-accent/40 backdrop-blur-sm mb-6">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-accent">Who We Are</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                  Empowering Businesses with <span className="text-accent">Modern Technology</span>
                </h2>
                
                <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                  At Hum Digital Studio, we blend creativity with cutting-edge technology to deliver exceptional digital experiences. From Next.js and React to Cloud Infrastructure and AI Integration, we transform ideas into scalable, high-performance solutions.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-5 w-5 text-accent" />
                      <span className="text-2xl font-bold text-accent">150+</span>
                    </div>
                    <p className="text-xs text-gray-300">Projects Delivered</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-accent" />
                      <span className="text-2xl font-bold text-accent">80+</span>
                    </div>
                    <p className="text-xs text-gray-300">Happy Clients</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-5 w-5 text-accent" />
                      <span className="text-2xl font-bold text-accent">5+</span>
                    </div>
                    <p className="text-xs text-gray-300">Years Experience</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="h-5 w-5 text-accent" />
                      <span className="text-2xl font-bold text-accent">24/7</span>
                    </div>
                    <p className="text-xs text-gray-300">Support Available</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.blogPosts}</div>
                <p className="text-xs text-muted-foreground">
                  Total published articles
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Portfolio Items</CardTitle>
                <FolderKanban className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.portfolioItems}</div>
                <p className="text-xs text-muted-foreground">
                  Showcased projects
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Testimonials</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.testimonials}</div>
                <p className="text-xs text-muted-foreground">
                  Client reviews
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Team Members</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.teamMembers}</div>
                <p className="text-xs text-muted-foreground">
                  Active team members
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Contact Submissions</CardTitle>
                <Mail className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.contactSubmissions}</div>
                <p className="text-xs text-muted-foreground">
                  Total inquiries
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Career Applications</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.careerApplications}</div>
                <p className="text-xs text-muted-foreground">
                  Job applications
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Content Management */}
          <Tabs defaultValue="contact" className="space-y-4">
            <TabsList>
              <TabsTrigger value="contact">Contact Submissions</TabsTrigger>
              <TabsTrigger value="careers">Career Applications</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="contact" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Recent Contact Submissions
                  </CardTitle>
                  <CardDescription>
                    Manage and respond to customer inquiries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contactSubmissions.length === 0 ? (
                      <p className="text-center text-muted-foreground py-8">
                        No contact submissions yet
                      </p>
                    ) : (
                      contactSubmissions.map((submission) => (
                        <div
                          key={submission.id}
                          className="flex flex-col gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold">{submission.name}</h3>
                                <Badge className={getStatusColor(submission.status)}>
                                  {submission.status}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{submission.email}</p>
                              {submission.phone && (
                                <p className="text-sm text-muted-foreground">{submission.phone}</p>
                              )}
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {new Date(submission.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-sm">{submission.message}</p>
                          <div className="flex gap-2">
                            {submission.status === "new" && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleStatusUpdate("contact", submission.id, "contacted")}
                              >
                                Mark as Contacted
                              </Button>
                            )}
                            {submission.status === "contacted" && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleStatusUpdate("contact", submission.id, "resolved")}
                              >
                                Mark as Resolved
                              </Button>
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="careers" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Recent Career Applications
                  </CardTitle>
                  <CardDescription>
                    Review and manage job applications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {careerApplications.length === 0 ? (
                      <p className="text-center text-muted-foreground py-8">
                        No career applications yet
                      </p>
                    ) : (
                      careerApplications.map((application) => (
                        <div
                          key={application.id}
                          className="flex flex-col gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold">{application.name}</h3>
                                <Badge className={getStatusColor(application.status)}>
                                  {application.status}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{application.email}</p>
                              <p className="text-sm font-medium text-accent mt-1">
                                Position: {application.position}
                              </p>
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {new Date(application.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            {application.status === "new" && (
                              <>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleStatusUpdate("career", application.id, "reviewing")}
                                >
                                  Review
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-green-600 hover:text-green-600"
                                  onClick={() => handleStatusUpdate("career", application.id, "accepted")}
                                >
                                  Accept
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-red-600 hover:text-red-600"
                                  onClick={() => handleStatusUpdate("career", application.id, "rejected")}
                                >
                                  Reject
                                </Button>
                              </>
                            )}
                            {application.status === "reviewing" && (
                              <>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-green-600 hover:text-green-600"
                                  onClick={() => handleStatusUpdate("career", application.id, "accepted")}
                                >
                                  Accept
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-red-600 hover:text-red-600"
                                  onClick={() => handleStatusUpdate("career", application.id, "rejected")}
                                >
                                  Reject
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Content Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Blog Posts</span>
                        <span className="font-bold">{stats.blogPosts}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Portfolio Items</span>
                        <span className="font-bold">{stats.portfolioItems}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Testimonials</span>
                        <span className="font-bold">{stats.testimonials}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Team Members</span>
                        <span className="font-bold">{stats.teamMembers}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Engagement Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Total Inquiries</span>
                        <span className="font-bold">{stats.contactSubmissions}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Job Applications</span>
                        <span className="font-bold">{stats.careerApplications}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">New Inquiries</span>
                        <span className="font-bold text-accent">
                          {contactSubmissions.filter(s => s.status === "new").length}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Pending Applications</span>
                        <span className="font-bold text-accent">
                          {careerApplications.filter(a => a.status === "new" || a.status === "reviewing").length}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Database Management</CardTitle>
                  <CardDescription>
                    Manage your website content and database
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Access the database studio to manage all content including blog posts, portfolio items, testimonials, and more. Click the "Database Studio" tab at the top right of the page.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
}