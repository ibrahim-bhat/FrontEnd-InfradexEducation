import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { siteConfig } from "../config";
import { cn } from "@/lib/utils";
import { PreLoader } from "@/components/main/pre-loader";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: '#0E0E10',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://infradexedu.in'),
  title: {
    template: '%s | Infradex Education',
    default: 'Infradex Education',
  },
  description: "Empowering students to achieve their academic dreams through expert guidance and comprehensive support in international education.",
  keywords: [
    'education',
    'study abroad',
    'university admissions',
    'career counseling',
    'student visa',
    'international education',
  ],
  authors: [{ name: 'Infradex Education' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://infradexedu.in',
    title: 'Infradex Education',
    description: 'Empowering students to achieve their academic dreams',
    siteName: 'Infradex Education',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infradex Education',
    description: 'Empowering students to achieve their academic dreams',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen antialiased bg-black overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        <PreLoader />
        <StarsCanvas />
        <Navbar />
        <main className="relative flex flex-col min-h-screen">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
