import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marquetta Moore | AlwaysReady4Moore",
  description:
    "Portfolio of Marquetta Moore: AI workflows, knowledge systems, support tools, security-aware communication, writing, and creative experiments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}