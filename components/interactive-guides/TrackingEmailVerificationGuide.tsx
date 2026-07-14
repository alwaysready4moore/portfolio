"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BrandBadge } from "@/components/brand";

type SecurityRole = "DMARC" | "SPF" | "DKIM";
type DomainKind = "house" | "apartment" | "borrowed";
type OutcomeId = "spam" | "not-sent" | "returned" | "fallback";

const steps = [
  { label: "Why it matters" },
  { label: "Address ownership" },
  { label: "Sender checks" },
  { label: "Read the symptom" },
  { label: "Support boundary" },
];

const domainExamples: Array<{
  label: string;
  address: string;
  kind: DomainKind;
  explanation: string;
}> = [
  {
    label: "Business-owned domain",
    address: "hello@yourbusiness.com",
    kind: "house",
    explanation:
      "The business controls yourbusiness.com, so it can verify and send from this address.",
  },
  {
    label: "Storefront subdomain",
    address: "hello@yourbusiness.etsy.com",
    kind: "apartment",
    explanation:
      "Etsy controls etsy.com. The business may use the storefront, but it does not control the parent domain.",
  },
  {
    label: "Hosted mailbox",
    address: "yourbusiness@gmail.com",
    kind: "borrowed",
    explanation:
      "Google controls gmail.com. Access to the inbox does not mean ownership of the domain.",
  },
];

const securityJobs = [
  {
    prompt: "Which system checks whether the sending service is authorized?",
    answer: "SPF" as SecurityRole,
    explanation:
      "SPF lists which mail systems are allowed to send on behalf of the domain.",
  },
  {
    prompt: "Which system proves the message was authentic and unchanged?",
    answer: "DKIM" as SecurityRole,
    explanation:
      "DKIM adds a cryptographic signature that receiving systems can validate.",
  },
  {
    prompt: "Which system decides what to do when the checks do not align?",
    answer: "DMARC" as SecurityRole,
    explanation:
      "DMARC uses SPF and DKIM results and sets the handling policy.",
  },
];

const outcomes: Array<{
  id: OutcomeId;
  title: string;
  signal: string;
  meaning: string;
  nextStep: string;
}> = [
  {
    id: "spam",
    title: "The message lands in spam",
    signal: "The message was sent, but the recipient’s provider did not fully trust it.",
    meaning:
      "An authentication check may have failed or fallen out of alignment.",
    nextStep:
      "Review the available authentication results and compare them with the domain provider’s instructions.",
  },
  {
    id: "not-sent",
    title: "The message never sends",
    signal: "The message may not have entered the delivery stream at all.",
    meaning:
      "This may be a sending-service or delivery-provider issue rather than a spam-filtering issue.",
    nextStep:
      "Confirm whether the message was generated, then check the sending service’s status or delivery records.",
  },
  {
    id: "returned",
    title: "A delivery failure comes back",
    signal: "The system attempted delivery and received a failure notice.",
    meaning:
      "The return path is working. A bad address, full inbox, or disabled mailbox may have triggered the notice.",
    nextStep:
      "Read the failure reason before changing anything. The notice often tells you what happened.",
  },
  {
    id: "fallback",
    title: "A fallback sender is used",
    signal: "The system sends from its provided address instead of the custom domain.",
    meaning:
      "The platform may be protecting sender reputation when the custom domain cannot be verified.",
    nextStep:
      "Choose between continuing with the fallback address or completing custom-domain verification.",
  },
];

function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-lab text-[0.68rem] font-bold uppercase tracking-[0.08em] text-cyan">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl font-bold leading-[0.95] tracking-[-0.045em] text-ink md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-muted">{body}</p>
    </div>
  );
}

function Progress({
  current,
  maxUnlocked,
  onNavigate,
}: {
  current: number;
  maxUnlocked: number;
  onNavigate: (index: number) => void;
}) {
  return (
    <nav aria-label="Guide progress" className="mt-7 overflow-x-auto pb-1">
      <ol className="flex min-w-max items-center gap-2">
        {steps.map((step, index) => {
          const active = current === index;
          const complete = index < current;
          const unlocked = index <= maxUnlocked;

          return (
            <li key={step.label}>
              <button
                type="button"
                disabled={!unlocked}
                onClick={() => onNavigate(index)}
                className={`rounded-full border px-3 py-2 font-lab text-[0.63rem] font-semibold uppercase tracking-[0.07em] transition ${
                  active
                    ? "border-cyan bg-cyan text-night"
                    : complete
                      ? "border-cyan/25 bg-cyan/[0.08] text-cyan"
                      : unlocked
                        ? "border-white/15 bg-white/[0.03] text-ink hover:border-cyan/35"
                        : "cursor-not-allowed border-white/10 text-muted opacity-45"
                }`}
              >
                {complete ? "✓ " : ""}
                {step.label}
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function FooterNav({
  current,
  canContinue,
  helperText,
  complete,
  onPrevious,
  onNext,
  onRestart,
}: {
  current: number;
  canContinue: boolean;
  helperText?: string;
  complete: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onRestart: () => void;
}) {
  return (
    <div className="mt-10 border-t border-[var(--border)] pt-6">
      {helperText ? (
        <p className="mb-4 text-center text-sm leading-6 text-muted">
          {helperText}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={onPrevious}
          disabled={current === 0}
          className="rounded-xl border border-white/10 px-4 py-3 font-lab text-xs font-semibold uppercase tracking-[0.07em] text-muted disabled:opacity-30"
        >
          ← Previous
        </button>

        <span className="font-lab text-[0.64rem] uppercase tracking-[0.08em] text-muted">
          {current + 1} of {steps.length}
        </span>

        {complete ? (
          <button
            type="button"
            onClick={onRestart}
            className="rounded-xl border border-cyan bg-cyan px-4 py-3 font-lab text-xs font-semibold uppercase tracking-[0.07em] text-night"
          >
            Restart guide ↺
          </button>
        ) : canContinue ? (
          <button
            type="button"
            onClick={onNext}
            className="rounded-xl border border-cyan bg-cyan px-4 py-3 font-lab text-xs font-semibold uppercase tracking-[0.07em] text-night"
          >
            Continue →
          </button>
        ) : (
          <span className="rounded-xl border border-white/10 px-4 py-3 font-lab text-xs font-semibold uppercase tracking-[0.07em] text-muted opacity-60">
            Complete this step
          </span>
        )}
      </div>
    </div>
  );
}

function WhyItMattersStep() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
      <div>
        <SectionIntro
          eyebrow="The real-world problem"
          title="A small business depends on these messages."
          body="Maya runs a tiny stationery shop. Automated tracking emails save her from manually messaging every customer, but this week some messages are landing in spam and others are not arriving at all."
        />

        <div className="mt-7 rounded-[1.5rem] border border-cyan/20 bg-cyan/[0.06] p-5">
          <p className="font-display text-2xl font-bold text-ink">
            Your goal is not to become her domain administrator.
          </p>
          <p className="mt-3 leading-7 text-muted">
            Your goal is to recognize the shape of the problem, ask better
            questions, explain what may be happening, and know who owns the
            next step.
          </p>
        </div>
      </div>

      <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.025] p-6">
        <BrandBadge tone="experiment" icon="spark">
          By the end
        </BrandBadge>

        <div className="mt-6 grid gap-4">
          {[
            "Tell the difference between using an inbox and owning its domain.",
            "Understand what SPF, DKIM, and DMARC each contribute.",
            "Separate a spam problem from a sending problem or a bounce.",
            "Explain what support can investigate and what belongs to the domain provider.",
          ].map((item, index) => (
            <div key={item} className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan/25 bg-cyan/[0.08] font-lab text-xs font-bold text-cyan">
                {index + 1}
              </span>
              <p className="leading-7 text-muted">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AddressOwnershipStep({
  completed,
  onComplete,
}: {
  completed: boolean;
  onComplete: () => void;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const selected = useMemo(
    () => (selectedIndex === null ? null : domainExamples[selectedIndex]),
    [selectedIndex],
  );

  const correct = selected?.kind === "house";

  function submit() {
    setSubmitted(true);
    if (correct) onComplete();
  }

  return (
    <div>
      <SectionIntro
        eyebrow="Question 1"
        title="Who actually owns the sending address?"
        body="An email inbox and a domain are not the same thing. A business can use a mailbox without controlling the domain behind it."
      />

      <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5">
        <p className="font-lab text-[0.67rem] font-bold uppercase tracking-[0.08em] text-cyan">
          Your turn
        </p>
        <p className="mt-2 font-display text-2xl font-bold text-ink">
          Which address can the business verify as its own?
        </p>
      </div>

      <div className="mt-5 grid gap-3">
        {domainExamples.map((example, index) => {
          const chosen = selectedIndex === index;

          return (
            <button
              key={example.address}
              type="button"
              onClick={() => {
                setSelectedIndex(index);
                setSubmitted(false);
              }}
              className={`rounded-[1.4rem] border p-5 text-left transition ${
                chosen
                  ? "border-cyan bg-cyan/[0.08]"
                  : "border-white/10 bg-white/[0.02] hover:border-cyan/35"
              }`}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border font-lab text-xs font-bold ${
                    chosen
                      ? "border-cyan bg-cyan text-night"
                      : "border-white/15 text-muted"
                  }`}
                >
                  {chosen ? "✓" : index + 1}
                </span>

                <div>
                  <p className="font-lab text-[0.64rem] font-bold uppercase tracking-[0.07em] text-cyan">
                    {example.label}
                  </p>
                  <p className="mt-2 font-display text-xl font-bold text-ink">
                    {example.address}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={submit}
        disabled={selectedIndex === null}
        className="mt-5 rounded-xl border border-cyan bg-cyan px-4 py-3 font-lab text-xs font-semibold uppercase tracking-[0.07em] text-night disabled:opacity-35"
      >
        Check answer
      </button>

      {submitted && selected ? (
        <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-white/[0.025] p-5">
          <p className="font-display text-2xl font-bold text-ink">
            {correct
              ? "Correct. The business controls this domain."
              : "Not quite. Access does not equal ownership."}
          </p>
          <p className="mt-3 leading-7 text-muted">{selected.explanation}</p>
        </div>
      ) : null}

      {completed ? (
        <p className="mt-4 text-sm font-semibold text-cyan">
          ✓ You can now distinguish mailbox access from domain ownership.
        </p>
      ) : null}
    </div>
  );
}

function SenderChecksStep({
  completed,
  onComplete,
}: {
  completed: boolean;
  onComplete: () => void;
}) {
  const [jobIndex, setJobIndex] = useState(0);
  const [selectedRole, setSelectedRole] = useState<SecurityRole | null>(null);
  const [solved, setSolved] = useState<number[]>([]);

  const job = securityJobs[jobIndex];
  const correct = selectedRole === job.answer;

  function choose(role: SecurityRole) {
    setSelectedRole(role);

    if (role === job.answer && !solved.includes(jobIndex)) {
      const next = [...solved, jobIndex];
      setSolved(next);
      if (next.length === securityJobs.length) onComplete();
    }
  }

  function nextAssignment() {
    const next = securityJobs.findIndex((_, index) => !solved.includes(index));
    if (next >= 0) {
      setJobIndex(next);
      setSelectedRole(null);
    }
  }

  return (
    <div>
      <SectionIntro
        eyebrow="Question 2"
        title="How does a receiving system decide whether to trust the sender?"
        body="Anyone can type a sender name into an email. Authentication gives receiving systems evidence that the message genuinely came from the domain it claims to represent."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          ["SPF", "Is this sending service authorized?"],
          ["DKIM", "Is the message authentic and unchanged?"],
          ["DMARC", "What should happen if the checks fail?"],
        ].map(([term, description]) => (
          <div
            key={term}
            className="rounded-[1.4rem] border border-white/10 bg-white/[0.025] p-5"
          >
            <p className="font-display text-2xl font-bold text-ink">{term}</p>
            <p className="mt-2 leading-7 text-muted">{description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-[1.5rem] border border-cyan/25 bg-cyan/[0.06] p-5">
        <p className="font-lab text-[0.67rem] font-bold uppercase tracking-[0.08em] text-cyan">
          Assignment {jobIndex + 1} of {securityJobs.length}
        </p>
        <p className="mt-3 font-display text-2xl font-bold text-ink">
          {job.prompt}
        </p>
        <p className="mt-3 leading-7 text-muted">
          Choose the system that handles this job.
        </p>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {(["DMARC", "SPF", "DKIM"] as SecurityRole[]).map((role) => (
          <button
            key={role}
            type="button"
            onClick={() => choose(role)}
            className={`rounded-[1.3rem] border p-5 text-left transition ${
              selectedRole === role
                ? "border-cyan bg-cyan/[0.08]"
                : "border-white/10 bg-white/[0.02] hover:border-cyan/35"
            }`}
          >
            <p className="font-display text-2xl font-bold text-ink">{role}</p>
          </button>
        ))}
      </div>

      {selectedRole ? (
        <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-white/[0.025] p-5">
          <p className="font-display text-2xl font-bold text-ink">
            {correct ? `${job.answer} is correct.` : "Try another system."}
          </p>
          <p className="mt-3 leading-7 text-muted">
            {correct
              ? job.explanation
              : `${selectedRole} answers a different question in the authentication process.`}
          </p>

          {correct && solved.length < securityJobs.length ? (
            <button
              type="button"
              onClick={nextAssignment}
              className="mt-4 rounded-xl border border-cyan bg-cyan px-4 py-3 font-lab text-xs font-semibold uppercase tracking-[0.07em] text-night"
            >
              Next assignment →
            </button>
          ) : null}
        </div>
      ) : null}

      <p className="mt-4 text-sm text-muted">
        {solved.length} of {securityJobs.length} assignments complete
      </p>

      {completed ? (
        <p className="mt-2 text-sm font-semibold text-cyan">
          ✓ You can now explain what each authentication system contributes.
        </p>
      ) : null}
    </div>
  );
}

function ReadSymptomStep({
  completed,
  onComplete,
}: {
  completed: boolean;
  onComplete: () => void;
}) {
  const [selected, setSelected] = useState<OutcomeId | null>(null);
  const [reviewed, setReviewed] = useState<OutcomeId[]>([]);

  const selectedOutcome = outcomes.find((outcome) => outcome.id === selected);

  function open(id: OutcomeId) {
    setSelected(id);
    if (!reviewed.includes(id)) {
      const next = [...reviewed, id];
      setReviewed(next);
      if (next.length === outcomes.length) onComplete();
    }
  }

  return (
    <div>
      <SectionIntro
        eyebrow="Question 3"
        title="What does the symptom tell us?"
        body="Spam, no send, a bounce, and a fallback sender are not four versions of the same problem. Each points to a different part of the system."
      />

      <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5">
        <p className="font-lab text-[0.67rem] font-bold uppercase tracking-[0.08em] text-cyan">
          Your turn
        </p>
        <p className="mt-2 leading-7 text-muted">
          Open all four symptoms. The guide will show what each one suggests
          and what to check next.
        </p>
      </div>

      <div className="mt-5 grid gap-3">
        {outcomes.map((outcome, index) => {
          const seen = reviewed.includes(outcome.id);
          const active = selected === outcome.id;

          return (
            <button
              key={outcome.id}
              type="button"
              onClick={() => open(outcome.id)}
              className={`rounded-[1.3rem] border p-5 text-left transition ${
                active
                  ? "border-cyan bg-cyan/[0.08]"
                  : "border-white/10 bg-white/[0.02] hover:border-cyan/35"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 font-lab text-xs font-bold text-muted">
                  {seen ? "✓" : index + 1}
                </span>
                <p className="font-display text-xl font-bold text-ink">
                  {outcome.title}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {selectedOutcome ? (
        <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-white/[0.025] p-5">
          <p className="font-display text-2xl font-bold text-ink">
            {selectedOutcome.title}
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div>
              <p className="font-lab text-[0.64rem] font-bold uppercase tracking-[0.07em] text-cyan">
                Signal
              </p>
              <p className="mt-2 leading-7 text-muted">
                {selectedOutcome.signal}
              </p>
            </div>
            <div>
              <p className="font-lab text-[0.64rem] font-bold uppercase tracking-[0.07em] text-cyan">
                What it may mean
              </p>
              <p className="mt-2 leading-7 text-muted">
                {selectedOutcome.meaning}
              </p>
            </div>
            <div>
              <p className="font-lab text-[0.64rem] font-bold uppercase tracking-[0.07em] text-cyan">
                Useful next step
              </p>
              <p className="mt-2 leading-7 text-muted">
                {selectedOutcome.nextStep}
              </p>
            </div>
          </div>
        </div>
      ) : null}

      <p className="mt-4 text-sm text-muted">
        {reviewed.length} of {outcomes.length} symptoms reviewed
      </p>

      {completed ? (
        <p className="mt-2 text-sm font-semibold text-cyan">
          ✓ You can now separate delivery symptoms instead of treating them as
          one generic email problem.
        </p>
      ) : null}
    </div>
  );
}

function SupportBoundaryStep({
  completed,
  onComplete,
}: {
  completed: boolean;
  onComplete: () => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  const choices = [
    {
      id: "own-everything",
      label: "Keep troubleshooting until every domain record is fixed.",
      correct: false,
    },
    {
      id: "explain-and-route",
      label:
        "Explain the likely failure point, share the right resources, and route the domain-specific fix to the owner or provider.",
      correct: true,
    },
    {
      id: "blame-platform",
      label: "Assume the platform is broken because the customer did not receive the message.",
      correct: false,
    },
  ];

  const choice = choices.find((item) => item.id === selected);

  function submit(id: string) {
    setSelected(id);
    if (choices.find((item) => item.id === id)?.correct) onComplete();
  }

  return (
    <div>
      <SectionIntro
        eyebrow="Final question"
        title="What can support actually do?"
        body="Good support is not measured by pretending to own every layer. It is measured by recognizing the signal, explaining the likely cause, and helping the customer reach the right next step."
      />

      <div className="mt-8 rounded-[1.5rem] border border-cyan/25 bg-cyan/[0.06] p-5">
        <p className="font-lab text-[0.67rem] font-bold uppercase tracking-[0.08em] text-cyan">
          Scenario
        </p>
        <p className="mt-3 font-display text-2xl font-bold text-ink">
          Maya’s tracking emails are reaching spam, and her domain provider
          controls the records that need review. What is the strongest support
          response?
        </p>
      </div>

      <div className="mt-5 grid gap-3">
        {choices.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => submit(item.id)}
            className={`rounded-[1.3rem] border p-5 text-left transition ${
              selected === item.id
                ? "border-cyan bg-cyan/[0.08]"
                : "border-white/10 bg-white/[0.02] hover:border-cyan/35"
            }`}
          >
            <div className="flex items-start gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 font-lab text-xs font-bold text-muted">
                {index + 1}
              </span>
              <p className="leading-7 text-muted">{item.label}</p>
            </div>
          </button>
        ))}
      </div>

      {choice ? (
        <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-white/[0.025] p-5">
          <p className="font-display text-2xl font-bold text-ink">
            {choice.correct
              ? "Exactly. Helpful does not mean limitless."
              : "That response misses the support boundary."}
          </p>
          <p className="mt-3 leading-7 text-muted">
            {choice.correct
              ? "Support can interpret the symptom, explain the likely failure point, provide the relevant resources, and clarify who owns the fix."
              : "The strongest response neither overpromises nor dismisses the problem. It connects the customer to the right next step."}
          </p>
        </div>
      ) : null}

      {completed ? (
        <div className="mt-8 rounded-[1.6rem] border border-cyan/25 bg-cyan/[0.07] p-6">
          <p className="font-lab text-[0.67rem] font-bold uppercase tracking-[0.08em] text-cyan">
            Guide complete
          </p>
          <h3 className="mt-3 font-display text-3xl font-bold text-ink">
            What you can do now
          </h3>
          <div className="mt-5 grid gap-3">
            {[
              "Distinguish mailbox access from domain ownership.",
              "Explain what SPF, DKIM, and DMARC each contribute.",
              "Read delivery symptoms more precisely.",
              "Know when the next step belongs to the customer or domain provider.",
            ].map((item) => (
              <p key={item} className="leading-7 text-muted">
                ✓ {item}
              </p>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function TrackingEmailVerificationGuide() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [maxUnlocked, setMaxUnlocked] = useState(0);
  const [ownershipComplete, setOwnershipComplete] = useState(false);
  const [securityComplete, setSecurityComplete] = useState(false);
  const [symptomsComplete, setSymptomsComplete] = useState(false);
  const [guideComplete, setGuideComplete] = useState(false);

  const canContinue =
    current === 0 ||
    (current === 1 && ownershipComplete) ||
    (current === 2 && securityComplete) ||
    (current === 3 && symptomsComplete);

  const helperText =
    current === 1 && !ownershipComplete
      ? "Choose and check the correct address to continue."
      : current === 2 && !securityComplete
        ? "Complete all three sender-check assignments to continue."
        : current === 3 && !symptomsComplete
          ? "Review all four symptoms to continue."
          : current === 4 && !guideComplete
            ? "Choose the strongest support response to complete the guide."
            : undefined;

  function goNext() {
    if (!canContinue || current >= steps.length - 1) return;
    const next = current + 1;
    setCurrent(next);
    setMaxUnlocked((value) => Math.max(value, next));
  }

  function restart() {
    setStarted(false);
    setCurrent(0);
    setMaxUnlocked(0);
    setOwnershipComplete(false);
    setSecurityComplete(false);
    setSymptomsComplete(false);
    setGuideComplete(false);
  }

  return (
    <section className="lab-shell pt-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/work"
            className="font-lab text-xs font-semibold uppercase tracking-[0.08em] text-muted transition hover:text-cyan"
          >
            ← Back to work
          </Link>

          <a
            href="/work/small-wins/tracking-email-verification/tracking-email-verification.pdf"
            target="_blank"
            rel="noreferrer"
            className="font-lab text-xs font-semibold uppercase tracking-[0.08em] text-cyan"
          >
            View original PDF ↗
          </a>
        </div>

        <div className="paper-card mt-6 overflow-hidden">
          <header className="border-b border-[var(--border)] p-6 md:p-8">
            <BrandBadge tone="experiment" icon="spark">
              Interactive systems lesson
            </BrandBadge>

            <div className="mt-5 max-w-3xl">
              <h1 className="font-display text-4xl font-bold leading-none tracking-[-0.055em] text-ink md:text-6xl">
                Tracking Email Verification
              </h1>
              <p className="mt-5 max-w-2xl leading-7 text-muted">
                Learn how to recognize sender-identity and delivery problems
                without pretending you control every layer of the internet.
              </p>
            </div>

            {started ? (
              <Progress
                current={current}
                maxUnlocked={maxUnlocked}
                onNavigate={setCurrent}
              />
            ) : null}
          </header>

          {!started ? (
            <div className="p-6 md:p-8">
              <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <SectionIntro
                  eyebrow="Five-minute lesson"
                  title="Why do tracking emails fail?"
                  body="Follow one small-business scenario through domain ownership, sender authentication, delivery symptoms, and the support boundary."
                />

                <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.025] p-6">
                  <p className="font-display text-2xl font-bold text-ink">
                    You will make four decisions.
                  </p>
                  <p className="mt-3 leading-7 text-muted">
                    Each step explains why the decision matters before asking
                    you to interact.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStarted(true)}
                    className="mt-6 rounded-xl border border-cyan bg-cyan px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-night"
                  >
                    Start the lesson →
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 md:p-8">
              {current === 0 ? <WhyItMattersStep /> : null}
              {current === 1 ? (
                <AddressOwnershipStep
                  completed={ownershipComplete}
                  onComplete={() => setOwnershipComplete(true)}
                />
              ) : null}
              {current === 2 ? (
                <SenderChecksStep
                  completed={securityComplete}
                  onComplete={() => setSecurityComplete(true)}
                />
              ) : null}
              {current === 3 ? (
                <ReadSymptomStep
                  completed={symptomsComplete}
                  onComplete={() => setSymptomsComplete(true)}
                />
              ) : null}
              {current === 4 ? (
                <SupportBoundaryStep
                  completed={guideComplete}
                  onComplete={() => setGuideComplete(true)}
                />
              ) : null}

              <FooterNav
                current={current}
                canContinue={canContinue}
                helperText={helperText}
                complete={guideComplete}
                onPrevious={() => setCurrent((value) => Math.max(0, value - 1))}
                onNext={goNext}
                onRestart={restart}
              />
            </div>
          )}
        </div>

        <p className="mt-4 text-center font-lab text-[0.66rem] uppercase tracking-[0.08em] text-muted">
          Built from the original independently created training artifact.
        </p>
      </div>
    </section>
  );
}
