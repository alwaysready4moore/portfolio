import type { Metadata } from "next";
import { SpicyUsersGuide } from "@/components/interactive-guides/SpicyUsersGuide";

export const metadata: Metadata = {
  title: "Navigating Spicy Users | Always Ready 4 Moore",
  description:
    "An interactive teaching module for staying grounded, de-escalating tense customer interactions, setting boundaries, escalating appropriately, and recovering afterward.",
};

export default function SpicyUsersPage() {
  return <SpicyUsersGuide />;
}
