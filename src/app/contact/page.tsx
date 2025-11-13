"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Sparkles, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "AadhyadigitalSolution@gmail.com",
      link: "mailto:AadhyadigitalSolution@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 8532868711 ",
      link: "tel:+91 8532868711",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+91 8532868711",
      link: "https://wa.me/918532868711",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Modinagar, India",
      link: "#",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Clock,
      title: "Support",
      content: "24/7 Available",
      link: "#",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-background">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <MessageCircle className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Get In Touch</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
              Let's Start a <span className="text-accent">Conversation</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Kyun wait kar rahe ho? Let's discuss your project and bring your digital dreams to life!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Contact Information</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Multiple Ways to <span className="text-accent">Reach Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred method of communication
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {contactInfo.map((info) => (
              <Card key={info.title} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-transparent text-center relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <CardContent className="p-6 relative z-10">
                  <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                  {info.link !== "#" ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? "_blank" : undefined}
                      rel={info.link.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Quick Actions */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 hover:border-accent/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-3xl">Send Us a Message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="py-16 text-center space-y-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/50 rounded-full flex items-center justify-center mx-auto">
                        <Send className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">Message Sent Successfully!</h3>
                      <p className="text-muted-foreground text-lg">
                        Thank you for reaching out. We'll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-base">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="h-12"
                          required
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-base">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="h-12"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-base">Phone *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="h-12"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-base">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-accent hover:bg-accent/90 h-14 text-base" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-primary to-accent text-white border-none">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Quick Actions</CardTitle>
                  <CardDescription className="text-white/90 text-base">
                    Get instant support through your preferred channel
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild variant="secondary" className="w-full h-14 text-base" size="lg">
                    <a href="https://wa.me/918532868711" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp Us
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full h-14 text-base bg-white/10 hover:bg-white/20 text-white border-white/30" size="lg">
                    <a href="tel:+918532868711">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full h-14 text-base bg-white/10 hover:bg-white/20 text-white border-white/30" size="lg">
                    <a href="mailto:AadhyadigitalSolution@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Email Us
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full h-14 text-base bg-white/10 hover:bg-white/20 text-white border-white/30" size="lg">
                    <a href="/careers">
                      <Briefcase className="mr-2 h-5 w-5" />
                      Join Our Team
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Office Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-sm text-accent font-medium">24/7 Emergency Support Available</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/5 via-background to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Find Us <span className="text-accent">Here</span>
            </h2>
            <p className="text-xl text-muted-foreground">Modinagar, India</p>
          </div>
          <div className="rounded-3xl overflow-hidden h-96 bg-muted shadow-2xl border-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.89796928247!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}