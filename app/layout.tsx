import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marquetta Moore | AlwaysReady4Moore",
  description:
    "Portfolio for Marquetta Moore, a support-informed AI knowledge systems builder working across AI workflows, knowledge systems, support operations, and security-aware communication.",
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