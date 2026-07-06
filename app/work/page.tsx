import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

const caseStudies = [
  {
    title: "Aegis",
    eyebrow: "Creative Intelligence Pipeline",
    summary:
      "An AI-assisted workflow that turns competitor landing pages into testable ad concepts, flags risky language, and produces a compliant rewrite path.",
    context:
      "Built as a fast, practical demonstration of how AI can support marketing strategy without removing human judgment from the review process.",
    problem:
      "Competitive research, ad ideation, and compliance review often live in separate workflows. The challenge was to connect them into one useful pipeline without making the output feel generic or risky.",
    approach: [
      "Designed a four-stage pipeline: competitive analysis, concept generation, compliance review, and rewrite support.",
      "Used structured outputs to keep the AI responses predictable enough to review.",
      "Built the prototype in five days with TypeScript, Next.js, Gemini, and Zod.",
    ],
    outcome:
      "A working tool that shows how AI can accelerate creative strategy while still surfacing risk, constraints, and places where human review matters.",
    proof: [
      "Built in 5 days",
      "4-stage AI pipeline",
      "Risk flagging",
      "Compliant rewrite support",
    ],
    skills: [
      "AI workflow design",
      "Next.js",
      "Gemini",
      "Zod",
      "Compliance-aware content",
    ],
    accent: "cyan",
    href: "/work/aegis",
    linkLabel: "Read full case study",
  },
  {
    title: "CSI New Analyst Toolbox",
    eyebrow: "Security Analyst Enablement",
    summary:
      "A Chrome extension for analysts that organizes threat-intel extraction, labeling guidance, productivity support, embedded lessons, and versioned workflow improvements.",
    context:
      "Created to make analyst work easier to navigate by reducing context switching and putting guidance closer to the moment of use.",
    problem:
      "New analysts need fast access to scattered guidance, judgment calls, labels, and workflow reminders. When that knowledge is hard to find, confidence drops and review quality can suffer.",
    approach: [
      "Built a browser-based toolbox organized around the analyst’s actual workflow.",
      "Included tabs for threat-intel extraction, labeling guidance, productivity tracking, and embedded lessons.",
      "Iterated through more than 30 versioned releases to keep improving usefulness.",
    ],
    outcome:
      "A practical enablement tool that turns scattered analyst knowledge into a guided workspace for faster, more confident decisions.",
    proof: [
      "8 toolbox tabs",
      "30+ versioned releases",
      "Embedded lessons",
      "Analyst workflow support",
    ],
    skills: [
      "Security operations",
      "Chrome extension",
      "Documentation",
      "Workflow design",
      "Enablement",
    ],
    accent: "lavender",
    href: "#",
    linkLabel: "Full case study coming soon",
  },
  {
    title: "Pirate Ship Knowledge Systems",
    eyebrow: "Support Ops + Knowledge Management",
    summary:
      "A governed internal knowledge ecosystem that consolidated policies, onboarding, support guidance, macros, and cross-functional resources into a more usable source of truth.",
    context:
      "Created during customer support and internal operations work where the same messy questions kept revealing bigger systems problems.",
    problem:
      "Important information lived across docs, Slack, institutional memory, and one-off answers. Teammates needed clearer paths, better onboarding, and reusable guidance that matched the company voice.",
    approach: [
      "Authored and governed a large Notion knowledge hub with structured pages, clearer ownership, and practical navigation.",
      "Created support macros, internal guides, onboarding materials, and plain-language resources for recurring issues.",
      "Partnered across HR, IT, CX, PX, development, and information security to turn vague problems into usable documentation.",
    ],
    outcome:
      "A scalable support knowledge system that improved findability, reduced repeat confusion, and made dense operational information easier to apply.",
    proof: [
      "774-page Notion hub",
      "3,100+ edits",
      "~50 onboarding and tech issues resolved",
      "Reusable support macros",
    ],
    skills: [
      "Knowledge management",
      "Support operations",
      "Notion",
      "Onboarding",
      "Internal communications",
    ],
    accent: "mint",
    href: "#",
    linkLabel: "Full case study coming soon",
  },
];

const additionalWork = [
  {
    title: "Go Links Proposal",
    label: "Information Architecture",
    description:
      "A formal internal proposal connecting knowledge findability, search behavior, company values, and the business case for easier internal navigation.",
  },
  {
    title: "Notion Intranet Introduction",
    label: "Onboarding + Enablement",
    description:
      "A branded onboarding video introducing teammates to the new Notion intranet, including navigation, use cases, and how to treat it as a knowledge home.",
  },
  {
    title: "AI Tools Exploration",
    label: "Creative AI Strategy",
    description:
      "A branded internal presentation exploring tools like ElevenLabs and Suno while connecting creative experiments to practical workplace use cases.",
  },
  {
    title: "Navigating Spicy Users",
    label: "Support Communication",
    description:
      "A branded customer-service guide with empathy cues, frameworks, and reusable scripts for handling difficult customer interactions.",
  },
  {
    title: "Emotional Regulation Guide",
    label: "Support Wellness",
    description:
      "A grounded self-care and performance guide for support reps navigating high-pressure queue days and emotional dysregulation.",
  },
  {
    title: "Google IT Support",
    label: "Technical Support",
    description:
      "Enterprise technical support work grounded in clear troubleshooting, stakeholder communication, documentation, and security-conscious resolution.",
  },
];

function AccentOrb({ accent }: { accent: string }) {
  const accentClasses: Record<string, string> = {
    cyan: "bg-cyan/20 border-cyan/35 text-cyan",
    lavender: "bg-lavender/20 border-lavender/35 text-lavender",
    mint: "bg-mint/20 border-mint/35 text-mint",
  };

  return (
    <div
      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl border font-lab text-2xl ${accentClasses[accent]}`}
    >
      ⌁
    </div>
  );
}

function ProofChip({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-[var(--border)] bg-white/5 px-3 py-1.5 font-lab text-xs font-semibold uppercase tracking-[0.06em] text-muted">
      {children}
    </span>
  );
}

function CaseStudyPreview({
  title,
  eyebrow,
  summary,
  context,
  problem,
  approach,
  outcome,
  proof,
  skills,
  accent,
  href,
  linkLabel,
  index,
}: {
  title: string;
  eyebrow: string;
  summary: string;
  context: string;
  problem: string;
  approach: string[];
  outcome: string;
  proof: string[];
  skills: string[];
  accent: string;
  href: string;
  linkLabel: string;
  index: number;
}) {
  return (
    <article className="paper-card overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="border-b border-[var(--border)] bg-white/[0.035] p-6 lg:border-b-0 lg:border-r lg:p-8">
          <div className="mb-8 flex items-start justify-between gap-5">
            <div>
              <p className="lab-label text-cyan">Case Study 0{index + 1}</p>
              <h2 className="mt-4 font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink">
                {title}
              </h2>
              <p className="mt-4 lab-label text-muted">{eyebrow}</p>
            </div>

            <AccentOrb accent={accent} />
          </div>

          <p className="text-lg leading-8 text-muted">{summary}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {proof.map((item) => (
              <ProofChip key={item}>{item}</ProofChip>
            ))}
          </div>
        </div>

        <div className="grid gap-6 p-6 lg:p-8">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
              <p className="lab-label text-cyan">Context</p>
              <p className="mt-4 text-sm leading-6 text-muted">{context}</p>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
              <p className="lab-label text-cyan">Problem</p>
              <p className="mt-4 text-sm leading-6 text-muted">{problem}</p>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
              <p className="lab-label text-cyan">Outcome</p>
              <p className="mt-4 text-sm leading-6 text-muted">{outcome}</p>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan/20 bg-cyan/[0.045] p-5">
            <p className="lab-label text-cyan">How I approached it</p>
            <ol className="mt-5 grid gap-3">
              {approach.map((step, stepIndex) => (
                <li className="grid grid-cols-[auto_1fr] gap-3" key={step}>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan/30 bg-cyan/10 font-lab text-xs font-semibold text-cyan">
                    {stepIndex + 1}
                  </span>
                  <span className="text-sm leading-6 text-muted">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <p className="mb-3 lab-label text-muted">Skills demonstrated</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-sm text-ink"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-[var(--border)] pt-5">
            <Link
              href={href}
              className="lab-label inline-flex items-center gap-2 text-cyan transition hover:translate-x-1"
            >
              {linkLabel} <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function AdditionalWorkCard({
  title,
  label,
  description,
}: {
  title: string;
  label: string;
  description: string;
}) {
  return (
    <article className="paper-card p-5 transition duration-300 hover:-translate-y-1">
      <p className="lab-label text-cyan">{label}</p>
      <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-muted">{description}</p>
    </article>
  );
}

export default function WorkPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <p className="lab-label text-cyan">Selected Work</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
          Systems, tools, and communication that make messy information usable.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          A deeper look at the projects that best show my range: AI workflow
          design, security-aware thinking, knowledge systems, support
          operations, and clear communication.
        </p>
      </section>

      <section className="lab-shell pt-12">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="paper-card p-5">
            <p className="lab-label text-cyan">Pattern</p>
            <p className="mt-3 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
              Find the mess.
            </p>
          </div>

          <div className="paper-card p-5">
            <p className="lab-label text-cyan">Method</p>
            <p className="mt-3 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
              Build the path.
            </p>
          </div>

          <div className="paper-card p-5">
            <p className="lab-label text-cyan">Result</p>
            <p className="mt-3 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
              Make it usable.
            </p>
          </div>
        </div>
      </section>

      <section className="lab-shell grid gap-8 pt-14">
        {caseStudies.map((caseStudy, index) => (
          <CaseStudyPreview
            key={caseStudy.title}
            title={caseStudy.title}
            eyebrow={caseStudy.eyebrow}
            summary={caseStudy.summary}
            context={caseStudy.context}
            problem={caseStudy.problem}
            approach={caseStudy.approach}
            outcome={caseStudy.outcome}
            proof={caseStudy.proof}
            skills={caseStudy.skills}
            accent={caseStudy.accent}
            href={caseStudy.href}
            linkLabel={caseStudy.linkLabel}
            index={index}
          />
        ))}
      </section>

      <section className="lab-shell pt-20">
        <div className="mb-8">
          <p className="lab-label text-muted">Additional Work</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
            Supporting proof
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">
            Smaller samples that show the same pattern across writing,
            onboarding, internal communications, information architecture, and
            creative AI experimentation.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {additionalWork.map((item) => (
            <AdditionalWorkCard
              key={item.title}
              title={item.title}
              label={item.label}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}