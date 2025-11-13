"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Clients", href: "/clients" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" }];


  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative h-10 w-10 transition-transform group-hover:scale-110">
              <Image
                src="/logo.jpg"
                alt="Hum Digital Studio Logo"
                fill
                className="object-contain rounded-lg" />

            </div>
            <span className="font-extrabold text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-orange-400 via-pink-500 via-purple-500 via-blue-400 via-cyan-300 to-lime-300 bg-[length:350%_350%] bg-clip-text text-transparent  animate-glow hover:scale-105 transition-transform duration-500 ease-out cursor-pointer select-none drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              Aadhya digital Solution
            </span>



          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) =>
            <Link
              key={item.name}
              href={item.href}
              className="relative px-3 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors group">

                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            )}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild className="bg-accent hover:bg-accent/90">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu">

              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen &&
        <div className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) =>
          <Link
            key={item.name}
            href={item.href}
            className="block py-2 text-foreground/80 hover:text-foreground hover:bg-accent/10 px-3 rounded transition-colors"
            onClick={() => setIsOpen(false)}>

                {item.name}
              </Link>
          )}
            <div className="flex flex-col gap-2 pt-2">
              <Button asChild variant="outline" className="w-full">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
              </Button>
              <Button asChild className="w-full bg-accent hover:bg-accent/90">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        }
      </div>
    </nav>);

}