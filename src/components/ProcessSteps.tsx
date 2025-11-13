"use client";

import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
  number: number;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
}

export const ProcessSteps = ({ steps }: ProcessStepsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <div key={index} className="relative">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-accent mb-2">
                  {step.number}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent/30 z-10" />
            )}
          </div>
        );
      })}
    </div>
  );
};