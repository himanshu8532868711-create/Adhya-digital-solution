import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Aadhya digital Solution - We Design. We Build. We Grow Your Brand Digitally",
  description: "A creative agency that designs websites, builds apps, manages brands, and grows businesses digitally. Expert services in React, Next.js, UI/UX, branding, social media management, and digital marketing.",
  keywords: ["web development", "app development", "digital marketing", "branding", "UI/UX design", "social media management", "SEO", "Delhi", "India"],
  authors: [{ name: "Aadhya digital Solution" }],
  openGraph: {
    title: "Aadhya digital Solution - Design. Develop. Dominate.",
    description: "A creative agency that designs websites, builds apps, manages brands, and grows businesses digitally.",
    url: "https://AadhyadigitalSolution.com",
    siteName: "Aadhya digital Solution",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ecd994c6-0c82-4475-b7be-2bdb1150cf46/generated_images/open-graph-social-media-image-for-hum-di-d8737d2f-20251028141143.jpg",
        width: 1200,
        height: 630,
        alt: "Aadhya digital Solution - Design. Develop. Dominate.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadhya digital Solution - Design. Develop. Dominate.",
    description: "A creative agency that designs websites, builds apps, manages brands, and grows businesses digitally.",
    images: ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ecd994c6-0c82-4475-b7be-2bdb1150cf46/generated_images/open-graph-social-media-image-for-hum-di-d8737d2f-20251028141143.jpg"],
  },
  icons: {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ecd994c6-0c82-4475-b7be-2bdb1150cf46/generated_images/favicon-icon-for-hum-digital-studio-mini-320dac2a-20251028141142.jpg",
    shortcut: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ecd994c6-0c82-4475-b7be-2bdb1150cf46/generated_images/favicon-icon-for-hum-digital-studio-mini-320dac2a-20251028141142.jpg",
    apple: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ecd994c6-0c82-4475-b7be-2bdb1150cf46/generated_images/favicon-icon-for-hum-digital-studio-mini-320dac2a-20251028141142.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorReporter />
          <Script
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
            strategy="afterInteractive"
            data-target-origin="*"
            data-message-type="ROUTE_CHANGE"
            data-include-search-params="true"
            data-only-in-iframe="true"
            data-debug="true"
            data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
          />
          {children}
          <Toaster />
          <VisualEditsMessenger />
        </ThemeProvider>
      </body>
    </html>
  );
}