import { StructuredData } from "@/components/StructuredData";
import { fieldNotes } from "@/data/fieldNotes";

const siteUrl = "https://www.alwaysready4moore.com";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    slug: string;
  }>;
};

export default async function FieldNoteLayout({
  children,
  params,
}: LayoutProps) {
  const { slug } = await params;
  const note = fieldNotes.find((item) => item.slug === slug);

  if (!note) {
    return children;
  }

  const articleUrl = `${siteUrl}/field-notes/${note.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${articleUrl}#article`,
        headline: note.title,
        description: note.description,
        image: [`${siteUrl}${note.image}`],
        datePublished: note.publishedAt,
        dateModified: note.publishedAt,
        articleSection: note.category,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": articleUrl,
        },
        author: {
          "@type": "Person",
          "@id": `${siteUrl}/#marquetta-moore`,
          name: "Marquetta Moore",
          url: `${siteUrl}/about`,
        },
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        inLanguage: "en-US",
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
            name: "Field Notes",
            item: `${siteUrl}/field-notes`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: note.title,
            item: articleUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <StructuredData data={structuredData} />
      {children}
    </>
  );
}
