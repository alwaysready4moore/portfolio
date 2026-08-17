import type { Metadata } from "next";
import { BrowsePortfolioHome } from "@/components/BrowsePortfolioHome";
import { StructuredData } from "@/components/StructuredData";
import { contactInfo } from "@/data/contact";

const siteUrl = "https://www.alwaysready4moore.com";

export const metadata: Metadata = {
  title: {
    absolute:
      "Marquetta Moore | Technical Writer, Systems Builder & Creative Technologist",
  },
  description:
    "Marquetta Moore is a creative technologist, technical writer, and systems builder creating documentation, knowledge systems, workflow tools, AI products, and creative experiments.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "AlwaysReady4Moore",
    title:
      "Marquetta Moore | Technical Writer, Systems Builder & Creative Technologist",
    description:
      "Explore Marquetta Moore’s technical writing, knowledge systems, workflow tools, AI products, and creative technology projects.",
    images: [
      {
        url: "/brand/the-mark-clarity-icon-1024.png",
        width: 1024,
        height: 1024,
        alt: "AlwaysReady4Moore phoenix mark.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Marquetta Moore | Technical Writer, Systems Builder & Creative Technologist",
    description:
      "Technical writing, knowledge systems, workflow tools, AI products, and creative technology projects by Marquetta Moore.",
    images: ["/brand/the-mark-clarity-icon-1024.png"],
  },
};

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#marquetta-moore`,
      name: "Marquetta Moore",
      alternateName: "AlwaysReady4Moore",
      url: `${siteUrl}/about`,
      jobTitle: [
        "Creative Technologist",
        "Technical Writer",
        "Systems Builder",
      ],
      description:
        "Creative technologist, technical writer, and systems builder working across documentation, knowledge systems, workflow design, AI products, security-aware communication, and creative prototyping.",
      sameAs: [contactInfo.linkedin, contactInfo.github],
      knowsAbout: [
        "Technical writing",
        "Knowledge management",
        "Knowledge systems",
        "Workflow design",
        "AI product development",
        "Security operations",
        "Content design",
        "Technical enablement",
        "Creative technology",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "AlwaysReady4Moore",
      alternateName: "Marquetta Moore Portfolio",
      description:
        "Portfolio of Marquetta Moore: technical writing, systems design, knowledge management, AI products, workflow tools, and creative technology.",
      publisher: {
        "@id": `${siteUrl}/#marquetta-moore`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name:
        "Marquetta Moore | Technical Writer, Systems Builder & Creative Technologist",
      description:
        "Browse Marquetta Moore’s technical writing, knowledge systems, workflow tools, AI products, and creative technology projects.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#marquetta-moore`,
      },
      inLanguage: "en-US",
    },
  ],
};

export default function Home() {
  return (
    <>
      <StructuredData data={homeStructuredData} />
      <BrowsePortfolioHome />
    </>
  );
}
