import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vibeui.space"),

  title: {
    default: "VibeUI - Modern Next.js & Tailwind CSS Component Library",
    template: "%s | VibeUI",
  },

  description:
    "VibeUI is a modern open-source component library built with Next.js and Tailwind CSS. Beautiful, accessible, and customizable React UI components for building fast web applications.",

  keywords: [
    "Next.js component library",
    "Tailwind CSS components",
    "React UI components",
    "Modern UI kit",
    "Open source UI library",
    "Accessible React components",
    "Animated UI components",
  ],

  authors: [{ name: "VibeUI Team" }],
  creator: "VibeUI",
  publisher: "VibeUI",
  category: "technology",

  alternates: {
    canonical: "https://vibeui.space",
  },

  openGraph: {
    title: "VibeUI - Next.js & Tailwind CSS UI Components",
    description:
      "Build modern web apps faster with VibeUI. A clean, customizable, and accessible component library for Next.js and Tailwind CSS.",
    url: "https://vibeui.space",
    siteName: "VibeUI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VibeUI - Next.js & Tailwind CSS Component Library",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "VibeUI - Modern React UI Components",
    description:
      "Reusable Next.js and Tailwind CSS components for building clean, fast, and accessible web apps.",
    images: ["/og-image.png"],
    creator: "@vibeui",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import LayoutWrapper from "@/components/LayoutWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta
          name="google-site-verification"
          content="ANOhiFuO7uZy1rcMmknjYDZXTSb0J3pCGSfPecSvWgg"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased min-h-screen bg-background text-foreground selection:bg-blue-500/30 selection:text-white`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}