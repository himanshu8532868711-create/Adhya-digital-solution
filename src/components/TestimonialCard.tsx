"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

export const TestimonialCard = ({ 
  name, 
  role, 
  company, 
  image, 
  quote 
}: TestimonialCardProps) => {
  return (
    <Card className="h-full hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6">
        <Quote className="h-10 w-10 text-accent mb-4 opacity-50" />
        <p className="text-muted-foreground mb-6 italic">"{quote}"</p>
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={name}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-muted-foreground">
              {role} at {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};