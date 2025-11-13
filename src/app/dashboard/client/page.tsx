"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, FolderKanban, Receipt, MessageSquare, User, Sparkles, Target, Zap, Code, Database, Cloud, Cpu, Server, Terminal, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { authClient, useSession } from "@/lib/auth-client";
import { toast } from "sonner";

interface Project {
  id: number;
  projectName: string;
  description: string;
  status: string;
  budget: number | null;
  startDate: string | null;
  endDate: string | null;
}

interface Invoice {
  id: number;
  amount: number;
  dueDate: string;
  paidDate: string | null;
  status: string;
  invoiceNumber: string;
  projectId: number;
}

export default function ClientDashboard() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
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
      
      // Fetch projects
      const projectsRes = await fetch("/api/projects?limit=10", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const projectsData = await projectsRes.json();
      setProjects(projectsData);

      // Fetch invoices
      const invoicesRes = await fetch("/api/invoices?limit=10", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const invoicesData = await invoicesRes.json();
      setInvoices(invoicesData);

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
      case "completed":
        return "bg-green-500/10 text-green-600 dark:text-green-400";
      case "in_progress":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400";
      case "planning":
        return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400";
      case "on_hold":
        return "bg-gray-500/10 text-gray-600 dark:text-gray-400";
      case "paid":
        return "bg-green-500/10 text-green-600 dark:text-green-400";
      case "pending":
        return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400";
      case "overdue":
        return "bg-red-500/10 text-red-600 dark:text-red-400";
      default:
        return "bg-gray-500/10 text-gray-600 dark:text-gray-400";
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
              <h1 className="text-3xl font-bold">Client Dashboard</h1>
              <p className="text-muted-foreground mt-1">
                Welcome back, {session.user.name}!
              </p>
              <p className="text-sm text-accent mt-1 font-medium">
                "Your Success is Our Mission"
              </p>
            </div>
            <Button onClick={handleSignOut} variant="outline">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>

          {/* Who We Are Section - Tech Background */}
          <section className="relative mb-12 overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-accent/80 to-blue-950">
              {/* Circuit pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#00BFA620_1px,transparent_1px),linear-gradient(to_bottom,#00BFA620_1px,transparent_1px)] bg-[size:3rem_3rem] animate-pulse opacity-30" />
              
              {/* Floating tech icons */}
              <Code className="absolute top-8 left-[10%] w-6 h-6 text-accent/20 animate-float" />
              <Database className="absolute top-12 right-[15%] w-8 h-8 text-cyan-400/30 animate-float-delayed" />
              <Server className="absolute bottom-8 left-[20%] w-5 h-5 text-accent/25 animate-float" />
              <Cloud className="absolute bottom-12 right-[25%] w-7 h-7 text-cyan-400/20 animate-float-delayed" />
              <Cpu className="absolute top-1/2 right-[10%] w-8 h-8 text-accent/25 animate-float" />
              <Terminal className="absolute top-1/3 left-[8%] w-6 h-6 text-cyan-400/30 animate-float-delayed" />
              
              {/* Glowing orbs */}
              <div className="absolute top-10 right-8 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-10 left-8 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
              <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-500" />
              
              {/* Digital particles */}
              <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
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
                  Building Digital Dreams with <span className="text-accent">Cutting-Edge Tech</span>
                </h2>
                
                <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                  Hum Digital Studio is your trusted partner in digital transformation. We specialize in creating powerful, scalable solutions using Next.js, React, TypeScript, and Cloud technologies that drive real business results and exceed expectations.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                <FolderKanban className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {projects.filter(p => p.status === "in_progress").length}
                </div>
                <p className="text-xs text-muted-foreground">
                  Out of {projects.length} total projects
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Invoices</CardTitle>
                <Receipt className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {invoices.filter(i => i.status === "pending").length}
                </div>
                <p className="text-xs text-muted-foreground">
                  Total: ₹{invoices.filter(i => i.status === "pending").reduce((sum, i) => sum + i.amount, 0).toLocaleString()}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed Projects</CardTitle>
                <FolderKanban className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {projects.filter(p => p.status === "completed").length}
                </div>
                <p className="text-xs text-muted-foreground">
                  Successfully delivered
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Projects */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FolderKanban className="h-5 w-5" />
                  My Projects
                </CardTitle>
                <CardDescription>
                  Track your ongoing and completed projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.length === 0 ? (
                    <p className="text-center text-muted-foreground py-8">
                      No projects yet
                    </p>
                  ) : (
                    projects.slice(0, 5).map((project) => (
                      <div
                        key={project.id}
                        className="flex items-start justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{project.projectName}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {project.description}
                          </p>
                          {project.budget && (
                            <p className="text-sm text-muted-foreground mt-2">
                              Budget: ₹{project.budget.toLocaleString()}
                            </p>
                          )}
                        </div>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status.replace("_", " ")}
                        </Badge>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Invoices */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Receipt className="h-5 w-5" />
                  Recent Invoices
                </CardTitle>
                <CardDescription>
                  View and manage your invoices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {invoices.length === 0 ? (
                    <p className="text-center text-muted-foreground py-8">
                      No invoices yet
                    </p>
                  ) : (
                    invoices.slice(0, 5).map((invoice) => (
                      <div
                        key={invoice.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div>
                          <p className="font-semibold">{invoice.invoiceNumber}</p>
                          <p className="text-sm text-muted-foreground">
                            Due: {new Date(invoice.dueDate).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">₹{invoice.amount.toLocaleString()}</p>
                          <Badge className={getStatusColor(invoice.status)}>
                            {invoice.status}
                          </Badge>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support Section */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Need Help?
              </CardTitle>
              <CardDescription>
                Contact our support team for any questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="flex-1 bg-accent hover:bg-accent/90">
                  <a href="mailto:humdigitalstudio@gmail.com">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Email Support
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    WhatsApp Support
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <a href="tel:+919876543210">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Call Support
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}