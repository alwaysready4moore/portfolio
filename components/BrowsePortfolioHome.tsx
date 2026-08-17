"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { PhoenixMark } from "@/components/brand";
import { featuredSystems } from "@/data/featuredSystems";
import { fieldNotes } from "@/data/fieldNotes";
import { labExperiments } from "@/data/labExperiments";
import styles from "./BrowsePortfolioHome.module.css";

type AudienceKey = "hiring" | "building" | "thinking" | "exploring";
type RailKey = "systems" | "technical" | "writing" | "lab";

type BrowseCard = {
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  image?: string;
  imageAlt?: string;
  tags?: readonly string[];
  metric?: string;
};

const audienceProfiles: Record<
  AudienceKey,
  {
    label: string;
    contextLabel: string;
    contextTitle: string;
    description: string;
    heroHref: string;
    heroCta: string;
    heroVisual: "aegis-results" | "aegis-input" | "decision-flow" | "damali";
    start: readonly string[];
    railOrder: readonly RailKey[];
  }
> = {
  hiring: {
    label: "Hiring",
    contextLabel: "Hiring view",
    contextTitle: "Start with shipped work, ownership, and evidence.",
    description:
      "A quick route through technical writing, workflow systems, AI products, and the proof behind them.",
    heroHref: "/work/aegis",
    heroCta: "View Aegis",
    heroVisual: "aegis-results",
    start: [
      "/technical-writing",
      "/work/aegis",
      "/work/new-analyst-tool",
      "/work/knowledge-systems",
    ],
    railOrder: ["technical", "systems", "writing", "lab"],
  },
  building: {
    label: "Built work",
    contextLabel: "Build view",
    contextTitle: "See the tools before you read the explanation.",
    description:
      "Working prototypes, embedded workflow tools, AI systems, and the decisions that shaped them.",
    heroHref: "/work/aegis",
    heroCta: "Open the case study",
    heroVisual: "aegis-input",
    start: [
      "/work/aegis",
      "/work/new-analyst-tool",
      "/work/launchpad",
      "/technical-writing",
    ],
    railOrder: ["systems", "technical", "lab", "writing"],
  },
  thinking: {
    label: "How I think",
    contextLabel: "Process view",
    contextTitle: "Start with the decisions, tradeoffs, and documentation.",
    description:
      "Follow the reasoning behind the workflow: what people need to know, where judgment belongs, and what should happen next.",
    heroHref: "/work/suspicious-email-triage",
    heroCta: "Read the playbook",
    heroVisual: "decision-flow",
    start: [
      "/technical-writing",
      "/work/knowledge-systems",
      "/work/aegis",
      "/work/new-analyst-tool",
    ],
    railOrder: ["technical", "systems", "writing", "lab"],
  },
  exploring: {
    label: "Surprise me",
    contextLabel: "Exploration view",
    contextTitle: "Take the side door through the lab.",
    description:
      "Creative technology, writing, product experiments, systems work, and projects that began with a very specific question.",
    heroHref: "/lab/damali-street",
    heroCta: "Meet Damali Street",
    heroVisual: "damali",
    start: [
      "/work/aegis",
      "/technical-writing",
      "/work/new-analyst-tool",
      "/work/knowledge-systems",
    ],
    railOrder: ["lab", "systems", "writing", "technical"],
  },
};

const proofSignals = [
  { value: "774", label: "knowledge pages governed" },
  { value: "3,100+", label: "knowledge-system edits" },
  { value: "30+", label: "tool releases" },
  { value: "100%", label: "adjusted CSAT across 200+ reviews" },
] as const;

const technicalWritingCards: BrowseCard[] = [
  {
    eyebrow: "Security playbook",
    title: "Suspicious Email Triage",
    description:
      "A decision-focused playbook for collecting evidence, assigning severity, escalating consistently, and recording defensible case notes.",
    href: "/work/suspicious-email-triage",
    tags: ["Triage", "Security", "Decision support"],
  },
  {
    eyebrow: "Access workflow",
    title: "Access Request Provisioning",
    description:
      "Workflow documentation for validating access requests, provisioning safely, and preserving an audit trail.",
    href: "/work/access-request-provisioning",
    tags: ["IAM", "Workflow", "Escalation"],
  },
  {
    eyebrow: "Knowledge operations",
    title: "Knowledge Base Governance",
    description:
      "A repeatable governance model for ownership, review cadence, lifecycle decisions, and reliable knowledge maintenance.",
    href: "/work/knowledge-base-governance",
    tags: ["Governance", "Knowledge management", "Maintenance"],
  },
];

const labCards: BrowseCard[] = [
  {
    eyebrow: "Creative identity system",
    title: "Damali Street",
    description:
      "A fictional artist project spanning character design, music, visual eras, content production, and creative direction.",
    href: "/lab/damali-street",
    image: "/damali/Solar-Psychosis.png",
    imageAlt: "Solar Psychosis era artwork for the Damali Street creative identity project.",
    tags: ["Creative direction", "Generative media", "Brand system"],
  },
  ...labExperiments.map((item) => ({
    eyebrow: item.type,
    title: item.title,
    description: item.description,
    href: item.href,
    image:
      item.title === "Moore Family Print Shop"
        ? "/lab/moore-family-print-shop/moore-family-print-shop-logo.png"
        : item.title === "Merge the Union"
          ? "/lab/merge-the-union/logo.png"
          : undefined,
    imageAlt:
      item.title === "Moore Family Print Shop"
        ? "Moore Family Print Shop logo."
        : item.title === "Merge the Union"
          ? "Merge the Union game logo."
          : undefined,
    tags: item.tags,
  })),
];

function systemToCard(project: (typeof featuredSystems)[number]): BrowseCard {
  return {
    eyebrow: project.eyebrow,
    title: project.title,
    description: project.description,
    href: project.href,
    image: "image" in project ? project.image : undefined,
    imageAlt: "imageAlt" in project ? project.imageAlt : undefined,
    tags: project.tags,
    metric:
      project.href === "/work/aegis"
        ? "5-day build"
        : project.href === "/work/new-analyst-tool"
          ? "30+ releases"
          : project.href === "/work/knowledge-systems"
            ? "774 governed pages"
            : undefined,
  };
}

function TechnicalWritingCover() {
  return (
    <div className={styles.vectorCover} aria-hidden="true">
      <div className={styles.coverSignal}>Operational documentation system</div>
      <svg viewBox="0 0 640 360" className={styles.coverSvg}>
        <g fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="114" y="82" width="260" height="166" rx="18" opacity=".22" />
          <rect x="145" y="62" width="260" height="166" rx="18" opacity=".38" />
          <rect x="176" y="42" width="260" height="166" rx="18" opacity=".78" />
          <path d="M210 83h98M210 108h178M210 133h145" opacity=".8" />
          <path d="M210 166h110" opacity=".5" />
          <path d="M480 92v124" opacity=".18" />
          <path d="M470 124h20M470 154h20M470 184h20" opacity=".55" />
          <circle cx="480" cy="124" r="5" fill="currentColor" />
          <circle cx="480" cy="154" r="5" fill="currentColor" />
          <circle cx="480" cy="184" r="5" fill="currentColor" />
        </g>
        <text x="191" y="282" className={styles.svgLabel}>TRIAGE</text>
        <text x="285" y="282" className={styles.svgLabel}>ACCESS</text>
        <text x="392" y="282" className={styles.svgLabel}>GOVERN</text>
      </svg>
    </div>
  );
}

function EmailTriageCover() {
  return (
    <div className={styles.vectorCover} aria-hidden="true">
      <div className={styles.coverSignal}>Evidence → decision → escalation</div>
      <svg viewBox="0 0 640 360" className={styles.coverSvg}>
        <g fill="none" stroke="currentColor" strokeWidth="2.2">
          <rect x="92" y="104" width="178" height="124" rx="20" opacity=".78" />
          <path d="M105 124l76 56 76-56" opacity=".82" />
          <path d="M105 210l54-48M257 210l-54-48" opacity=".35" />
          <path d="M318 166h70" opacity=".55" />
          <path d="M374 151l18 15-18 15" opacity=".55" />
          <path d="M452 98l70 23v52c0 47-27 78-70 98-43-20-70-51-70-98v-52l70-23z" opacity=".82" />
          <path d="M421 178l23 24 42-52" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="318" cy="166" r="7" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function AccessCover() {
  return (
    <div className={styles.vectorCover} aria-hidden="true">
      <div className={styles.coverSignal}>Request → verify → provision → record</div>
      <svg viewBox="0 0 640 360" className={styles.coverSvg}>
        <g fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="126" cy="170" r="42" opacity=".78" />
          <path d="M108 169l14 14 25-30" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M172 170h86" opacity=".5" />
          <rect x="258" y="126" width="104" height="88" rx="16" opacity=".8" />
          <path d="M285 151h50M285 172h35M285 193h43" opacity=".55" />
          <path d="M362 170h82" opacity=".5" />
          <path d="M430 155l18 15-18 15" opacity=".5" />
          <rect x="448" y="112" width="104" height="116" rx="18" opacity=".82" />
          <path d="M478 147h44M478 171h44M478 195h27" opacity=".55" />
          <circle cx="258" cy="170" r="6" fill="currentColor" />
          <circle cx="448" cy="170" r="6" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function GovernanceCover() {
  return (
    <div className={styles.vectorCover} aria-hidden="true">
      <div className={styles.coverSignal}>Own → review → maintain → retire</div>
      <svg viewBox="0 0 640 360" className={styles.coverSvg}>
        <g fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="320" cy="174" r="106" opacity=".26" />
          <path d="M320 68a106 106 0 0 1 91 52" opacity=".78" />
          <path d="M411 120l-3-31 28 15" opacity=".78" />
          <path d="M426 174a106 106 0 0 1-52 91" opacity=".62" />
          <path d="M374 265l31 3-15 28" opacity=".62" />
          <path d="M320 280a106 106 0 0 1-91-52" opacity=".5" />
          <path d="M229 228l3 31-28-15" opacity=".5" />
          <path d="M214 174a106 106 0 0 1 52-91" opacity=".4" />
          <path d="M266 83l-31-3 15-28" opacity=".4" />
          <rect x="278" y="128" width="84" height="94" rx="15" opacity=".85" />
          <path d="M296 153h48M296 176h48M296 199h31" opacity=".62" />
        </g>
      </svg>
    </div>
  );
}

function AbstractCover({ eyebrow }: { eyebrow: string }) {
  return (
    <div className={styles.abstractCover} aria-hidden="true">
      <div className={styles.coverSignal}>{eyebrow}</div>
      <span className={styles.coverNodeOne} />
      <span className={styles.coverNodeTwo} />
      <span className={styles.coverNodeThree} />
      <span className={styles.coverLineOne} />
      <span className={styles.coverLineTwo} />
      <span className={styles.coverRing} />
    </div>
  );
}

function CardCover({ card }: { card: BrowseCard }) {
  if (card.href === "/technical-writing") {
    return <TechnicalWritingCover />;
  }

  if (card.href === "/work/suspicious-email-triage") {
    return <EmailTriageCover />;
  }

  if (card.href === "/work/access-request-provisioning") {
    return <AccessCover />;
  }

  if (card.href === "/work/knowledge-base-governance") {
    return <GovernanceCover />;
  }

  if (card.image) {
    return (
      <img
        src={card.image}
        alt={card.imageAlt ?? ""}
        className={styles.cardImage}
      />
    );
  }

  return <AbstractCover eyebrow={card.eyebrow} />;
}

function BrowseCardView({
  card,
  feature = false,
  editorial = false,
}: {
  card: BrowseCard;
  feature?: boolean;
  editorial?: boolean;
}) {
  return (
    <Link
      href={card.href}
      className={`${styles.card} ${feature ? styles.cardFeature : ""} ${
        editorial ? styles.cardEditorial : ""
      }`}
      aria-label={`Open ${card.title}`}
    >
      <div className={styles.cardVisual}>
        <CardCover card={card} />

        <div className={styles.cardScrim} />

        {card.metric ? (
          <span className={styles.metricPill}>{card.metric}</span>
        ) : null}
      </div>

      <div className={styles.cardDetails}>
        <span className={styles.cardEyebrow}>{card.eyebrow}</span>
        <h3>{card.title}</h3>
        <p>{card.description}</p>

        {card.tags?.length ? (
          <div className={styles.tags}>
            {card.tags.slice(0, 3).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        ) : null}

        <span className={styles.cardCta}>Open project →</span>
      </div>
    </Link>
  );
}

function Rail({
  eyebrow,
  title,
  href,
  cards,
  editorial = false,
}: {
  eyebrow: string;
  title: string;
  href?: string;
  cards: BrowseCard[];
  editorial?: boolean;
}) {
  return (
    <section className={styles.railSection}>
      <div className={styles.railHeading}>
        <div>
          <span className={styles.railEyebrow}>{eyebrow}</span>
          <h2>{title}</h2>
        </div>

        {href ? <Link href={href}>View all →</Link> : null}
      </div>

      <div className={`${styles.rail} ${editorial ? styles.railEditorial : ""}`}>
        {cards.map((card) => (
          <BrowseCardView
            key={`${card.href}-${card.title}`}
            card={card}
            editorial={editorial}
          />
        ))}
      </div>
    </section>
  );
}

function RecommendedSection({ cards }: { cards: BrowseCard[] }) {
  const [feature, ...rest] = cards;

  if (!feature) {
    return null;
  }

  return (
    <section className={styles.recommendedSection}>
      <div className={styles.railHeading}>
        <div>
          <span className={styles.railEyebrow}>Recommended for this view</span>
          <h2>Start here</h2>
        </div>
        <span className={styles.recommendationHint}>Reordered, not filtered</span>
      </div>

      <div className={styles.recommendedGrid}>
        <BrowseCardView card={feature} feature />
        {rest.map((card) => (
          <BrowseCardView key={`${card.href}-${card.title}`} card={card} />
        ))}
      </div>
    </section>
  );
}

function HeroVisual({
  type,
}: {
  type:
    | "aegis-results"
    | "aegis-input"
    | "decision-flow"
    | "damali";
}) {
  if (type === "decision-flow") {
    return (
      <div className={styles.decisionArtifact}>
        <div className={styles.artifactTopline}>
          <span>Suspicious Email Triage</span>
          <span>Decision flow</span>
        </div>

        <div className={styles.flowStack}>
          <div>
            <span>01</span>
            <strong>Collect evidence</strong>
            <small>Sender context · authentication · links · attachments</small>
          </div>
          <div>
            <span>02</span>
            <strong>Assess the report</strong>
            <small>Separate observable evidence from suspicion</small>
          </div>
          <div>
            <span>03</span>
            <strong>Assign severity</strong>
            <small>Place risk after analysis, not before it</small>
          </div>
          <div>
            <span>04</span>
            <strong>Escalate + record</strong>
            <small>Keep the authority boundary and case notes visible</small>
          </div>
        </div>

        <div className={styles.flowFooter}>
          Evidence-led decisions · consistent escalation · defensible notes
        </div>
      </div>
    );
  }

  const src =
    type === "damali"
      ? "/damali/Solar-Psychosis.png"
      : type === "aegis-input"
        ? "/screenshots/aegis/aegis-01-input.png"
        : "/screenshots/aegis/aegis-02-sample-results.png";

  const label =
    type === "damali"
      ? "Damali Street / creative system"
      : type === "aegis-input"
        ? "Aegis / working interface"
        : "Aegis / sample output";

  const alt =
    type === "damali"
      ? "Solar Psychosis artwork from the Damali Street creative identity system."
      : type === "aegis-input"
        ? "Aegis input interface for analyzing competitor landing pages."
        : "Aegis sample analysis output showing Spyglass analysis and generated campaign directions.";

  return (
    <div className={`${styles.imageArtifact} ${type === "damali" ? styles.damaliArtifact : ""}`}>
      <div className={styles.artifactTopline}>
        <span>{label}</span>
        <span>Selected artifact</span>
      </div>
      <img src={src} alt={alt} />
    </div>
  );
}

export function BrowsePortfolioHome() {
  const [audience, setAudience] = useState<AudienceKey>("hiring");
  const profile = audienceProfiles[audience];

  const systemCards = useMemo(() => featuredSystems.map(systemToCard), []);

  const startCards = useMemo(
    () =>
      profile.start
        .map((href) =>
          systemCards.find((project) => project.href === href),
        )
        .filter((project): project is BrowseCard => Boolean(project)),
    [profile.start, systemCards],
  );

  const writingCards = useMemo(
    () =>
      fieldNotes.slice(0, 6).map((note) => ({
        eyebrow: note.category,
        title: note.title,
        description: note.description,
        href: `/field-notes/${note.slug}`,
        image: note.image,
        imageAlt: note.imageAlt,
        tags: [`${note.readingMinutes} min read`],
      })),
    [],
  );

  const railData: Record<
    RailKey,
    {
      eyebrow: string;
      title: string;
      href: string;
      cards: BrowseCard[];
      editorial?: boolean;
    }
  > = {
    systems: {
      eyebrow: "Built work",
      title: "Systems and tools",
      href: "/work",
      cards: systemCards.filter((card) => card.href !== "/technical-writing"),
    },
    technical: {
      eyebrow: "Documentation that does work",
      title: "Technical writing and playbooks",
      href: "/technical-writing",
      cards: technicalWritingCards,
    },
    writing: {
      eyebrow: "Essays and analysis",
      title: "Field Notes",
      href: "/field-notes",
      cards: writingCards,
      editorial: true,
    },
    lab: {
      eyebrow: "Experiments and creative systems",
      title: "From the Lab",
      href: "/lab",
      cards: labCards,
    },
  };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link
          href="/"
          className={styles.brand}
          aria-label="Marquetta Moore home"
        >
          <span className={styles.brandMark}>
            <PhoenixMark
              variant="standard"
              size="sm"
              decorative
              className="h-8 w-8"
            />
          </span>

          <span>
            <strong>Marquetta Moore</strong>
            <small>AlwaysReady4Moore.com</small>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Primary navigation">
          <Link href="/work">Work</Link>
          <Link href="/technical-writing">Technical Writing</Link>
          <Link href="/field-notes">Field Notes</Link>
          <Link href="/lab">Lab</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/resume" className={styles.navResume}>
            Résumé
          </Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />

        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.identityLine}>
              Creative technologist · technical writer · systems builder
            </div>

            <h1>
              I build systems that help people find the
              <span>right answer.</span>
            </h1>

            <div className={styles.viewContext}>
              <span>{profile.contextLabel}</span>
              <strong>{profile.contextTitle}</strong>
              <p>{profile.description}</p>
            </div>

            <div className={styles.heroActions}>
              <Link href={profile.heroHref} className={styles.primaryAction}>
                {profile.heroCta}
              </Link>
              <Link href="/work" className={styles.secondaryAction}>
                Browse all work
              </Link>
            </div>
          </div>

          <div className={styles.heroPreview}>
            <HeroVisual type={profile.heroVisual} />
          </div>
        </div>
      </section>

      <section
        className={styles.audienceSection}
        aria-labelledby="choose-view-heading"
      >
        <div className={styles.audienceIntro}>
          <span>Browse mode</span>
          <h2 id="choose-view-heading">What are you here to see?</h2>
          <p>Change the order and emphasis. Nothing gets hidden.</p>
        </div>

        <div className={styles.audienceChoices}>
          {(Object.keys(audienceProfiles) as AudienceKey[]).map((key) => (
            <button
              type="button"
              key={key}
              onClick={() => setAudience(key)}
              className={
                audience === key
                  ? styles.audienceActive
                  : styles.audienceButton
              }
              aria-pressed={audience === key}
            >
              <span className={styles.choiceDot} aria-hidden="true" />
              {audienceProfiles[key].label}
            </button>
          ))}
        </div>
      </section>

      <section className={styles.proofStrip} aria-label="Selected proof">
        {proofSignals.map((signal) => (
          <div key={signal.value}>
            <strong>{signal.value}</strong>
            <span>{signal.label}</span>
          </div>
        ))}
      </section>

      <div className={styles.browseArea}>
        <RecommendedSection cards={startCards} />

        {profile.railOrder.map((key) => {
          const rail = railData[key];

          return (
            <Rail
              key={key}
              eyebrow={rail.eyebrow}
              title={rail.title}
              href={rail.href}
              cards={rail.cards}
              editorial={rail.editorial}
            />
          );
        })}
      </div>

      <section className={styles.closingPanel}>
        <span>One portfolio, several ways in.</span>
        <h2>Need the short version?</h2>
        <p>
          I design documentation, workflows, and technical systems that make
          complex work easier to understand and easier to use.
        </p>

        <div>
          <Link href="/resume" className={styles.primaryAction}>
            View résumé
          </Link>
          <Link href="/contact" className={styles.secondaryAction}>
            Contact me
          </Link>
        </div>
      </section>
    </main>
  );
}
