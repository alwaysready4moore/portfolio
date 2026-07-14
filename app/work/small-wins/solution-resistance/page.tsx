import type { Metadata } from "next";
import { SolutionResistanceGuide } from "@/components/interactive-guides/SolutionResistanceGuide";

export const metadata: Metadata = {
  title: "Navigating Solution Resistance | Always Ready 4 Moore",
  description:
    "An interactive customer-support conversation lesson about validation, clarity, compassionate boundaries, alternative support, and respectful closure.",
};

export default function SolutionResistancePage() {
  return <SolutionResistanceGuide />;
}
