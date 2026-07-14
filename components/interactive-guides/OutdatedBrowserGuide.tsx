"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandBadge } from "@/components/brand";

type StepId = "purpose" | "browser" | "clock" | "updates" | "network" | "boundary";

const steps: Array<{ id: StepId; label: string }> = [
  { id: "purpose", label: "Why it matters" },
  { id: "browser", label: "Browser" },
  { id: "clock", label: "Date & time" },
  { id: "updates", label: "New computer" },
  { id: "network", label: "Network" },
  { id: "boundary", label: "Support boundary" },
];

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
            <li key={step.id}>
              <button
                type="button"
                disabled={!unlocked}
                onClick={() => onNavigate(index)}
                className={`rounded-full border px-3 py-2 font-lab text-[0.62rem] font-semibold uppercase tracking-[0.07em] transition ${
                  active
                    ? "border-cyan bg-cyan text-night"
                    : complete
                      ? "border-cyan/25 bg-cyan/[0.08] text-cyan"
                      : unlocked
                        ? "border-white/15 bg-white/[0.03] text-ink hover:border-cyan/35"
                        : "cursor-not-allowed border-white/10 text-muted opacity-40"
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

function Intro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-3xl">
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

function Question({
  prompt,
  options,
  correctIndex,
  correctText,
  incorrectText,
  onComplete,
}: {
  prompt: string;
  options: string[];
  correctIndex: number;
  correctText: string;
  incorrectText: string;
  onComplete: () => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);

  const correct = selected === correctIndex;

  function check() {
    if (selected === null) return;
    setChecked(true);
    if (selected === correctIndex) onComplete();
  }

  return (
    <>
      <div className="mt-8 rounded-[1.5rem] border border-cyan/25 bg-cyan/[0.06] p-5">
        <p className="font-lab text-[0.67rem] font-bold uppercase tracking-[0.08em] text-cyan">
          Your turn
        </p>
        <p className="mt-3 font-display text-2xl font-bold text-ink">{prompt}</p>
      </div>

      <div className="mt-5 grid gap-3">
        {options.map((option, index) => {
          const active = selected === index;

          return (
            <button
              key={option}
              type="button"
              onClick={() => {
                setSelected(index);
                setChecked(false);
              }}
              className={`rounded-[1.35rem] border p-5 text-left transition ${
                active
                  ? "border-cyan bg-cyan/[0.08]"
                  : "border-white/10 bg-white/[0.02] hover:border-cyan/35"
              }`}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border font-lab text-xs font-bold ${
                    active
                      ? "border-cyan bg-cyan text-night"
                      : "border-white/15 text-muted"
                  }`}
                >
                  {active ? "✓" : index + 1}
                </span>
                <p className="leading-7 text-muted">{option}</p>
              </div>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        disabled={selected === null}
        onClick={check}
        className="mt-5 rounded-xl border border-cyan bg-cyan px-4 py-3 font-lab text-xs font-semibold uppercase tracking-[0.07em] text-night disabled:opacity-35"
      >
        Check answer
      </button>

      {checked ? (
        <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-white/[0.025] p-5">
          <p className="font-display text-2xl font-bold text-ink">
            {correct ? "That’s the strongest next step." : "Not yet."}
          </p>
          <p className="mt-3 leading-7 text-muted">
            {correct ? correctText : incorrectText}
          </p>
        </div>
      ) : null}
    </>
  );
}

function PurposeStep() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <Intro
          eyebrow="The real-world problem"
          title="A login failure is not always a password problem."
          body="A customer has the right password and completes two-factor authentication, but the login request is still rejected. Browser security, system time, unfinished updates, or the network may be getting in the way."
        />

        <div className="mt-7 rounded-[1.5rem] border border-cyan/20 bg-cyan/[0.06] p-5">
          <p className="font-display text-2xl font-bold text-ink">
            Why learn this?
          </p>
          <p className="mt-3 leading-7 text-muted">
            The fastest support does not try everything. It checks the
            simplest, least-disruptive explanations first and recognizes when
            the problem has moved outside its scope.
          </p>
        </div>
      </div>

      <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.025] p-6">
        <BrandBadge tone="experiment" icon="spark">
          Diagnostic order
        </BrandBadge>

        <div className="mt-6 grid gap-4">
          {[
            "Check the browser version.",
            "Check the computer’s date and time.",
            "Ask whether a new computer is still updating.",
            "Compare another device or network.",
            "Set a clear support boundary.",
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

function BrowserStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div>
      <Intro
        eyebrow="First check"
        title="Start with the browser."
        body="Older browsers may not support the security features a modern web application expects. That makes the browser version a practical, low-risk first check."
      />

      <Question
        prompt="The password and 2FA are working. What should you check next?"
        options={[
          "Reset the password again.",
          "Check whether the browser is current and secure.",
          "Ask the customer to replace the computer.",
        ]}
        correctIndex={1}
        correctText="If an update is available, install it, restart the browser, and try the login again."
        incorrectText="The password path is already ruled out, and replacing a device is far too disruptive for a first step."
        onComplete={onComplete}
      />

      <div className="mt-7 rounded-[1.4rem] border border-white/10 bg-white/[0.025] p-5">
        <p className="font-lab text-[0.64rem] font-bold uppercase tracking-[0.07em] text-cyan">
          Customer-friendly explanation
        </p>
        <p className="mt-3 leading-7 text-muted">
          “It looks like your browser may be out of date. This site works best
          with a current, secure browser. Let’s check for an update and then
          try again.”
        </p>
      </div>
    </div>
  );
}

function ClockStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div>
      <Intro
        eyebrow="Second check"
        title="A wrong clock can look like a security problem."
        body="Secure connections rely on time-sensitive certificates and requests. If a computer’s date, time, or time zone is wrong, a legitimate login may appear invalid."
      />

      <Question
        prompt="Why can an incorrect date or time block a secure login?"
        options={[
          "The site uses the clock to choose the customer’s time zone.",
          "Secure requests can be rejected when the device clock is too far out of sync.",
          "The clock changes the customer’s password.",
        ]}
        correctIndex={1}
        correctText="Correct the date, time, and time zone, then refresh and try again."
        incorrectText="The clock does not change the password. It affects whether time-sensitive security checks appear valid."
        onComplete={onComplete}
      />

      <div className="mt-7 rounded-[1.4rem] border border-white/10 bg-white/[0.025] p-5">
        <p className="font-lab text-[0.64rem] font-bold uppercase tracking-[0.07em] text-cyan">
          Customer-friendly explanation
        </p>
        <p className="mt-3 leading-7 text-muted">
          “This one is a little unusual, but if your computer’s date and time
          are off, the security check may not recognize the login attempt.”
        </p>
      </div>
    </div>
  );
}

function UpdatesStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div>
      <Intro
        eyebrow="Third check"
        title="A new computer may still be catching up."
        body="A newly purchased Windows computer can be installing years of updates, configuring security tools, and waiting for a restart. That background work may slow or interrupt time-sensitive requests."
      />

      <Question
        prompt="The customer says the computer is brand new. What is the safest next step?"
        options={[
          "Disable the antivirus so the website can load.",
          "Let updates finish, restart the computer, and try again.",
          "Ignore the updates because a new computer is already current.",
        ]}
        correctIndex={1}
        correctText="A pending restart can leave important updates incomplete. Finish updates, restart, and retest."
        incorrectText="Do not disable security software as routine troubleshooting. New hardware may still need significant software updates."
        onComplete={onComplete}
      />

      <div className="mt-7 rounded-[1.4rem] border border-cyan/20 bg-cyan/[0.06] p-5">
        <p className="font-display text-xl font-bold text-ink">
          Keep the safety rail visible
        </p>
        <p className="mt-3 leading-7 text-muted">
          Do not recommend disabling antivirus, malware protection, or other
          security tools as a routine test.
        </p>
      </div>
    </div>
  );
}

function NetworkStep({ onComplete }: { onComplete: () => void }) {
  const [reviewed, setReviewed] = useState<string[]>([]);

  const tests = [
    {
      id: "device",
      title: "Try another device",
      body: "If another device works, the issue is more likely tied to the original computer.",
    },
    {
      id: "network",
      title: "Try another network",
      body: "Mobile data or another Wi-Fi network can reveal whether the original connection is involved.",
    },
    {
      id: "restart",
      title: "Restart network equipment",
      body: "A modem or router restart can clear a temporary connectivity problem.",
    },
  ];

  function open(id: string) {
    if (!reviewed.includes(id)) {
      const next = [...reviewed, id];
      setReviewed(next);
      if (next.length === tests.length) onComplete();
    }
  }

  return (
    <div>
      <Intro
        eyebrow="Fourth check"
        title="Change one variable before calling it DNS."
        body="When the browser, clock, and updates are not the cause, compare another device or connection. The goal is to learn whether the problem follows the device, the network, or neither."
      />

      <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5">
        <p className="font-lab text-[0.67rem] font-bold uppercase tracking-[0.08em] text-cyan">
          Your turn
        </p>
        <p className="mt-3 leading-7 text-muted">
          Open all three comparison tests to see what each one helps isolate.
        </p>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {tests.map((test, index) => {
          const seen = reviewed.includes(test.id);

          return (
            <button
              key={test.id}
              type="button"
              onClick={() => open(test.id)}
              className={`rounded-[1.35rem] border p-5 text-left transition ${
                seen
                  ? "border-cyan bg-cyan/[0.08]"
                  : "border-white/10 bg-white/[0.02] hover:border-cyan/35"
              }`}
            >
              <span className="font-lab text-[0.64rem] font-bold uppercase tracking-[0.07em] text-cyan">
                {seen ? "✓ Reviewed" : `Test ${index + 1}`}
              </span>
              <p className="mt-3 font-display text-2xl font-bold text-ink">
                {test.title}
              </p>
              {seen ? (
                <p className="mt-3 leading-7 text-muted">{test.body}</p>
              ) : null}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-muted">
        {reviewed.length} of {tests.length} tests reviewed
      </p>
    </div>
  );
}

function BoundaryStep({
  completed,
  onComplete,
}: {
  completed: boolean;
  onComplete: () => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);

  const options = [
    "Promise to repair the customer’s DNS settings.",
    "Explain what the comparison suggests and recommend their network or device support resources.",
    "Tell the customer the company cannot help and end the conversation.",
  ];

  function choose(index: number) {
    setSelected(index);
    if (index === 1) onComplete();
  }

  return (
    <div>
      <Intro
        eyebrow="Final decision"
        title="Helpful does not mean owning the entire network."
        body="Once the simple security checks are complete, the strongest support response explains what the evidence suggests, offers a reasonable workaround, and identifies who owns deeper troubleshooting."
      />

      <div className="mt-8 rounded-[1.5rem] border border-cyan/25 bg-cyan/[0.06] p-5">
        <p className="font-lab text-[0.67rem] font-bold uppercase tracking-[0.08em] text-cyan">
          Scenario
        </p>
        <p className="mt-3 font-display text-2xl font-bold text-ink">
          The login works on mobile data but fails on the customer’s home
          Wi-Fi. What is the strongest response?
        </p>
      </div>

      <div className="mt-5 grid gap-3">
        {options.map((option, index) => (
          <button
            key={option}
            type="button"
            onClick={() => choose(index)}
            className={`rounded-[1.35rem] border p-5 text-left transition ${
              selected === index
                ? "border-cyan bg-cyan/[0.08]"
                : "border-white/10 bg-white/[0.02] hover:border-cyan/35"
            }`}
          >
            <div className="flex items-start gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 font-lab text-xs font-bold text-muted">
                {index + 1}
              </span>
              <p className="leading-7 text-muted">{option}</p>
            </div>
          </button>
        ))}
      </div>

      {selected !== null ? (
        <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-white/[0.025] p-5">
          <p className="font-display text-2xl font-bold text-ink">
            {selected === 1
              ? "Exactly. Explain, suggest, and hand off."
              : "That response misses the boundary."}
          </p>
          <p className="mt-3 leading-7 text-muted">
            {selected === 1
              ? "The comparison suggests the home network is involved. Explain that signal, offer another connection as a workaround, and recommend the customer contact their provider or technical support."
              : "Support should neither promise to repair systems it does not control nor abandon the customer without useful context."}
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
              "Start with the simplest, least-disruptive check.",
              "Recognize browser, clock, update, and network signals.",
              "Avoid disabling security tools as routine troubleshooting.",
              "Know when deeper device or network support owns the next step.",
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

export function OutdatedBrowserGuide() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [maxUnlocked, setMaxUnlocked] = useState(0);
  const [completed, setCompleted] = useState<Record<StepId, boolean>>({
    purpose: true,
    browser: false,
    clock: false,
    updates: false,
    network: false,
    boundary: false,
  });

  const currentId = steps[current].id;
  const canContinue = completed[currentId];
  const guideComplete = completed.boundary;

  function markComplete(id: StepId) {
    setCompleted((value) => ({ ...value, [id]: true }));
  }

  function next() {
    if (!canContinue || current >= steps.length - 1) return;
    const target = current + 1;
    setCurrent(target);
    setMaxUnlocked((value) => Math.max(value, target));
  }

  function restart() {
    setStarted(false);
    setCurrent(0);
    setMaxUnlocked(0);
    setCompleted({
      purpose: true,
      browser: false,
      clock: false,
      updates: false,
      network: false,
      boundary: false,
    });
  }

  const helperText =
    !canContinue && currentId === "browser"
      ? "Choose and check the strongest first step."
      : !canContinue && currentId === "clock"
        ? "Answer the date-and-time question to continue."
        : !canContinue && currentId === "updates"
          ? "Choose the safest next step for a new computer."
          : !canContinue && currentId === "network"
            ? "Review all three comparison tests to continue."
            : !canContinue && currentId === "boundary"
              ? "Choose the strongest support response to finish."
              : undefined;

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
            href="/work/small-wins/outdated-browser-guide.pdf"
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
              Interactive diagnostic lesson
            </BrandBadge>

            <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-none tracking-[-0.055em] text-ink md:text-6xl">
              Outdated Browser Troubleshooting
            </h1>

            <p className="mt-5 max-w-2xl leading-7 text-muted">
              Learn how to investigate browser-based login failures without
              jumping to disruptive fixes or promising to repair systems
              outside support’s control.
            </p>

            {started ? (
              <Progress
                current={current}
                maxUnlocked={maxUnlocked}
                onNavigate={setCurrent}
              />
            ) : null}
          </header>

          {!started ? (
            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.05fr_0.95fr]">
              <Intro
                eyebrow="Six-minute lesson"
                title="A login request can fail before the account is the problem."
                body="Follow one customer scenario through browser version, system time, Windows updates, network comparison, and a clear escalation boundary."
              />

              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.025] p-6">
                <p className="font-display text-2xl font-bold text-ink">
                  The core principle
                </p>
                <p className="mt-3 leading-7 text-muted">
                  Start with the simplest, safest explanation. Change one
                  variable at a time. Stop before troubleshooting becomes
                  device or network administration.
                </p>
                <button
                  type="button"
                  onClick={() => setStarted(true)}
                  className="mt-6 rounded-xl border border-cyan bg-cyan px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-night"
                >
                  Start diagnosing →
                </button>
              </div>
            </div>
          ) : (
            <div className="p-6 md:p-8">
              {currentId === "purpose" ? <PurposeStep /> : null}
              {currentId === "browser" ? (
                <BrowserStep onComplete={() => markComplete("browser")} />
              ) : null}
              {currentId === "clock" ? (
                <ClockStep onComplete={() => markComplete("clock")} />
              ) : null}
              {currentId === "updates" ? (
                <UpdatesStep onComplete={() => markComplete("updates")} />
              ) : null}
              {currentId === "network" ? (
                <NetworkStep onComplete={() => markComplete("network")} />
              ) : null}
              {currentId === "boundary" ? (
                <BoundaryStep
                  completed={guideComplete}
                  onComplete={() => markComplete("boundary")}
                />
              ) : null}

              <div className="mt-10 border-t border-[var(--border)] pt-6">
                {helperText ? (
                  <p className="mb-4 text-center text-sm text-muted">
                    {helperText}
                  </p>
                ) : null}

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setCurrent((value) => Math.max(0, value - 1))}
                    disabled={current === 0}
                    className="rounded-xl border border-white/10 px-4 py-3 font-lab text-xs font-semibold uppercase tracking-[0.07em] text-muted disabled:opacity-30"
                  >
                    ← Previous
                  </button>

                  <span className="font-lab text-[0.64rem] uppercase tracking-[0.08em] text-muted">
                    {current + 1} of {steps.length}
                  </span>

                  {guideComplete ? (
                    <button
                      type="button"
                      onClick={restart}
                      className="rounded-xl border border-cyan bg-cyan px-4 py-3 font-lab text-xs font-semibold uppercase tracking-[0.07em] text-night"
                    >
                      Restart guide ↺
                    </button>
                  ) : canContinue ? (
                    <button
                      type="button"
                      onClick={next}
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
            </div>
          )}
        </div>

        <p className="mt-4 text-center font-lab text-[0.66rem] uppercase tracking-[0.08em] text-muted">
          Public-safe interactive adaptation of an independently created guide.
        </p>
      </div>
    </section>
  );
}
