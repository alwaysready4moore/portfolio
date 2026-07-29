"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BrandBadge } from "@/components/brand";

type DomainExample = {
  label: string;
  address: string;
  kind: "house" | "apartment" | "borrowed";
  explanation: string;
};

const domainExamples: DomainExample[] = [
  {
    label: "Your house",
    address: "hello@yourbusiness.com",
    kind: "house",
    explanation:
      "You control yourbusiness.com, so you can verify it and send from an address on that domain.",
  },
  {
    label: "Your apartment",
    address: "hello@yourbusiness.etsy.com",
    kind: "apartment",
    explanation:
      "Etsy controls etsy.com. You may have a storefront there, but you do not control the parent domain.",
  },
  {
    label: "Someone else’s house",
    address: "yourbusiness@gmail.com",
    kind: "borrowed",
    explanation:
      "Google controls gmail.com. You can use the mailbox, but you cannot verify gmail.com as your own sending domain.",
  },
];

function ChoiceCard({
  example,
  selected,
  onSelect,
}: {
  example: DomainExample;
  selected: boolean;
  onSelect: () => void;
}) {
  const icon =
    example.kind === "house" ? "⌂" : example.kind === "apartment" ? "▦" : "⌁";

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group rounded-[1.6rem] border p-5 text-left transition ${
        selected
          ? "border-cyan bg-cyan/[0.09]"
          : "border-white/10 bg-white/[0.025] hover:border-cyan/30"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border font-display text-2xl font-bold ${
            selected
              ? "border-cyan bg-cyan text-night"
              : "border-white/10 bg-white/[0.04] text-cyan"
          }`}
        >
          {icon}
        </div>

        <div>
          <p className="font-lab text-[0.67rem] font-bold uppercase tracking-[0.08em] text-cyan">
            {example.label}
          </p>
          <p className="mt-2 break-all font-display text-xl font-bold text-ink">
            {example.address}
          </p>
        </div>
      </div>
    </button>
  );
}

export function DomainOwnershipQuiz() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const selected = useMemo(
    () => (selectedIndex === null ? null : domainExamples[selectedIndex]),
    [selectedIndex],
  );

  const isCorrect = selected?.kind === "house";

  function choose(index: number) {
    setSelectedIndex(index);
    setSubmitted(false);
  }

  return (
    <section className="lab-shell pt-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/work"
            className="font-lab text-xs font-semibold uppercase tracking-[0.08em] text-muted transition hover:text-cyan"
          >
            ← Back to work
          </Link>

          <a
            href="/work/small-wins/tracking-email-verification.pdf"
            target="_blank"
            rel="noreferrer"
            className="font-lab text-xs font-semibold uppercase tracking-[0.08em] text-cyan transition hover:translate-x-1"
          >
            View original PDF ↗
          </a>
        </div>

        <div className="paper-card mt-6 overflow-hidden">
          <header className="border-b border-[var(--border)] p-6 md:p-8">
            <BrandBadge tone="experiment" icon="spark">
              Interactive systems lesson
            </BrandBadge>

            <div className="mt-5 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <h1 className="font-display text-4xl font-bold leading-none tracking-[-0.055em] text-ink md:text-6xl">
                  Tracking Email Verification
                </h1>
              </div>

              <p className="max-w-2xl leading-7 text-muted lg:justify-self-end">
                A party-themed walkthrough of domains, sender identity, and why
                an email address is not automatically yours to authenticate.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Breathe", "Domains", "Ownership", "Security", "Outcomes"].map(
                (label, index) => (
                  <span
                    key={label}
                    className={`rounded-full border px-3 py-2 font-lab text-[0.65rem] font-semibold uppercase tracking-[0.07em] ${
                      index < 2
                        ? "border-cyan/25 bg-cyan/[0.08] text-cyan"
                        : "border-white/10 bg-white/[0.025] text-muted"
                    }`}
                  >
                    {index < 2 ? "✓ " : ""}
                    {label}
                  </span>
                ),
              )}
            </div>
          </header>

          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="relative overflow-hidden rounded-[2rem] border border-cyan/20 bg-[#f7f4ed] p-6 text-[#101820] shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:min-h-[32rem]">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(16,24,32,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(16,24,32,0.7) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              <div className="relative z-10">
                <p className="font-lab text-xs font-bold uppercase tracking-[0.09em] text-cyan">
                  Domain ownership check
                </p>

                <h2 className="mt-3 max-w-lg font-display text-4xl font-bold leading-[0.95] tracking-[-0.045em]">
                  Where are you hosting the party?
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-[#101820]/70">
                  A domain works like an internet address. You can make the
                  rules at your own house. In an apartment or someone else’s
                  house, the owner controls the building.
                </p>

                <div className="mt-7 grid gap-3">
                  {domainExamples.map((example, index) => (
                    <ChoiceCard
                      key={example.address}
                      example={example}
                      selected={selectedIndex === index}
                      onSelect={() => choose(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex min-h-[32rem] flex-col">
              <div>
                <BrandBadge tone="quiet" icon="dot">
                  House, apartment, or borrowed address?
                </BrandBadge>

                <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-[0.98] tracking-[-0.045em] text-ink md:text-4xl">
                  Which sender can be verified as yours?
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-muted md:text-lg">
                  Choose the address that belongs to a domain the business
                  actually controls.
                </p>

                <div className="mt-7">
                  <button
                    type="button"
                    onClick={() => setSubmitted(true)}
                    disabled={selectedIndex === null}
                    className="rounded-2xl border border-cyan bg-cyan px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-night transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-35"
                  >
                    Check the invitation
                  </button>
                </div>

                {submitted && selected ? (
                  <div
                    className={`mt-6 rounded-[1.6rem] border p-5 ${
                      isCorrect
                        ? "border-cyan/30 bg-cyan/[0.08]"
                        : "border-amber-300/20 bg-amber-300/[0.06]"
                    }`}
                    aria-live="polite"
                  >
                    <p className="font-lab text-xs font-semibold uppercase tracking-[0.08em] text-cyan">
                      {isCorrect ? "You control the house" : "The owner controls the rules"}
                    </p>

                    <p className="mt-3 font-display text-2xl font-bold text-ink">
                      {isCorrect
                        ? "That invitation can be verified."
                        : "That address does not prove domain ownership."}
                    </p>

                    <p className="mt-3 leading-7 text-muted">
                      {selected.explanation}
                    </p>
                  </div>
                ) : null}
              </div>

              <div className="mt-8 border-t border-[var(--border)] pt-6 lg:mt-auto">
                <p className="font-lab text-xs font-semibold uppercase tracking-[0.08em] text-cyan">
                  The lesson underneath the metaphor
                </p>

                <p className="mt-3 max-w-xl leading-7 text-muted">
                  Having access to an email inbox is not the same as controlling
                  its domain. Verification exists to prevent a sender from
                  borrowing someone else’s identity.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center font-lab text-[0.66rem] uppercase tracking-[0.08em] text-muted">
          Prototype 1 of the full Tracking Email Verification experience.
        </p>
      </div>
    </section>
  );
}
