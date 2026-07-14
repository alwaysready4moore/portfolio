"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandBadge } from "@/components/brand";

type StepId =
  | "why"
  | "ground"
  | "tone"
  | "boundary"
  | "solution"
  | "exit"
  | "recover";

const steps: Array<{ id: StepId; label: string }> = [
  { id: "why", label: "Why it matters" },
  { id: "ground", label: "Stay grounded" },
  { id: "tone", label: "Lead the tone" },
  { id: "boundary", label: "Set boundaries" },
  { id: "solution", label: "Focus on solution" },
  { id: "exit", label: "Escalate or end" },
  { id: "recover", label: "Recover" },
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
    <nav aria-label="Module progress" className="mt-7 overflow-x-auto pb-1">
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

function TeachingBlock({
  principle,
  explanation,
  soundsLike,
  avoid,
}: {
  principle: string;
  explanation: string;
  soundsLike: string;
  avoid: string;
}) {
  return (
    <div className="mt-8 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6">
        <p className="font-lab text-[0.65rem] font-bold uppercase tracking-[0.08em] text-cyan">
          Core principle
        </p>
        <h3 className="mt-3 font-display text-2xl font-bold text-ink">
          {principle}
        </h3>
        <p className="mt-3 leading-7 text-muted">{explanation}</p>
      </div>

      <div className="grid gap-4">
        <div className="rounded-[1.4rem] border border-cyan/20 bg-cyan/[0.06] p-5">
          <p className="font-lab text-[0.64rem] font-bold uppercase tracking-[0.07em] text-cyan">
            What this sounds like
          </p>
          <p className="mt-3 leading-7 text-muted">“{soundsLike}”</p>
        </div>

        <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.02] p-5">
          <p className="font-lab text-[0.64rem] font-bold uppercase tracking-[0.07em] text-muted">
            Avoid
          </p>
          <p className="mt-3 leading-7 text-muted">“{avoid}”</p>
        </div>
      </div>
    </div>
  );
}

function Practice({
  customer,
  prompt,
  options,
  correctIndex,
  correctText,
  incorrectText,
  onComplete,
}: {
  customer: string;
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
    if (correct) onComplete();
  }

  return (
    <div className="mt-10 border-t border-[var(--border)] pt-8">
      <p className="font-lab text-[0.68rem] font-bold uppercase tracking-[0.08em] text-cyan">
        Practice
      </p>

      <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5">
        <p className="font-lab text-[0.65rem] font-bold uppercase tracking-[0.08em] text-muted">
          Customer
        </p>
        <p className="mt-3 font-display text-2xl font-bold leading-snug text-ink">
          “{customer}”
        </p>
      </div>

      <div className="mt-5 rounded-[1.5rem] border border-cyan/25 bg-cyan/[0.06] p-5">
        <p className="font-lab text-[0.65rem] font-bold uppercase tracking-[0.08em] text-cyan">
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
        Check response
      </button>

      {checked ? (
        <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-white/[0.025] p-5">
          <p className="font-display text-2xl font-bold text-ink">
            {correct ? "Strong response." : "That may intensify the interaction."}
          </p>
          <p className="mt-3 leading-7 text-muted">
            {correct ? correctText : incorrectText}
          </p>
        </div>
      ) : null}
    </div>
  );
}

function WhyStep() {
  return (
    <div>
      <Intro
        eyebrow="Lesson 1"
        title="The customer’s tone is information, not a verdict on you."
        body="A tense or disrespectful interaction can feel personal, especially when you are already working hard to help. This module is about staying grounded, leading the conversation with calm authority, and knowing when the work has crossed into abuse."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {[
          [
            "Their tone reflects their state",
            "Frustration, fear, embarrassment, and loss of control can all show up as hostility.",
          ],
          [
            "Your job is not to win",
            "The goal is to resolve the issue, not punish the customer or prove who is right.",
          ],
          [
            "Calm is a strategy",
            "Your tone can reduce tension without becoming passive or overly accommodating.",
          ],
          [
            "You still deserve boundaries",
            "Helping someone does not require tolerating disrespect or abuse.",
          ],
        ].map(([title, body]) => (
          <div
            key={title}
            className="rounded-[1.4rem] border border-white/10 bg-white/[0.025] p-5"
          >
            <p className="font-display text-xl font-bold text-ink">{title}</p>
            <p className="mt-3 leading-7 text-muted">{body}</p>
          </div>
        ))}
      </div>

      <div className="mt-7 rounded-[1.5rem] border border-cyan/20 bg-cyan/[0.06] p-5">
        <p className="font-display text-2xl font-bold text-ink">
          The navigation formula
        </p>
        <p className="mt-3 leading-7 text-muted">
          Ground yourself. Lead the tone. Reframe the issue. Set the boundary.
          Focus on the solution. Escalate or end when necessary. Recover
          afterward.
        </p>
      </div>
    </div>
  );
}

function GroundStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div>
      <Intro
        eyebrow="Lesson 2"
        title="Pause before the customer chooses your emotional state for you."
        body="A brief pause interrupts the automatic urge to defend yourself, match the customer’s tone, or prove them wrong. Grounding creates enough space to respond deliberately."
      />

      <TeachingBlock
        principle="Separate the customer’s tone from your worth."
        explanation="Their initial demeanor was not created by who you are. You can influence the direction of the conversation without accepting their behavior as a measure of your competence."
        soundsLike="I’m here to help, and their tone does not define my worth."
        avoid="They’re disrespecting me, so I need to put them in their place."
      />

      <Practice
        customer="Are you even reading what I’m saying? This is unbelievable."
        prompt="What is the strongest first move before you respond?"
        options={[
          "Reply immediately so they know you will not tolerate that tone.",
          "Pause, breathe, and remind yourself that the goal is to resolve the issue.",
          "Transfer the conversation without reviewing the problem.",
        ]}
        correctIndex={1}
        correctText="The pause helps you regain choice. You can still address the tone later, but you do not have to answer from the first emotional impulse."
        incorrectText="Immediate defensiveness can turn the conversation into a contest. A transfer without context may also move the heat without solving anything."
        onComplete={onComplete}
      />
    </div>
  );
}

function ToneStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div>
      <Intro
        eyebrow="Lesson 3"
        title="Be the calm in the storm without becoming robotic."
        body="Neutral, professional language lowers the temperature. Genuine empathy and measured optimism can help, but they should sound grounded rather than cheerful at the customer’s expense."
      />

      <TeachingBlock
        principle="Match the seriousness, not the hostility."
        explanation="You do not need to mirror anger to prove that you understand the problem. A calm tone signals control and makes the next step easier to hear."
        soundsLike="I understand this is frustrating. Let’s work together to get this sorted."
        avoid="Calm down. I’m trying to help you."
      />

      <Practice
        customer="This whole process is a joke. Nobody there knows what they’re doing."
        prompt="Which response best leads the tone?"
        options={[
          "That’s not fair. We’ve been doing everything we can.",
          "I understand why this has been frustrating. I’m going to focus on the next steps that can move this forward.",
          "I’m sure everything will be fine!",
        ]}
        correctIndex={1}
        correctText="This response acknowledges the frustration and confidently redirects toward action without becoming defensive or falsely cheerful."
        incorrectText="Defensiveness feeds the conflict, while excessive positivity can feel dismissive when the customer is genuinely upset."
        onComplete={onComplete}
      />
    </div>
  );
}

function BoundaryStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div>
      <Intro
        eyebrow="Lesson 4"
        title="Set boundaries with grace and authority."
        body="You are there to help, but you do not have to tolerate personal attacks. The strongest boundary redirects the conversation toward the issue and makes the expectation clear."
      />

      <TeachingBlock
        principle="Reframe first. Reinforce expectations when needed."
        explanation="Some dismissive remarks can be redirected without confrontation. When the behavior continues, name the expectation directly and keep the focus on the work."
        soundsLike="I’m here to help, but I’d appreciate it if we could keep the conversation focused on the issue."
        avoid="You need to watch how you speak to me."
      />

      <Practice
        customer="This is ridiculous. Why don’t you understand something so basic?"
        prompt="Which response sets the best boundary while keeping the work moving?"
        options={[
          "I understand perfectly. You’re the one making this difficult.",
          "I want to make sure we’re on the same page, so I’m confirming the details before we proceed.",
          "I’m ending this conversation now.",
        ]}
        correctIndex={1}
        correctText="The response reframes the behavior, explains the purpose of the questions, and keeps the conversation solution-focused."
        incorrectText="A counterattack escalates the interaction, while ending immediately may be premature if the behavior has not crossed the abuse threshold."
        onComplete={onComplete}
      />
    </div>
  );
}

function SolutionStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div>
      <Intro
        eyebrow="Lesson 5"
        title="Confidence grows when the plan becomes concrete."
        body="A tense customer may challenge your expertise or assumptions. Calmly reinforce your role, correct misconceptions respectfully, and outline the next steps in plain language."
      />

      <TeachingBlock
        principle="Lead with a plan, not a power struggle."
        explanation="Authority is most convincing when it helps the customer understand what will happen next. Clear steps reduce uncertainty and invite cooperation."
        soundsLike="This is a common issue. Here’s what we’ll do next, step by step."
        avoid="I’m the expert here, so you need to listen."
      />

      <Practice
        customer="I’ve been doing this for years. I don’t need a lecture from you."
        prompt="Which response best reinforces expertise without becoming condescending?"
        options={[
          "Then you should already know how this works.",
          "I appreciate your experience. I’ll skip the basics, and we can move directly into the next troubleshooting steps.",
          "Please let me finish before interrupting.",
        ]}
        correctIndex={1}
        correctText="This respects the customer’s experience, adapts the conversation, and keeps the specialist in a confident leadership role."
        incorrectText="The goal is not to win the status contest. It is to use the customer’s familiarity to move the work forward."
        onComplete={onComplete}
      />
    </div>
  );
}

function ExitStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div>
      <Intro
        eyebrow="Lesson 6"
        title="Know when the conversation has crossed the line."
        body="Frustration is not the same as abuse. When the customer’s behavior becomes personally degrading, threatening, or persistently disrespectful, it is appropriate to reinforce expectations, escalate, or disengage according to policy."
      />

      <TeachingBlock
        principle="Escalation is a support tool, not a failure."
        explanation="A clear escalation protects the specialist, documents the behavior, and gives the customer another path without requiring the same person to absorb unlimited hostility."
        soundsLike="I’m here to help, but we need to keep this conversation focused on the issue. If this approach is not working, I can escalate it for further assistance."
        avoid="Fine. Talk to my manager."
      />

      <Practice
        customer="You’re useless. Get me someone competent before you make this worse."
        prompt="What is the strongest next move?"
        options={[
          "Continue as though the personal attack did not happen.",
          "Reinforce the expectation for respectful communication and offer escalation according to the available process.",
          "Insult the customer back and then end the conversation.",
        ]}
        correctIndex={1}
        correctText="The behavior is addressed directly, the support boundary is protected, and the customer is given a clear next path."
        incorrectText="Ignoring abuse can normalize it, while retaliation violates the same standard you are trying to uphold."
        onComplete={onComplete}
      />
    </div>
  );
}

function RecoverStep({
  completed,
  onComplete,
}: {
  completed: boolean;
  onComplete: () => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);

  const options = [
    "Jump immediately into the next difficult conversation and pretend nothing happened.",
    "Document the case, seek support if needed, and take a brief moment to reset before returning to the queue.",
    "Reread the customer’s insults until you understand what you did wrong.",
  ];

  function choose(index: number) {
    setSelected(index);
    if (index === 1) onComplete();
  }

  return (
    <div>
      <Intro
        eyebrow="Lesson 7"
        title="The interaction ends before the impact does."
        body="Tense conversations can stay in your body after the chat closes. Recovery is part of professional performance, not evidence that you were too sensitive."
      />

      <TeachingBlock
        principle="Reflect, document, seek support, and reset."
        explanation="Acknowledge what you handled well, capture any useful case details, involve your manager or team when needed, and give your nervous system a moment to come down."
        soundsLike="I handled that professionally, documented the issue, and I can take a breath before the next conversation."
        avoid="I should be able to take unlimited abuse without being affected."
      />

      <div className="mt-10 border-t border-[var(--border)] pt-8">
        <p className="font-lab text-[0.68rem] font-bold uppercase tracking-[0.08em] text-cyan">
          Final practice
        </p>

        <div className="mt-4 rounded-[1.5rem] border border-cyan/25 bg-cyan/[0.06] p-5">
          <p className="font-display text-2xl font-bold text-ink">
            The conversation is over, but you still feel shaken. What is the
            strongest next step?
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
                ? "Exactly. Recovery belongs in the workflow."
                : "That response asks you to absorb too much."}
            </p>
            <p className="mt-3 leading-7 text-muted">
              {selected === 1
                ? "Document what happened, reach out to your team when useful, and create enough space to return to the queue with a steadier nervous system."
                : "Professionalism does not require pretending the interaction had no impact or turning the customer’s behavior into a judgment about your worth."}
            </p>
          </div>
        ) : null}
      </div>

      {completed ? (
        <div className="mt-8 rounded-[1.6rem] border border-cyan/25 bg-cyan/[0.07] p-6">
          <p className="font-lab text-[0.67rem] font-bold uppercase tracking-[0.08em] text-cyan">
            Module complete
          </p>
          <h3 className="mt-3 font-display text-3xl font-bold text-ink">
            Your calm-navigation checklist
          </h3>
          <div className="mt-5 grid gap-3">
            {[
              "Pause before reacting.",
              "Lead with neutral, confident language.",
              "Reframe disrespect toward the issue.",
              "Use warmth when it helps and firmness when it matters.",
              "Escalate or disengage when the behavior crosses the line.",
              "Document, seek support, and recover afterward.",
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

export function SpicyUsersGuide() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [maxUnlocked, setMaxUnlocked] = useState(0);
  const [completed, setCompleted] = useState<Record<StepId, boolean>>({
    why: true,
    ground: false,
    tone: false,
    boundary: false,
    solution: false,
    exit: false,
    recover: false,
  });

  const currentId = steps[current].id;
  const canContinue = completed[currentId];
  const moduleComplete = completed.recover;

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
      why: true,
      ground: false,
      tone: false,
      boundary: false,
      solution: false,
      exit: false,
      recover: false,
    });
  }

  const helperText =
    !canContinue && currentId !== "why"
      ? "Complete the practice scenario to continue."
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
            href="/work/small-wins/spicy-users-guide.pdf"
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
              Interactive teaching module
            </BrandBadge>

            <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-none tracking-[-0.055em] text-ink md:text-6xl">
              Navigating Spicy Users
            </h1>

            <p className="mt-5 max-w-2xl leading-7 text-muted">
              Learn how to stay grounded, lead with calm authority, set
              respectful boundaries, and protect yourself during tense customer
              interactions.
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
                eyebrow="Ten-minute module"
                title="Stay calm without becoming passive."
                body="Each lesson teaches one de-escalation principle, shows what it sounds like, identifies a common mistake, and ends with a short practice scenario."
              />

              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.025] p-6">
                <p className="font-display text-2xl font-bold text-ink">
                  What makes this different
                </p>
                <p className="mt-3 leading-7 text-muted">
                  This module is not about persuading a customer to accept a
                  solution. It is about managing emotional intensity, protecting
                  the specialist, and deciding when to continue, escalate, or
                  disengage.
                </p>
                <button
                  type="button"
                  onClick={() => setStarted(true)}
                  className="mt-6 rounded-xl border border-cyan bg-cyan px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-night"
                >
                  Start the module →
                </button>
              </div>
            </div>
          ) : (
            <div className="p-6 md:p-8">
              {currentId === "why" ? <WhyStep /> : null}
              {currentId === "ground" ? (
                <GroundStep onComplete={() => markComplete("ground")} />
              ) : null}
              {currentId === "tone" ? (
                <ToneStep onComplete={() => markComplete("tone")} />
              ) : null}
              {currentId === "boundary" ? (
                <BoundaryStep onComplete={() => markComplete("boundary")} />
              ) : null}
              {currentId === "solution" ? (
                <SolutionStep onComplete={() => markComplete("solution")} />
              ) : null}
              {currentId === "exit" ? (
                <ExitStep onComplete={() => markComplete("exit")} />
              ) : null}
              {currentId === "recover" ? (
                <RecoverStep
                  completed={moduleComplete}
                  onComplete={() => markComplete("recover")}
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
                    Lesson {current + 1} of {steps.length}
                  </span>

                  {moduleComplete ? (
                    <button
                      type="button"
                      onClick={restart}
                      className="rounded-xl border border-cyan bg-cyan px-4 py-3 font-lab text-xs font-semibold uppercase tracking-[0.07em] text-night"
                    >
                      Restart module ↺
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
                      Complete practice
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <p className="mt-4 text-center font-lab text-[0.66rem] uppercase tracking-[0.08em] text-muted">
          Interactive adaptation of an independently created teaching guide.
        </p>
      </div>
    </section>
  );
}
