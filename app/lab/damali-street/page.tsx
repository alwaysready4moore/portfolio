import type { Metadata } from "next";
import Link from "next/link";
import {
  BrandBadge,
  CoffeeRing,
  CyanSpark,
  MarginArrow,
  NotebookHighlight,
  NotebookPaperclip,
  NotebookTape,
  type BrandBadgeTone,
} from "@/components/brand";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Damali Street | Creative Technology Case Study",
  description:
    "An AI-assisted artist, visual identity, production workflow, and live marketing experiment created by Marquetta Moore.",
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      noimageindex: true,
    },
  },
};

const albumLinks = {
  crimsonConfetti:
    "https://open.spotify.com/album/25Wb5muzSiE6fDDvIp4yzz?si=5Hrp5iIDS--z2L96OP5HcA",
  solarPsychosis:
    "https://open.spotify.com/album/2PvFSxzu5qiYcHvs0Mubcr?si=MBSee7_DSs-ctSkRF2ij0A",
};

const publicLinks = [
  {
    label: "Listen",
    title: "Crimson Confetti",
    description:
      "The red-era album world: glam-rock confidence, romantic damage, theatrical hooks, and bright-dangerous energy.",
    href: albumLinks.crimsonConfetti,
    cta: "Open album",
    tone: "verified" as const,
  },
  {
    label: "Listen",
    title: "Solar Psychosis",
    description:
      "The yellow-era album world: heat haze, flash photography, blonde chaos, false light, and sweetness with teeth.",
    href: albumLinks.solarPsychosis,
    cta: "Open album",
    tone: "experiment" as const,
  },
  {
    label: "Press",
    title: "Folk N Rock spotlight",
    description:
      "A published Spotlight Album feature for Crimson Confetti and a public proof point for the artist world.",
    href: "https://folknrock.com/news/spotlight-album-crimson-confetti-damali-street",
    cta: "Read the spotlight",
    tone: "signal" as const,
  },
  {
    label: "Social",
    title: "Instagram",
    description:
      "Promo images, reels, lyric moments, visual experiments, campaign tests, and the ongoing artist-world build.",
    href: "https://www.instagram.com/damalistreet/",
    cta: "Open Instagram",
    tone: "experiment" as const,
  },
  {
    label: "Video",
    title: "YouTube",
    description:
      "Music, lyric-led clips, Shorts, visual experiments, and the expanding video side of the project.",
    href: "https://www.youtube.com/@DamaliStreet",
    cta: "Open YouTube",
    tone: "signal" as const,
  },
];

const projectProof = [
  {
    label: "My role",
    value:
      "Concept creator, songwriter, creative director, visual system designer, AI workflow operator, editor, publisher, and campaign strategist",
  },
  {
    label: "AI-assisted production",
    value:
      "Music generation, visual generation, video experiments, ideation, editing support, and production acceleration under human direction",
  },
  {
    label: "Human decisions",
    value:
      "Persona, lyrics, album concepts, era rules, prompts, image selection, rejected outputs, sequencing, captions, disclosure, and campaign interpretation",
  },
  {
    label: "Project status",
    value:
      "Active creative technology experiment with public releases, press coverage, social channels, and live marketing tests",
  },
];

const campaignStats = [
  {
    value: "1,806",
    label: "total reel views",
  },
  {
    value: "1,505",
    label: "accounts reached",
  },
  {
    value: "84",
    label: "total interactions",
  },
  {
    value: "52",
    label: "total follows attributed to reel activity",
  },
];

const paidStats = [
  {
    value: "$17.54",
    label: "spent of $20 budget",
  },
  {
    value: "107",
    label: "paid profile visits",
  },
  {
    value: "13",
    label: "paid follows",
  },
  {
    value: "$0.16",
    label: "cost per profile visit",
  },
];

const audienceSignals = [
  {
    title: "Strongest age band",
    value: "35–44",
    detail: "31% of the paid audience",
  },
  {
    title: "Gender skew",
    value: "89.4% men",
    detail: "A clear signal that the creative connected most with a male rock audience",
  },
  {
    title: "Top location",
    value: "England",
    detail: "27% of the paid audience",
  },
  {
    title: "Secondary region",
    value: "Ontario",
    detail: "14% of the paid audience",
  },
];

const campaignLearnings = [
  {
    title: "The artist identity felt believable.",
    description:
      "A viewer asked whether Damali was a solo artist or a band. That tiny comment is useful proof that the world-building read as an actual music project rather than a one-off AI image.",
  },
  {
    title: "The creative earned profile curiosity.",
    description:
      "The paid campaign generated 107 profile visits at $0.16 each, which is a strong early signal for a new artist identity with a tiny test budget.",
  },
  {
    title: "The audience was narrower than the brand vision.",
    description:
      "The campaign skewed heavily male and older than expected. That gives the next experiment a clear job: test whether a different song, visual direction, or targeting approach broadens the audience without weakening the rock identity.",
  },
];

const eraSystems = [
  {
    title: "Crimson Confetti",
    label: "Red era",
    thesis: "Romantic damage dressed like a victory lap.",
    visualRules: [
      "Dark hair and red-forward styling",
      "Glam-rock drama and sharp eyeliner",
      "Confetti, lipstick, smoke, and stage-light imagery",
      "Big feelings delivered with theatrical confidence",
    ],
    image: "/damali/Crimson-Confetti.png",
    href: albumLinks.crimsonConfetti,
    tone: "verified" as const,
  },
  {
    title: "Solar Psychosis",
    label: "Yellow era",
    thesis: "Too bright to trust and too pretty to ignore.",
    visualRules: [
      "Blonde hair and unmistakable red lips",
      "Solar yellow, gold, flash photography, and heat haze",
      "Gloss, spectacle, false light, and manic glamour",
      "Confidence that feels one degree away from combustion",
    ],
    image: "/damali/Solar-Psychosis.png",
    href: albumLinks.solarPsychosis,
    tone: "experiment" as const,
  },
];

const buildLayers = [
  {
    title: "Persona system",
    description:
      "A fictional artist with a consistent point of view, attitude, emotional history, visual identity, and enough specificity to make creative choices easier.",
    tone: "experiment" as const,
  },
  {
    title: "Music direction",
    description:
      "Song concepts, lyrics, hooks, track sequencing, album themes, and sonic framing built around Damali’s perspective rather than disconnected one-offs.",
    tone: "signal" as const,
  },
  {
    title: "Visual direction",
    description:
      "Era-specific hair, makeup, color, lighting, styling, typography, cover art, lyric graphics, press images, and short-form visual language.",
    tone: "verified" as const,
  },
  {
    title: "Release operations",
    description:
      "Distribution, captions, reels, YouTube Shorts, press outreach, release framing, asset planning, campaign testing, and performance review.",
    tone: "warning" as const,
  },
];

const workflow = [
  {
    step: "01",
    title: "Write the emotional thesis",
    description:
      "Define what the era is emotionally before generating songs or visuals. The thesis becomes the filter for every later decision.",
  },
  {
    step: "02",
    title: "Build the musical vocabulary",
    description:
      "Develop track ideas, lyrics, hooks, production references, emotional pacing, and the role each song plays inside the album world.",
  },
  {
    step: "03",
    title: "Direct the visual system",
    description:
      "Set non-negotiable rules for hair, makeup, color, lighting, mood, styling, typography, and recurring symbols.",
  },
  {
    step: "04",
    title: "Generate, reject, and refine",
    description:
      "Use AI tools for production speed, then apply taste aggressively: reject drift, correct identity errors, preserve era rules, and edit toward coherence.",
  },
  {
    step: "05",
    title: "Package the release",
    description:
      "Turn the work into covers, lyric visuals, captions, short-form video, platform descriptions, press materials, and campaign-ready assets.",
  },
  {
    step: "06",
    title: "Test the signal",
    description:
      "Watch how real audiences respond, compare the response with the intended identity, and use the mismatch or resonance to plan the next experiment.",
  },
];

const visualMoments = [
  {
    title: "Static Halo",
    label: "Campaign visual",
    description:
      "A lyric-led Solar Psychosis reel built around the line: “If I disappear, does the light go too?”",
    image: "/damali/static-halo-promo.png",
  },
  {
    title: "Pretty Wreckage",
    label: "Red-era throwback",
    description:
      "A Crimson Confetti visual balancing romantic ruin, confidence, and old-school rock glamour.",
    image: "/damali/pretty-wreckage-promo.png",
  },
  {
    title: "Solar Psychosis",
    label: "Era campaign",
    description:
      "Blonde hair, red lips, yellow light, and the glossy edge that defines the current album world.",
    image: "/damali/solar-psychosis-promo.png",
  },
];

const artifacts = [
  "Artist persona and voice system",
  "Two released album worlds",
  "Song concepts and original lyrical direction",
  "Era-specific visual guidelines",
  "Album covers and promotional artwork",
  "Lyric graphics and short-form video concepts",
  "Instagram and YouTube publishing system",
  "Press spotlight and outreach materials",
  "Release copy, captions, titles, and descriptions",
  "Paid social test and performance analysis",
  "Disclosure language for AI-assisted production",
  "Ongoing campaign and audience experiments",
];

const lessons = [
  {
    title: "Taste is the control layer.",
    description:
      "The tools can produce enormous amounts of material. The value comes from knowing what belongs, what drifts, what looks almost right, and what quietly breaks the character.",
  },
  {
    title: "A persona can function like a design system.",
    description:
      "Once the identity is specific enough, it helps answer practical questions: what she would sing, how she would pose, which image belongs to which era, and what a caption should sound like.",
  },
  {
    title: "Small campaigns can answer useful questions.",
    description:
      "The $20 Static Halo test was not designed to prove commercial success. It was designed to reveal whether strangers felt curious enough to stop, react, visit, follow, or treat Damali like a real artist.",
  },
];

function SectionTitle({
  kicker,
  title,
  description,
  tone = "quiet",
}: {
  kicker: string;
  title: string;
  description: string;
  tone?: BrandBadgeTone;
}) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <BrandBadge tone={tone} icon="spark">
          {kicker}
        </BrandBadge>

        <h2 className="mt-3 max-w-4xl font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
          {title}
        </h2>
      </div>

      <p className="max-w-xl leading-7 text-muted md:text-right">
        {description}
      </p>
    </div>
  );
}

function MetricCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
      <p className="font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
        {value}
      </p>

      <p className="mt-3 font-lab text-xs font-semibold uppercase tracking-[0.08em] text-muted">
        {label}
      </p>
    </article>
  );
}

function ProofCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
      <BrandBadge tone="quiet" icon="none">
        {label}
      </BrandBadge>

      <p className="mt-4 leading-7 text-ink">{value}</p>
    </article>
  );
}

function ExternalLinkCard({
  label,
  title,
  description,
  href,
  cta,
  tone,
}: {
  label: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  tone: BrandBadgeTone;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="paper-card group relative overflow-hidden p-6 transition hover:-translate-y-1 hover:border-cyan/35"
    >
      <CyanSpark
        size="sm"
        className="absolute right-5 top-5 opacity-45 transition group-hover:opacity-80"
      />

      <BrandBadge tone={tone} icon="dot">
        {label}
      </BrandBadge>

      <h3 className="mt-5 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted">{description}</p>

      <p className="mt-6 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-cyan transition group-hover:translate-x-1">
        {cta} <span aria-hidden="true">↗</span>
      </p>
    </a>
  );
}

function LayerCard({
  title,
  description,
  tone,
}: {
  title: string;
  description: string;
  tone: BrandBadgeTone;
}) {
  return (
    <article className="paper-card relative overflow-hidden p-6">
      <NotebookHighlight
        size="lg"
        className="absolute -right-3 -top-3 rotate-[-8deg] opacity-20"
      />

      <BrandBadge tone={tone} icon="dot">
        Build layer
      </BrandBadge>

      <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted">{description}</p>
    </article>
  );
}

function EraCard({
  title,
  label,
  thesis,
  visualRules,
  image,
  href,
  tone,
}: {
  title: string;
  label: string;
  thesis: string;
  visualRules: string[];
  image: string;
  href: string;
  tone: BrandBadgeTone;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="paper-card group block overflow-hidden transition hover:-translate-y-1 hover:border-cyan/35"
    >
      <div className="grid md:grid-cols-[0.72fr_1fr]">
        <div className="border-b border-[var(--border)] bg-night md:border-b-0 md:border-r">
          <img
            src={image}
            alt={`${title} Damali Street album artwork`}
            className="h-full min-h-[24rem] w-full object-cover object-top"
          />
        </div>

        <div className="p-6 md:p-8">
          <BrandBadge tone={tone} icon="dot">
            {label}
          </BrandBadge>

          <h3 className="mt-5 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
            {title}
          </h3>

          <p className="mt-4 text-xl leading-8 text-cyan">{thesis}</p>

          <ul className="mt-6 grid gap-3">
            {visualRules.map((rule) => (
              <li
                key={rule}
                className="grid grid-cols-[auto_1fr] gap-3 text-muted"
              >
                <span aria-hidden="true" className="text-cyan">
                  ◆
                </span>
                <span className="leading-7">{rule}</span>
              </li>
            ))}
          </ul>

          <p className="mt-7 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-cyan transition group-hover:translate-x-1">
            Listen on Spotify <span aria-hidden="true">↗</span>
          </p>
        </div>
      </div>
    </a>
  );
}

function VisualCard({
  title,
  label,
  description,
  image,
}: {
  title: string;
  label: string;
  description: string;
  image: string;
}) {
  return (
    <article className="paper-card overflow-hidden">
      <div className="border-b border-[var(--border)] bg-night">
        <img
          src={image}
          alt={`${title} Damali Street promotional visual`}
          className="aspect-[4/5] w-full object-cover object-top"
        />
      </div>

      <div className="p-6">
        <BrandBadge tone="experiment" icon="dot">
          {label}
        </BrandBadge>

        <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-muted">{description}</p>
      </div>
    </article>
  );
}

function WorkflowCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <article className="paper-card relative overflow-hidden p-6">
      <NotebookPaperclip
        size="md"
        className="absolute right-5 top-5 rotate-12 opacity-20"
      />

      <p className="font-lab text-sm font-semibold text-cyan">{step}</p>

      <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted">{description}</p>
    </article>
  );
}

function LearningCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  return (
    <article className="paper-card relative overflow-hidden p-6">
      <CyanSpark size="xs" className="absolute right-5 top-5 opacity-60" />

      <p className="font-lab text-sm font-semibold text-cyan">
        Learning 0{index + 1}
      </p>

      <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted">{description}</p>
    </article>
  );
}

function ArtifactList() {
  return (
    <div className="paper-card relative overflow-hidden p-6">
      <NotebookTape
        size="lg"
        className="absolute right-7 top-7 rotate-12 opacity-35"
      />

      <BrandBadge tone="quiet" icon="spark">
        Current artifacts
      </BrandBadge>

      <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
        The receipts so far.
      </h2>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {artifacts.map((artifact) => (
          <li
            key={artifact}
            className="grid grid-cols-[auto_1fr] gap-3 text-sm text-muted"
          >
            <span aria-hidden="true" className="font-lab text-cyan">
              ↳
            </span>
            <span className="leading-6">{artifact}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DamaliStreetPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <Link
          href="/lab"
          className="lab-label inline-flex items-center gap-2 text-cyan transition hover:translate-x-1"
        >
          ← Back to the lab
        </Link>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_0.65fr] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <BrandBadge tone="experiment" icon="spark">
                Creative technology case study
              </BrandBadge>

              <BrandBadge tone="quiet" icon="dot">
                Active artist experiment
              </BrandBadge>
            </div>

            <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
              Damali Street is my rock-star side quest with an actual production
              system.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              Damali started with the old dream of writing songs and performing
              them with more drama than everyday life allows. She became a
              full-stack creative experiment spanning persona design, music,
              visual identity, short-form content, release operations, press,
              disclosure, and live audience testing.
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-muted">
              The point is not whether an AI tool can generate a song or an
              image. The interesting question is whether one creative director
              can use those tools to build a coherent artist world, maintain it
              across eras, publish it, and learn from real audience response.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Creative Direction",
                "AI-Assisted Production",
                "Persona Design",
                "Music Strategy",
                "Visual Systems",
                "Campaign Testing",
              ].map((tag) => (
                <BrandBadge key={tag} tone="quiet" icon="dot">
                  {tag}
                </BrandBadge>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.youtube.com/@DamaliStreet"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-2xl border border-[#19D8E8] bg-[#19D8E8] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[#071014] shadow-[0_0_24px_rgba(25,216,232,0.24)] transition hover:-translate-y-0.5"
              >
                Open YouTube
              </a>

              <a
                href="https://www.instagram.com/damalistreet/"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-2xl border border-[var(--border)] bg-white/5 px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-0.5 hover:border-cyan/40"
              >
                Open Instagram
              </a>
            </div>
          </div>

          <aside className="paper-card overflow-hidden">
            <div className="border-b border-[var(--border)] bg-night">
              <img
                src="/damali/static-halo-promo.png"
                alt="Damali Street Static Halo promotional visual."
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>

            <div className="relative p-6">
              <CoffeeRing
                size="lg"
                className="absolute bottom-8 left-8 z-10 opacity-20"
              />

              <BrandBadge tone="experiment" icon="spark">
                Current era
              </BrandBadge>

              <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
                Blonde chaos. Solar yellow. Honey Trap energy.
              </h2>

              <p className="mt-4 leading-7 text-muted">
                Solar Psychosis is glossy, dangerous, playful, and bright enough
                to be suspicious: red lips, flash photography, heat haze, gold,
                lyric graphics, and confidence instead of pleading for
                attention.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <SectionTitle
          kicker="Project proof strip"
          title="What I directed, what AI assisted, and what shipped."
          description="The creative process is clearest when authorship and tool use are separated instead of blended into one vague AI label."
          tone="signal"
        />

        <div className="grid gap-4 md:grid-cols-2">
          {projectProof.map((item) => (
            <ProofCard key={item.label} {...item} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <SectionTitle
          kicker="Public-facing work"
          title="The artist world exists outside the portfolio."
          description="Released albums, social channels, video, and press make this a live creative system rather than a private mood board."
          tone="experiment"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {publicLinks.map((item) => (
            <ExternalLinkCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Era system"
          title="Two albums, two visual grammars, one recognizable artist."
          description="Each era has its own emotional thesis and visual rules. Damali stays recognizable because the system changes deliberately instead of drifting."
          tone="verified"
        />

        <div className="grid gap-6">
          {eraSystems.map((era) => (
            <EraCard key={era.title} {...era} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Live campaign experiment"
          title="What happened when Static Halo met strangers."
          description="A four-day Instagram promotion used a $20 maximum budget to test whether the visual and lyric concept could create curiosity around an unfamiliar artist."
          tone="signal"
        />

        <div className="paper-card relative overflow-hidden p-6 md:p-8">
          <NotebookHighlight
            size="lg"
            className="absolute -right-3 -top-3 rotate-[-8deg] opacity-20"
          />

          <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr]">
            <div>
              <BrandBadge tone="experiment" icon="spark">
                Hypothesis
              </BrandBadge>

              <h3 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
                A coherent rock persona plus an emotionally direct lyric could
                earn attention from people who had never met Damali.
              </h3>

              <p className="mt-6 leading-8 text-muted">
                The promoted reel paired a moody Solar Psychosis visual with the
                line, “If I disappear, does the light go too?” The goal was
                profile curiosity, not streaming volume or broad commercial
                proof.
              </p>

              <div className="mt-6 rounded-3xl border border-cyan/15 bg-cyan/[0.045] p-5">
                <p className="lab-label text-cyan">Unexpected proof point</p>

                <p className="mt-3 leading-7 text-muted">
                  One viewer asked whether Damali was a solo artist or a band.
                  That question mattered because it showed the identity was
                  coherent enough to be treated as a real music act.
                </p>
              </div>
            </div>

            <div>
              <p className="lab-label text-cyan">Overall reel performance</p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {campaignStats.map((stat) => (
                  <MetricCard key={stat.label} {...stat} />
                ))}
              </div>

              <p className="mt-8 lab-label text-cyan">Paid campaign results</p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {paidStats.map((stat) => (
                  <MetricCard key={stat.label} {...stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Audience signal"
          title="The first audience was specific."
          description="The ad did not produce a universal audience. It found a distinct older male rock audience, especially in England and Canada."
          tone="warning"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {audienceSignals.map((signal) => (
            <article
              key={signal.title}
              className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5"
            >
              <BrandBadge tone="warning" icon="dot">
                {signal.title}
              </BrandBadge>

              <p className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
                {signal.value}
              </p>

              <p className="mt-4 text-sm leading-6 text-muted">
                {signal.detail}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {campaignLearnings.map((item, index) => (
            <LearningCard
              key={item.title}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Build layers"
          title="What had to exist for her to feel real."
          description="The project works when persona, songs, visuals, and release operations all reinforce the same identity."
          tone="experiment"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {buildLayers.map((layer) => (
            <LayerCard key={layer.title} {...layer} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Visual proof"
          title="A few moments from the system."
          description="These assets show how the era rules carry through campaign art, lyric visuals, and release promotion."
          tone="experiment"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {visualMoments.map((moment) => (
            <VisualCard key={moment.title} {...moment} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Creative workflow"
          title="The repeatable system underneath the rock-star fantasy."
          description="The process moves from emotional thesis to music, visual rules, production, release packaging, and live testing."
          tone="verified"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {workflow.map((item) => (
            <WorkflowCard key={item.step} {...item} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <div className="grid gap-5 lg:grid-cols-[0.62fr_0.38fr]">
          <ArtifactList />

          <article className="paper-card relative overflow-hidden p-6">
            <NotebookPaperclip
              size="lg"
              className="absolute right-5 top-5 rotate-12 opacity-20"
            />

            <BrandBadge tone="warning" icon="spark">
              Disclosure
            </BrandBadge>

            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
              Fictional does not have to mean vague.
            </h2>

            <p className="mt-5 leading-7 text-muted">
              Damali Street is an AI-assisted fictional artist persona created
              and directed by Marquetta Moore. AI tools support portions of
              music, image, and video production. The persona, lyrics, creative
              direction, era systems, editing, selection, publishing, and
              campaign decisions remain human-led.
            </p>

            <p className="mt-4 leading-7 text-muted">
              The disclosure belongs anywhere listeners encounter the project,
              while the artist world itself is still allowed to be theatrical,
              emotional, and fun.
            </p>
          </article>
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="What this proves"
          title="Creative technology is not just generation."
          description="This project tests taste, system design, storytelling, tool orchestration, publishing, disclosure, and audience learning in one end-to-end build."
          tone="quiet"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {lessons.map((lesson, index) => (
            <LearningCard
              key={lesson.title}
              title={lesson.title}
              description={lesson.description}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <div className="paper-note relative overflow-hidden p-7 md:p-9">
          <MarginArrow
            size="lg"
            className="absolute right-7 top-7 rotate-6 opacity-25"
          />

          <CyanSpark
            size="md"
            className="absolute bottom-7 right-8 opacity-60"
          />

          <p className="field-heading max-w-5xl text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            Damali Street lets me test the whole creative stack: writing, taste,
            direction, AI-assisted production, visual systems, publishing,
            marketing, disclosure, and the very serious business of making a
            fictional rock star feel emotionally real.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/lab"
              className="focus-ring rounded-2xl border border-[#19D8E8] bg-[#19D8E8] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[#071014] shadow-[0_0_24px_rgba(25,216,232,0.24)] transition hover:-translate-y-0.5"
            >
              Back to the lab
            </Link>

            <Link
              href="/work"
              className="focus-ring rounded-2xl border border-[var(--paper-line)] bg-white/40 px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[var(--paper-ink)] transition hover:-translate-y-0.5"
            >
              See the work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
