import type { Metadata } from "next";
import Link from "next/link";
import {
  BrandBadge,
  CyanSpark,
  MarginArrow,
  NotebookHighlight,
  NotebookPaperclip,
} from "@/components/brand";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Résumé | Marquetta Moore",
  description:
    "Résumé for Marquetta Moore, a creative technical writer and knowledge systems designer working across documentation, AI workflows, internal tools, and security.",
};

const impactSignals = [
  {
    value: "774",
    label: "knowledge pages governed",
  },
  {
    value: "3,100+",
    label: "knowledge-system edits",
  },
  {
    value: "572",
    label: "cross-functional project tasks managed",
  },
  {
    value: "100%",
    label: "adjusted CSAT across 200+ Google reviews",
  },
];

const strengths = [
  {
    label: "Knowledge systems",
    title: "Make complex information easier to find, trust, and maintain",
    description:
      "Information architecture, governance, source-of-truth systems, onboarding, troubleshooting guidance, and reusable resources designed around how people actually work.",
  },
  {
    label: "AI product development",
    title: "Give model output structure, boundaries, and a useful interface",
    description:
      "Prompt and context design, structured outputs, schema validation, application invariants, visible pipeline states, secure configuration, failure recovery, human review, and evaluation planning.",
  },
  {
    label: "Workflow tools",
    title: "Build practical tools around recurring friction",
    description:
      "Chrome extensions, browser tools, automation, local-first workflows, parsing logic, technical documentation, and AI-assisted debugging.",
  },
  {
    label: "Creative communication",
    title: "Find the human core inside complicated information",
    description:
      "Training, technical storytelling, multimedia learning, visual direction, brand-aware communication, and writing that makes abstract systems feel real.",
  },
];

const experience = [
  {
    company: "Abnormal AI",
    role: "Security Analyst",
    dates: "March 2026 – Present",
    location: "Remote",
    summary:
      "AI-native security analysis requiring careful judgment across ambiguous threat evidence, product behavior, risk context, and user impact.",
    bullets: [
      "Analyze and triage high volumes of flagged phishing and security events, identifying patterns, root causes, and emerging threat behavior across enterprise environments.",
      "Translate complex security findings into clear, actionable decisions that support detection quality, escalation, and user experience.",
      "Evaluate ambiguous edge cases where confident automation is not enough, balancing security risk with context and human judgment.",
      "Built and documented the CSI New Analyst Toolbox, a Chrome extension and learning system with eight workflow areas, embedded lessons, threat-intelligence extraction, labeling guidance, productivity support, and 30+ versioned releases.",
      "Turn recurring analyst questions, edge cases, and tool confusion into reusable guidance that helps newer team members understand workflows and decision criteria faster.",
    ],
  },
  {
    company: "Pirate Ship",
    role: "Shipmaster Subject Matter Expert, Content & Learning",
    dates: "May 2023 – January 2026",
    location: "Remote",
    summary:
      "Bridged frontline customer support with knowledge governance, enablement, workflow design, project delivery, and cross-functional operations.",
    bullets: [
      "Served as the first Shipmaster Subject Matter Expert in Content & Learning, connecting day-to-day customer experience work with improvements in training, documentation, and process design.",
      "Audited and refreshed more than 100 internal guides, onboarding tools, and reusable resources to improve clarity, accuracy, and usability for a distributed support team.",
      "Authored and governed a 774-page internal knowledge environment with more than 3,100 edits across support, onboarding, IT, people operations, and management resources.",
      "Managed 572 cross-functional project tasks while building reusable boards, templates, navigation models, and intake systems that improved execution visibility.",
      "Delivered three full-team onboarding programs end to end, coordinating scheduling, communication, learning resources, and the new-hire experience.",
      "Built ChartFinder, a local-first Chrome extension that extracted visible support context and formatted it for downstream workflows without sending data to an external service.",
      "Partnered across HR, IT, Development, Information Security, Fraud, Content & Learning, customer experience, and leadership to translate operational gaps into scalable systems and clearer handoffs.",
    ],
    note:
      "Included a six-month internal operations rotation focused on project management, systems design, and cross-functional program delivery.",
  },
  {
    company: "Google",
    role: "Corporate Operations Engineer · IT Resident",
    dates: "February 2021 – April 2023",
    location: "Austin, Texas · Global support",
    summary:
      "Enterprise technical support, troubleshooting, mentorship, automation, and documentation across a complex global environment.",
    bullets: [
      "Delivered Tier 1 and Tier 2 technical support across Google Workspace, macOS, Windows, ChromeOS, Linux, networking, enterprise applications, and hardware platforms.",
      "Maintained an adjusted 100% CSAT rating across more than 200 reviews and earned 41 recognition awards in under two years.",
      "Mentored junior team members in technical troubleshooting, corporate IT operations, and multichannel support.",
      "Converted recurring technical issues into reusable support guidance, stakeholder updates, and interactive Python learning materials.",
      "Acted as liaison for a 60-member team and coordinated large engagement initiatives that strengthened collaboration across a distributed workforce.",
    ],
  },
  {
    company: "Delaware Technical Community College",
    role: "Academic Support Assistant · Testing Proctor",
    dates: "February 2018 – December 2020",
    location: "Georgetown, Delaware",
    summary:
      "Academic operations, technical support, testing security, digital transition work, and resource development.",
    bullets: [
      "Helped move paper-based surveys and testing workflows online during the COVID-19 transition.",
      "Formed and maintained Tier 1 IT response for the department and created a resource center for online tools, tips, and procedures.",
      "Troubleshot software, hardware, simulation equipment, office technology, and classroom systems for faculty and students.",
      "Maintained confidentiality and security across testing materials, schedules, student records, and operational data.",
    ],
  },
];

const earlierExperience = [
  {
    company: "SecureNetMD",
    role: "Client Solutions Specialist / Helpdesk Technician",
    dates: "2017",
    description:
      "Delivered end-user support, investigated acceptable-use issues, maintained VoIP accounts, documented diagnostics, and escalated unresolved technical problems.",
  },
  {
    company: "Beebe Healthcare",
    role: "Physical Therapy Aide II",
    dates: "2017",
    description:
      "Supported medical operations, patient registration, insurance coordination, records management, audits, and communication between clinical staff and the community.",
  },
  {
    company: "Avalanche Industries",
    role: "IT Assistant · Marketing Intern",
    dates: "2015 – 2016",
    description:
      "Supported Google administration, cross-platform hardware and software, technical documentation, inventory systems, Windows deployment, and early marketing work.",
  },
];

const projects = [
  {
    title: "Aegis",
    type: "AI product and reliability architecture",
    description:
      "Built and deployed a multi-stage creative intelligence pipeline with Next.js, TypeScript, Gemini, Firecrawl, and Zod. Aegis validates model outputs, checks application invariants, protects server-side credentials, exposes live/manual/fallback states, preserves partial results, and adds heuristic risk review with safer rewrites.",
    href: "/work/aegis",
  },
  {
    title: "Launchpad",
    type: "Custom Claude skill and persistent workflow",
    description:
      "Designed a career-readiness system that scores skill, proof, language, and positioning gaps, assigns prioritized daily tasks, and maintains a persistent HTML command center. Version 2.1 added escaped variable rendering, blocked javascript: URLs, whitelisted statuses, routing fixes, and migration support.",
    href: "/work/launchpad",
  },
  {
    title: "CSI New Analyst Toolbox",
    type: "Chrome extension and learning system",
    description:
      "Designed and maintained an embedded analyst tool with eight workflow areas, threat-intelligence utilities, labeling guidance, productivity support, embedded lessons, and more than 30 releases.",
    href: "/work/new-analyst-tool",
  },
  {
    title: "Pirate Ship Knowledge Systems",
    type: "Knowledge governance and enablement",
    description:
      "Governed hundreds of connected internal resources, improved information structure and maintenance, and built training and adoption support around complex operational workflows.",
    href: "#experience",
  },
  {
    title: "Damali Street",
    type: "Creative technology and artist system",
    description:
      "Built an AI-supported rock artist project spanning songs, lyrics, visual identity, short-form content, release positioning, marketing experiments, and portfolio storytelling.",
    href: "/lab/damali-street",
  },
];

const capabilityGroups = [
  {
    label: "AI systems and workflow design",
    items: [
      "Prompt and context design",
      "Structured outputs and schema validation",
      "Human-in-the-loop review",
      "Evaluation and invariant checks",
      "Fallback and partial-failure design",
      "Server-side secret handling",
      "Persistent agent and skill workflows",
      "AI-assisted research and production",
    ],
  },
  {
    label: "Knowledge systems and enablement",
    items: [
      "Information architecture",
      "Knowledge governance",
      "Source-of-truth design",
      "Technical writing and SOPs",
      "Onboarding and training",
      "Adoption and maintenance planning",
    ],
  },
  {
    label: "Internal tools and automation",
    items: [
      "Chrome extension development",
      "Browser-based workflow tools",
      "Local-first utilities",
      "Parsing and extraction logic",
      "Automation and integrations",
      "Testing, debugging, and release iteration",
    ],
  },
  {
    label: "Creative technology",
    items: [
      "Creative direction",
      "Visual identity systems",
      "AI-assisted music and image workflows",
      "Short-form content systems",
      "Product storytelling",
      "Campaign experiments and performance review",
    ],
  },
  {
    label: "Security and technical operations",
    items: [
      "Phishing and threat analysis",
      "Enterprise IT support",
      "Access and device troubleshooting",
      "Cross-platform support",
      "Risk-aware documentation",
      "Escalation and stakeholder communication",
    ],
  },
  {
    label: "Program and project delivery",
    items: [
      "Cross-functional coordination",
      "Workflow and process design",
      "Project planning and tracking",
      "Change communication",
      "Stakeholder alignment",
      "Reusable templates and handoffs",
    ],
  },
];

const platformGroups = [
  {
    label: "AI and creative tools",
    tools: [
      "ChatGPT",
      "Claude",
      "Claude Cowork",
      "Gemini",
      "Firecrawl",
      "Custom GPTs",
      "Gem-style workflows",
      "Suno",
      "ElevenLabs",
      "Canva",
      "Pitch",
    ],
  },
  {
    label: "Development and deployment",
    tools: [
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
      "Next.js",
      "React",
      "Zod",
      "Chrome Extension APIs",
      "GitHub",
      "Vercel",
      "Python fundamentals",
    ],
  },
  {
    label: "Knowledge and operations",
    tools: [
      "Google Workspace",
      "Asana",
      "Slack",
      "Guru",
      "Intercom",
      "Zapier",
      "Training systems",
      "Documentation workflows",
    ],
  },
  {
    label: "IT and endpoint support",
    tools: [
      "Jamf Pro",
      "macOS",
      "Windows",
      "ChromeOS",
      "Linux",
      "Networking",
      "VoIP support",
      "Enterprise applications",
    ],
  },
  {
    label: "Maker and production",
    tools: [
      "3D printing",
      "Bambu Studio",
      "Tinkercad",
      "Blender",
      "Nomad Sculpt",
      "CapCut",
      "Multimedia learning",
    ],
  },
];

const education = [
  {
    degree: "B.S., Computer and Network Security",
    school: "Wilmington University",
    detail: "GPA: 3.93/4.0 · Graduated 2019",
  },
  {
    degree: "Certificate, Digital Evidence Discovery",
    school: "Wilmington University",
    detail: "2018",
  },
  {
    degree: "A.A.S., Information Security",
    school: "Delaware Technical Community College",
    detail: "2016",
  },
];

const certifications = [
  "Google AI Essentials",
  "Google Professional Workspace Administrator",
  "Google IT Support Professional",
  "Google Certified Educator, Levels 1 and 2",
  "Jamf Certified Associate – Jamf Pro",
];

function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <BrandBadge tone="quiet" icon="spark">
          {kicker}
        </BrandBadge>

        <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
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

function ExperienceCard({
  company,
  role,
  dates,
  location,
  summary,
  note,
  bullets,
}: {
  company: string;
  role: string;
  dates: string;
  location: string;
  summary: string;
  note?: string;
  bullets: string[];
}) {
  return (
    <article className="paper-card relative overflow-hidden p-6 md:p-8">
      <NotebookPaperclip
        size="md"
        className="absolute right-5 top-5 rotate-12 opacity-20"
      />

      <div className="flex flex-col justify-between gap-5 pr-10 md:flex-row md:items-start">
        <div className="max-w-3xl">
          <p className="font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink md:text-4xl">
            {company}
          </p>

          <h3 className="mt-3 text-lg font-semibold leading-7 text-cyan">
            {role}
          </h3>

          <p className="mt-4 leading-7 text-muted">{summary}</p>
        </div>

        <div className="shrink-0 md:text-right">
          <p className="font-lab text-xs font-semibold uppercase tracking-[0.08em] text-ink">
            {dates}
          </p>

          <p className="mt-2 text-sm text-muted">{location}</p>
        </div>
      </div>

      {note ? (
        <p className="mt-5 rounded-2xl border border-cyan/15 bg-cyan/[0.045] px-4 py-3 text-sm leading-6 text-muted">
          {note}
        </p>
      ) : null}

      <ul className="mt-6 grid gap-4">
        {bullets.map((bullet) => (
          <li
            key={bullet}
            className="grid grid-cols-[auto_1fr] gap-3 leading-7 text-muted"
          >
            <span aria-hidden="true" className="mt-2 text-cyan">
              ◆
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ResumePage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-8">
        <div className="paper-card relative overflow-hidden p-7 md:p-10">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan/15 blur-3xl"
          />

          <MarginArrow
            size="lg"
            className="absolute bottom-8 right-8 hidden rotate-6 opacity-20 md:inline-flex"
          />

          <div className="relative max-w-5xl">
            <div className="flex flex-wrap gap-3">
              <BrandBadge tone="signal" icon="spark">
                Résumé
              </BrandBadge>

              <BrandBadge tone="quiet" icon="dot">
                Creative technical writer
              </BrandBadge>

              <BrandBadge tone="quiet" icon="dot">
                Knowledge systems designer
              </BrandBadge>
            </div>

            <h1 className="mt-6 font-display text-5xl font-bold leading-none tracking-[-0.06em] text-ink md:text-7xl">
              Marquetta Moore
            </h1>

            <p className="mt-5 max-w-4xl text-xl leading-9 text-muted">
              I organize complicated information and workflows so people can find
              the right answer and act on it.
            </p>

            <p className="mt-5 max-w-4xl leading-8 text-muted">
              My work spans AI products, cybersecurity, knowledge governance,
              internal tools, technical enablement, and creative production. I
              define clear interfaces, output checks, secure configuration,
              failure states, adoption support, and human review.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/work"
                className="focus-ring rounded-2xl border border-[#19D8E8] bg-[#19D8E8] px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[#071014] shadow-[0_0_32px_rgba(25,216,232,0.24)] transition hover:-translate-y-0.5"
              >
                View selected work
              </Link>

              <a
                href="mailto:hello@alwaysready4moore.com"
                className="focus-ring rounded-2xl border border-[var(--border)] bg-white/5 px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-0.5 hover:border-cyan/40"
              >
                Email me
              </a>

              <a
                href="https://www.linkedin.com/in/alwaysready4moore"
                target="_blank"
                rel="noreferrer"
                className="focus-ring rounded-2xl border border-[var(--border)] bg-white/5 px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-0.5 hover:border-cyan/40"
              >
                LinkedIn ↗
              </a>
            </div>

            <p className="mt-6 font-lab text-xs uppercase tracking-[0.08em] text-muted">
              Remote · United States · alwaysready4moore.com
            </p>
          </div>
        </div>
      </section>

      <section className="lab-shell pt-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactSignals.map((signal) => (
            <article
              key={signal.label}
              className="paper-card relative overflow-hidden p-5"
            >
              <CyanSpark
                size="xs"
                className="absolute right-5 top-5 opacity-50"
              />

              <p className="font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
                {signal.value}
              </p>

              <p className="mt-3 text-sm leading-6 text-muted">
                {signal.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <SectionHeading
          kicker="Core strengths"
          title="See the strengths that connect the work"
          description="The work combines technical systems, information design, creative production, and human judgment."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {strengths.map((strength) => (
            <article
              key={strength.label}
              className="paper-card relative overflow-hidden p-6"
            >
              <CyanSpark
                size="xs"
                className="absolute right-5 top-5 opacity-50"
              />

              <BrandBadge tone="signal" icon="dot">
                {strength.label}
              </BrandBadge>

              <h3 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.04em] text-ink">
                {strength.title}
              </h3>

              <p className="mt-4 leading-7 text-muted">
                {strength.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="lab-shell pt-20">
        <SectionHeading
          kicker="Experience"
          title="Review systems built during daily work"
          description="Experience across security analysis, enterprise support, knowledge governance, workflow tools, enablement, and technical communication."
        />

        <div className="grid gap-5">
          {experience.map((item) => (
            <ExperienceCard key={`${item.company}-${item.role}`} {...item} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionHeading
          kicker="Earlier foundation"
          title="Review the earlier foundation"
          description="Earlier roles built the foundation in support, operations, records, security, and communication."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {earlierExperience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="paper-card relative overflow-hidden p-6"
            >
              <NotebookHighlight
                size="lg"
                className="absolute -right-3 -top-3 rotate-[-8deg] opacity-20"
              />

              <BrandBadge tone="quiet" icon="dot">
                {item.dates}
              </BrandBadge>

              <h3 className="mt-5 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
                {item.company}
              </h3>

              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.06em] text-cyan">
                {item.role}
              </p>

              <p className="mt-4 leading-7 text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionHeading
          kicker="Selected projects"
          title="See selected work beyond the job titles"
          description="Public-safe case studies covering technical execution, knowledge architecture, product decisions, and creative direction."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="paper-card group relative flex h-full flex-col overflow-hidden p-6 transition hover:-translate-y-1 hover:border-cyan/40"
            >
              <NotebookHighlight
                size="lg"
                className="absolute -right-3 -top-3 rotate-[-8deg] opacity-20"
              />

              <BrandBadge tone="quiet" icon="dot">
                {project.type}
              </BrandBadge>

              <h3 className="mt-5 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
                {project.title}
              </h3>

              <p className="mt-4 flex-1 leading-7 text-muted">
                {project.description}
              </p>

              <p className="mt-6 border-t border-[var(--border)] pt-5 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-cyan transition group-hover:translate-x-1">
                View project <span aria-hidden="true">→</span>
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionHeading
          kicker="Capabilities"
          title="Review capabilities by problem area"
          description="Skills grouped by the problems they support."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilityGroups.map((group) => (
            <article
              key={group.label}
              className="paper-card relative overflow-hidden p-6"
            >
              <CyanSpark
                size="xs"
                className="absolute right-5 top-5 opacity-45"
              />

              <h3 className="pr-8 font-display text-2xl font-bold leading-tight tracking-[-0.035em] text-ink">
                {group.label}
              </h3>

              <ul className="mt-5 grid gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="grid grid-cols-[auto_1fr] gap-3 text-sm text-muted"
                  >
                    <span aria-hidden="true" className="text-cyan">
                      ◆
                    </span>
                    <span className="leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionHeading
          kicker="Tools and platforms"
          title="Review tools and platforms"
          description="Tools used across AI, development, knowledge operations, enterprise support, and creative production."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {platformGroups.map((group) => (
            <article
              key={group.label}
              className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-6"
            >
              <BrandBadge tone="quiet" icon="dot">
                {group.label}
              </BrandBadge>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-cyan/15 bg-cyan/[0.045] px-3 py-2 font-lab text-[0.66rem] font-semibold uppercase tracking-[0.06em] text-muted"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 max-w-4xl text-sm leading-7 text-muted">
          Tool names show working familiarity. They do not mean every project
          used every platform. I choose tools based on the job and learn new
          ones as needed.
        </p>
      </section>

      <section className="lab-shell pt-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <SectionHeading kicker="Education" title="Technical foundation" />

            <div className="grid gap-4">
              {education.map((item) => (
                <article
                  key={`${item.degree}-${item.school}`}
                  className="paper-card relative overflow-hidden p-6"
                >
                  <CyanSpark
                    size="xs"
                    className="absolute right-5 top-5 opacity-45"
                  />

                  <h3 className="font-display text-3xl font-bold leading-none tracking-[-0.04em] text-ink">
                    {item.degree}
                  </h3>

                  <p className="mt-3 text-lg text-cyan">{item.school}</p>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              kicker="Certifications"
              title="Continued learning"
            />

            <div className="paper-card p-6">
              <ul className="grid gap-4">
                {certifications.map((certification) => (
                  <li
                    key={certification}
                    className="flex items-start gap-3 border-b border-[var(--border)] pb-4 last:border-b-0 last:pb-0"
                  >
                    <span aria-hidden="true" className="mt-1 text-cyan">
                      ✓
                    </span>
                    <span className="leading-7 text-muted">
                      {certification}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="lab-shell pt-20">
        <div className="paper-note relative overflow-hidden p-7 md:p-9">
          <MarginArrow
            size="lg"
            className="absolute right-7 top-7 rotate-6 opacity-25"
          />

          <p className="field-heading max-w-5xl text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            I build the structures that make information useful, whether the
            final form is a knowledge environment, an AI pipeline, a browser
            tool, or a creative experience.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="focus-ring rounded-2xl border border-[#19D8E8] bg-[#19D8E8] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[#071014] shadow-[0_0_24px_rgba(25,216,232,0.24)] transition hover:-translate-y-0.5"
            >
              View selected work
            </Link>

            <Link
              href="/contact"
              className="focus-ring rounded-2xl border border-[var(--paper-line)] bg-white/40 px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[var(--paper-ink)] transition hover:-translate-y-0.5"
            >
              Contact me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
