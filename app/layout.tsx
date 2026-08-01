import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
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
    "Portfolio for Marquetta Moore, a creative technical writer and systems builder working across documentation, knowledge management, workflow design, AI products, and security.",

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
    "AI products",
    "AI workflows",
    "knowledge systems",
    "support operations",
    "technical communication",
    "technical writing",
    "creative technical writer",
    "workflow documentation",
    "security operations",
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
      "Marquetta Moore is a creative technical writer and systems builder who turns complex operational work into clear documentation, knowledge systems, and workflow tools.",
    images: [
      {
        url: "/brand/the-mark-clarity-icon-1024.png",
        width: 1024,
        height: 1024,
        alt: "The AlwaysReady4Moore phoenix mark.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Marquetta Moore | AlwaysReady4Moore",
    description:
      "Marquetta Moore is a creative technical writer and systems builder who turns complex operational work into clear documentation, knowledge systems, and workflow tools.",
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
          href="/fonts/Alucky.otf"
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
        <Analytics />
      </body>
    </html>
  );
}