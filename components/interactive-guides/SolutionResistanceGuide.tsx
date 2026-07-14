"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandBadge } from "@/components/brand";

type StepId =
  | "why"
  | "validate"
  | "clarify"
  | "boundary"
  | "alternatives"
  | "close";

const steps: Array<{ id: StepId; label: string }> = [
  { id: "why", label: "Why it matters" },
  { id: "validate", label: "Validate" },
  { id: "clarify", label: "Clarify" },
  { id: "boundary", label: "Set boundary" },
  { id: "alternatives", label: "Offer options" },
  { id: "close", label: "Close & recover" },
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


function LearningBlock({
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

function ScenarioQuestion({
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
    if (selected === correctIndex) onComplete();
  }

  return (
    <>
      <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5">
        <p className="font-lab text-[0.65rem] font-bold uppercase tracking-[0.08em] text-cyan">
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
            {correct ? "Strong response." : "That may increase resistance."}
          </p>
          <p className="mt-3 leading-7 text-muted">
            {correct ? correctText : incorrectText}
          </p>
        </div>
      ) : null}
    </>
  );
}

function WhyStep() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <Intro
          eyebrow="Lesson 1"
          title="A correct solution can still fail as a conversation."
          body="Customers may reject a valid solution because they feel unheard, powerless, confused, or disappointed. The goal is not to win an argument. It is to keep the conversation clear, humane, and focused on what can actually happen next."
        />

        <div className="mt-7 rounded-[1.5rem] border border-cyan/20 bg-cyan/[0.06] p-5">
          <p className="font-display text-2xl font-bold text-ink">
            Why learn this?
          </p>
          <p className="mt-3 leading-7 text-muted">
            Because compassion without clarity creates false hope, and clarity
            without compassion can feel dismissive. Strong support holds both.
          </p>
        </div>
      </div>

      <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.025] p-6">
        <BrandBadge tone="experiment" icon="spark">
          Conversation map
        </BrandBadge>

        <div className="mt-6 grid gap-4">
          {[
            "Acknowledge the frustration.",
            "Restate the solution in plain language.",
            "Name the limitation without hiding behind policy.",
            "Offer the support that is still available.",
            "Escalate or close when the loop is complete.",
            "Recover after the interaction.",
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

function ValidateStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div>
      <Intro
        eyebrow="Lesson 2"
        title="Start by lowering the emotional temperature."
        body="Resistance often grows when a customer feels powerless or unheard. Validation does not mean agreeing with every demand. It means showing that you understand the impact of the situation."
      />

      <LearningBlock
        principle="Name the impact before explaining the process."
        explanation="When someone feels unheard, more facts may sound like more resistance. A brief acknowledgment helps the next explanation land."
        soundsLike="I understand how frustrating this has been, especially after such a long wait."
        avoid="That’s the policy. There’s nothing more I can do."
      />

      <ScenarioQuestion
        customer="I’ve already waited long enough. I need you to fix this right now."
        prompt="Which response best acknowledges the frustration without promising an impossible outcome?"
        options={[
          "That’s our policy, and there’s nothing more I can do.",
          "I understand how frustrating this has been, especially after such a long wait. I want to make sure I understand what you need so we can identify the best path forward.",
          "You’ll just have to wait a little longer.",
        ]}
        correctIndex={1}
        correctText="This response validates the impact, shows active listening, and keeps the conversation open without making a promise."
        incorrectText="A blunt policy statement or command to wait may make the customer feel dismissed before the solution is even explained."
        onComplete={onComplete}
      />
    </div>
  );
}

function ClarifyStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div>
      <Intro
        eyebrow="Lesson 3"
        title="Restate the solution so the next step is unmistakable."
        body="Some customers reject a solution because they do not fully understand it. Use plain language, explain why the limitation exists, and frame what can happen next."
      />

      <LearningBlock
        principle="Explain the next step, the reason, and the trigger."
        explanation="Strong clarity answers three questions: What happens now? Why does it work this way? What changes after the next step?"
        soundsLike="Once delivery is confirmed, we can review the remaining issue and determine the available resolution."
        avoid="That’s just the process."
      />

      <ScenarioQuestion
        customer="Why can’t you issue the credit now? I don’t understand why I have to wait."
        prompt="Which response is clearest and most useful?"
        options={[
          "Because that’s the process.",
          "The next step is to wait for the package to be delivered. Once delivery is confirmed, we can review the remaining issue and determine the available resolution.",
          "There’s nothing I can do until the carrier updates it.",
        ]}
        correctIndex={1}
        correctText="It names the next step, explains the trigger for further action, and avoids vague or defensive language."
        incorrectText="The customer still needs to know what happens next and why. Repeating that a process exists does not create clarity."
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
        title="Say no without making the customer feel abandoned."
        body="When the requested outcome is not possible, acknowledge the request, state the limit directly, and remain present for the parts you can still support."
      />

      <LearningBlock
        principle="Do not hide the no, and do not weaponize it."
        explanation="Vague language creates false hope. Harsh language creates unnecessary conflict. A compassionate boundary tells the truth and stays present."
        soundsLike="I can’t issue it before delivery is confirmed, but I can help with the information and next steps."
        avoid="No. I already told you we can’t do that."
      />

      <ScenarioQuestion
        customer="I don’t care what the policy says. Issue the credit today."
        prompt="Which response sets the strongest compassionate boundary?"
        options={[
          "No. I already told you we can’t do that.",
          "I hear that you want the credit issued immediately. I can’t issue it before delivery is confirmed, but I can help make sure you have the information and next steps you need.",
          "I’ll see what I can do, but I can’t promise anything.",
        ]}
        correctIndex={1}
        correctText="The request is acknowledged, the limit is clear, and the support specialist stays engaged with what is still possible."
        incorrectText="Harsh language creates conflict, while vague promises can create false hope and prolong the resistance."
        onComplete={onComplete}
      />
    </div>
  );
}

function AlternativesStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div>
      <Intro
        eyebrow="Lesson 5"
        title="Shift the conversation toward available support."
        body="You may not be able to grant the requested outcome, but you can often offer information, resources, monitoring, follow-up, or escalation."
      />

      <LearningBlock
        principle="A handoff should feel like a bridge, not an exit."
        explanation="Name what you cannot do, then make the remaining support concrete enough for the customer to act on."
        soundsLike="I can share the right resources, explain the process, and answer questions about the next steps."
        avoid="You should contact someone else."
      />

      <ScenarioQuestion
        customer="So you’re saying you won’t help me with the claim?"
        prompt="Which response redirects toward support that is actually available?"
        options={[
          "Correct. Claims are not our responsibility.",
          "While I can’t manage the claim directly, I can share the right resources, explain the process, and answer questions about the steps you’ll need to take.",
          "You should contact someone else.",
        ]}
        correctIndex={1}
        correctText="This response clearly names the limit and then offers concrete support that remains within scope."
        incorrectText="A handoff without explanation can feel like dismissal. The customer still benefits from a clear bridge to the next step."
        onComplete={onComplete}
      />

      <div className="mt-7 rounded-[1.4rem] border border-white/10 bg-white/[0.025] p-5">
        <p className="font-lab text-[0.64rem] font-bold uppercase tracking-[0.07em] text-cyan">
          Thoughtful patience language
        </p>
        <p className="mt-3 leading-7 text-muted">
          “Thank you for your patience while I double-check this for you.”
          gives everyone a moment to breathe. “You’ll just have to wait” does
          not.
        </p>
      </div>
    </div>
  );
}

function CloseStep({
  completed,
  onComplete,
}: {
  completed: boolean;
  onComplete: () => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);

  const options = [
    "Keep repeating the same solution indefinitely.",
    "Reiterate the final position, offer escalation or follow-up when useful, then close respectfully if no new path remains.",
    "End the conversation as soon as the customer disagrees.",
  ];

  function choose(index: number) {
    setSelected(index);
    if (index == 1) onComplete();
  }

  return (
    <div>
      <Intro
        eyebrow="Lesson 6"
        title="Know when the conversation has reached its natural end."
        body="If the solution, limitation, alternatives, and escalation path have all been explained, continuing the same loop may not help either person. A respectful close protects the customer and the specialist."
      />

      <div className="mt-8 rounded-[1.5rem] border border-cyan/25 bg-cyan/[0.06] p-5">
        <p className="font-lab text-[0.65rem] font-bold uppercase tracking-[0.08em] text-cyan">
          Final decision
        </p>
        <p className="mt-3 font-display text-2xl font-bold text-ink">
          The customer continues rejecting the same available solution. What
          should happen next?
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
              ? "Exactly. Close the loop without becoming cold."
              : "That choice misses the balance."}
          </p>
          <p className="mt-3 leading-7 text-muted">
            {selected === 1
              ? "The strongest close restates the final position, names any remaining option, and ends with empathy. Afterward, document the interaction, seek support if needed, and take a moment to reset."
              : "Ending too soon can feel dismissive, while repeating the same loop indefinitely can drain both people without creating a new path."}
          </p>
        </div>
      ) : null}

      {completed ? (
        <div className="mt-8 rounded-[1.6rem] border border-cyan/25 bg-cyan/[0.07] p-6">
          <p className="font-lab text-[0.67rem] font-bold uppercase tracking-[0.08em] text-cyan">
            Module complete
          </p>
          <h3 className="mt-3 font-display text-3xl font-bold text-ink">
            The conversation formula
          </h3>
          <div className="mt-5 grid gap-3">
            {[
              "Validate the impact.",
              "Clarify the solution and limitation.",
              "Hold the boundary kindly.",
              "Offer what is still possible.",
              "Escalate or close when no new path remains.",
              "Document, debrief, and recover.",
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

export function SolutionResistanceGuide() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [maxUnlocked, setMaxUnlocked] = useState(0);
  const [completed, setCompleted] = useState<Record<StepId, boolean>>({
    why: true,
    validate: false,
    clarify: false,
    boundary: false,
    alternatives: false,
    close: false,
  });

  const currentId = steps[current].id;
  const canContinue = completed[currentId];
  const guideComplete = completed.close;

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
      validate: false,
      clarify: false,
      boundary: false,
      alternatives: false,
      close: false,
    });
  }

  const helperText =
    !canContinue && currentId !== "why"
      ? "Choose and check the strongest response to continue."
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
            href="/work/small-wins/solution-resistance-guide.pdf"
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
              Navigating Solution Resistance
            </h1>

            <p className="mt-5 max-w-2xl leading-7 text-muted">
              Learn the principles behind compassionate boundaries, then practice
              applying them in realistic customer conversations.
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
                eyebrow="Seven-minute lesson"
                title="Learn the method, then practice the conversation."
                body="Each lesson teaches one communication principle, shows what strong and weak language sound like, and ends with a short practice scenario."
              />

              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.025] p-6">
                <p className="font-display text-2xl font-bold text-ink">
                  Module pattern
                </p>
                <div className="mt-4 grid gap-2 text-muted">
                  <p>1. Learn the principle</p>
                  <p>2. Compare strong and weak language</p>
                  <p>3. Practice with a scenario</p>
                  <p>4. Review the feedback</p>
                </div>
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
              {currentId === "validate" ? (
                <ValidateStep onComplete={() => markComplete("validate")} />
              ) : null}
              {currentId === "clarify" ? (
                <ClarifyStep onComplete={() => markComplete("clarify")} />
              ) : null}
              {currentId === "boundary" ? (
                <BoundaryStep onComplete={() => markComplete("boundary")} />
              ) : null}
              {currentId === "alternatives" ? (
                <AlternativesStep
                  onComplete={() => markComplete("alternatives")}
                />
              ) : null}
              {currentId === "close" ? (
                <CloseStep
                  completed={guideComplete}
                  onComplete={() => markComplete("close")}
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
