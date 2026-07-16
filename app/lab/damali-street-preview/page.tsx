import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { DamaliNotebook } from "./DamaliNotebook";
import styles from "./damali-notebook.module.css";

export const metadata: Metadata = {
  title: "Damali Street Notebook Preview | AlwaysReady4Moore",
  description:
    "A scrapbook-style preview of the Damali Street creative technology case study.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DamaliStreetPreviewPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <DamaliNotebook />
    </main>
  );
}
