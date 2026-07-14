import type { Metadata } from "next";
import { OutdatedBrowserGuide } from "@/components/interactive-guides/OutdatedBrowserGuide";

export const metadata: Metadata = {
  title: "Outdated Browser Troubleshooting | Always Ready 4 Moore",
  description:
    "An interactive diagnostic lesson for browser, system-time, Windows update, and network-related login failures.",
};

export default function OutdatedBrowserPage() {
  return <OutdatedBrowserGuide />;
}
