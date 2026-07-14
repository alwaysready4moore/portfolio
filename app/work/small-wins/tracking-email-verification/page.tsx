import type { Metadata } from "next";
import { TrackingEmailVerificationGuide } from "@/components/interactive-guides/TrackingEmailVerificationGuide";

export const metadata: Metadata = {
  title: "Tracking Email Verification | Always Ready 4 Moore",
  description:
    "An interactive lesson about domain ownership, SPF, DKIM, DMARC, and email verification using a party invitation metaphor.",
};

export default function TrackingEmailVerificationPage() {
  return <TrackingEmailVerificationGuide />;
}
