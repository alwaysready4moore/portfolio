import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { MergeNotebook } from "./MergeNotebook";
import styles from "./merge-notebook.module.css";

export const metadata: Metadata = {
  title: "Merge the Union Notebook Preview | AlwaysReady4Moore",
  description:
    "A notebook-style preview of the Merge the Union team icebreaker case study.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MergeTheUnionPreviewPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <MergeNotebook />
    </main>
  );
}
