"use client";

import { useMemo, useState } from "react";
import styles from "../suspicious-email-triage/triage-playbook.module.css";

type PortalView = "playbook" | "matrix" | "quick";
type AccessTier = "Standard" | "Elevated" | "Privileged" | "Emergency";
type ChangeType = "joiner" | "mover" | "leaver" | "temporary";
type RequestState = "complete" | "incomplete";

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
    title: "Confirm the request",
    summary:
      "Capture who needs access, what they need, why they need it, and when the change should take effect.",
    checks: [
      "Record the requester, worker, manager, system, role, and effective date.",
      "Classify the event as a joiner, mover, leaver, or temporary request.",
      "Return requests that do not explain the business need or requested access.",
    ],
    output: "A complete request with a clear owner and effective date.",
  },
  {
    number: "02",
    title: "Verify identity and status",
    summary:
      "Confirm that the worker and requester match an approved source before changing access.",
    checks: [
      "Verify the worker in the authoritative identity or HR system.",
      "Confirm employment, contract, or vendor status and the correct manager.",
      "Use a trusted channel for urgent or unusual requests.",
    ],
    output: "Verified identity, status, and reporting relationship.",
  },
  {
    number: "03",
    title: "Classify the access",
    summary:
      "Identify the control tier before choosing an approval path or fulfillment method.",
    checks: [
      "Separate standard role access from elevated and privileged access.",
      "Flag access to production, finance, payroll, security, customer data, or administration.",
      "Identify temporary access, exceptions, and segregation-of-duties concerns.",
    ],
    output: "An access tier and review path.",
  },
  {
    number: "04",
    title: "Check least privilege",
    summary:
      "Match access to the current job need instead of copying a broad access profile without review.",
    checks: [
      "Use an approved role or access bundle when one exists.",
      "Remove access that no longer fits after a role change.",
      "Set an end date for temporary access and time-bound exceptions.",
    ],
    output: "The smallest access set that supports the work.",
  },
  {
    number: "05",
    title: "Route approvals",
    summary:
      "Send the request to the people accountable for the worker, system, data, and risk.",
    checks: [
      "Get manager approval for the business need.",
      "Get system-owner or data-owner approval when required.",
      "Route privileged, emergency, or conflicting access for security review.",
    ],
    output: "Recorded approvals from the required owners.",
  },
  {
    number: "06",
    title: "Provision or remove access",
    summary:
      "Make the approved change through the supported system and record what changed.",
    checks: [
      "Use the approved role, group, entitlement, or administrative process.",
      "For leavers, disable access within the required window and revoke active sessions when authorized.",
      "Do not fulfill access that differs from the approved request.",
    ],
    output: "A completed change tied to the approved request.",
  },
  {
    number: "07",
    title: "Validate the result",
    summary:
      "Check that the change worked and did not grant more access than intended.",
    checks: [
      "Confirm the expected role, groups, or entitlements.",
      "Ask the worker or manager to test access when appropriate.",
      "Check for duplicate, inherited, or conflicting access.",
    ],
    output: "Verified access with any follow-up work recorded.",
  },
  {
    number: "08",
    title: "Close and schedule review",
    summary:
      "Leave enough evidence for audit, support, and the next access review.",
    checks: [
      "Record approvals, changes, timestamps, systems, and the person who fulfilled the request.",
      "Notify the requester of the result and any limits.",
      "Schedule expiration or recertification when the access is temporary or privileged.",
    ],
    output: "A closed request with an audit-ready record.",
  },
];

const accessTiers: Array<{
  name: AccessTier;
  shorthand: string;
  description: string;
  examples: string[];
  response: string;
}> = [
  {
    name: "Standard",
    shorthand: "Approved role access",
    description:
      "Routine access included in a defined role or approved access bundle.",
    examples: ["Email and collaboration", "Department knowledge base", "Standard business application role"],
    response:
      "Confirm the request and manager, then use the standard fulfillment path.",
  },
  {
    name: "Elevated",
    shorthand: "Sensitive or expanded access",
    description:
      "Access beyond the standard role that reaches sensitive data, broader functions, or higher-impact actions.",
    examples: ["Customer exports", "Finance reporting", "Advanced support permissions", "Shared mailbox ownership"],
    response:
      "Require a clear business need and approval from the manager and system or data owner.",
  },
  {
    name: "Privileged",
    shorthand: "Administrative control",
    description:
      "Access that can change systems, identities, security controls, production data, or other users' permissions.",
    examples: ["Global administrator", "Production console", "Security tooling", "Identity administration"],
    response:
      "Route for security review, use named accounts where possible, and require recertification.",
  },
  {
    name: "Emergency",
    shorthand: "Time-bound exception",
    description:
      "Urgent access used to restore service or address a critical event when the normal path is too slow.",
    examples: ["Break-glass account", "Incident response access", "Emergency production change"],
    response:
      "Limit the duration, record the reason and approver, monitor use, and review the access after the event.",
  },
];

const escalationCriteria = [
  "The request seeks privileged, break-glass, or production access.",
  "The requested access conflicts with another role or creates a segregation-of-duties concern.",
  "The requester asks to bypass an approval, identity check, or supported provisioning method.",
  "A leaver still has active access after the required removal window.",
  "The worker, manager, employment status, or business need cannot be verified.",
  "The request includes finance, payroll, security, legal, health, or regulated data.",
  "The fulfilled access does not match the approved request or cannot be validated.",
];

const examples = [
  {
    title: "New support specialist",
    disposition: "Standard",
    setup:
      "A manager requests the approved support-role bundle for a new employee starting Monday.",
    evidence: [
      "The worker and manager match the authoritative HR record.",
      "The start date and role are confirmed.",
      "The requested bundle matches the approved support profile.",
      "No privileged or exception access is included.",
    ],
    reasoning:
      "The request is complete and fits a defined role. Standard manager approval and automated provisioning are enough.",
    action:
      "Provision the approved bundle for the start date, validate the assigned groups, and record the result.",
  },
  {
    title: "Temporary finance reporting",
    disposition: "Elevated",
    setup:
      "A project lead requests 30 days of access to a finance reporting workspace for a contractor.",
    evidence: [
      "The contractor and end date are verified.",
      "The request explains the project need.",
      "The workspace contains sensitive financial data.",
      "The system owner approves read-only access.",
    ],
    reasoning:
      "The data sensitivity places the request above standard access, but read-only scope and a fixed end date reduce exposure.",
    action:
      "Grant the approved read-only role, set automatic expiration, and schedule a review before renewal.",
  },
  {
    title: "Production administrator request",
    disposition: "Privileged",
    setup:
      "An engineering manager requests production administrator access for a developer responding to recurring incidents.",
    evidence: [
      "The worker and manager are verified.",
      "The request covers ongoing administration rather than one incident.",
      "The role can change production settings and data.",
      "A lower-privilege operator role may cover most tasks.",
    ],
    reasoning:
      "The request grants broad control and may exceed the stated need. Security and the system owner must review the role design.",
    action:
      "Pause fulfillment, compare lower-privilege options, and route the final request for privileged-access approval.",
  },
  {
    title: "Unplanned employee departure",
    disposition: "Emergency",
    setup:
      "Human Resources reports an immediate departure after the scheduled offboarding window has passed.",
    evidence: [
      "The departure is confirmed through the authoritative HR channel.",
      "The worker still has active sessions and remote access.",
      "The account reaches customer data and internal systems.",
      "Timing creates immediate exposure.",
    ],
    reasoning:
      "The priority is prompt removal and session revocation, followed by a review of missed dependencies and process failure.",
    action:
      "Use the approved emergency offboarding path, preserve the record, notify required owners, and open follow-up work.",
  },
];

const commonMistakes = [
  {
    title: "Copying another person's access",
    correction:
      "Use an approved role or compare each entitlement. A similar title does not prove an identical need.",
  },
  {
    title: "Treating manager approval as the only control",
    correction:
      "Managers confirm business need. System, data, and security owners may still need to approve risk.",
  },
  {
    title: "Adding access without removing old access",
    correction:
      "Role changes require both sides of the review. Remove access that no longer supports the current job.",
  },
  {
    title: "Leaving temporary access open",
    correction:
      "Set an expiration date when you grant the access. Do not rely on someone remembering later.",
  },
  {
    title: "Closing without validation",
    correction:
      "Confirm the assigned role and test the expected outcome before closing the request.",
  },
  {
    title: "Documenting the ticket, not the decision",
    correction:
      "Record why the access was needed, who approved it, what changed, and when it must be reviewed.",
  },
];

const limitations = [
  "Role names and approval paths vary by organization and system.",
  "A complete ticket does not replace identity verification or authoritative worker data.",
  "Automated provisioning can repeat a bad role design at scale.",
  "Least privilege depends on current job tasks, not title alone.",
  "Emergency access needs a separate policy, monitoring, and after-action review.",
  "This sample does not define legal, regulatory, or contractual retention requirements.",
];

const roleMatrix = [
  {
    role: "Requester",
    responsibility: "Explains the business need, scope, worker, and effective date.",
    cannotApprove: "Their own privileged access unless policy allows a documented exception.",
  },
  {
    role: "Manager",
    responsibility: "Confirms the worker's role, need, duration, and employment context.",
    cannotApprove: "Technical risk or data ownership outside the manager's authority.",
  },
  {
    role: "System or data owner",
    responsibility: "Confirms the correct role, data scope, and acceptable use.",
    cannotApprove: "Identity status or employment facts they do not own.",
  },
  {
    role: "Security or IAM",
    responsibility: "Reviews privileged access, conflicts, exceptions, and control requirements.",
    cannotApprove: "The business need on behalf of the worker's management chain.",
  },
  {
    role: "Fulfiller",
    responsibility: "Makes the approved change, validates it, and records the evidence.",
    cannotApprove: "A request simply because they can complete it.",
  },
];

const eventMatrix = [
  ["Joiner", "Grant approved role access for the confirmed start date.", "Role, manager, start date, required systems"],
  ["Mover", "Add current-role access and remove access that no longer fits.", "Old role, new role, effective date, overlap decision"],
  ["Leaver", "Disable access and sessions within the required window.", "Departure status, time, systems, asset and data handoff"],
  ["Temporary", "Grant the smallest scope with an expiration date.", "Sponsor, need, start, end, renewal owner"],
];

const quickChecklist = [
  "Confirm the worker, requester, manager, system, role, and effective date.",
  "Verify identity and employment or contract status in an authoritative source.",
  "Classify the request as joiner, mover, leaver, or temporary.",
  "Assign the access tier: standard, elevated, privileged, or emergency.",
  "Check least privilege, role conflicts, and required removals.",
  "Collect approvals from the right business, system, data, and security owners.",
  "Provision or remove only the approved access, then validate the result.",
  "Record the decision, evidence, timestamps, expiration, and review owner.",
];

function TierPill({ tier }: { tier: AccessTier | string }) {
  const classMap: Record<string, string> = {
    standard: "informational",
    elevated: "low",
    privileged: "medium",
    emergency: "high",
  };
  const key = classMap[tier.toLowerCase()] ?? "informational";
  return <span className={`${styles.severityPill} ${styles[key]}`}>{tier}</span>;
}

function PortalIcon({ name }: { name: "book" | "matrix" | "quick" | "print" }) {
  if (name === "book") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H20v16H7.5A2.5 2.5 0 0 0 5 20.5v-16Z" />
        <path d="M5 20.5A2.5 2.5 0 0 1 7.5 18H20v4H7.5A2.5 2.5 0 0 1 5 19.5V4" />
      </svg>
    );
  }
  if (name === "matrix") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 4h16v16H4zM4 10h16M10 4v16" />
        <path d="M13 15h4M15 13v4" />
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
      <path d="M7 9V3h10v6M7 18H4V9h16v9h-3M7 14h10v7H7z" />
      <path d="M16.5 12h.01" />
    </svg>
  );
}

export function AccessProvisioningPlaybook() {
  const [view, setView] = useState<PortalView>("playbook");
  const [activeStep, setActiveStep] = useState(0);
  const [openExample, setOpenExample] = useState(0);
  const [changeType, setChangeType] = useState<ChangeType | null>(null);
  const [accessTier, setAccessTier] = useState<AccessTier | null>(null);
  const [requestState, setRequestState] = useState<RequestState | null>(null);

  const recommendation = useMemo(() => {
    if (!changeType || !accessTier || !requestState) return null;

    if (changeType === "leaver") {
      return {
        tier: "Emergency" as AccessTier,
        title: "Use the offboarding path",
        text: "Confirm the departure through the authoritative source, remove access within the required window, revoke sessions when authorized, and record every completed action.",
      };
    }
    if (requestState === "incomplete") {
      return {
        tier: accessTier,
        title: "Return the request",
        text: "Do not fill gaps by assumption. Ask for the missing worker, role, business need, date, scope, or approval before fulfillment.",
      };
    }
    if (accessTier === "Privileged" || accessTier === "Emergency") {
      return {
        tier: accessTier,
        title: accessTier === "Emergency" ? "Use the emergency-access process" : "Route for privileged review",
        text: "Require the named approvers, use the smallest scope and duration, record the account and controls, and schedule recertification or after-action review.",
      };
    }
    if (accessTier === "Elevated") {
      return {
        tier: "Elevated" as AccessTier,
        title: "Collect owner approval",
        text: "Confirm the business need, data or system owner, scope, and end date before using the supported provisioning path.",
      };
    }
    return {
      tier: "Standard" as AccessTier,
      title: "Use the standard role path",
      text: "Confirm the worker and manager, apply the approved role or bundle, validate the result, and record the change.",
    };
  }, [accessTier, changeType, requestState]);

  function resetTree() {
    setChangeType(null);
    setAccessTier(null);
    setRequestState(null);
  }

  return (
    <div className={styles.playbookShell}>
      <div className={styles.portalFrame}>
        <div className={`${styles.portalTopbar} ${styles.noPrint}`}>
          <div className={styles.breadcrumbs}>
            <span>Operations knowledge base</span>
            <span aria-hidden="true">/</span>
            <span>Technical writing</span>
            <span aria-hidden="true">/</span>
            <strong>Access request and provisioning</strong>
          </div>
          <div className={styles.documentState}>
            <span className={styles.liveDot} />
            Portfolio sample · v1.0
          </div>
        </div>

        <div className={`${styles.portalTabs} ${styles.noPrint}`} role="tablist" aria-label="Documentation views">
          <button
            type="button"
            role="tab"
            aria-selected={view === "playbook"}
            className={view === "playbook" ? styles.activeTab : ""}
            onClick={() => setView("playbook")}
          >
            <PortalIcon name="book" />
            Playbook
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={view === "matrix"}
            className={view === "matrix" ? styles.activeTab : ""}
            onClick={() => setView("matrix")}
          >
            <PortalIcon name="matrix" />
            Approval matrix
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={view === "quick"}
            className={view === "quick" ? styles.activeTab : ""}
            onClick={() => setView("quick")}
          >
            <PortalIcon name="quick" />
            Quick reference
          </button>
          <button type="button" className={styles.printButton} onClick={() => window.print()}>
            <PortalIcon name="print" />
            Print or save PDF
          </button>
        </div>

        {view === "playbook" ? (
          <PlaybookView
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            openExample={openExample}
            setOpenExample={setOpenExample}
            changeType={changeType}
            setChangeType={setChangeType}
            accessTier={accessTier}
            setAccessTier={setAccessTier}
            requestState={requestState}
            setRequestState={setRequestState}
            recommendation={recommendation}
            resetTree={resetTree}
          />
        ) : view === "matrix" ? (
          <ApprovalMatrixView />
        ) : (
          <QuickReferenceView />
        )}
      </div>
    </div>
  );
}

function PlaybookView({
  activeStep,
  setActiveStep,
  openExample,
  setOpenExample,
  changeType,
  setChangeType,
  accessTier,
  setAccessTier,
  requestState,
  setRequestState,
  recommendation,
  resetTree,
}: {
  activeStep: number;
  setActiveStep: (index: number) => void;
  openExample: number;
  setOpenExample: (index: number) => void;
  changeType: ChangeType | null;
  setChangeType: (value: ChangeType) => void;
  accessTier: AccessTier | null;
  setAccessTier: (value: AccessTier) => void;
  requestState: RequestState | null;
  setRequestState: (value: RequestState) => void;
  recommendation: { tier: AccessTier; title: string; text: string } | null;
  resetTree: () => void;
}) {
  const navItems = [
    ["overview", "Overview"],
    ["workflow", "Provisioning workflow"],
    ["decision-tree", "Request router"],
    ["tiers", "Access tiers"],
    ["escalation", "Escalation criteria"],
    ["examples", "Worked examples"],
    ["pitfalls", "Common mistakes"],
    ["limitations", "Known limitations"],
    ["governance", "Governance"],
  ];

  return (
    <div className={styles.portalBody}>
      <aside className={`${styles.sideNav} ${styles.noPrint}`} aria-label="Playbook table of contents">
        <p className={styles.sideNavLabel}>On this page</p>
        <nav>
          {navItems.map(([href, label]) => (
            <a key={href} href={`#access-${href}`}>
              <span />
              {label}
            </a>
          ))}
        </nav>
        <div className={styles.ownerCard}>
          <p>Document owner</p>
          <strong>Identity and access management</strong>
          <span>Review quarterly</span>
        </div>
      </aside>

      <article className={styles.documentCanvas}>
        <section id="access-overview" className={styles.documentSection}>
          <div className={styles.sectionEyebrow}>Playbook overview</div>
          <h2>Grant the right access. Keep the evidence</h2>
          <p className={styles.lede}>
            Use this playbook to route, approve, fulfill, remove, and document workforce access. Local identity, security, HR, and compliance policies remain authoritative.
          </p>

          <div className={styles.summaryGrid}>
            <div>
              <span>Purpose</span>
              <p>Standardize access requests, approvals, provisioning, removal, and review.</p>
            </div>
            <div>
              <span>Primary audience</span>
              <p>Service desk, IT operations, identity teams, system owners, and access approvers.</p>
            </div>
            <div>
              <span>In scope</span>
              <p>Joiner, mover, leaver, temporary, elevated, privileged, and emergency access.</p>
            </div>
            <div>
              <span>Out of scope</span>
              <p>Physical security, customer authorization, and incident containment outside access administration.</p>
            </div>
          </div>

          <div className={styles.prerequisiteCallout}>
            <span className={styles.calloutIcon}>✓</span>
            <div>
              <strong>Before you start</strong>
              <p>
                Confirm access to the authoritative worker record, identity platform, ticketing system, role catalog, approval policy, and audit log.
              </p>
            </div>
          </div>
        </section>

        <section id="access-workflow" className={styles.documentSection}>
          <div className={styles.sectionHeadingRow}>
            <div>
              <div className={styles.sectionEyebrow}>Provisioning workflow</div>
              <h2>Use the same control path for every request</h2>
            </div>
            <span className={styles.interactiveLabel}>Choose a step</span>
          </div>

          <div className={styles.workflowRail}>
            {workflowSteps.map((step, index) => (
              <button
                type="button"
                key={step.number}
                className={activeStep === index ? styles.activeWorkflowStep : ""}
                aria-pressed={activeStep === index}
                onClick={() => setActiveStep(index)}
              >
                <span>{step.number}</span>
                <strong>{step.title}</strong>
              </button>
            ))}
          </div>

          <div className={styles.workflowDetail}>
            <span className={styles.workflowNumber}>{workflowSteps[activeStep].number}</span>
            <div>
              <h3>{workflowSteps[activeStep].title}</h3>
              <p>{workflowSteps[activeStep].summary}</p>
              <ul>
                {workflowSteps[activeStep].checks.map((check) => (
                  <li key={check}>{check}</li>
                ))}
              </ul>
              <p className={styles.outputLine}>
                <strong>Output</strong>
                {workflowSteps[activeStep].output}
              </p>
            </div>
          </div>
        </section>

        <section id="access-decision-tree" className={styles.documentSection}>
          <div className={styles.sectionEyebrow}>Request router</div>
          <h2>Choose the path before you change the account</h2>
          <p className={styles.sectionIntro}>
            This router gives a starting path. It does not replace the approval or access policy for the target system.
          </p>

          <div className={styles.decisionTree}>
            <DecisionQuestion
              number="1"
              title="What kind of worker change is this?"
              options={[
                ["joiner", "Joiner or new assignment"],
                ["mover", "Role, team, or responsibility change"],
                ["leaver", "Departure or immediate removal"],
                ["temporary", "Temporary project or coverage need"],
              ]}
              selected={changeType}
              onSelect={(value) => setChangeType(value as ChangeType)}
            />

            {changeType ? (
              <DecisionQuestion
                number="2"
                title="What control tier fits the requested access?"
                options={[
                  ["Standard", "Standard role or approved bundle"],
                  ["Elevated", "Sensitive data or broader function"],
                  ["Privileged", "Administration, production, or security control"],
                  ["Emergency", "Urgent, time-bound exception"],
                ]}
                selected={accessTier}
                onSelect={(value) => setAccessTier(value as AccessTier)}
              />
            ) : null}

            {accessTier ? (
              <DecisionQuestion
                number="3"
                title="Is the request complete and verified?"
                options={[
                  ["complete", "Yes: worker, need, scope, date, and required approvals are clear"],
                  ["incomplete", "No: required information, verification, or approval is missing"],
                ]}
                selected={requestState}
                onSelect={(value) => setRequestState(value as RequestState)}
              />
            ) : null}

            {recommendation ? (
              <div className={`${styles.recommendationCard} ${styles[{
                Standard: "informational",
                Elevated: "low",
                Privileged: "medium",
                Emergency: "high",
              }[recommendation.tier]]}`} aria-live="polite">
                <div>
                  <span>Starting route</span>
                  <TierPill tier={recommendation.tier} />
                </div>
                <h3>{recommendation.title}</h3>
                <p>{recommendation.text}</p>
                <button type="button" onClick={resetTree}>Reset router</button>
              </div>
            ) : null}
          </div>
        </section>

        <section id="access-tiers" className={styles.documentSection}>
          <div className={styles.sectionEyebrow}>Access tiers</div>
          <h2>Match the review to the control and data risk</h2>
          <div className={styles.severityGrid}>
            {accessTiers.map((item) => {
              const classMap: Record<AccessTier, string> = {
                Standard: "informational",
                Elevated: "low",
                Privileged: "medium",
                Emergency: "high",
              };
              return (
                <article key={item.name} className={`${styles.severityCard} ${styles[classMap[item.name]]}`}>
                  <div className={styles.severityCardTop}>
                    <TierPill tier={item.name} />
                    <span>{item.shorthand}</span>
                  </div>
                  <p>{item.description}</p>
                  <ul>
                    {item.examples.map((example) => <li key={example}>{example}</li>)}
                  </ul>
                  <div>
                    <strong>Control path</strong>
                    <p>{item.response}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="access-escalation" className={styles.documentSection}>
          <div className={styles.sectionEyebrow}>Escalation criteria</div>
          <h2>Pause when the request exceeds routine fulfillment</h2>
          <div className={styles.escalationPanel}>
            <div className={styles.escalationSignal}>!</div>
            <ul>
              {escalationCriteria.map((criterion) => <li key={criterion}>{criterion}</li>)}
            </ul>
          </div>
        </section>

        <section id="access-examples" className={styles.documentSection}>
          <div className={styles.sectionHeadingRow}>
            <div>
              <div className={styles.sectionEyebrow}>Worked examples</div>
              <h2>Show why the request took this path</h2>
            </div>
            <span className={styles.interactiveLabel}>Expand a case</span>
          </div>

          <div className={styles.exampleList}>
            {examples.map((example, index) => {
              const expanded = openExample === index;
              return (
                <article key={example.title} className={expanded ? styles.openExample : ""}>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setOpenExample(expanded ? -1 : index)}
                  >
                    <span className={styles.exampleIndex}>{String(index + 1).padStart(2, "0")}</span>
                    <span className={styles.exampleTitle}>
                      <strong>{example.title}</strong>
                      <small>{example.setup}</small>
                    </span>
                    <TierPill tier={example.disposition} />
                    <span className={styles.expandMark}>{expanded ? "−" : "+"}</span>
                  </button>
                  {expanded ? (
                    <div className={styles.exampleBody}>
                      <div>
                        <span>Evidence</span>
                        <ul>{example.evidence.map((item) => <li key={item}>{item}</li>)}</ul>
                      </div>
                      <div>
                        <span>Reasoning</span>
                        <p>{example.reasoning}</p>
                      </div>
                      <div>
                        <span>Action</span>
                        <p>{example.action}</p>
                      </div>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </section>

        <section id="access-pitfalls" className={styles.documentSection}>
          <div className={styles.sectionEyebrow}>Common mistakes</div>
          <h2>A fast shortcut can leave long-lived access behind</h2>
          <div className={styles.mistakeGrid}>
            {commonMistakes.map((mistake) => (
              <article key={mistake.title}>
                <span aria-hidden="true">!</span>
                <div>
                  <h3>{mistake.title}</h3>
                  <p>{mistake.correction}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="access-limitations" className={styles.documentSection}>
          <div className={styles.sectionEyebrow}>Known limitations</div>
          <h2>The local policy still decides the final path</h2>
          <ol className={styles.limitationsList}>
            {limitations.map((limitation, index) => (
              <li key={limitation}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{limitation}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="access-governance" className={styles.documentSection}>
          <div className={styles.sectionEyebrow}>Governance and maintenance</div>
          <h2>Review the playbook when the systems or controls change</h2>
          <div className={styles.governanceGrid}>
            <div><span>Owner</span><strong>Identity and access management</strong></div>
            <div><span>Review cadence</span><strong>Quarterly</strong></div>
            <div><span>Urgent updates</span><strong>After a control failure, audit finding, or major system change</strong></div>
            <div><span>Feedback source</span><strong>Request returns, access-review findings, incidents, and fulfiller questions</strong></div>
          </div>

          <div className={styles.ticketTemplate}>
            <div className={styles.ticketHeader}>
              <span>Required request record</span>
              <strong>ACCESS-NOTE</strong>
            </div>
            <div className={styles.ticketFields}>
              {[
                "Worker, requester, and manager",
                "Joiner, mover, leaver, or temporary event",
                "System, role, and access tier",
                "Business need and effective date",
                "Identity and status verification",
                "Required approvals",
                "Access added and removed",
                "Validation result",
                "Expiration or review date",
                "Fulfiller, timestamps, and final status",
              ].map((field) => (
                <div key={field}><span>✓</span>{field}</div>
              ))}
            </div>
          </div>

          <div className={styles.revisionTable} role="table" aria-label="Revision history">
            <div role="row" className={styles.revisionHeader}>
              <span role="columnheader">Version</span>
              <span role="columnheader">Date</span>
              <span role="columnheader">Change</span>
            </div>
            <div role="row"><span role="cell">1.0</span><span role="cell">August 2026</span><span role="cell">Initial public portfolio release</span></div>
            <div role="row"><span role="cell">Next</span><span role="cell">Planned</span><span role="cell">Usability review, role-catalog example, and approved pictogram artwork</span></div>
          </div>
        </section>
      </article>
    </div>
  );
}

function DecisionQuestion({
  number,
  title,
  options,
  selected,
  onSelect,
}: {
  number: string;
  title: string;
  options: string[][];
  selected: string | null;
  onSelect: (value: string) => void;
}) {
  return (
    <fieldset className={styles.decisionQuestion}>
      <legend><span>{number}</span>{title}</legend>
      <div>
        {options.map(([value, label]) => (
          <button
            type="button"
            key={value}
            aria-pressed={selected === value}
            className={selected === value ? styles.selectedDecision : ""}
            onClick={() => onSelect(value)}
          >
            <span className={styles.radioMark} />
            {label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function ApprovalMatrixView() {
  return (
    <article className={`${styles.documentCanvas} ${styles.referenceCanvas}`}>
      <header className={styles.referenceHeader}>
        <div>
          <div className={styles.sectionEyebrow}>Companion reference</div>
          <h2>Approval and access matrix</h2>
          <p>
            A quick guide to ownership, worker events, and the evidence each request needs.
          </p>
        </div>
        <div className={styles.referenceStamp}>REF-ACCESS-01</div>
      </header>

      <section className={styles.documentSection}>
        <h3 className={styles.referenceSectionTitle}>Separate the decisions</h3>
        <div className={styles.layerDiagram}>
          {[
            ["1", "Identity", "Is this the right worker, requester, manager, and account?"],
            ["2", "Business need", "Does the access support a current job task or approved project?"],
            ["3", "System and data", "Which role, functions, and records should the worker reach?"],
            ["4", "Risk", "Does the access create privilege, conflict, exception, or regulatory concerns?"],
            ["5", "Execution", "What changed, who changed it, and how was the result validated?"],
          ].map(([number, title, text]) => (
            <div key={number}>
              <span>{number}</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.documentSection}>
        <h3 className={styles.referenceSectionTitle}>Decision owners</h3>
        <div className={styles.headerFieldList}>
          {roleMatrix.map((item) => (
            <article key={item.role}>
              <div><code>{item.role}</code><strong>What this role decides</strong></div>
              <p><span>Responsible for</span>{item.responsibility}</p>
              <p><span>Does not replace</span>{item.cannotApprove}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.documentSection}>
        <h3 className={styles.referenceSectionTitle}>Worker events</h3>
        <div className={styles.authGrid}>
          {eventMatrix.map(([event, action, evidence]) => (
            <article key={event}>
              <div className={styles.authAcronym}>{event.slice(0, 1)}</div>
              <h4>{event}</h4>
              <p><strong>Primary action:</strong> {action}</p>
              <p><strong>Minimum evidence:</strong> {evidence}</p>
            </article>
          ))}
        </div>
        <div className={styles.referenceWarning}>
          <strong>Control rule</strong>
          <p>
            A role change is both an add and a remove event. Review old access before adding the new role.
          </p>
        </div>
      </section>

      <section className={styles.documentSection}>
        <h3 className={styles.referenceSectionTitle}>Compact request note</h3>
        <pre className={styles.analysisNote}>{`Worker: [name, account, worker type, manager]\nEvent: [joiner / mover / leaver / temporary]\nRequest: [system, role, functions, data scope]\nNeed: [job task or project reason]\nTier: [standard / elevated / privileged / emergency]\nVerification: [authoritative sources and trusted-channel check]\nApprovals: [manager, system owner, data owner, security]\nChange: [access added, removed, expiration]\nValidation: [expected result and test]\nRecord: [fulfiller, timestamps, review date, final status]`}</pre>
      </section>
    </article>
  );
}

function QuickReferenceView() {
  return (
    <article className={`${styles.documentCanvas} ${styles.quickCanvas}`}>
      <header className={styles.quickHeader}>
        <div>
          <div className={styles.sectionEyebrow}>One-page operations aid</div>
          <h2>Access request and provisioning</h2>
          <p>Confirm → Verify → Classify → Approve → Change → Validate → Record</p>
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

          <h3 className={styles.quickSubhead}>Tier snapshot</h3>
          <div className={styles.quickSeverity}>
            {accessTiers.map((item) => (
              <div key={item.name}>
                <TierPill tier={item.name} />
                <p>{item.shorthand}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className={styles.quickTicket}>
        <h3>Request record minimum</h3>
        <div>
          {[
            "Worker / manager",
            "Event / date",
            "System / role",
            "Business need",
            "Tier / conflicts",
            "Verification",
            "Approvals",
            "Added / removed",
            "Expiration / review",
            "Validation / fulfiller",
          ].map((item) => (
            <span key={item}>□ {item}</span>
          ))}
        </div>
      </section>

      <footer className={styles.quickFooter}>
        <strong>Authority boundary:</strong> Follow approved identity, HR, security, compliance, and system-owner procedures for access changes and evidence retention.
      </footer>
    </article>
  );
}
