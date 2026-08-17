import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { contactInfo } from "@/data/contact";

const siteUrl = "https://www.alwaysready4moore.com";

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

const profileStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/about#profile`,
      url: `${siteUrl}/about`,
      name: "About Marquetta Moore",
      description:
        "About Marquetta Moore, a creative technologist, technical writer, and systems builder working across documentation, knowledge systems, workflow design, security operations, and AI products.",
      mainEntity: {
        "@id": `${siteUrl}/#marquetta-moore`,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
    },
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
        "Creative technologist, technical writer, and systems builder with experience across cybersecurity, support, technical operations, knowledge management, workflow design, and AI product development.",
      sameAs: [contactInfo.linkedin, contactInfo.github],
      knowsAbout: [
        "Technical writing",
        "Knowledge management",
        "Workflow design",
        "Security operations",
        "AI product development",
        "Technical enablement",
        "Creative technology",
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: `${siteUrl}/about`,
        },
      ],
    },
  ],
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <StructuredData data={profileStructuredData} />
      {children}
    </>
  );
}
