"use client";

import { useMemo, useState } from "react";
import styles from "./triage-playbook.module.css";

type PortalView = "playbook" | "headers" | "quick";
type Severity = "Informational" | "Low" | "Medium" | "High";

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
    title: "Preserve the report",
    summary:
      "Capture the message and the reporter’s context before links, attachments, or mailbox actions change the available evidence.",
    checks: [
      "Record reporter, recipient, subject, sender, and received time.",
      "Preserve full headers or original message source when available.",
      "Ask whether the recipient clicked, replied, opened an attachment, entered credentials, approved MFA, or sent money.",
    ],
    output: "A stable evidence set and an initial exposure statement.",
  },
  {
    number: "02",
    title: "Establish expected context",
    summary:
      "Determine whether the sender, conversation, request, and timing make sense before treating technical signals as a complete answer.",
    checks: [
      "Was the message expected by this recipient?",
      "Does the request match a known business process?",
      "Can the sender or request be verified through a separate trusted channel?",
    ],
    output: "A documented expectation baseline.",
  },
  {
    number: "03",
    title: "Inspect identity signals",
    summary:
      "Compare the visible sender with the addresses and domains that actually handled the message.",
    checks: [
      "Compare From, Reply-To, Return-Path, and envelope sender.",
      "Look for lookalike domains, extra subdomains, misspellings, and unrelated reply destinations.",
      "Treat a familiar display name as a clue, not proof of identity.",
    ],
    output: "A sender-identity assessment with mismatches called out.",
  },
  {
    number: "04",
    title: "Review authentication",
    summary:
      "Use SPF, DKIM, and DMARC results to understand message handling while preserving the limits of those controls.",
    checks: [
      "Record SPF, DKIM, and DMARC results and relevant domains.",
      "Check whether authenticated domains align with the visible From domain.",
      "Remember that a malicious domain can authenticate successfully and legitimate forwarding can complicate results.",
    ],
    output: "Authentication evidence interpreted alongside context.",
  },
  {
    number: "05",
    title: "Analyze content and intent",
    summary:
      "Identify what the message is trying to make the recipient do and which persuasion or impersonation patterns support that request.",
    checks: [
      "Identify credential, payment, attachment, callback, QR-code, or OAuth requests.",
      "Note urgency, secrecy, authority pressure, unusual tone, and process bypasses.",
      "Separate awkward wording from stronger indicators such as destination and requested action.",
    ],
    output: "A clear statement of the message’s requested action and likely intent.",
  },
  {
    number: "06",
    title: "Inspect links and attachments",
    summary:
      "Examine destinations and files with approved analysis tools rather than interacting from the production mailbox.",
    checks: [
      "Expand shortened or wrapped links and record the final destination.",
      "Compare visible link text with the actual target.",
      "Use approved sandbox or reputation tooling for attachments and suspicious destinations.",
    ],
    output: "Documented indicators and analysis results without unsafe interaction.",
  },
  {
    number: "07",
    title: "Assign severity and disposition",
    summary:
      "Combine evidence, scope, recipient interaction, and potential impact instead of letting one suspicious characteristic decide the case.",
    checks: [
      "Separate attempted compromise from confirmed recipient impact.",
      "Increase urgency for multiple recipients, privileged targets, malware, payment changes, or credential exposure.",
      "Choose a disposition the evidence supports and state remaining uncertainty.",
    ],
    output: "Severity, disposition, confidence, and escalation decision.",
  },
  {
    number: "08",
    title: "Contain, communicate, and document",
    summary:
      "Complete required mailbox or account actions, notify the right people, and leave a case record that can support follow-up.",
    checks: [
      "Follow approved procedures for purge, block, reset, containment, or incident handoff.",
      "Give the reporter clear next steps without overstating certainty.",
      "Record evidence, reasoning, actions, owner, and final status.",
    ],
    output: "A closed or escalated case with an auditable rationale.",
  },
];

const severityDefinitions: Array<{
  name: Severity;
  shorthand: string;
  description: string;
  examples: string[];
  response: string;
}> = [
  {
    name: "Informational",
    shorthand: "Benign or unwanted",
    description:
      "No malicious indicators were identified. The message may be legitimate, unwanted marketing, or ordinary spam.",
    examples: ["Expected notification", "Benign mailing list", "Unwanted solicitation"],
    response: "Document the rationale, advise the reporter, and close according to local procedure.",
  },
  {
    name: "Low",
    shorthand: "Suspicious, unconfirmed",
    description:
      "The message contains unusual characteristics, but available evidence does not support a malicious disposition.",
    examples: ["Unexpected vendor message", "Authentication anomaly with verified sender", "Poorly configured legitimate mail"],
    response: "Record uncertainty, verify through a trusted channel when appropriate, and monitor for related reports.",
  },
  {
    name: "Medium",
    shorthand: "Likely malicious attempt",
    description:
      "Evidence supports phishing, impersonation, credential harvesting, or another malicious attempt without confirmed recipient compromise.",
    examples: ["Credential lure", "Fake document-share page", "QR-code phishing", "Brand impersonation"],
    response: "Follow approved blocking or purge procedures, search for related messages, and notify affected recipients as required.",
  },
  {
    name: "High",
    shorthand: "Impact or urgent campaign",
    description:
      "Recipient interaction, malware, payment manipulation, account compromise, broad delivery, or privileged targeting creates immediate risk.",
    examples: ["Credentials entered", "Malware executed", "Payment details changed", "Executive or vendor compromise", "Multi-recipient campaign"],
    response: "Escalate immediately and begin the organization’s incident-response or containment process.",
  },
];

const escalationCriteria = [
  "Credentials were entered, an OAuth grant was approved, or MFA prompts were accepted.",
  "Money, gift cards, tax data, payment details, or sensitive records were sent.",
  "An attachment was opened or malware execution is suspected.",
  "The message targets executives, finance, payroll, administrators, or other privileged roles.",
  "Multiple recipients received the same malicious message or campaign indicators are present.",
  "A trusted internal or vendor account appears compromised.",
  "The analyst cannot safely contain the issue within the playbook’s defined authority.",
];

const examples = [
  {
    title: "Payroll verification lure",
    disposition: "Medium",
    setup:
      "A message claims payroll access will be suspended unless the recipient signs in through a supplied link.",
    evidence: [
      "Display name imitates Human Resources.",
      "From domain is a newly observed lookalike.",
      "Link resolves to a credential-collection page outside the expected service.",
      "Recipient reports no interaction.",
    ],
    reasoning:
      "The identity mismatch, credential request, and destination support a phishing disposition. No recipient impact is confirmed, so the attempt is Medium rather than High.",
    action:
      "Apply approved message containment, search for additional recipients, block relevant indicators, and notify the reporter.",
  },
  {
    title: "Expected document-share notification",
    disposition: "Informational",
    setup:
      "A recipient reports an automated sharing notification after a colleague sends a document through an approved platform.",
    evidence: [
      "The recipient expected the document.",
      "Sender and sharing event are confirmed through a separate channel.",
      "Authentication and destination align with the approved platform.",
      "No unusual reply, payment, credential, or attachment request is present.",
    ],
    reasoning:
      "The message is consistent with a verified business event. Technical and human context support a benign disposition.",
    action: "Explain the findings and close the report as benign.",
  },
  {
    title: "Fake electronic-signature request",
    disposition: "Medium",
    setup:
      "An unexpected signature request uses familiar branding and asks the recipient to review a confidential document.",
    evidence: [
      "Visible branding is copied, but the sender domain is unrelated.",
      "The link redirects through multiple domains to a login page.",
      "The recipient did not expect a document and did not interact.",
      "The page requests cloud-account credentials.",
    ],
    reasoning:
      "Brand impersonation, an unexpected workflow, redirect behavior, and credential collection support likely malicious intent.",
    action:
      "Contain the message, identify related deliveries, block approved indicators, and warn recipients if the campaign reached others.",
  },
  {
    title: "Vendor bank-detail change",
    disposition: "High",
    setup:
      "A known vendor conversation suddenly requests that future invoices be paid to a new account.",
    evidence: [
      "The reply appears inside a legitimate thread.",
      "The vendor confirms through a trusted phone number that the request is fraudulent.",
      "A finance employee replied before verification.",
      "The vendor mailbox may be compromised.",
    ],
    reasoning:
      "The payment-change request, compromised conversation context, and recipient engagement create immediate business-email-compromise risk.",
    action:
      "Escalate to incident response and finance, preserve the thread, verify payment status, and follow account- and vendor-compromise procedures.",
  },
];

const commonMistakes = [
  {
    title: "Trusting the display name",
    correction:
      "Compare the visible name with From, Reply-To, Return-Path, and the actual business context.",
  },
  {
    title: "Treating authentication as a verdict",
    correction:
      "Use SPF, DKIM, and DMARC as evidence. A malicious domain can pass its own authentication checks.",
  },
  {
    title: "Clicking to see what happens",
    correction:
      "Use approved analysis tools and preserved evidence rather than interacting from the recipient’s mailbox or production device.",
  },
  {
    title: "Ignoring recipient actions",
    correction:
      "A click, credential entry, OAuth approval, opened attachment, reply, or payment action can change both severity and response.",
  },
  {
    title: "Writing a conclusion without reasoning",
    correction:
      "Record the indicators, context, limitations, and why they support the final disposition.",
  },
  {
    title: "Overlooking campaign scope",
    correction:
      "Search for related messages and reports before treating a single mailbox as the full incident boundary.",
  },
];

const limitations = [
  "Authentication can pass on infrastructure controlled by an attacker.",
  "Legitimate forwarding, third-party senders, and mailing platforms can complicate identity and authentication signals.",
  "Reputation tools may have no data for new infrastructure and can lag behind emerging campaigns.",
  "A polished message with correct grammar may still be malicious, while an awkward message may still be legitimate.",
  "Screenshots can hide destinations, headers, attachments, and other evidence needed for a complete assessment.",
  "This public sample cannot define organization-specific containment authority, tooling, legal obligations, or escalation contacts.",
];

const headerFields = [
  {
    field: "From",
    question: "Who does the message claim to be from?",
    use: "Compare the visible address and domain with the expected sender and business context.",
    caution: "The display name and visible From address can be spoofed or made deceptively similar.",
  },
  {
    field: "Reply-To",
    question: "Where will a reply actually go?",
    use: "Look for an unexpected address or domain that diverts replies away from the visible sender.",
    caution: "A different Reply-To can be legitimate for ticketing, marketing, or delegated mail workflows.",
  },
  {
    field: "Return-Path",
    question: "Where are delivery failures directed?",
    use: "Compare the bounce-handling domain with the sender and sending service.",
    caution: "Third-party platforms commonly use their own Return-Path domains.",
  },
  {
    field: "Received",
    question: "Which systems handled the message?",
    use: "Read the chain from the bottom upward to understand the route and identify unusual infrastructure.",
    caution: "Header interpretation requires care; the earliest untrusted entries may be supplied by the sender.",
  },
  {
    field: "Message-ID",
    question: "Where was the message likely generated?",
    use: "Check whether the domain and format fit the claimed sending environment.",
    caution: "A Message-ID is supporting evidence, not a reliable identity guarantee.",
  },
  {
    field: "Authentication-Results",
    question: "What did the receiving system conclude?",
    use: "Review SPF, DKIM, DMARC, alignment, and other receiver-generated results in one place.",
    caution: "Prefer results added by the trusted receiving environment rather than arbitrary copies elsewhere in the message.",
  },
];

const authControls = [
  {
    acronym: "SPF",
    title: "Sender Policy Framework",
    answers: "Was the sending server authorized for the envelope-sender domain?",
    doesNotAnswer: "Whether the person or content is trustworthy, or whether the visible From domain is legitimate.",
  },
  {
    acronym: "DKIM",
    title: "DomainKeys Identified Mail",
    answers: "Did a domain sign selected message content, and did that signature validate?",
    doesNotAnswer: "Whether the signing domain belongs to the brand shown to the recipient or whether the message is benign.",
  },
  {
    acronym: "DMARC",
    title: "Domain-based Message Authentication, Reporting & Conformance",
    answers: "Did aligned SPF or DKIM support the visible From domain under that domain’s policy?",
    doesNotAnswer: "Whether a lookalike domain, compromised account, or authenticated malicious domain is safe.",
  },
];

const quickChecklist = [
  "Preserve the original message, headers, reporter details, and recipient actions.",
  "Confirm whether the sender, request, conversation, and timing were expected.",
  "Compare From, Reply-To, Return-Path, envelope sender, and domains.",
  "Review SPF, DKIM, DMARC, and alignment without treating a pass as a safety verdict.",
  "Identify the requested action: credentials, payment, attachment, callback, QR code, OAuth, or secrecy.",
  "Analyze links and attachments only with approved tools.",
  "Assess campaign scope and sensitive or privileged targets.",
  "Assign severity, state confidence, follow containment procedure, and document the rationale.",
];

function SeverityPill({ severity }: { severity: Severity | string }) {
  const key = severity.toLowerCase();
  return <span className={`${styles.severityPill} ${styles[key]}`}>{severity}</span>;
}

function PortalIcon({ name }: { name: "book" | "headers" | "quick" | "print" }) {
  if (name === "book") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H20v16H7.5A2.5 2.5 0 0 0 5 20.5v-16Z" />
        <path d="M5 20.5A2.5 2.5 0 0 1 7.5 18H20v4H7.5A2.5 2.5 0 0 1 5 19.5V4" />
      </svg>
    );
  }
  if (name === "headers") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 5h18v14H3z" />
        <path d="m4 6 8 7 8-7M7 16h4" />
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

export function SuspiciousEmailPlaybook() {
  const [view, setView] = useState<PortalView>("playbook");
  const [activeStep, setActiveStep] = useState(0);
  const [openExample, setOpenExample] = useState(0);
  const [recipientImpact, setRecipientImpact] = useState<"none" | "clicked" | "compromised" | null>(null);
  const [campaignScope, setCampaignScope] = useState<"single" | "multiple" | null>(null);
  const [evidenceLevel, setEvidenceLevel] = useState<"benign" | "suspicious" | "malicious" | null>(null);

  const recommendation = useMemo(() => {
    if (recipientImpact === "compromised") {
      return {
        severity: "High" as Severity,
        title: "Escalate immediately",
        text: "Confirmed credential, payment, OAuth, MFA, malware, or sensitive-data exposure requires the organization’s incident-response or containment process.",
      };
    }
    if (campaignScope === "multiple" && evidenceLevel === "malicious") {
      return {
        severity: "High" as Severity,
        title: "Treat as an active campaign",
        text: "Likely malicious evidence plus multi-recipient scope increases urgency even when individual recipient impact is not yet confirmed.",
      };
    }
    if (evidenceLevel === "malicious" || (recipientImpact === "clicked" && evidenceLevel === "suspicious")) {
      return {
        severity: "Medium" as Severity,
        title: "Contain the likely malicious attempt",
        text: "The evidence supports phishing or impersonation. Follow approved purge, block, search, and notification procedures while checking for impact.",
      };
    }
    if (evidenceLevel === "suspicious") {
      return {
        severity: "Low" as Severity,
        title: "Verify and document uncertainty",
        text: "Unusual characteristics are present, but the available evidence does not yet support a malicious disposition. Verify through a separate trusted channel when appropriate.",
      };
    }
    if (evidenceLevel === "benign") {
      return {
        severity: "Informational" as Severity,
        title: "Close with a clear rationale",
        text: "The message is consistent with a verified event and no malicious indicators were identified. Explain the findings and close according to local procedure.",
      };
    }
    return null;
  }, [campaignScope, evidenceLevel, recipientImpact]);

  function resetTree() {
    setRecipientImpact(null);
    setCampaignScope(null);
    setEvidenceLevel(null);
  }

  function printView() {
    window.print();
  }

  return (
    <div className={styles.playbookShell}>
      <div className={styles.portalFrame}>
        <div className={`${styles.portalTopbar} ${styles.noPrint}`}>
          <div className={styles.breadcrumbs}>
            <span>Security Knowledge Base</span>
            <span aria-hidden="true">/</span>
            <span>Technical writing</span>
            <span aria-hidden="true">/</span>
            <strong>Suspicious Email Triage</strong>
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
            aria-selected={view === "headers"}
            className={view === "headers" ? styles.activeTab : ""}
            onClick={() => setView("headers")}
          >
            <PortalIcon name="headers" />
            Header reference
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
          <button type="button" className={styles.printButton} onClick={printView}>
            <PortalIcon name="print" />
            Print / save PDF
          </button>
        </div>

        {view === "playbook" ? (
          <PlaybookView
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            openExample={openExample}
            setOpenExample={setOpenExample}
            recipientImpact={recipientImpact}
            setRecipientImpact={setRecipientImpact}
            campaignScope={campaignScope}
            setCampaignScope={setCampaignScope}
            evidenceLevel={evidenceLevel}
            setEvidenceLevel={setEvidenceLevel}
            recommendation={recommendation}
            resetTree={resetTree}
          />
        ) : view === "headers" ? (
          <HeaderReferenceView />
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
  recipientImpact,
  setRecipientImpact,
  campaignScope,
  setCampaignScope,
  evidenceLevel,
  setEvidenceLevel,
  recommendation,
  resetTree,
}: {
  activeStep: number;
  setActiveStep: (index: number) => void;
  openExample: number;
  setOpenExample: (index: number) => void;
  recipientImpact: "none" | "clicked" | "compromised" | null;
  setRecipientImpact: (value: "none" | "clicked" | "compromised") => void;
  campaignScope: "single" | "multiple" | null;
  setCampaignScope: (value: "single" | "multiple") => void;
  evidenceLevel: "benign" | "suspicious" | "malicious" | null;
  setEvidenceLevel: (value: "benign" | "suspicious" | "malicious") => void;
  recommendation: { severity: Severity; title: string; text: string } | null;
  resetTree: () => void;
}) {
  const navItems = [
    ["overview", "Overview"],
    ["workflow", "Triage workflow"],
    ["decision-tree", "Guided decision tree"],
    ["severity", "Severity model"],
    ["escalation", "Escalation criteria"],
    ["examples", "Investigation examples"],
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
            <a key={href} href={`#triage-${href}`}>
              <span />
              {label}
            </a>
          ))}
        </nav>
        <div className={styles.ownerCard}>
          <p>Document owner</p>
          <strong>Security Operations</strong>
          <span>Review quarterly</span>
        </div>
      </aside>

      <article className={styles.documentCanvas}>
        <section id="triage-overview" className={styles.documentSection}>
          <div className={styles.sectionEyebrow}>Playbook overview</div>
          <h2>Investigate the message. Document the decision.</h2>
          <p className={styles.lede}>
            Use this playbook when an employee, automated control, or shared mailbox reports a suspicious email. The workflow supports consistent evidence collection and decision-making; approved organizational procedures remain authoritative for containment and incident response.
          </p>

          <div className={styles.summaryGrid}>
            <div>
              <span>Purpose</span>
              <p>Standardize suspicious-email triage, severity, escalation, and case documentation.</p>
            </div>
            <div>
              <span>Primary audience</span>
              <p>Security analysts and service desk specialists with approved analysis access.</p>
            </div>
            <div>
              <span>Use when</span>
              <p>A message is reported, detected, or submitted for legitimacy and risk review.</p>
            </div>
            <div>
              <span>Do not use alone for</span>
              <p>Confirmed compromise, malware incidents, payment loss, or cases already owned by incident response.</p>
            </div>
          </div>

          <div className={styles.prerequisiteCallout}>
            <div className={styles.calloutIcon}>✓</div>
            <div>
              <strong>Before you begin</strong>
              <p>
                Confirm access to the original message or full headers, approved URL and attachment analysis tools, mailbox search or security tooling, the ticketing system, and the current escalation path.
              </p>
            </div>
          </div>
        </section>

        <section id="triage-workflow" className={styles.documentSection}>
          <div className={styles.sectionHeadingRow}>
            <div>
              <div className={styles.sectionEyebrow}>Core workflow</div>
              <h2>Eight stages, one defensible path.</h2>
            </div>
            <span className={styles.interactiveLabel}>Select a stage</span>
          </div>

          <div className={styles.workflowRail}>
            {workflowSteps.map((step, index) => (
              <button
                type="button"
                key={step.number}
                aria-pressed={activeStep === index}
                className={activeStep === index ? styles.activeWorkflowStep : ""}
                onClick={() => setActiveStep(index)}
              >
                <span>{step.number}</span>
                <strong>{step.title}</strong>
              </button>
            ))}
          </div>

          <div className={styles.workflowDetail} aria-live="polite">
            <div className={styles.workflowNumber}>{workflowSteps[activeStep].number}</div>
            <div>
              <p className={styles.detailLabel}>Current stage</p>
              <h3>{workflowSteps[activeStep].title}</h3>
              <p className={styles.detailSummary}>{workflowSteps[activeStep].summary}</p>
              <ul>
                {workflowSteps[activeStep].checks.map((check) => (
                  <li key={check}>{check}</li>
                ))}
              </ul>
              <div className={styles.outputLine}>
                <span>Stage output</span>
                <p>{workflowSteps[activeStep].output}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="triage-decision-tree" className={styles.documentSection}>
          <div className={styles.sectionEyebrow}>Guided decision tree</div>
          <h2>Practice combining impact, scope, and evidence.</h2>
          <p className={styles.sectionIntro}>
            This teaching aid produces a starting recommendation, not an automated verdict. Analysts should preserve uncertainty and follow local severity definitions.
          </p>

          <div className={styles.decisionTree}>
            <DecisionQuestion
              number="1"
              title="What did the recipient do?"
              options={[
                ["none", "No known interaction"],
                ["clicked", "Clicked, replied, or opened"],
                ["compromised", "Entered credentials, approved access, executed a file, shared data, or sent money"],
              ]}
              selected={recipientImpact}
              onSelect={(value) => setRecipientImpact(value as "none" | "clicked" | "compromised")}
            />

            {recipientImpact ? (
              <DecisionQuestion
                number="2"
                title="How broad is the known scope?"
                options={[
                  ["single", "One known recipient"],
                  ["multiple", "Multiple recipients or related reports"],
                ]}
                selected={campaignScope}
                onSelect={(value) => setCampaignScope(value as "single" | "multiple")}
              />
            ) : null}

            {campaignScope ? (
              <DecisionQuestion
                number="3"
                title="What does the combined evidence support?"
                options={[
                  ["benign", "Verified legitimate context; no malicious indicators"],
                  ["suspicious", "Unusual or conflicting signals; intent remains unconfirmed"],
                  ["malicious", "Phishing, impersonation, malware, credential, payment, or compromise indicators"],
                ]}
                selected={evidenceLevel}
                onSelect={(value) => setEvidenceLevel(value as "benign" | "suspicious" | "malicious")}
              />
            ) : null}

            {recommendation ? (
              <div className={`${styles.recommendationCard} ${styles[recommendation.severity.toLowerCase()]}`} aria-live="polite">
                <div>
                  <span>Starting recommendation</span>
                  <SeverityPill severity={recommendation.severity} />
                </div>
                <h3>{recommendation.title}</h3>
                <p>{recommendation.text}</p>
                <button type="button" onClick={resetTree}>Reset decision tree</button>
              </div>
            ) : null}
          </div>
        </section>

        <section id="triage-severity" className={styles.documentSection}>
          <div className={styles.sectionEyebrow}>Severity definitions</div>
          <h2>Describe the risk without collapsing every case into “phishing.”</h2>
          <div className={styles.severityGrid}>
            {severityDefinitions.map((item) => (
              <article key={item.name} className={`${styles.severityCard} ${styles[item.name.toLowerCase()]}`}>
                <div className={styles.severityCardTop}>
                  <SeverityPill severity={item.name} />
                  <span>{item.shorthand}</span>
                </div>
                <p>{item.description}</p>
                <ul>
                  {item.examples.map((example) => <li key={example}>{example}</li>)}
                </ul>
                <div>
                  <strong>Response</strong>
                  <p>{item.response}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="triage-escalation" className={styles.documentSection}>
          <div className={styles.sectionEyebrow}>Escalation criteria</div>
          <h2>Escalate when the possible impact outruns routine triage.</h2>
          <div className={styles.escalationPanel}>
            <div className={styles.escalationSignal}>!</div>
            <ul>
              {escalationCriteria.map((criterion) => <li key={criterion}>{criterion}</li>)}
            </ul>
          </div>
        </section>

        <section id="triage-examples" className={styles.documentSection}>
          <div className={styles.sectionHeadingRow}>
            <div>
              <div className={styles.sectionEyebrow}>Worked examples</div>
              <h2>Show the reasoning, not only the label.</h2>
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
                    <SeverityPill severity={example.disposition} />
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

        <section id="triage-pitfalls" className={styles.documentSection}>
          <div className={styles.sectionEyebrow}>Common analyst mistakes</div>
          <h2>Shortcuts that make a decision harder to defend.</h2>
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

        <section id="triage-limitations" className={styles.documentSection}>
          <div className={styles.sectionEyebrow}>Known limitations</div>
          <h2>Signals help. Context still matters.</h2>
          <ol className={styles.limitationsList}>
            {limitations.map((limitation, index) => (
              <li key={limitation}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{limitation}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="triage-governance" className={styles.documentSection}>
          <div className={styles.sectionEyebrow}>Governance and maintenance</div>
          <h2>A playbook is a maintained product.</h2>
          <div className={styles.governanceGrid}>
            <div><span>Owner</span><strong>Security Operations</strong></div>
            <div><span>Review cadence</span><strong>Quarterly</strong></div>
            <div><span>Urgent updates</span><strong>After material threat or tooling change</strong></div>
            <div><span>Feedback source</span><strong>Analyst questions, misses, false positives, and incident review</strong></div>
          </div>

          <div className={styles.ticketTemplate}>
            <div className={styles.ticketHeader}>
              <span>Required case record</span>
              <strong>TRIAGE-NOTE</strong>
            </div>
            <div className={styles.ticketFields}>
              {["Reporter and recipient", "Message subject and timestamps", "Sender and relevant domains", "Recipient actions", "Authentication findings", "Link or attachment findings", "Indicators and campaign scope", "Severity and confidence", "Actions and escalation", "Final disposition and analyst"].map((field) => (
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
            <div role="row"><span role="cell">Next</span><span role="cell">Planned</span><span role="cell">Usability review, scenario expansion, and approved pictogram artwork</span></div>
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

function HeaderReferenceView() {
  return (
    <article className={`${styles.documentCanvas} ${styles.referenceCanvas}`}>
      <header className={styles.referenceHeader}>
        <div>
          <div className={styles.sectionEyebrow}>Companion technical reference</div>
          <h2>Email Header Analysis</h2>
          <p>
            A field-by-field guide to the identity, routing, and authentication evidence analysts commonly use during suspicious-email review.
          </p>
        </div>
        <div className={styles.referenceStamp}>REF-EMAIL-01</div>
      </header>

      <section className={styles.documentSection}>
        <h3 className={styles.referenceSectionTitle}>Read the message in layers</h3>
        <div className={styles.layerDiagram}>
          {[
            ["1", "Human context", "Was the message expected, and does the request make sense?"],
            ["2", "Visible identity", "What does the recipient see in the display name and From address?"],
            ["3", "Routing identity", "Where do replies and delivery failures go, and which systems handled the message?"],
            ["4", "Authentication", "What did the receiving environment conclude about SPF, DKIM, DMARC, and alignment?"],
            ["5", "Destination and intent", "Where do links, files, QR codes, callbacks, or requested actions lead?"],
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
        <h3 className={styles.referenceSectionTitle}>Common fields</h3>
        <div className={styles.headerFieldList}>
          {headerFields.map((item) => (
            <article key={item.field}>
              <div><code>{item.field}</code><strong>{item.question}</strong></div>
              <p><span>Use it to</span>{item.use}</p>
              <p><span>Watch for</span>{item.caution}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.documentSection}>
        <h3 className={styles.referenceSectionTitle}>Authentication controls</h3>
        <div className={styles.authGrid}>
          {authControls.map((control) => (
            <article key={control.acronym}>
              <div className={styles.authAcronym}>{control.acronym}</div>
              <h4>{control.title}</h4>
              <p><strong>Helps answer:</strong> {control.answers}</p>
              <p><strong>Does not prove:</strong> {control.doesNotAnswer}</p>
            </article>
          ))}
        </div>
        <div className={styles.referenceWarning}>
          <strong>Interpretation rule</strong>
          <p>
            Authentication results should be combined with alignment, sender context, message intent, destinations, recipient actions, and campaign scope. “Pass” does not mean safe, and “fail” does not always mean malicious.
          </p>
        </div>
      </section>

      <section className={styles.documentSection}>
        <h3 className={styles.referenceSectionTitle}>Compact analysis note</h3>
        <pre className={styles.analysisNote}>{`Identity: [visible sender, reply destination, relevant domains]\nContext: [expected / unexpected and verification performed]\nAuthentication: [SPF, DKIM, DMARC, alignment, limitations]\nIntent: [requested action and persuasion pattern]\nDestinations: [URLs, redirects, QR code, attachment, callback]\nImpact: [recipient actions and known scope]\nAssessment: [severity, disposition, confidence, rationale]\nAction: [containment, notification, escalation, owner]`}</pre>
      </section>
    </article>
  );
}

function QuickReferenceView() {
  return (
    <article className={`${styles.documentCanvas} ${styles.quickCanvas}`}>
      <header className={styles.quickHeader}>
        <div>
          <div className={styles.sectionEyebrow}>One-page analyst aid</div>
          <h2>Suspicious Email Triage</h2>
          <p>Preserve → Verify → Inspect → Assess → Act → Document</p>
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

          <h3 className={styles.quickSubhead}>Severity snapshot</h3>
          <div className={styles.quickSeverity}>
            {severityDefinitions.map((item) => (
              <div key={item.name}>
                <SeverityPill severity={item.name} />
                <p>{item.shorthand}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className={styles.quickTicket}>
        <h3>Case note minimum</h3>
        <div>
          {["Reporter / recipient", "Subject / time", "Sender / domains", "Recipient actions", "Authentication", "Links / files", "Scope", "Severity / confidence", "Actions", "Disposition / analyst"].map((item) => (
            <span key={item}>□ {item}</span>
          ))}
        </div>
      </section>

      <footer className={styles.quickFooter}>
        <strong>Authority boundary:</strong> Follow approved organizational procedures for containment, account response, incident escalation, evidence handling, and external notification.
      </footer>
    </article>
  );
}
