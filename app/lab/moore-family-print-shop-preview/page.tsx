import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { PrintShopNotebook } from "./PrintShopNotebook";
import styles from "./print-shop-notebook.module.css";

export const metadata: Metadata = {
  title: "Moore Family Print Shop Notebook Preview | AlwaysReady4Moore",
  description:
    "A graph-paper notebook preview of the Moore Family Print Shop maker systems case study.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MooreFamilyPrintShopPreviewPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <PrintShopNotebook />
    </main>
  );
}
