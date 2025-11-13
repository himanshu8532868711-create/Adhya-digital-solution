"use client";

import { Card, CardContent } from "@/components/ui/card";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLeft?: boolean;
}

export const TimelineItem = ({ 
  year, 
  title, 
  description, 
  isLeft = false 
}: TimelineItemProps) => {
  return (
    <div className={`flex items-center gap-4 mb-8 ${isLeft ? "flex-row-reverse" : ""}`}>
      <div className={`flex-1 ${isLeft ? "text-left" : "text-right"}`}>
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="text-accent font-bold text-xl mb-2">{year}</div>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </CardContent>
        </Card>
      </div>
      <div className="relative flex flex-col items-center">
        <div className="h-4 w-4 rounded-full bg-accent border-4 border-background shadow-lg z-10" />
        <div className="w-0.5 h-full bg-accent/30 absolute top-4" />
      </div>
      <div className="flex-1" />
    </div>
  );
};