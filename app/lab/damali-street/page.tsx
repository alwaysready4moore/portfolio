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
  PhoenixMark,
  type BrandBadgeTone,
} from "@/components/brand";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Damali Street | The Lab | AlwaysReady4Moore",
  description:
    "Damali Street is an AI-assisted rock artist persona and creative operations experiment by Marquetta Moore.",
};

const damaliLinks = [
  {
    label: "Press",
    title: "Folk N Rock spotlight",
    description:
      "A published Spotlight Album writeup for Crimson Confetti and a useful public proof point for the Damali Street artist world.",
    href: "https://folknrock.com/news/spotlight-album-crimson-confetti-damali-street",
    cta: "Read the spotlight",
    tone: "verified" as const,
  },
  {
    label: "Social",
    title: "Instagram",
    description:
      "The public Damali Street visual feed: promo images, reel concepts, lyric moments, era styling, and the ongoing artist-world build.",
    href: "https://www.instagram.com/damalistreet/",
    cta: "Open Instagram",
    tone: "experiment" as const,
  },
  {
    label: "Video",
    title: "YouTube",
    description:
      "The public YouTube home for Damali Street music, shorts, lyric-led clips, and future video experiments.",
    href: "https://www.youtube.com/@DamaliStreet",
    cta: "Open YouTube",
    tone: "signal" as const,
  },
];

const projectStats = [
  {
    label: "Project type",
    value: "Artist build",
  },
  {
    label: "Status",
    value: "Active experiment",
  },
  {
    label: "Proof style",
    value: "Creative system",
  },
];

const buildLayers = [
  {
    title: "Persona",
    description:
      "A fictional rock-star identity with a voice, attitude, eras, visual rules, and enough emotional gravity to feel like more than a random character sheet.",
    tone: "experiment" as const,
  },
  {
    title: "Music direction",
    description:
      "Song concepts, lyrics, hooks, moods, and release framing shaped around Damali’s point of view instead of treating songs like disconnected one-offs.",
    tone: "signal" as const,
  },
  {
    title: "Visual world",
    description:
      "Press-photo experiments, cover-art directions, lyric graphics, short-form visuals, and era-specific styling, including the blonde Solar Psychosis / yellow-era lane.",
    tone: "verified" as const,
  },
  {
    title: "Promo system",
    description:
      "Captions, reel ideas, YouTube Shorts framing, early paid-ad testing, and PR packet thinking that turn the project into something publishable.",
    tone: "warning" as const,
  },
];

const visualMoments = [
  {
    title: "Crimson Confetti",
    label: "Album world",
    description:
      "The darker, glam-rock side of Damali: romantic damage, theatrical confidence, and big feelings with sharp eyeliner.",
    image: "/damali/Crimson-Confetti.png",
  },
  {
    title: "Solar Psychosis",
    label: "Yellow era",
    description:
      "The blonde, heat-hazed lane: glossy, dangerous, bright enough to make you squint, and very much not asking permission.",
    image: "/damali/Solar-Psychosis.png",
  },
  {
    title: "Static Halo",
    label: "Lyric visual",
    description:
      "A moody promo frame built around the question: if I disappear, does the light go too?",
    image: "/damali/static-halo-promo.png",
  },
];

const galleryImages = [
  {
    title: "Solar Psychosis promo",
    image: "/damali/solar-psychosis-promo.png",
  },
  {
    title: "Crimson Confetti promo",
    image: "/damali/crimson-confetti-promo.png",
  },
  {
    title: "Artist concept",
    image: "/damali/concept1.png",
  },
  {
    title: "Pretty Wreckage promo",
    image: "/damali/pretty-wreckage-promo.png",
  },
];

const artifacts = [
  "Rock artist persona and voice",
  "Song concepts and lyrical direction",
  "Crimson Confetti press spotlight",
  "Honey Trap reel / short-form concepts",
  "Static halo visual direction",
  "Press-kit photo explorations",
  "Blonde and original-hair visual variants",
  "Release copy and captions",
  "Instagram and YouTube channel setup",
  "Early paid-ad testing ideas",
  "PR / promo packet planning",
];

const lessons = [
  {
    title: "Coherence matters more than scale at this stage.",
    description:
      "Damali’s numbers are early and modest. The stronger signal is the system: can the music, visuals, copy, persona, and promo logic all feel like they belong to the same artist?",
  },
  {
    title: "AI still needs taste, boundaries, and correction.",
    description:
      "The workflow only works when I direct it: choosing the right image, rejecting the wrong face, protecting the character, correcting weird outputs, and keeping the project from drifting.",
  },
  {
    title: "A persona can be an operating system.",
    description:
      "Once the identity is clear, it starts making decisions easier: what she would sing, how she would pose, what a caption should sound like, and which visuals fit the era.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Define the artist",
    description:
      "Start with the dream: a rock-star persona with enough specificity to guide songs, visuals, and promotion.",
  },
  {
    step: "02",
    title: "Build the world",
    description:
      "Create the look, the eras, the songs, the mood, the press language, and the recurring visual signals.",
  },
  {
    step: "03",
    title: "Make it publishable",
    description:
      "Turn ideas into assets: cover concepts, reels, Shorts, captions, press-kit pieces, and portfolio-ready storytelling.",
  },
  {
    step: "04",
    title: "Test the signal",
    description:
      "Watch what feels coherent, what gets a reaction, what needs correction, and what deserves a bigger campaign later.",
  },
];

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-4">
      <p className="lab-label text-muted">{label}</p>

      <p className="mt-3 font-display text-2xl font-bold leading-none tracking-[-0.04em] text-ink">
        {value}
      </p>
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

      <h2 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h2>

      <p className="mt-4 leading-7 text-muted">{description}</p>
    </article>
  );
}

function VisualMomentCard({
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
    <article className="paper-card overflow-hidden transition hover:-translate-y-1 hover:border-cyan/35">
      <div className="relative border-b border-[var(--border)] bg-night">
        <img
          src={image}
          alt={`${title} Damali Street visual`}
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

function GalleryCard({ title, image }: { title: string; image: string }) {
  return (
    <article className="paper-card overflow-hidden">
      <div className="bg-night">
        <img
          src={image}
          alt={`${title} Damali Street visual`}
          className="aspect-[3/4] w-full object-cover object-top"
        />
      </div>

      <div className="border-t border-[var(--border)] p-4">
        <p className="font-lab text-xs font-semibold uppercase tracking-[0.08em] text-cyan">
          {title}
        </p>
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

function LessonCard({
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
        Lesson 0{index + 1}
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
            <span className="font-lab text-cyan">↳</span>
            <span className="leading-6">{artifact}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DisclosureCard() {
  return (
    <article className="paper-card relative overflow-hidden p-6">
      <NotebookPaperclip
        size="lg"
        className="absolute right-5 top-5 rotate-12 opacity-20"
      />

      <BrandBadge tone="warning" icon="spark">
        Disclosure rollout
      </BrandBadge>

      <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
        The public disclosure belongs where the audience meets her.
      </h2>

      <p className="mt-5 leading-7 text-muted">
        Damali Street is being presented here as an AI-assisted artist persona
        and creative operations experiment. The broader disclosure work is meant
        for her public-facing surfaces too: social profiles, release copy,
        streaming or distribution metadata where available, and any other place
        listeners meet the project directly.
      </p>

      <p className="mt-4 leading-7 text-muted">
        The goal is simple: make the creative process clear without draining the
        fun out of the artist world. Damali can be theatrical, fictional, and
        AI-assisted while still being honest about what she is.
      </p>
    </article>
  );
}

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

        <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
          {title}
        </h2>
      </div>

      <p className="max-w-xl leading-7 text-muted md:text-right">
        {description}
      </p>
    </div>
  );
}

export default function DamaliStreetPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <div className="flex flex-wrap items-center gap-3">
          <BrandBadge tone="experiment" icon="spark">
            The Lab
          </BrandBadge>

          <BrandBadge tone="quiet" icon="dot">
            Artist build
          </BrandBadge>
        </div>

        <div className="mt-5 grid gap-8 lg:grid-cols-[0.9fr_0.6fr] lg:items-start">
          <div>
            <div className="mb-5 flex items-start gap-4">
              <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan/20 bg-[#101820] sm:flex">
                <PhoenixMark
                  variant="standard"
                  size="lg"
                  decorative
                  className="h-12 w-12"
                />
              </div>

              <h1 className="max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
                Damali Street is my rock-star side quest with a production
                plan.
              </h1>
            </div>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              Damali started with the old dream of writing songs and performing
              them with a little more drama than everyday life allows. Then it
              became a full creative systems experiment: persona, music,
              visuals, copy, reels, release framing, social presence, press
              outreach, and early marketing tests.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              The proof here is the build. I wanted to see whether I could make
              an AI-assisted artist feel coherent across every touch: the songs,
              the photos, the attitude, the era, the caption, the promo packet,
              and the tiny “you don’t even know you already lost” smirk.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "AI-Assisted Artist Project",
                "Creative Direction",
                "Persona System",
                "Music Marketing",
                "Visual Identity",
                "Short-Form Content",
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
            <div className="relative border-b border-[var(--border)] bg-night">
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
                The current Damali lane is glossy, dangerous, playful, and a
                little theatrical: lyric graphics, static-halo visuals, honey
                imagery, direct-to-camera smirks, and short-form promo built
                around confidence instead of begging for attention.
              </p>

              <div className="mt-6 grid gap-3">
                {projectStats.map((stat) => (
                  <StatCard key={stat.label} {...stat} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <SectionTitle
          kicker="Listen, watch, follow"
          title="The public-facing pieces."
          description="This is where the side quest starts looking less like a private experiment and more like an actual artist world."
          tone="experiment"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {damaliLinks.map((item) => (
            <ExternalLinkCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <SectionTitle
          kicker="Visual system"
          title="A few eras, one artist world."
          description="The pictures do a lot of the storytelling here: album energy, yellow-era drama, lyric visuals, and the kind of promo language that makes Damali feel like she has history."
          tone="experiment"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {visualMoments.map((moment) => (
            <VisualMomentCard key={moment.title} {...moment} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <SectionTitle
          kicker="Build layers"
          title="What had to exist for her to feel real."
          description="The project works when the persona, songs, visuals, and promotional language all point in the same direction."
          tone="experiment"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {buildLayers.map((layer) => (
            <LayerCard
              key={layer.title}
              title={layer.title}
              description={layer.description}
              tone={layer.tone}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <SectionTitle
          kicker="Promo gallery"
          title="The wall of Damali."
          description="A small sample of the visual directions: performance energy, campaign art, persona testing, and promo-ready frames."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image) => (
            <GalleryCard key={image.title} {...image} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <SectionTitle
          kicker="Workflow"
          title="The creative system underneath the fun."
          description="Under the rock-star fantasy, this is a repeatable process for building an identity, testing it across formats, and correcting what feels off."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {workflow.map((item) => (
            <WorkflowCard key={item.step} {...item} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="grid gap-5 lg:grid-cols-[0.62fr_0.38fr]">
          <ArtifactList />

          <DisclosureCard />
        </div>
      </section>

      <section className="lab-shell pt-16">
        <SectionTitle
          kicker="Lessons"
          title="What Damali is teaching me."
          description="The best Lab projects are fun on the surface and annoyingly useful underneath."
          tone="quiet"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {lessons.map((lesson, index) => (
            <LessonCard
              key={lesson.title}
              title={lesson.title}
              description={lesson.description}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
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
            Damali Street lets me test the whole stack: writing, taste,
            direction, AI-assisted production, visual judgment, marketing
            instincts, disclosure, and the very serious business of making a
            pretend rock star feel emotionally real.
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