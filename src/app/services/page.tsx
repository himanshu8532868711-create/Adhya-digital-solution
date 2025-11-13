"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Code, 
  Palette, 
  TrendingUp, 
  Megaphone,
  Smartphone,
  Globe,
  ShoppingCart,
  Layout,
  Package,
  Instagram,
  Users,
  Search,
  Mail,
  BarChart,
  Target,
  Sparkles,
  Zap,
  Loader2,
  MapPin,
  Tablet,
  HardDrive,
  Share2,
  Image,
  Award,
  Camera,
  Video,
  PlayCircle,
  Briefcase,
  Film,
  Cpu,
  Server,
  Database,
  Layers,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

// Icon mapping for dynamic rendering
const iconMap: Record<string, any> = {
  Code,
  Palette,
  TrendingUp,
  Instagram,
  Megaphone,
  Smartphone,
  Globe,
  ShoppingCart,
  Layout,
  Package,
  Users,
  Search,
  Mail,
  BarChart,
  Target,
  MapPin,
  Tablet,
  HardDrive,
  Share2,
  Image,
  Award,
  Camera,
  Video,
  PlayCircle,
  Briefcase,
  Film,
  Cpu,
  Server,
  Database,
  Layers,
  MessageSquare,
};

interface ServiceItem {
  id: number;
  serviceId: number;
  icon: string;
  title: string;
  items: string[];
  displayOrder: number;
}

interface Service {
  id: number;
  categoryIcon: string;
  categoryTitle: string;
  categoryDescription: string;
  categoryGradient: string;
  displayOrder: number;
  isActive: boolean;
  items: ServiceItem[];
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch('/api/services?withItems=true&isActive=true');
        
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        
        const data = await response.json();
        
        // Parse items if they come as JSON strings from the database
        const parsedData = data.map((service: any) => {
          // Ensure items is an array
          const serviceItems = Array.isArray(service.items) ? service.items : [];
          
          return {
            ...service,
            items: serviceItems.map((item: any) => {
              let parsedItems: string[] = [];
              
              // Parse the items field if it's a string
              if (typeof item.items === 'string') {
                try {
                  parsedItems = JSON.parse(item.items);
                } catch (e) {
                  console.error('Failed to parse item.items:', item.items, e);
                  parsedItems = [];
                }
              } else if (Array.isArray(item.items)) {
                parsedItems = item.items;
              }
              
              return {
                ...item,
                items: parsedItems
              };
            })
          };
        });
        
        setServices(parsedData);
      } catch (err) {
        console.error('Error fetching services:', err);
        setError('Failed to load services. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Get icon component from string name
  const getIcon = (iconName: string) => {
    return iconMap[iconName] || Code;
  };

  // Background configurations for each service category
  const getBackgroundForService = (index: number) => {
    const backgrounds = [
      {
        // Digital Marketing - AI Neural Network Background
        bg: "bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-background",
        elements: (
          <>
            {/* Neural network nodes */}
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Network connections */}
              <line x1="150" y1="100" x2="350" y2="200" stroke="url(#neural-gradient)" strokeWidth="2" className="animate-pulse" filter="url(#glow)" />
              <line x1="350" y1="200" x2="550" y2="150" stroke="url(#neural-gradient)" strokeWidth="2" className="animate-pulse delay-500" filter="url(#glow)" />
              <line x1="550" y1="150" x2="750" y2="250" stroke="url(#neural-gradient)" strokeWidth="2" className="animate-pulse" filter="url(#glow)" />
              <line x1="150" y1="100" x2="450" y2="300" stroke="url(#neural-gradient)" strokeWidth="1" className="animate-pulse delay-1000" opacity="0.5" />
              <line x1="350" y1="200" x2="650" y2="350" stroke="url(#neural-gradient)" strokeWidth="1" className="animate-pulse" opacity="0.5" />
              
              {/* Neural nodes */}
              <circle cx="150" cy="100" r="8" fill="#3b82f6" className="animate-pulse" filter="url(#glow)" />
              <circle cx="350" cy="200" r="10" fill="#6366f1" className="animate-pulse delay-500" filter="url(#glow)" />
              <circle cx="550" cy="150" r="8" fill="#3b82f6" className="animate-pulse delay-1000" filter="url(#glow)" />
              <circle cx="750" cy="250" r="10" fill="#6366f1" className="animate-pulse" filter="url(#glow)" />
              <circle cx="450" cy="300" r="6" fill="#3b82f6" className="animate-pulse delay-500" filter="url(#glow)" />
            </svg>
            
            {/* Floating data particles */}
            <div className="absolute top-20 left-20 w-3 h-3 bg-blue-500 rounded-full animate-float blur-sm" />
            <div className="absolute top-40 right-32 w-2 h-2 bg-indigo-500 rounded-full animate-float-delayed blur-sm" />
            <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-blue-400 rounded-full animate-float blur-sm" />
            
            {/* Holographic grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f630_1px,transparent_1px),linear-gradient(to_bottom,#3b82f630_1px,transparent_1px)] bg-[size:2rem_2rem]" />
            </div>
            
            {/* Glowing orbs */}
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-blue-500/30 to-indigo-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-indigo-500/30 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </>
        ),
      },
      {
        // Web Development - Circuit Board Matrix
        bg: "bg-gradient-to-br from-green-600/10 via-emerald-600/10 to-background",
        elements: (
          <>
            {/* Circuit board traces */}
            <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              {/* Horizontal traces */}
              <path d="M0,100 L200,100 L220,120 L400,120" stroke="url(#circuit-gradient)" strokeWidth="3" fill="none" className="animate-pulse" />
              <path d="M0,200 L300,200 L320,220 L600,220" stroke="url(#circuit-gradient)" strokeWidth="3" fill="none" className="animate-pulse delay-500" />
              <path d="M200,300 L500,300 L520,320 L800,320" stroke="url(#circuit-gradient)" strokeWidth="3" fill="none" className="animate-pulse delay-1000" />
              
              {/* Circuit nodes */}
              <circle cx="200" cy="100" r="6" fill="#10b981" className="animate-pulse" />
              <circle cx="300" cy="200" r="6" fill="#14b8a6" className="animate-pulse delay-500" />
              <circle cx="500" cy="300" r="6" fill="#10b981" className="animate-pulse delay-1000" />
              <rect x="400" y="110" width="20" height="20" fill="none" stroke="#10b981" strokeWidth="2" className="animate-pulse" />
              <rect x="600" y="210" width="20" height="20" fill="none" stroke="#14b8a6" strokeWidth="2" className="animate-pulse delay-500" />
            </svg>
            
            {/* Digital rain effect */}
            <div className="absolute top-10 left-10 font-mono text-sm text-green-500/20 animate-float leading-tight">
              01010011<br/>11001010<br/>10110101<br/>01100110
            </div>
            <div className="absolute top-20 right-24 font-mono text-sm text-emerald-500/20 animate-float-delayed leading-tight">
              HTML5<br/>&lt;/&gt;<br/>CSS3<br/>JS
            </div>
            <div className="absolute bottom-32 left-1/3 font-mono text-xs text-green-500/15 animate-float leading-tight">
              function()<br/>const x<br/>return<br/>await
            </div>
            
            {/* Microchip pattern */}
            <div className="absolute top-1/3 right-20 w-24 h-24 border-2 border-green-500/20 animate-float">
              <div className="absolute inset-2 border border-green-500/20" />
              <div className="absolute top-1/2 left-0 w-2 h-0.5 bg-green-500/20 -translate-x-full" />
              <div className="absolute top-1/2 right-0 w-2 h-0.5 bg-green-500/20 translate-x-full" />
              <div className="absolute left-1/2 top-0 h-2 w-0.5 bg-green-500/20 -translate-y-full" />
              <div className="absolute left-1/2 bottom-0 h-2 w-0.5 bg-green-500/20 translate-y-full" />
            </div>
            
            {/* Glowing orbs */}
            <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-green-500/30 to-emerald-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-emerald-500/30 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </>
        ),
      },
      {
        // Mobile App Development - Quantum Holographic Interface
        bg: "bg-gradient-to-br from-purple-600/10 via-fuchsia-600/10 to-background",
        elements: (
          <>
            {/* Holographic device frames */}
            <div className="absolute top-24 left-24 w-40 h-72 border-2 border-purple-500/30 rounded-[3rem] animate-float backdrop-blur-sm">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-purple-500/30 rounded-full" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 border-2 border-purple-500/30 rounded-full" />
              <div className="absolute inset-8 bg-gradient-to-b from-purple-500/10 to-fuchsia-500/10 rounded-3xl" />
            </div>
            
            <div className="absolute top-32 right-32 w-48 h-80 border-2 border-fuchsia-500/30 rounded-[3rem] rotate-12 animate-float-delayed backdrop-blur-sm">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-fuchsia-500/30 rounded-full" />
              <div className="absolute inset-8 bg-gradient-to-b from-fuchsia-500/10 to-purple-500/10 rounded-3xl" />
            </div>
            
            {/* Quantum particles */}
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="quantum-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#d946ef" stopOpacity="0.8" />
                </linearGradient>
                <filter id="quantum-glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <circle cx="200" cy="150" r="50" stroke="url(#quantum-gradient)" strokeWidth="2" fill="none" className="animate-pulse" filter="url(#quantum-glow)" />
              <circle cx="700" cy="300" r="60" stroke="url(#quantum-gradient)" strokeWidth="2" fill="none" className="animate-pulse delay-500" filter="url(#quantum-glow)" />
              <circle cx="450" cy="250" r="40" stroke="url(#quantum-gradient)" strokeWidth="2" fill="none" className="animate-pulse delay-1000" filter="url(#quantum-glow)" />
            </svg>
            
            {/* Floating app icons */}
            <div className="absolute bottom-40 left-1/4 text-6xl opacity-10 animate-float">📱</div>
            <div className="absolute top-1/3 right-1/3 text-5xl opacity-10 animate-float-delayed">⚡</div>
            <div className="absolute bottom-1/3 right-1/4 text-4xl opacity-10 animate-float">🚀</div>
            
            {/* Glowing orbs */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-fuchsia-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-fuchsia-500/30 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </>
        ),
      },
      {
        // Server - Data Center Infrastructure
        bg: "bg-gradient-to-br from-orange-600/10 via-amber-600/10 to-background",
        elements: (
          <>
            {/* 3D Server rack visualization */}
            <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="server-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              {/* Server racks with 3D effect */}
              <g className="animate-pulse">
                <rect x="100" y="120" width="100" height="240" stroke="url(#server-gradient)" strokeWidth="3" fill="none" />
                <line x1="100" y1="160" x2="200" y2="160" stroke="url(#server-gradient)" strokeWidth="2" />
                <line x1="100" y1="200" x2="200" y2="200" stroke="url(#server-gradient)" strokeWidth="2" />
                <line x1="100" y1="240" x2="200" y2="240" stroke="url(#server-gradient)" strokeWidth="2" />
                <line x1="100" y1="280" x2="200" y2="280" stroke="url(#server-gradient)" strokeWidth="2" />
                <line x1="100" y1="320" x2="200" y2="320" stroke="url(#server-gradient)" strokeWidth="2" />
                <circle cx="180" cy="140" r="3" fill="#f97316" className="animate-pulse" />
                <circle cx="180" cy="180" r="3" fill="#10b981" className="animate-pulse delay-500" />
              </g>
              
              <g className="animate-pulse delay-500">
                <rect x="350" y="140" width="100" height="240" stroke="url(#server-gradient)" strokeWidth="3" fill="none" />
                <line x1="350" y1="180" x2="450" y2="180" stroke="url(#server-gradient)" strokeWidth="2" />
                <line x1="350" y1="220" x2="450" y2="220" stroke="url(#server-gradient)" strokeWidth="2" />
                <line x1="350" y1="260" x2="450" y2="260" stroke="url(#server-gradient)" strokeWidth="2" />
                <circle cx="430" cy="160" r="3" fill="#10b981" className="animate-pulse" />
              </g>
              
              <g className="animate-pulse delay-1000">
                <rect x="600" y="100" width="100" height="240" stroke="url(#server-gradient)" strokeWidth="3" fill="none" />
                <line x1="600" y1="140" x2="700" y2="140" stroke="url(#server-gradient)" strokeWidth="2" />
                <line x1="600" y1="180" x2="700" y2="180" stroke="url(#server-gradient)" strokeWidth="2" />
                <line x1="600" y1="220" x2="700" y2="220" stroke="url(#server-gradient)" strokeWidth="2" />
                <circle cx="680" cy="120" r="3" fill="#10b981" className="animate-pulse delay-500" />
              </g>
              
              {/* Data flow connections */}
              <path d="M200,200 L350,220" stroke="url(#server-gradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
              </path>
              <path d="M450,240 L600,200" stroke="url(#server-gradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse delay-500">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
              </path>
            </svg>
            
            {/* Data stream indicators */}
            <div className="absolute top-32 right-24 space-y-1 animate-float">
              <div className="w-20 h-1 bg-orange-500/30 rounded-full animate-pulse" />
              <div className="w-16 h-1 bg-amber-500/30 rounded-full animate-pulse delay-500" />
              <div className="w-14 h-1 bg-orange-500/30 rounded-full animate-pulse" />
            </div>
            
            {/* Cloud storage symbols */}
            <div className="absolute bottom-40 left-1/3 text-6xl opacity-10 animate-float">☁️</div>
            <div className="absolute top-1/3 right-1/4 text-5xl opacity-10 animate-float-delayed">🖥️</div>
            
            {/* Glowing orbs */}
            <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-orange-500/30 to-amber-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-amber-500/30 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </>
        ),
      },
      {
        // Creative Designing - 3D Geometric Art
        bg: "bg-gradient-to-br from-yellow-600/10 via-rose-600/10 to-background",
        elements: (
          <>
            {/* 3D Geometric shapes */}
            <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="design-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#eab308" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.8" />
                </linearGradient>
                <filter id="design-shadow">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                  <feOffset dx="2" dy="2" result="offsetblur"/>
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.5"/>
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* 3D Cube */}
              <g className="animate-float" filter="url(#design-shadow)">
                <polygon points="150,100 250,100 280,130 180,130" fill="url(#design-gradient)" opacity="0.6" />
                <polygon points="250,100 280,130 280,230 250,200" fill="url(#design-gradient)" opacity="0.4" />
                <polygon points="150,100 180,130 180,230 150,200" fill="url(#design-gradient)" opacity="0.5" />
              </g>
              
              {/* 3D Pyramid */}
              <g className="animate-float-delayed" filter="url(#design-shadow)">
                <polygon points="600,200 650,280 550,280" fill="url(#design-gradient)" opacity="0.6" />
                <polygon points="600,200 650,280 680,270" fill="url(#design-gradient)" opacity="0.4" />
                <polygon points="600,200 550,280 520,270" fill="url(#design-gradient)" opacity="0.5" />
              </g>
              
              {/* Bezier curves */}
              <path d="M100,300 Q200,250 300,300 T500,300" stroke="url(#design-gradient)" strokeWidth="3" fill="none" className="animate-pulse" />
              <path d="M150,350 Q300,300 450,350" stroke="url(#design-gradient)" strokeWidth="2" fill="none" className="animate-pulse delay-500" />
            </svg>
            
            {/* Floating geometric shapes */}
            <div className="absolute top-24 left-24 w-32 h-32 border-4 border-yellow-500/20 rounded-full animate-float" />
            <div className="absolute top-40 right-32 w-40 h-40 border-4 border-rose-500/20 rotate-45 animate-float-delayed" />
            <div className="absolute bottom-32 left-1/3 w-28 h-28 border-4 border-yellow-500/15 rounded-2xl rotate-12 animate-float" />
            
            {/* Color palette indicators */}
            <div className="absolute bottom-40 right-1/4 flex gap-2 animate-float-delayed">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500/40 to-amber-500/40 blur-sm" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-500/40 to-pink-500/40 blur-sm" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500/40 to-red-500/40 blur-sm" />
            </div>
            
            {/* Design tools icons */}
            <div className="absolute top-1/3 right-20 text-6xl opacity-10 animate-float">🎨</div>
            <div className="absolute bottom-1/3 left-20 text-5xl opacity-10 animate-float-delayed">✨</div>
            
            {/* Glowing orbs */}
            <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-yellow-500/30 to-rose-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-rose-500/30 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </>
        ),
      },
      {
        // Video Production - Cinematic Digital Interface
        bg: "bg-gradient-to-br from-cyan-600/10 via-sky-600/10 to-background",
        elements: (
          <>
            {/* Film strip with modern design */}
            <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="video-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              
              {/* Modern film strip */}
              <g className="animate-pulse">
                <rect x="120" y="120" width="660" height="220" stroke="url(#video-gradient)" strokeWidth="4" fill="none" rx="10" />
                <line x1="120" y1="150" x2="780" y2="150" stroke="url(#video-gradient)" strokeWidth="2" />
                <line x1="120" y1="310" x2="780" y2="310" stroke="url(#video-gradient)" strokeWidth="2" />
                
                {/* Perforations */}
                <circle cx="140" cy="135" r="5" fill="#06b6d4" className="animate-pulse" />
                <circle cx="180" cy="135" r="5" fill="#06b6d4" className="animate-pulse delay-500" />
                <circle cx="220" cy="135" r="5" fill="#06b6d4" className="animate-pulse" />
                <circle cx="260" cy="135" r="5" fill="#06b6d4" className="animate-pulse delay-500" />
              </g>
              
              {/* Play button with glow */}
              <g className="animate-pulse delay-500">
                <circle cx="450" cy="230" r="40" stroke="url(#video-gradient)" strokeWidth="3" fill="none" />
                <polygon points="440,210 440,250 475,230" fill="url(#video-gradient)" />
              </g>
              
              {/* Timeline indicator */}
              <line x1="200" y1="370" x2="700" y2="370" stroke="url(#video-gradient)" strokeWidth="3" className="animate-pulse" />
              <circle cx="350" cy="370" r="6" fill="#06b6d4" className="animate-pulse delay-500" />
              <circle cx="550" cy="370" r="6" fill="#0ea5e9" className="animate-pulse" />
            </svg>
            
            {/* Camera viewfinder */}
            <div className="absolute top-28 left-20 w-40 h-32 border-2 border-cyan-500/30 animate-float">
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-500/30" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-500/30" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-500/30" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-500/30" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-500/30 rounded-full animate-pulse" />
            </div>
            
            {/* Video editing timeline */}
            <div className="absolute bottom-32 left-1/4 space-y-2 animate-float-delayed">
              <div className="flex gap-1">
                <div className="w-16 h-8 bg-cyan-500/20 rounded animate-pulse" />
                <div className="w-24 h-8 bg-sky-500/20 rounded animate-pulse delay-500" />
                <div className="w-20 h-8 bg-cyan-500/20 rounded animate-pulse" />
              </div>
            </div>
            
            {/* Cinema icons */}
            <div className="absolute top-32 right-24 text-6xl opacity-10 animate-float">🎬</div>
            <div className="absolute bottom-1/3 right-1/4 text-5xl opacity-10 animate-float-delayed">🎥</div>
            
            {/* Glowing orbs */}
            <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-500/30 to-sky-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-sky-500/30 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </>
        ),
      },
    ];

    return backgrounds[index % backgrounds.length];
  };

  if (isLoading) {
    return (
      <div className="min-h-screen overflow-x-hidden">
        <Navigation />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center space-y-4">
            <Loader2 className="h-12 w-12 animate-spin text-accent mx-auto" />
            <p className="text-xl text-muted-foreground">Loading services...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen overflow-x-hidden">
        <Navigation />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center space-y-4 max-w-md mx-auto px-4">
            <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto">
              <Sparkles className="h-8 w-8 text-destructive" />
            </div>
            <h2 className="text-2xl font-bold">Unable to Load Services</h2>
            <p className="text-muted-foreground">{error}</p>
            <Button onClick={() => window.location.reload()} variant="default">
              Try Again
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero Section - Creative */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-slate-900">
          {/* Glowing orbs */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500" />
          
          {/* Floating tech icons */}
          <div className="absolute top-32 left-20 text-6xl opacity-5 animate-float">💻</div>
          <div className="absolute top-48 right-32 text-5xl opacity-5 animate-float-delayed">🚀</div>
          <div className="absolute bottom-40 left-1/3 text-7xl opacity-5 animate-float">🎨</div>
          <div className="absolute bottom-28 right-1/4 text-4xl opacity-5 animate-float-delayed">⚡</div>
          
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00bfa610_1px,transparent_1px),linear-gradient(to_bottom,#00bfa610_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>
          
          {/* Matrix-style falling code */}
          <div className="absolute top-1/4 left-10 font-mono text-xs text-cyan-500/10 leading-relaxed animate-float">
            &lt;div&gt;<br/>  class<br/>  style<br/>&lt;/div&gt;
          </div>
          <div className="absolute top-1/3 right-20 font-mono text-xs text-accent/10 leading-relaxed animate-float-delayed">
            function()<br/>  return<br/>  true<br/>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full border border-accent/30 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Our Services</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight text-white">
              Comprehensive <span className="text-accent drop-shadow-[0_0_15px_rgba(0,191,166,0.5)]">Digital Solutions</span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Tailored to elevate your brand and drive business growth in the digital landscape
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Service Sections */}
      {services.map((service, index) => {
        const CategoryIcon = getIcon(service.categoryIcon);
        const background = getBackgroundForService(index);

        return (
          <section key={service.id} className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background */}
            <div className={`absolute inset-0 ${background.bg}`}>
              {background.elements}
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <div className={`inline-flex h-20 w-20 rounded-2xl bg-gradient-to-br ${service.categoryGradient} items-center justify-center mb-6 shadow-lg shadow-${service.categoryGradient}/20`}>
                  <CategoryIcon className="h-10 w-10 text-white drop-shadow-lg" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">{service.categoryTitle}</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  {service.categoryDescription}
                </p>
              </div>

              <div className={`grid md:grid-cols-2 lg:grid-cols-${service.items.length === 4 ? '4' : '3'} gap-6`}>
                {service.items.map((item) => {
                  const ItemIcon = getIcon(item.icon);
                  
                  return (
                    <Card key={item.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-transparent overflow-hidden relative backdrop-blur-sm bg-background/80">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.categoryGradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                      <CardHeader className="relative z-10">
                        <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${service.categoryGradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg`}>
                          <ItemIcon className="h-7 w-7 text-white" />
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <ul className="space-y-3">
                          {item.items.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-sm">
                              <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* Why Choose Us - Feature Cards */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
          {/* Glowing orbs */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00bfa610_1px,transparent_1px),linear-gradient(to_bottom,#00bfa610_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          </div>
          
          {/* Floating icons */}
          <div className="absolute top-20 left-16 text-6xl opacity-5 animate-float">⭐</div>
          <div className="absolute top-40 right-24 text-5xl opacity-5 animate-float-delayed">🏆</div>
          <div className="absolute bottom-32 left-1/3 text-7xl opacity-5 animate-float">💎</div>
          <div className="absolute bottom-20 right-1/4 text-4xl opacity-5 animate-float-delayed">✨</div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full border border-accent/30 backdrop-blur-sm mb-6">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Why Choose Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              What Makes Us <span className="text-accent drop-shadow-[0_0_15px_rgba(0,191,166,0.5)]">Different</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Experience excellence with our unique approach to digital solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Expert Team", desc: "Skilled professionals with 10+ years experience", color: "from-blue-500 to-cyan-500" },
              { title: "On-Time Delivery", desc: "We respect deadlines and deliver on schedule", color: "from-purple-500 to-pink-500" },
              { title: "24/7 Support", desc: "Round-the-clock assistance whenever you need", color: "from-orange-500 to-red-500" },
              { title: "Affordable Pricing", desc: "Premium quality at competitive rates", color: "from-green-500 to-emerald-500" }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50 text-center relative overflow-hidden backdrop-blur-sm bg-card/80">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <CardContent className="p-8 relative z-10">
                  <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg text-3xl font-bold text-white`}>
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-primary">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6TTAgMTRjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMlMwIDIwLjYyNyAwIDE0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
          
          {/* Neon glow effects */}
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          
          {/* Animated lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cta-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00bfa6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <path d="M0,200 Q400,100 800,200 T1600,200" stroke="url(#cta-gradient)" strokeWidth="3" fill="none" className="animate-pulse" />
            <path d="M0,400 Q400,300 800,400 T1600,400" stroke="url(#cta-gradient)" strokeWidth="3" fill="none" className="animate-pulse delay-500" />
          </svg>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
            Ready to Transform<br />
            <span className="text-accent drop-shadow-[0_0_20px_rgba(0,191,166,0.6)]">Your Business?</span>
          </h2>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              asChild 
              size="lg" 
              className="text-lg h-14 px-8 bg-gradient-to-r from-accent via-primary to-cyan-500 hover:from-accent/90 hover:via-primary/90 hover:to-cyan-500/90 text-white shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-all hover:scale-105 font-semibold border-0"
            >
              <Link href="/contact">
                Start Your Project Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="text-lg h-14 px-8 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-600/90 hover:via-fuchsia-600/90 hover:to-pink-600/90 text-white shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all hover:scale-105 font-semibold border-0"
            >
              <Link href="/portfolio">Explore Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}