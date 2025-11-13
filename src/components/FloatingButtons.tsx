"use client";

import { useEffect, useState } from "react";
import { MessageCircle, ArrowUp, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const whatsappUrl = "https://wa.me/919876543210";
    const isInIframe = window.self !== window.top;
    
    if (isInIframe) {
      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: whatsappUrl } }, "*");
    } else {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  const openCall = () => {
    const telUrl = "tel:+919876543210";
    const isInIframe = window.self !== window.top;
    
    if (isInIframe) {
      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: telUrl } }, "*");
    } else {
      window.location.href = telUrl;
    }
  };

  return (
    <>
      {/* WhatsApp Button */}
      <Button
        onClick={openWhatsApp}
        size="icon"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#20BA5A] text-white z-50 transition-transform hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Call Button */}
      <Button
        onClick={openCall}
        size="icon"
        className="fixed bottom-24 right-6 h-14 w-14 rounded-full shadow-lg bg-accent hover:bg-accent/90 text-white z-50 transition-transform hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
      </Button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-42 right-6 h-12 w-12 rounded-full shadow-lg bg-primary hover:bg-primary/90 z-50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
          aria-label="Scroll to top"
          style={{ bottom: "11rem" }}
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};