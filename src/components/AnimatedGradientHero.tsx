"use client";

import { ReactNode } from "react";

interface AnimatedGradientHeroProps {
  children: ReactNode;
}

export const AnimatedGradientHero = ({ children }: AnimatedGradientHeroProps) => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent/20 to-primary animate-gradient" />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-primary/40" />
      
      {/* Floating circles animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};