"use client";

import { useMemo, useState } from "react";
import styles from "../suspicious-email-triage/triage-playbook.module.css";

type PortalView = "playbook" | "health" | "quick";
type HealthAnswer = "yes" | "no" | "unknown";
type HealthState = {
  owner: HealthAnswer;
  current: HealthAnswer;
  duplicate: HealthAnswer;
  needed: HealthAnswer;
  changed: HealthAnswer;
  critical: HealthAnswer;
};

type WorkflowStep = {
  number: string;
  title: string;
  summary: string;
  checks: string[];
  output: string;
};

const workflowSteps: WorkflowStep[] = [
  {
    number: "01",
    title: "Identify the need",
    summary:
      "Start with a user task, recurring question, product change, policy requirement, or measured gap.",
    checks: [
      "Name the audience and the task they need to complete.",
      "Confirm that documentation is the right response.",
      "Search for existing content before opening a new draft.",
    ],
    output: "A documented need with a target audience and expected outcome.",
  },
  {
    number: "02",
    title: "Scope the content",
    summary:
      "Choose the content type, boundaries, source material, and dependencies before writing.",
    checks: [
      "Separate policy, procedure, reference, troubleshooting, and announcement content.",
      "Define what the article will cover and what it will leave out.",
      "List systems, teams, links, and related articles that may change with it.",
    ],
    output: "A scoped content request with the right format and dependencies.",
  },
  {
    number: "03",
    title: "Assign ownership",
    summary:
      "Name the people responsible for accuracy, review, editing, and approval.",
    checks: [
      "Assign one accountable owner for the published article.",
      "Identify the subject matter expert and editorial reviewer.",
      "Set a review interval based on risk and rate of change.",
    ],
    output: "A named owner, reviewers, and review cadence.",
  },
  {
    number: "04",
    title: "Draft for the task",
    summary:
      "Write around the user’s goal, decision points, prerequisites, and likely failure states.",
    checks: [
      "Lead with the action or answer the user needs.",
      "Use meaningful headings, ordered steps, and clear outcomes.",
      "Add examples, cautions, and escalation paths only where they help the task.",
    ],
    output: "A usable draft that supports the intended task.",
  },
  {
    number: "05",
    title: "Review and validate",
    summary:
      "Check technical accuracy, usability, links, metadata, and fit with related guidance.",
    checks: [
      "Have the subject matter expert verify facts and current behavior.",
      "Test the steps with a representative user or reviewer when possible.",
      "Resolve duplication, contradictions, and broken dependencies before publishing.",
    ],
    output: "An approved draft with recorded review evidence.",
  },
  {
    number: "06",
    title: "Publish and connect",
    summary:
      "Publish with searchable metadata, related links, ownership, and a clear review date.",
    checks: [
      "Use a title and summary that match likely search language.",
      "Add the content to the correct collection, workflow, or navigation path.",
      "Record the owner, publication date, review date, and change summary.",
    ],
    output: "Published content that users can find and owners can maintain.",
  },
  {
    number: "07",
    title: "Measure health",
    summary:
      "Use several signals to decide whether the article remains useful, accurate, and easy to find.",
    checks: [
      "Review search terms, feedback, support patterns, usage, and failed-task signals.",
      "Check product, policy, and workflow changes that affect the article.",
      "Look for competing articles, dead links, and content without an owner.",
    ],
    output: "A content health decision supported by evidence.",
  },
  {
    number: "08",
    title: "Refresh, merge, or retire",
    summary:
      "Choose the smallest safe action, then document the replacement path and decision.",
    checks: [
      "Refresh content when the need remains but the guidance has changed.",
      "Merge overlapping articles and preserve the strongest destination.",
      "Retire unused or obsolete content with redirects and retained evidence where required.",
    ],
    output: "A maintained knowledge base with a traceable content decision.",
  },
];

const contentTypes = [
  {
    name: "Procedure",
    shorthand: "Complete a task",
    description:
      "Ordered instructions for a defined outcome, including prerequisites, decision points, and validation.",
    examples: ["Request access", "Configure a device", "Publish a release"],
    rule: "Use when sequence and completion matter.",
  },
  {
    name: "Troubleshooting",
    shorthand: "Diagnose and recover",
    description:
      "Symptom-based guidance that helps the user test likely causes and choose the next action.",
    examples: ["Login failure", "Email delivery issue", "Browser error"],
    rule: "Use when the path changes with evidence.",
  },
  {
    name: "Reference",
    shorthand: "Look up a fact",
    description:
      "Stable definitions, fields, commands, limits, matrices, and other material users consult as needed.",
    examples: ["Role matrix", "Error code list", "Supported versions"],
    rule: "Use when quick retrieval matters more than sequence.",
  },
  {
    name: "Policy and standard",
    shorthand: "Understand a requirement",
    description:
      "Authoritative rules, responsibilities, boundaries, and mandatory controls.",
    examples: ["Retention rule", "Access standard", "Publishing requirement"],
    rule: "Keep requirements separate from step-by-step instructions.",
  },
];

const escalationCriteria = [
  "A critical article has no accountable owner.",
  "A product, policy, or security change makes current guidance unsafe or wrong.",
  "Two authoritative articles give conflicting instructions.",
  "A planned retirement affects legal, regulatory, audit, or contractual evidence.",
  "An article supports a high-risk workflow but has not been validated within its review window.",
  "Search and support data indicate users cannot find or complete a common task.",
  "The replacement path, redirect, or communication owner is unclear.",
];

const examples = [
  {
    title: "Duplicate password reset guidance",
    disposition: "Merge",
    setup:
      "Three support articles cover the same reset flow with different titles and slightly different steps.",
    evidence: [
      "Search results split traffic across all three articles.",
      "One article contains the current screenshots and workflow.",
      "Agents link to different versions in customer replies.",
      "The articles share the same audience and outcome.",
    ],
    reasoning:
      "The need remains, but duplication creates inconsistent guidance and weakens search results.",
    action:
      "Choose the strongest article, merge useful details, redirect the older URLs, and record the consolidation.",
  },
  {
    title: "Payroll procedure after a UI change",
    disposition: "Priority refresh",
    setup:
      "A payroll tool changes its approval screen two days before the monthly close process.",
    evidence: [
      "The procedure supports a time-sensitive financial workflow.",
      "The owner confirms that several steps and labels changed.",
      "The current article may cause users to select the wrong approval path.",
      "The article receives regular use during close.",
    ],
    reasoning:
      "The content is still needed and high impact. The current version creates avoidable operational risk.",
    action:
      "Add a temporary warning, update and validate the procedure, notify affected teams, and record the change.",
  },
  {
    title: "Retired application setup guide",
    disposition: "Retire",
    setup:
      "An application was decommissioned six months ago, but its setup guide remains searchable.",
    evidence: [
      "The system owner confirms that no active users remain.",
      "A migration guide explains the replacement tool.",
      "The old article still appears for common setup terms.",
      "No retention rule requires the guide to remain public.",
    ],
    reasoning:
      "The article no longer supports a valid task and may direct users toward an unavailable system.",
    action:
      "Archive the guide, redirect users to the replacement, preserve required history, and update related links.",
  },
  {
    title: "Current browser troubleshooting article",
    disposition: "Keep",
    setup:
      "A browser troubleshooting article reaches its scheduled review date.",
    evidence: [
      "The owner confirms that the steps still match current behavior.",
      "Search terms match the title and summary.",
      "Feedback is positive and task completion remains strong.",
      "No competing article covers the same problem.",
    ],
    reasoning:
      "The content remains accurate, discoverable, useful, and owned. Rewriting would add work without improving the task.",
    action:
      "Record the review, keep the article, and set the next review date.",
  },
];

const commonMistakes = [
  {
    title: "Publishing without an owner",
    correction:
      "Assign one accountable person or team before publication, along with a review interval and escalation path.",
  },
  {
    title: "Treating the review date as proof",
    correction:
      "Record who reviewed the content, what they checked, and what changed. A new date alone does not verify accuracy.",
  },
  {
    title: "Using page views as the health score",
    correction:
      "Combine usage with search terms, feedback, task outcomes, support patterns, and change events.",
  },
  {
    title: "Creating a new article before searching",
    correction:
      "Check the inventory first. Updating or extending an existing article may produce a clearer result.",
  },
  {
    title: "Mixing rules and instructions",
    correction:
      "Keep policy requirements distinct from the procedure that helps users follow them. Link the two clearly.",
  },
  {
    title: "Deleting content without a replacement path",
    correction:
      "Plan redirects, replacement links, retained evidence, and user communication before retirement.",
  },
];

const limitations = [
  "Content analytics may miss users who complete a task without opening an article.",
  "Low usage can mean poor discoverability, a rare task, or content that no longer has value.",
  "Review intervals vary with risk, product change, audience, and regulatory requirements.",
  "Legal, audit, and records-retention decisions require organization-specific guidance.",
  "Distributed knowledge bases need clear ownership across teams and platforms.",
  "Governance cannot repair unclear products, broken workflows, or missing source information on its own.",
];

const roleMatrix = [
  {
    role: "Requester",
    responsibility: "Explains the user need, change, gap, or recurring question.",
    cannotApprove: "Technical accuracy or final publication by default.",
  },
  {
    role: "Author",
    responsibility: "Researches, structures, writes, and updates the content.",
    cannotApprove: "Facts or policy outside the author’s authority.",
  },
  {
    role: "Subject matter expert",
    responsibility: "Verifies current behavior, technical facts, and operational boundaries.",
    cannotApprove: "Editorial quality or findability on behalf of the knowledge team.",
  },
  {
    role: "Knowledge manager or editor",
    responsibility: "Reviews structure, style, metadata, duplication, and placement.",
    cannotApprove: "Business or technical facts they do not own.",
  },
  {
    role: "Content owner",
    responsibility: "Accepts accountability for accuracy, review, replacement, and retirement.",
    cannotApprove: "Exceptions to legal, security, or records requirements outside their role.",
  },
];

const reviewCadence = [
  ["Critical procedure", "Quarterly or after a material change", "High-impact or time-sensitive work"],
  ["Standard procedure", "Every 6 to 12 months", "Stable operational tasks"],
  ["Reference content", "Every 12 months or after source change", "Fields, limits, definitions, and matrices"],
  ["Policy-linked content", "With each policy review", "Requirements and compliance guidance"],
];

const quickChecklist = [
  "Confirm the audience, task, evidence, and reason documentation is needed.",
  "Search for existing content before creating a new article.",
  "Choose the correct content type and define the article boundary.",
  "Assign an accountable owner, reviewers, and review interval.",
  "Draft around the user task, decision points, and expected outcome.",
  "Validate facts, usability, links, metadata, and related guidance.",
  "Publish with ownership, search language, review date, and change summary.",
  "Use evidence to keep, refresh, merge, or retire the content.",
];

const initialHealth: HealthState = {
  owner: "unknown",
  current: "unknown",
  duplicate: "unknown",
  needed: "unknown",
  changed: "unknown",
  critical: "unknown",
};

function ActionPill({ action }: { action: string }) {
  const classMap: Record<string, string> = {
    keep: "informational",
    refresh: "low",
    merge: "medium",
    retire: "high",
    escalate: "high",
    review: "medium",
  };
  const key = classMap[action.toLowerCase()] ?? "informational";
  return <span className={`${styles.severityPill} ${styles[key]}`}>{action}</span>;
}

function PortalIcon({ name }: { name: "book" | "health" | "quick" | "print" }) {
  if (name === "book") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H20v16H7.5A2.5 2.5 0 0 0 5 20.5v-16Z" />
        <path d="M5 20.5A2.5 2.5 0 0 1 7.5 18H20v4H7.5A2.5 2.5 0 0 1 5 19.5V4" />
      </svg>
    );
  }

  if (name === "health") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19V9M10 19V5M16 19v-8M22 19H2" />
        <path d="m3 7 6-4 6 5 6-5" />
      </svg>
    );
  }

  if (name === "quick") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 3h12v18H6z" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 14h12v8H6z" />
    </svg>
  );
}

function HealthQuestion({
  number,
  legend,
  value,
  onChange,
}: {
  number: string;
  legend: string;
  value: HealthAnswer;
  onChange: (value: HealthAnswer) => void;
}) {
  const options: { value: HealthAnswer; label: string }[] = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
    { value: "unknown", label: "Not confirmed" },
  ];

  return (
    <fieldset className={styles.decisionQuestion}>
      <legend>
        <span>{number}</span>
        {legend}
      </legend>
      <div>
        {options.map((option) => (
          <button
            type="button"
            key={option.value}
            className={value === option.value ? styles.selectedDecision : ""}
            onClick={() => onChange(option.value)}
          >
            <span className={styles.radioMark} aria-hidden="true" />
            {option.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function KnowledgeGovernancePlaybook() {
  const [view, setView] = useState<PortalView>("playbook");

  function printCurrentView() {
    window.print();
  }

  return (
    <div className={styles.playbookShell}>
      <div className={styles.portalFrame}>
        <div className={styles.portalTopbar}>
          <div className={styles.breadcrumbs}>
            <span>Knowledge operations</span>
            <span aria-hidden="true">/</span>
            <strong>Knowledge base governance</strong>
          </div>
          <div className={styles.documentState}>
            <span className={styles.liveDot} aria-hidden="true" />
            Public-safe simulation · v1.0
          </div>
        </div>

        <div className={styles.portalTabs} role="tablist" aria-label="Playbook views">
          <button
            type="button"
            role="tab"
            aria-selected={view === "playbook"}
            className={view === "playbook" ? styles.activeTab : ""}
            onClick={() => setView("playbook")}
          >
            <PortalIcon name="book" /> Playbook
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={view === "health"}
            className={view === "health" ? styles.activeTab : ""}
            onClick={() => setView("health")}
          >
            <PortalIcon name="health" /> Health checker
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={view === "quick"}
            className={view === "quick" ? styles.activeTab : ""}
            onClick={() => setView("quick")}
          >
            <PortalIcon name="quick" /> Quick reference
          </button>
          <button type="button" className={styles.printButton} onClick={printCurrentView}>
            <PortalIcon name="print" /> Print
          </button>
        </div>

        {view === "playbook" ? <PlaybookView /> : null}
        {view === "health" ? <HealthCheckerView /> : null}
        {view === "quick" ? <QuickReferenceView /> : null}
      </div>
    </div>
  );
}

function PlaybookView() {
  const [activeStep, setActiveStep] = useState(0);
  const [openExample, setOpenExample] = useState(0);
  const step = workflowSteps[activeStep];

  const sectionLinks = [
    ["overview", "Overview"],
    ["lifecycle", "Content lifecycle"],
    ["content-types", "Content types"],
    ["health-model", "Health model"],
    ["roles", "Roles and ownership"],
    ["examples", "Worked examples"],
    ["mistakes", "Common mistakes"],
    ["limitations", "Known limitations"],
    ["governance", "Governance"],
  ];

  return (
    <div className={styles.portalBody}>
      <aside className={styles.sideNav}>
        <p className={styles.sideNavLabel}>In this playbook</p>
        <nav aria-label="Playbook sections">
          {sectionLinks.map(([href, label]) => (
            <a key={href} href={`#kb-${href}`}>
              <span aria-hidden="true" />
              {label}
            </a>
          ))}
        </nav>
        <div className={styles.ownerCard}>
          <p>Document owner</p>
          <strong>Knowledge operations</strong>
          <span>Review: quarterly</span>
        </div>
      </aside>

      <article className={styles.documentCanvas}>
        <section id="kb-overview" className={styles.documentSection}>
          <p className={styles.sectionEyebrow}>Purpose and scope</p>
          <h2>Keep guidance accurate, findable, and owned</h2>
          <p className={styles.lede}>
            This playbook defines a repeatable governance process for operational
            and technical knowledge. It helps teams decide what to create, who owns
            it, how to validate it, and when to keep, refresh, merge, or retire it.
          </p>

          <div className={styles.summaryGrid}>
            <div>
              <span>Applies to</span>
              <p>Procedures, troubleshooting, reference material, standards, and internal help content.</p>
            </div>
            <div>
              <span>Primary audience</span>
              <p>Knowledge managers, technical writers, support leaders, subject matter experts, and content owners.</p>
            </div>
            <div>
              <span>Primary outcome</span>
              <p>Users can find current guidance, and owners can explain each content decision.</p>
            </div>
            <div>
              <span>Authority boundary</span>
              <p>Follow approved legal, records, security, compliance, and publishing requirements.</p>
            </div>
          </div>

          <div className={styles.prerequisiteCallout}>
            <div className={styles.calloutIcon} aria-hidden="true">✓</div>
            <div>
              <strong>Before governance begins</strong>
              <p>
                Maintain a content inventory with title, URL, owner, audience,
                content type, status, last verified date, and next review date.
              </p>
            </div>
          </div>
        </section>

        <section id="kb-lifecycle" className={styles.documentSection}>
          <div className={styles.sectionHeadingRow}>
            <div>
              <p className={styles.sectionEyebrow}>Content lifecycle</p>
              <h2>Follow the work from need to retirement</h2>
            </div>
            <span className={styles.interactiveLabel}>Interactive</span>
          </div>
          <p className={styles.sectionIntro}>
            Select a stage to review its checks and expected output.
          </p>

          <div className={styles.workflowRail}>
            {workflowSteps.map((item, index) => (
              <button
                type="button"
                key={item.number}
                className={index === activeStep ? styles.activeWorkflowStep : ""}
                onClick={() => setActiveStep(index)}
              >
                <span>{item.number}</span>
                <strong>{item.title}</strong>
              </button>
            ))}
          </div>

          <div className={styles.workflowDetail} aria-live="polite">
            <div className={styles.workflowNumber}>{step.number}</div>
            <div>
              <span className={styles.detailLabel}>Current stage</span>
              <h3>{step.title}</h3>
              <p className={styles.detailSummary}>{step.summary}</p>
              <ul>
                {step.checks.map((check) => <li key={check}>{check}</li>)}
              </ul>
              <div className={styles.outputLine}>
                <span>Expected output</span>
                <p>{step.output}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="kb-content-types" className={styles.documentSection}>
          <p className={styles.sectionEyebrow}>Content model</p>
          <h2>Choose the format that matches the user’s job</h2>
          <p className={styles.sectionIntro}>
            Content becomes easier to write, review, and find when each article has a clear job.
          </p>
          <div className={styles.severityGrid}>
            {contentTypes.map((item, index) => {
              const tones = ["informational", "low", "medium", "high"];
              return (
                <article key={item.name} className={`${styles.severityCard} ${styles[tones[index]]}`}>
                  <div className={styles.severityCardTop}>
                    <ActionPill action={item.name} />
                    <span>{item.shorthand}</span>
                  </div>
                  <p>{item.description}</p>
                  <ul>
                    {item.examples.map((example) => <li key={example}>{example}</li>)}
                  </ul>
                  <div>
                    <strong>Use rule</strong>
                    <p>{item.rule}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="kb-health-model" className={styles.documentSection}>
          <p className={styles.sectionEyebrow}>Content health</p>
          <h2>Use several signals before choosing an action</h2>
          <p className={styles.sectionIntro}>
            A content decision should consider ownership, accuracy, duplication,
            current need, change events, risk, search behavior, and user feedback.
          </p>
          <div className={styles.escalationPanel}>
            <div className={styles.escalationSignal} aria-hidden="true">!</div>
            <div>
              <h3>Escalate the decision when</h3>
              <ul>
                {escalationCriteria.map((criterion) => <li key={criterion}>{criterion}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section id="kb-roles" className={styles.documentSection}>
          <p className={styles.sectionEyebrow}>Roles and ownership</p>
          <h2>Make each decision owner visible</h2>
          <p className={styles.sectionIntro}>
            Contributors can share the work, but the published article still needs one accountable owner.
          </p>
          <div className={styles.headerFieldList}>
            {roleMatrix.map((item) => (
              <article key={item.role}>
                <div><code>{item.role}</code><strong>Primary responsibility</strong></div>
                <p><span>Owns</span>{item.responsibility}</p>
                <p><span>Does not replace</span>{item.cannotApprove}</p>
              </article>
            ))}
          </div>

          <h3 className={`${styles.referenceSectionTitle} mt-10`}>Suggested review cadence</h3>
          <div className={styles.revisionTable}>
            <div className={styles.revisionHeader}>
              <span>Content</span><span>Review</span><span>Use case</span>
            </div>
            {reviewCadence.map(([content, cadence, use]) => (
              <div key={content}>
                <span>{content}</span><span>{cadence}</span><span>{use}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="kb-examples" className={styles.documentSection}>
          <p className={styles.sectionEyebrow}>Worked examples</p>
          <h2>Show the evidence behind the content decision</h2>
          <p className={styles.sectionIntro}>
            Open each example to compare the signals, reasoning, and action.
          </p>
          <div className={styles.exampleList}>
            {examples.map((example, index) => {
              const isOpen = openExample === index;
              return (
                <article key={example.title}>
                  <button type="button" onClick={() => setOpenExample(isOpen ? -1 : index)} aria-expanded={isOpen}>
                    <span className={styles.exampleIndex}>{String(index + 1).padStart(2, "0")}</span>
                    <span className={styles.exampleTitle}>
                      <strong>{example.title}</strong>
                      <ActionPill action={example.disposition.split(" ").slice(-1)[0]} />
                    </span>
                    <span className={styles.expandMark} aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen ? (
                    <div className={styles.exampleBody}>
                      <div>
                        <span>Situation</span>
                        <p>{example.setup}</p>
                        <ul>{example.evidence.map((item) => <li key={item}>{item}</li>)}</ul>
                      </div>
                      <div><span>Reasoning</span><p>{example.reasoning}</p></div>
                      <div><span>Action</span><p>{example.action}</p></div>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </section>

        <section id="kb-mistakes" className={styles.documentSection}>
          <p className={styles.sectionEyebrow}>Common mistakes</p>
          <h2>Protect the knowledge base from quiet decay</h2>
          <div className={styles.mistakeGrid}>
            {commonMistakes.map((item) => (
              <article key={item.title}>
                <span aria-hidden="true">!</span>
                <div><h3>{item.title}</h3><p>{item.correction}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="kb-limitations" className={styles.documentSection}>
          <p className={styles.sectionEyebrow}>Known limitations</p>
          <h2>Governance still needs context and judgment</h2>
          <ul className={styles.limitationsList}>
            {limitations.map((item, index) => (
              <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>
            ))}
          </ul>
        </section>

        <section id="kb-governance" className={styles.documentSection}>
          <p className={styles.sectionEyebrow}>Document governance</p>
          <h2>Keep the playbook maintainable</h2>
          <div className={styles.governanceGrid}>
            <div><span>Owner</span><strong>Knowledge operations</strong></div>
            <div><span>Review cadence</span><strong>Quarterly and after material changes</strong></div>
            <div><span>Feedback path</span><strong>Article feedback, support patterns, and owner review</strong></div>
            <div><span>Change control</span><strong>Version, summary, approver, and effective date</strong></div>
          </div>

          <div className={styles.ticketTemplate}>
            <div className={styles.ticketHeader}>
              <strong>Content decision record</strong><span>Minimum fields</span>
            </div>
            <div className={styles.ticketFields}>
              {[
                "Article and URL",
                "Audience and task",
                "Owner and reviewers",
                "Content type and risk",
                "Evidence reviewed",
                "Decision and reason",
                "Redirect or replacement",
                "Effective and next review dates",
              ].map((field) => <div key={field}><span>□</span>{field}</div>)}
            </div>
          </div>

          <div className={styles.revisionTable}>
            <div className={styles.revisionHeader}>
              <span>Version</span><span>Date</span><span>Summary</span>
            </div>
            <div><span>1.0</span><span>Aug 2026</span><span>Initial public-safe governance simulation</span></div>
          </div>
        </section>
      </article>
    </div>
  );
}

function HealthCheckerView() {
  const [answers, setAnswers] = useState<HealthState>(initialHealth);

  const result = useMemo(() => {
    const unknownCount = Object.values(answers).filter((value) => value === "unknown").length;

    if (answers.critical === "yes" && (answers.owner !== "yes" || answers.current !== "yes" || answers.changed === "yes")) {
      return {
        action: "Escalate",
        tone: "high",
        title: "Priority governance review",
        text: "The article supports critical work and has an ownership, accuracy, or change concern. Assign the right owners and verify the guidance before normal maintenance continues.",
      };
    }

    if (answers.duplicate === "yes") {
      return {
        action: "Merge",
        tone: "medium",
        title: "Consolidate the guidance",
        text: "Overlapping content can split search results and create conflicting instructions. Choose the strongest destination, combine useful material, and redirect the older article.",
      };
    }

    if (answers.needed === "no") {
      return {
        action: "Retire",
        tone: "high",
        title: "Plan a safe retirement",
        text: "The article no longer supports a current task. Confirm retention needs, provide a replacement or explanation, update links, and archive the decision.",
      };
    }

    if (answers.current === "no" || answers.changed === "yes") {
      return {
        action: "Refresh",
        tone: "low",
        title: "Update and validate the article",
        text: "The need remains, but the guidance may no longer match current behavior. Update the affected sections, test the task, and record the review evidence.",
      };
    }

    if (answers.owner === "no") {
      return {
        action: "Escalate",
        tone: "high",
        title: "Resolve ownership",
        text: "The article cannot stay healthy without an accountable owner. Assign ownership before the next publication or review decision.",
      };
    }

    if (unknownCount >= 3) {
      return {
        action: "Review",
        tone: "medium",
        title: "Collect evidence before deciding",
        text: "Several health signals are unconfirmed. Check ownership, current behavior, duplication, user need, and recent changes before choosing an action.",
      };
    }

    if (answers.owner === "yes" && answers.current === "yes" && answers.duplicate === "no" && answers.needed === "yes" && answers.changed === "no") {
      return {
        action: "Keep",
        tone: "informational",
        title: "Keep the article and record the review",
        text: "The article is owned, current, distinct, and still needed. Record the evidence and set the next review date rather than rewriting it without cause.",
      };
    }

    return {
      action: "Review",
      tone: "medium",
      title: "Complete the health review",
      text: "The available signals do not support a final action yet. Confirm the remaining items and document the evidence used for the decision.",
    };
  }, [answers]);

  const questions: { key: keyof HealthState; legend: string }[] = [
    { key: "owner", legend: "Does the article have an accountable owner?" },
    { key: "current", legend: "Has the guidance been verified within its review window?" },
    { key: "duplicate", legend: "Does another article cover the same task or answer?" },
    { key: "needed", legend: "Does the article still support a current user task?" },
    { key: "changed", legend: "Has a product, policy, or workflow changed since the last review?" },
    { key: "critical", legend: "Does the article support a critical or high-risk workflow?" },
  ];

  return (
    <article className={`${styles.documentCanvas} ${styles.referenceCanvas}`}>
      <header className={styles.referenceHeader}>
        <div>
          <p className={styles.sectionEyebrow}>Interactive content review</p>
          <h2>Content health checker</h2>
          <p>
            Answer six questions to identify the next governance action. Use the result as a starting point, then record the evidence and owner decision.
          </p>
        </div>
        <div className={styles.referenceStamp}>DECISION AID</div>
      </header>

      <section className={styles.documentSection}>
        <div className={styles.decisionTree}>
          {questions.map((question, index) => (
            <HealthQuestion
              key={question.key}
              number={String(index + 1)}
              legend={question.legend}
              value={answers[question.key]}
              onChange={(value) => setAnswers((current) => ({ ...current, [question.key]: value }))}
            />
          ))}
        </div>

        <div className={`${styles.recommendationCard} ${styles[result.tone]}`} aria-live="polite">
          <div>
            <span>Recommended next action</span>
            <ActionPill action={result.action} />
          </div>
          <h3>{result.title}</h3>
          <p>{result.text}</p>
          <button type="button" onClick={() => setAnswers(initialHealth)}>Reset checker</button>
        </div>
      </section>

      <section className={styles.documentSection}>
        <h3 className={styles.referenceSectionTitle}>Evidence to collect</h3>
        <div className={styles.layerDiagram}>
          {[
            ["1", "Ownership", "Named owner, current team, review responsibility, and escalation path."],
            ["2", "Accuracy", "Current system behavior, source material, validation notes, and known changes."],
            ["3", "Findability", "Search language, failed searches, navigation path, links, and metadata."],
            ["4", "Usefulness", "User feedback, task outcomes, support patterns, usage, and recurring questions."],
            ["5", "Lifecycle", "Duplicates, dependencies, replacement content, retention needs, and review date."],
          ].map(([number, title, text]) => (
            <div key={number}><span>{number}</span><strong>{title}</strong><p>{text}</p></div>
          ))}
        </div>
      </section>

      <section className={styles.documentSection}>
        <h3 className={styles.referenceSectionTitle}>Compact review note</h3>
        <pre className={styles.analysisNote}>{`Article: [title and URL]\nAudience / task: [who uses it and why]\nOwner: [accountable person or team]\nContent type / risk: [procedure, troubleshooting, reference, policy]\nEvidence: [sources, feedback, search, usage, change events]\nHealth findings: [accuracy, duplication, need, findability]\nDecision: [keep / refresh / merge / retire / escalate]\nAction owner: [person responsible]\nReplacement / redirect: [if applicable]\nEffective date / next review: [date]`}</pre>
      </section>
    </article>
  );
}

function QuickReferenceView() {
  return (
    <article className={`${styles.documentCanvas} ${styles.quickCanvas}`}>
      <header className={styles.quickHeader}>
        <div>
          <p className={styles.sectionEyebrow}>One-page knowledge aid</p>
          <h2>Knowledge base governance</h2>
          <p>Need → Scope → Own → Draft → Validate → Publish → Measure → Maintain</p>
        </div>
        <div className={styles.quickBadge}>QUICK REF</div>
      </header>

      <div className={styles.quickColumns}>
        <section>
          <h3>Eight-step check</h3>
          <ol className={styles.quickSteps}>
            {quickChecklist.map((item, index) => (
              <li key={item}><span>{index + 1}</span><p>{item}</p></li>
            ))}
          </ol>
        </section>

        <section>
          <h3>Escalate now</h3>
          <ul className={styles.quickEscalation}>
            {escalationCriteria.slice(0, 6).map((item) => <li key={item}>{item}</li>)}
          </ul>

          <h3 className={styles.quickSubhead}>Decision snapshot</h3>
          <div className={styles.quickSeverity}>
            {[
              ["Keep", "Owned, current, distinct, and still needed"],
              ["Refresh", "Need remains, guidance changed or expired"],
              ["Merge", "Overlapping content serves the same task"],
              ["Retire", "Task or system no longer exists"],
            ].map(([action, text]) => (
              <div key={action}><ActionPill action={action} /><p>{text}</p></div>
            ))}
          </div>
        </section>
      </div>

      <section className={styles.quickTicket}>
        <h3>Content record minimum</h3>
        <div>
          {[
            "Title / URL",
            "Audience / task",
            "Content type",
            "Owner / reviewers",
            "Source evidence",
            "Last verified",
            "Next review",
            "Health decision",
            "Replacement / redirect",
            "Change summary",
          ].map((item) => <span key={item}>□ {item}</span>)}
        </div>
      </section>

      <footer className={styles.quickFooter}>
        <strong>Authority boundary:</strong> Follow approved legal, records, security,
        compliance, publishing, and retention requirements for your organization.
      </footer>
    </article>
  );
}
