"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export const TeamCard = ({ 
  name, 
  role, 
  image, 
  bio,
  linkedin,
  twitter,
  email
}: TeamCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-2">
          {linkedin && (
            <Button
              size="icon"
              variant="secondary"
              className="h-10 w-10 rounded-full"
              onClick={() => window.open(linkedin, "_blank")}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
          )}
          {twitter && (
            <Button
              size="icon"
              variant="secondary"
              className="h-10 w-10 rounded-full"
              onClick={() => window.open(twitter, "_blank")}
            >
              <Twitter className="h-5 w-5" />
            </Button>
          )}
          {email && (
            <Button
              size="icon"
              variant="secondary"
              className="h-10 w-10 rounded-full"
              onClick={() => window.location.href = `mailto:${email}`}
            >
              <Mail className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-bold text-xl mb-1">{name}</h3>
        <p className="text-accent font-medium mb-3">{role}</p>
        <p className="text-sm text-muted-foreground">{bio}</p>
      </CardContent>
    </Card>
  );
};