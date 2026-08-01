export type Publication = {
  title: string;
  subtitle: string;
  publication: string;
  publishedAt: string;
  category: string;
  status: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export const publications: Publication[] = [
  {
    title: "Welcome to New Reaper Onboarding",
    subtitle: "We’re dead serious about your success!",
    publication: "Points in Case",
    publishedAt: "July 31, 2026",
    category: "Humor",
    status: "Paid publication",
    description:
      "A corporate onboarding guide for newly hired Grim Reapers, published by Points in Case.",
    href: "https://www.pointsincase.com/articles/welcome-to-new-reaper-onboarding",
    imageSrc: "/publications/points-in-case-new-reaper-onboarding.png",
    imageAlt:
      "Points in Case article page for Welcome to New Reaper Onboarding by Marquetta Moore.",
  },
];
