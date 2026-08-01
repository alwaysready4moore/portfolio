import type { Metadata } from "next";
import Link from "next/link";
import {
  BrandBadge,
  CyanSpark,
  MarginArrow,
  NotebookHighlight,
  NotebookPaperclip,
  type BrandBadgeTone,
} from "@/components/brand";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Nice Little Click Lab case study | Marquetta Moore",
  description:
    "How I built Nice Little Click Lab, a small web-product studio for useful free tools and low-cost personalized products.",
};

const liveSiteUrl = "https://www.nicelittleclick.com";
const tickerUrl =
  "https://www.nicelittleclick.com/clicks/meeting-cost-ticker";

const snapshot = [
  {
    label: "My role",
    value:
      "Founder, product strategist, UX writer, designer, and builder",
  },
  { label: "Stack", value: "Next.js, React, TypeScript, Tailwind CSS" },
  { label: "Deployment", value: "GitHub + Netlify" },
  { label: "Status", value: "Live beta" },
];

const opportunityCards = [
  {
    label: "Solo-studio constraint",
    title: "Keep each product small enough to ship and support",
    body:
      "As a solo builder, I needed products I could launch, support, and improve without creating a small enterprise platform.",
    tone: "signal" as const,
  },
  {
    label: "Product-quality bar",
    title: "Small products still need a quality bar",
    body:
      "Each Click had to explain itself, work without onboarding, hold up on mobile, and include one memorable detail.",
    tone: "verified" as const,
  },
  {
    label: "Business question",
    title: "Decide what should be free and what is worth paying for",
    body:
      "Free products test discovery and sharing. Paid products focus on personalization, urgency, gift value, or clear time savings.",
    tone: "experiment" as const,
  },
];

const modelCards = [
  {
    label: "Free clicks",
    title: "Make free tools easy to try and share",
    body:
      "Free products open immediately and support screenshots, sharing, repeat visits, and brand recall. A quick curiosity should not hit a paywall.",
    tone: "signal" as const,
  },
  {
    label: "Paid clicks",
    title: "Charge when the value is clear",
    body:
      "Paid products offer personalization, urgency, emotional value, or a polished download that saves the buyer time.",
    tone: "verified" as const,
  },
];

const productQuestions = [
  "Who experiences the problem?",
  "Who would realistically pay?",
  "Who would realistically share it?",
  "What free or AI substitute already exists?",
  "How much work will it take to build and maintain?",
  "Should the value be free, paid, or an upsell?",
];

const screenshots = [
  {
    title: "Studio homepage",
    description:
      "The Lab launched with a working product instead of an empty brand page and a large roadmap.",
    image: "/nice-little-click-lab/01-studio-homepage.png",
    alt: "Nice Little Click Lab homepage showing the studio identity and Meeting Cost Ticker",
  },
  {
    title: "Functional MVP",
    description:
      "The first version handled meeting state, attendee groups, editable salary estimates, elapsed time, and live cost.",
    image: "/nice-little-click-lab/02-functional-mvp.png",
    alt: "Functional Meeting Cost Ticker MVP before the full visual delight pass",
  },
  {
    title: "Delight pass",
    description:
      "After the cost engine worked, I added the meeting-room scene, faceless attendees, light workplace humor, and Click asleep in the corner.",
    image: "/nice-little-click-lab/03-delight-pass.png",
    alt: "Meeting Cost Ticker delight pass with a simple meeting room and mascot",
  },
  {
    title: "Live meeting",
    description:
      "Users can change attendee groups while a meeting is running. Past cost remains intact while the updated team rate applies from that moment forward.",
    image: "/nice-little-click-lab/04-live-meeting.png",
    alt: "Active Meeting Cost Ticker with live elapsed time and meeting cost",
  },
];

const mobileScreenshots = [
  {
    title: "Attendee setup",
    image: "/nice-little-click-lab/05-mobile-attendee-setup.png",
    alt: "Mobile Meeting Cost Ticker attendee setup",
  },
  {
    title: "Live ticker",
    image: "/nice-little-click-lab/06-mobile-live-ticker.png",
    alt: "Mobile live Meeting Cost Ticker",
  },
  {
    title: "Meeting summary",
    image: "/nice-little-click-lab/07-mobile-summary.png",
    alt: "Mobile Meeting Cost Ticker completed meeting summary",
  },
];

const decisions = [
  {
    label: "Local salary defaults",
    title: "Use local defaults instead of another dependency",
    body:
      "The tool uses an editable local list of common U.S. job titles instead of a live salary API. This avoids latency, cost, rate limits, and another data dependency.",
    tone: "verified" as const,
  },
  {
    label: "Dynamic attendance",
    title: "Keep the cost accurate when attendance changes",
    body:
      "People join late and leave early. The app keeps the cost already accrued, then applies the new team rate from that point forward.",
    tone: "signal" as const,
  },
  {
    label: "Client-side architecture",
    title: "Keep salary data in the browser",
    body:
      "Meeting names, salary estimates, attendee counts, and totals stay in the browser. Users can start, download the result, and leave without an account.",
    tone: "verified" as const,
  },
  {
    label: "Eight-hour boundary",
    title: "Stop forgotten meetings after eight hours",
    body:
      "The meeting ends after eight hours. This limits runaway totals without saved sessions or account infrastructure.",
    tone: "warning" as const,
  },
];

const writingCards = [
  {
    label: "Utility first",
    title: "Explain the product before adding the joke",
    body:
      "The page first explains the tool. The line “Every second counts. Literally.” adds personality after the task is clear.",
    tone: "signal" as const,
  },
  {
    label: "Trust microcopy",
    title: "Answer likely questions early",
    body:
      "Copy about editable salaries, browser-only data, and the eight-hour limit answers common questions before they block use.",
    tone: "verified" as const,
  },
  {
    label: "Soft conversion",
    title: "Let the free tool introduce the studio",
    body:
      "The mascot, screenshots, and branded receipt introduce the studio without asking for an email address or sign-up.",
    tone: "experiment" as const,
  },
];

const technicalDetails = [
  { label: "Rendering", value: "Next.js + React" },
  { label: "Language", value: "TypeScript" },
  { label: "Styling", value: "Tailwind CSS" },
  { label: "Calculation model", value: "Client-side only" },
  { label: "Data storage", value: "None" },
  { label: "Salary source", value: "Editable local defaults" },
  { label: "Receipt", value: "Browser-generated PNG" },
  { label: "Hosting", value: "Netlify" },
];

const excludedScope = [
  "User accounts",
  "Saved meeting history",
  "Team dashboards",
  "Organization-level reporting",
  "Live payroll integrations",
  "Real-time salary APIs",
  "Persistent share links",
  "Subscription billing",
];

const validationQuestions = [
  "Do visitors start a meeting or leave after reading the concept?",
  "Do people add realistic attendee groups or only test the novelty?",
  "Do users download the receipt?",
  "Do screenshots or links get shared organically?",
  "Does the free product lead visitors to explore the studio or return later?",
  "Which UX details create confusion on real devices?",
];

function SectionTitle({
  kicker,
  title,
  description,
  tone = "quiet",
}: {
  kicker: string;
  title: string;
  description?: string;
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
      {description ? (
        <p className="max-w-xl leading-7 text-muted md:text-right">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function DetailCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
      <BrandBadge tone="quiet" icon="none">
        {label}
      </BrandBadge>
      <p className="mt-3 font-display text-xl font-bold leading-tight tracking-[-0.03em] text-ink">
        {value}
      </p>
    </article>
  );
}

function TextCard({
  label,
  title,
  body,
  tone,
}: {
  label: string;
  title: string;
  body: string;
  tone: BrandBadgeTone;
}) {
  return (
    <article className="paper-card relative overflow-hidden p-6">
      <NotebookHighlight
        size="lg"
        className="absolute -right-3 -top-3 rotate-[-8deg] opacity-20"
      />
      <BrandBadge tone={tone} icon="dot">
        {label}
      </BrandBadge>
      <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h3>
      <p className="mt-4 leading-7 text-muted">{body}</p>
    </article>
  );
}

function ScreenshotCard({
  title,
  description,
  image,
  alt,
}: {
  title: string;
  description: string;
  image: string;
  alt: string;
}) {
  return (
    <article className="paper-card overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan/40">
      <div className="border-b border-[var(--border)] bg-white/[0.035] p-3">
        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[#f6efe2]">
          <img
            src={image}
            alt={alt}
            className="aspect-[16/10] w-full object-cover object-top"
          />
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <BrandBadge tone="experiment" icon="dot">
            {title}
          </BrandBadge>
          <CyanSpark size="xs" className="opacity-65" />
        </div>
        <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
      </div>
    </article>
  );
}

export default function NiceLittleClickLabCaseStudyPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <Link
          href="/work"
          className="lab-label inline-flex items-center gap-2 text-cyan transition hover:translate-x-1"
        >
          ← Back to work
        </Link>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_0.65fr] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <BrandBadge tone="experiment" icon="spark">
                Product studio case study
              </BrandBadge>
              <BrandBadge tone="quiet" icon="dot">
                Live beta
              </BrandBadge>
            </div>

            <div className="mt-8 overflow-hidden rounded-[2rem] border border-[#e3b96f]/25 bg-[#f7efe1] p-5 shadow-[0_0_40px_rgba(227,185,111,0.08)]">
              <img
                src="/nice-little-click-lab/wordmark-logo.png"
                alt="Nice Little Click Lab"
                className="mx-auto w-full max-w-3xl object-contain"
              />
            </div>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-muted">
              A small web-product studio for useful free tools and low-cost
              personalized products for oddly specific moments.
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-muted">
              I created the brand, product strategy, UX copy, visual system, and
              first working Click: Meeting Cost Ticker. I also defined a
              repeatable way to choose free and paid products while keeping each
              release small and complete.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Product strategy",
                "UX writing",
                "Creative direction",
                "Next.js",
                "TypeScript",
                "Responsive UI",
              ].map((tag) => (
                <BrandBadge key={tag} tone="quiet" icon="none">
                  {tag}
                </BrandBadge>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={liveSiteUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring rounded-2xl border border-cyan/40 bg-cyan px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-night shadow-[0_0_32px_rgba(39,217,255,0.22)] transition hover:-translate-y-0.5"
              >
                Visit the lab
              </a>
              <a
                href={tickerUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring rounded-2xl border border-[var(--border)] bg-white/5 px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-0.5 hover:border-cyan/40"
              >
                Try Meeting Cost Ticker
              </a>
            </div>
          </div>

          <aside className="paper-card relative overflow-hidden p-6">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#e3b96f]/10 blur-3xl"
            />
            <div className="relative">
              <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-[#e3b96f]/25 bg-[#f7efe1] p-1">
                <img
                  src="/nice-little-click-lab/logo.png"
                  alt="Nice Little Click Lab circular logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <BrandBadge tone="experiment" icon="spark">
                Project snapshot
              </BrandBadge>

              <div className="mt-5 grid gap-4">
                {snapshot.map((item) => (
                  <DetailCard
                    key={item.label}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </div>

              <div className="mt-5 rounded-3xl border border-[#e3b96f]/20 bg-[#e3b96f]/[0.045] p-5">
                <p className="lab-label text-[#e3c58f]">Studio rule</p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Finish the smallest useful version of the current product
                  before building a collection.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-card relative grid gap-8 overflow-hidden p-6 md:p-8 lg:grid-cols-[0.7fr_1fr]">
          <MarginArrow
            size="lg"
            className="absolute right-7 top-7 rotate-6 opacity-25"
          />
          <div>
            <BrandBadge tone="experiment" icon="spark">
              In brief
            </BrandBadge>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              The catalog uses a free-and-paid model
            </h2>
          </div>
          <div className="grid gap-5 text-muted">
            <p className="leading-8">
              Free clicks are built for reach, screenshots, organic sharing, and
              repeat visits. Paid clicks are reserved for moments where
              personalization, urgency, gift value, or polished downloadable
              output creates a credible reason to pay.
            </p>
            <p className="leading-8">
              Meeting Cost Ticker tests use and sharing. Instant Custom Crossword
              Gift tests whether personalization gives people a reason to buy.
            </p>
          </div>
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Opportunity"
          title="Build small products without adding a platform"
          description="The goal was a repeatable studio model, not a pile of unrelated novelty tools."
          tone="signal"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {opportunityCards.map((card) => (
            <TextCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Business model"
          title="Use free products for discovery. Charge when the value supports it"
          description="The user, buyer, and sharer may be different people. Pricing accounts for that."
          tone="verified"
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {modelCards.map((card) => (
            <TextCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <div className="paper-card relative grid gap-8 overflow-hidden p-6 md:p-8 lg:grid-cols-[0.7fr_1fr]">
          <NotebookHighlight
            size="lg"
            className="absolute right-7 top-7 rotate-[-8deg] opacity-20"
          />
          <div>
            <BrandBadge tone="signal" icon="spark">
              Product filter
            </BrandBadge>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              Ask six questions before building a Click
            </h2>
          </div>
          <ul className="grid gap-3">
            {productQuestions.map((question) => (
              <li
                key={question}
                className="grid grid-cols-[auto_1fr] gap-3 rounded-2xl border border-[var(--border)] bg-white/[0.035] p-4 text-muted"
              >
                <span aria-hidden="true" className="font-lab text-cyan">
                  ✓
                </span>
                <span className="leading-6">{question}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="screenshots" className="lab-shell pt-20">
        <SectionTitle
          kicker="First Click"
          title="Build the engine first, then add personality"
          description="The calculator worked before the mascot entered the room."
          tone="experiment"
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {screenshots.map((screenshot) => (
            <ScreenshotCard key={screenshot.title} {...screenshot} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Strategic UX decisions"
          title="Small technical choices made the product easier to trust"
          tone="verified"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {decisions.map((decision) => (
            <TextCard key={decision.title} {...decision} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="UX writing"
          title="Lead with the task. Add personality where it helps"
          description="The copy answers questions and introduces the studio without adding a sign-up gate."
          tone="signal"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {writingCards.map((card) => (
            <TextCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Mobile"
          title="Give mobile users a clear sequence"
          description="On narrow screens, setup, live cost, and completion follow a vertical, tap-friendly flow."
          tone="experiment"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {mobileScreenshots.map((item) => (
            <article
              key={item.title}
              className="paper-card overflow-hidden p-3 transition duration-300 hover:-translate-y-1 hover:border-cyan/40"
            >
              <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[#f6efe2]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="mx-auto aspect-[9/16] w-full object-cover object-top"
                />
              </div>
              <p className="px-2 pb-2 pt-4 text-center font-lab text-sm font-semibold uppercase tracking-[0.08em] text-cyan">
                {item.title}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <div className="paper-card grid gap-8 overflow-hidden p-6 md:p-8 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div>
            <BrandBadge tone="experiment" icon="spark">
              Downloadable artifact
            </BrandBadge>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              End with a useful receipt
            </h2>
            <p className="mt-5 leading-8 text-muted">
              The browser creates a PNG that users can save or share. The receipt
              also carries the Lab identity beyond the site. It is legible and
              functional, with a visual refinement pass planned after launch.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[#f6efe2] p-3">
            <img
              src="/nice-little-click-lab/08-beta-receipt.png"
              alt="Downloadable Meeting Cost Ticker beta receipt"
              className="w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      </section>

      <section className="lab-shell pt-20">
        <div className="paper-card overflow-hidden">
          <div className="border-b border-[var(--border)] bg-white/[0.035] p-6 md:p-8">
            <BrandBadge tone="verified" icon="spark">
              Technical snapshot
            </BrandBadge>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              Use simple architecture and spend the effort on the experience
            </h2>
          </div>
          <div className="grid gap-4 p-6 md:grid-cols-2 md:p-8 lg:grid-cols-4">
            {technicalDetails.map((item) => (
              <DetailCard key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Release scope"
          title="The first release tests the core behavior"
          description="These features were not needed to learn whether people would use and share the core product."
          tone="warning"
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {excludedScope.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5"
            >
              <BrandBadge tone="quiet" icon="dot">
                Deferred
              </BrandBadge>
              <p className="mt-4 font-display text-xl font-bold tracking-[-0.03em] text-ink">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <div className="paper-card relative grid gap-8 overflow-hidden p-6 md:p-8 lg:grid-cols-[0.75fr_1fr]">
          <NotebookPaperclip
            size="lg"
            className="absolute right-7 top-7 rotate-12 opacity-20"
          />
          <div>
            <BrandBadge tone="signal" icon="spark">
              Launch-stage validation
            </BrandBadge>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              Observe use before expanding the product
            </h2>
            <p className="mt-5 leading-7 text-muted">
              There are no performance or conversion claims yet. The current
              release works, costs little to maintain, and can inform the next
              product decision.
            </p>
          </div>
          <ul className="grid gap-3">
            {validationQuestions.map((question) => (
              <li
                key={question}
                className="grid grid-cols-[auto_1fr] gap-3 rounded-2xl border border-[var(--border)] bg-white/[0.035] p-4 text-muted"
              >
                <span aria-hidden="true" className="font-lab text-cyan">
                  ?
                </span>
                <span className="leading-6">{question}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="lab-shell pt-20">
        <div className="paper-note relative overflow-hidden p-7 md:p-9">
          <MarginArrow
            size="lg"
            className="absolute right-7 top-7 rotate-6 opacity-25"
          />
          <p className="field-heading max-w-5xl text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            Nice Little Click Lab shows how I define an audience, choose a fair
            price, keep the architecture small, ship a useful product, and use
            real behavior to decide what comes next.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href={liveSiteUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring rounded-2xl border border-[#19D8E8] bg-[#19D8E8] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[#071014] shadow-[0_0_24px_rgba(25,216,232,0.24)] transition hover:-translate-y-0.5"
            >
              Visit the lab
            </a>
            <a
              href={tickerUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring rounded-2xl border border-[var(--paper-line)] bg-white/40 px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[var(--paper-ink)] transition hover:-translate-y-0.5"
            >
              Try the first Click
            </a>
            <Link
              href="/work"
              className="focus-ring rounded-2xl border border-[var(--paper-line)] bg-white/40 px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[var(--paper-ink)] transition hover:-translate-y-0.5"
            >
              View all work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
