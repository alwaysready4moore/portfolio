import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const siteUrl = "https://www.alwaysready4moore.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Marquetta Moore | AlwaysReady4Moore",
    template: "%s | AlwaysReady4Moore",
  },

  description:
    "Portfolio for Marquetta Moore, a support-informed AI knowledge systems builder working across AI workflows, knowledge systems, support operations, and security-aware communication.",

  applicationName: "AlwaysReady4Moore",
  creator: "Marquetta Moore",
  publisher: "Marquetta Moore",

  authors: [
    {
      name: "Marquetta Moore",
      url: siteUrl,
    },
  ],

  keywords: [
    "Marquetta Moore",
    "AlwaysReady4Moore",
    "AI knowledge systems",
    "AI workflows",
    "knowledge systems",
    "support operations",
    "technical communication",
    "security-aware communication",
    "systems builder",
    "portfolio",
  ],

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "AlwaysReady4Moore",
    title: "Marquetta Moore | AlwaysReady4Moore",
    description:
      "Systems builder turning scattered information, repetitive work, and unclear processes into practical AI-assisted workflows, knowledge systems, and tools people can actually use.",
    images: [
      {
        url: "/brand/the-mark-clarity-icon-1024.png",
        width: 1024,
        height: 1024,
        alt: "The Clarity Mark for AlwaysReady4Moore, a phoenix symbol representing transformation through clearer systems.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Marquetta Moore | AlwaysReady4Moore",
    description:
      "Systems builder turning scattered information, repetitive work, and unclear processes into practical AI-assisted workflows, knowledge systems, and tools people can actually use.",
    images: ["/brand/the-mark-clarity-icon-1024.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link
          rel="preload"
          href="/fonts/alucky/Alucky.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/mozilla-headline/MozillaHeadline-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/mozilla-headline/MozillaHeadline-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>

      <body>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}