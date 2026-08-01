import Link from "next/link";
import { siteAnnouncement } from "@/data/siteAnnouncement";

export function SiteAnnouncement() {
  return (
    <Link
      href={siteAnnouncement.href}
      className="site-announcement focus-ring group"
      aria-label={`${siteAnnouncement.label}: ${siteAnnouncement.title}`}
    >
      <span className="site-announcement__label">{siteAnnouncement.label}</span>
      <span className="site-announcement__title">{siteAnnouncement.title}</span>
      <span className="site-announcement__arrow" aria-hidden="true">
        ↗
      </span>
    </Link>
  );
}
