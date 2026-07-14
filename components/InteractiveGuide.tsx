"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { BrandBadge } from "@/components/brand";

export type GuideChoice = {
  label: string;
  feedback: string;
  correct?: boolean;
};

export type GuideSlide = {
  eyebrow: string;
  title: string;
  body: string;
  bullets?: string[];
  visual:
    | "languages"
    | "browser"
    | "context-menu"
    | "language-picker"
    | "screenshot"
    | "reset"
    | "cookie-jar"
    | "cache-pocket"
    | "incognito"
    | "decision"
    | "success";
  choices?: GuideChoice[];
};

type InteractiveGuideProps = {
  title: string;
  description: string;
  guideLabel: string;
  slides: GuideSlide[];
  originalPdfHref: string;
  backHref?: string;
};


function PictogramPanel({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative flex min-h-[19rem] w-full items-center justify-center overflow-hidden rounded-[2rem] border border-cyan/20 bg-[#f7f4ed] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:min-h-[24rem] md:p-6">
      <Image
        src={src}
        alt={alt}
        width={1448}
        height={1086}
        sizes="(min-width: 1024px) 52vw, 100vw"
        className="h-auto max-h-[24rem] w-full object-contain"
        priority={src.endsWith("cookies-save-files.png")}
      />
    </div>
  );
}

function GuideVisual({ visual }: { visual: GuideSlide["visual"] }) {
  const frame =
    "relative flex min-h-[19rem] w-full items-center justify-center overflow-hidden rounded-[2rem] border border-cyan/20 bg-[#071014] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:min-h-[24rem]";

  if (visual === "languages") {
    return (
      <div className={frame}>
        <div className="grid w-full max-w-sm gap-3">
          {["Hello", "Hola", "嗨", "Bonjour"].map((word, index) => (
            <div
              key={word}
              className={`rounded-2xl border px-5 py-3 text-center font-display text-2xl font-bold ${
                index === 0
                  ? "border-cyan/40 bg-cyan/10 text-cyan"
                  : "border-white/10 bg-white/[0.04] text-ink"
              }`}
            >
              {word}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (visual === "browser" || visual === "context-menu" || visual === "language-picker") {
    return (
      <div className={frame}>
        <div className="w-full max-w-lg overflow-hidden rounded-3xl border border-white/15 bg-[#f7f4ed] text-[#101820] shadow-2xl">
          <div className="flex items-center gap-2 border-b border-black/10 bg-white px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-black/20" />
            <span className="h-3 w-3 rounded-full bg-black/20" />
            <span className="h-3 w-3 rounded-full bg-black/20" />
            <div className="ml-3 flex-1 rounded-full bg-black/[0.06] px-4 py-2 text-xs">
              customer.example.com/tracking
            </div>
          </div>

          <div className="relative min-h-64 p-6">
            <p className="font-display text-3xl font-bold">Shipment update</p>
            <div className="mt-5 grid gap-3">
              <div className="h-4 w-4/5 rounded-full bg-black/10" />
              <div className="h-4 w-2/3 rounded-full bg-black/10" />
              <div className="h-24 rounded-2xl bg-black/[0.05]" />
            </div>

            {visual === "context-menu" ? (
              <div className="absolute right-8 top-12 w-56 rounded-xl border border-black/10 bg-white p-2 text-sm shadow-xl">
                <p className="rounded-lg px-3 py-2 text-black/50">Back</p>
                <p className="rounded-lg px-3 py-2 text-black/50">Reload</p>
                <p className="rounded-lg bg-cyan/15 px-3 py-2 font-semibold">
                  Translate to English
                </p>
                <p className="rounded-lg px-3 py-2 text-black/50">View source</p>
              </div>
            ) : null}

            {visual === "language-picker" ? (
              <div className="absolute right-6 top-5 rounded-2xl border border-black/10 bg-white p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-cyan px-3 py-2 font-semibold">
                    English
                  </span>
                  <span>→</span>
                  <span className="rounded-lg bg-black/[0.06] px-3 py-2">
                    Español
                  </span>
                  <span className="text-xl">⋮</span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  if (visual === "screenshot") {
    return (
      <div className={frame}>
        <div className="relative w-full max-w-md rounded-3xl border border-white/15 bg-white/[0.04] p-6">
          <div className="rounded-2xl border border-cyan/30 bg-cyan/[0.08] p-5">
            <p className="font-display text-3xl font-bold text-ink">
              Actualización del envío
            </p>
            <p className="mt-3 leading-7 text-muted">
              Su paquete está en camino y llegará pronto.
            </p>
          </div>
          <div className="absolute -bottom-4 -right-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan/30 bg-cyan text-3xl text-night shadow-xl">
            ⌁
          </div>
        </div>
      </div>
    );
  }

  if (visual === "reset") {
    return (
      <div className={frame}>
        <div className="text-center">
          <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-cyan/30 bg-cyan/[0.08] text-7xl">
            ↻
          </div>
          <p className="mt-6 font-display text-3xl font-bold text-ink">
            Return to the original language
          </p>
        </div>
      </div>
    );
  }

  if (visual === "cookie-jar") {
    return (
      <PictogramPanel
        src="/work/small-wins/cookies-and-cache/cookies-save-files.png"
        alt="A cookie jar holding labeled cookies for login, language, cart, and theme preferences."
      />
    );
  }

  if (visual === "cache-pocket") {
    return (
      <PictogramPanel
        src="/work/small-wins/cookies-and-cache/browser-cache-assets.png"
        alt="Reusable webpage assets moving from a browser into browser cache storage."
      />
    );
  }

  if (visual === "incognito") {
    return (
      <PictogramPanel
        src="/work/small-wins/cookies-and-cache/incognito-comparison.png"
        alt="A normal browser window with a warning compared with a clean incognito browser test."
      />
    );
  }

  if (visual === "decision") {
    return (
      <PictogramPanel
        src="/work/small-wins/cookies-and-cache/test-the-theory-first.png"
        alt="A bossy figure demanding that everything be cleared beside a calm checklist that says to test the theory first."
      />
    );
  }

  return (
    <PictogramPanel
      src="/work/small-wins/cookies-and-cache/least-disruptive-fix.png"
      alt="A support specialist and customer using context, testing, and a clear checklist to choose the least disruptive fix."
    />
  );
}

export function InteractiveGuide({
  title,
  description,
  guideLabel,
  slides,
  originalPdfHref,
  backHref = "/work",
}: InteractiveGuideProps) {
  const [current, setCurrent] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);

  const slide = slides[current];
  const canGoBack = current > 0;
  const canGoForward = current < slides.length - 1;

  const selectedFeedback = useMemo(() => {
    if (selectedChoice === null || !slide.choices) return null;
    return slide.choices[selectedChoice];
  }, [selectedChoice, slide.choices]);

  function goTo(index: number) {
    if (index < 0 || index >= slides.length) return;
    setCurrent(index);
    setSelectedChoice(null);
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") goTo(current - 1);
      if (event.key === "ArrowRight") goTo(current + 1);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [current, slides.length]);

  return (
    <section className="lab-shell pt-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href={backHref}
            className="font-lab text-xs font-semibold uppercase tracking-[0.08em] text-muted transition hover:text-cyan"
          >
            ← Back to work
          </Link>

          <a
            href={originalPdfHref}
            target="_blank"
            rel="noreferrer"
            className="font-lab text-xs font-semibold uppercase tracking-[0.08em] text-cyan transition hover:translate-x-1"
          >
            View original PDF ↗
          </a>
        </div>

        <div className="paper-card mt-6 overflow-hidden">
          <header className="border-b border-[var(--border)] p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
              <div>
                <BrandBadge tone="experiment" icon="spark">
                  {guideLabel}
                </BrandBadge>

                <h1 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.055em] text-ink md:text-5xl">
                  {title}
                </h1>
              </div>

              <p className="max-w-2xl leading-7 text-muted lg:justify-self-end">
                {description}
              </p>
            </div>

            <nav
              aria-label="Guide progress"
              className="mt-7 overflow-x-auto pb-1"
            >
              <ol className="flex min-w-max items-center gap-2">
                {slides.map((item, index) => {
                  const isCurrent = index === current;
                  const isComplete = index < current;

                  return (
                    <li key={`${item.title}-${index}`} className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => goTo(index)}
                        aria-current={isCurrent ? "step" : undefined}
                        className={`group flex items-center gap-2 rounded-full border px-3 py-2 font-lab text-[0.66rem] font-semibold uppercase tracking-[0.07em] transition ${
                          isCurrent
                            ? "border-cyan bg-cyan text-night"
                            : isComplete
                              ? "border-cyan/25 bg-cyan/[0.08] text-cyan"
                              : "border-white/10 bg-white/[0.025] text-muted hover:border-cyan/30 hover:text-cyan"
                        }`}
                      >
                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-full text-[0.62rem] ${
                            isCurrent
                              ? "bg-night/10"
                              : isComplete
                                ? "bg-cyan/10"
                                : "bg-white/[0.04]"
                          }`}
                        >
                          {isComplete ? "✓" : index + 1}
                        </span>
                        <span>{item.eyebrow}</span>
                      </button>

                      {index < slides.length - 1 ? (
                        <span aria-hidden="true" className="h-px w-5 bg-white/10" />
                      ) : null}
                    </li>
                  );
                })}
              </ol>
            </nav>
          </header>

          <div
            key={current}
            className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"
            aria-live="polite"
          >
            <GuideVisual visual={slide.visual} />

            <div className="flex h-full flex-col">
              <div>
                <BrandBadge tone="quiet" icon="dot">
                  {slide.eyebrow}
                </BrandBadge>

                <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-[0.98] tracking-[-0.045em] text-ink md:text-4xl">
                  {slide.title}
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-muted md:text-lg">
                  {slide.body}
                </p>

                {slide.bullets?.length ? (
                  <ul className="mt-6 grid gap-3">
                    {slide.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="grid grid-cols-[auto_1fr] gap-3 leading-7 text-muted"
                      >
                        <span aria-hidden="true" className="text-cyan">
                          ◆
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {slide.choices?.length ? (
                  <div className="mt-7 grid gap-3">
                    {slide.choices.map((choice, index) => (
                      <button
                        key={choice.label}
                        type="button"
                        onClick={() => setSelectedChoice(index)}
                        className={`rounded-2xl border p-4 text-left transition ${
                          selectedChoice === index
                            ? "border-cyan bg-cyan/[0.08]"
                            : "border-white/10 bg-white/[0.03] hover:border-cyan/30"
                        }`}
                      >
                        <span className="font-semibold text-ink">{choice.label}</span>
                      </button>
                    ))}

                    {selectedFeedback ? (
                      <div
                        className={`rounded-2xl border p-5 ${
                          selectedFeedback.correct
                            ? "border-cyan/30 bg-cyan/[0.08]"
                            : "border-amber-300/20 bg-amber-300/[0.06]"
                        }`}
                      >
                        <p className="font-lab text-xs font-semibold uppercase tracking-[0.08em] text-cyan">
                          {selectedFeedback.correct
                            ? "Best next step"
                            : "Consider the impact"}
                        </p>
                        <p className="mt-2 leading-7 text-muted">
                          {selectedFeedback.feedback}
                        </p>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>

              <div className="mt-8 flex flex-col gap-3 border-t border-[var(--border)] pt-6 sm:flex-row sm:justify-between lg:mt-auto">
                <button
                  type="button"
                  onClick={() => goTo(current - 1)}
                  disabled={!canGoBack}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-muted transition hover:border-cyan/30 hover:text-cyan disabled:cursor-not-allowed disabled:opacity-35"
                >
                  ← Previous
                </button>

                {canGoForward ? (
                  <button
                    type="button"
                    onClick={() => goTo(current + 1)}
                    className="rounded-2xl border border-cyan bg-cyan px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-night transition hover:-translate-y-0.5"
                  >
                    Next step →
                  </button>
                ) : (
                  <Link
                    href={backHref}
                    className="rounded-2xl border border-cyan bg-cyan px-5 py-4 text-center font-lab text-sm font-semibold uppercase tracking-[0.08em] text-night transition hover:-translate-y-0.5"
                  >
                    Return to work
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center font-lab text-[0.66rem] uppercase tracking-[0.08em] text-muted">
          Use the arrow keys or the progress map to move through the guide.
        </p>
      </div>
    </section>
  );
}
