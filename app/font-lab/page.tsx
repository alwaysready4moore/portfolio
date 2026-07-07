import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Font Lab | AlwaysReady4Moore",
  robots: {
    index: false,
    follow: false,
  },
};

const signatureFonts = [
  {
    name: "Current Signature",
    file: "Ms Madi",
    className: "font-current-signature",
    note: "Soft, personal, elegant. This is the current site signature direction.",
  },
  {
    name: "Water Brush",
    file: "WaterBrush-Regular.woff2",
    className: "font-water-brush",
    note: "Expressive, brushy, more handmade. It has personality, but may feel louder.",
  },
  {
    name: "Alucky",
    file: "Alucky.otf",
    className: "font-alucky",
    note: "Testing for personality, readability, and whether it feels polished enough for the header.",
  },
  {
    name: "Adusian Signature",
    file: "Adusian Signature.otf",
    className: "font-adusian",
    note: "Testing as a more classic signature option. The question is whether it feels refined or too formal.",
  },
];

function SignatureCard({
  name,
  file,
  className,
  note,
}: {
  name: string;
  file: string;
  className: string;
  note: string;
}) {
  return (
    <article className="paper-card p-6">
      <p className="lab-label text-cyan">{file}</p>

      <div className="mt-6 rounded-3xl border border-[var(--border)] bg-night p-6">
        <p className={`${className} text-6xl leading-none text-ink md:text-7xl`}>
          Marquetta Moore
        </p>

        <p className="mt-2 font-lab text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-cyan">
          AlwaysReady4Moore.com
        </p>
      </div>

      <h2 className="mt-6 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {name}
      </h2>

      <p className="mt-4 leading-7 text-muted">{note}</p>
    </article>
  );
}

export default function FontLabPage() {
  return (
    <main className="pb-16">
      <style>{`
        @font-face {
          font-family: "Water Brush Test";
          src: url("/fonts/WaterBrush-Regular.woff2") format("woff2");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Alucky Test";
          src: url("/fonts/Alucky.otf") format("opentype");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Adusian Signature Test";
          src: url("/fonts/Adusian%20Signature.otf") format("opentype");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        .font-current-signature {
          font-family: "Ms Madi Local", cursive;
        }

        .font-water-brush {
          font-family: "Water Brush Test", cursive;
        }

        .font-alucky {
          font-family: "Alucky Test", cursive;
        }

        .font-adusian {
          font-family: "Adusian Signature Test", cursive;
        }
      `}</style>

      <SiteHeader />

      <section className="lab-shell pt-10">
        <p className="lab-label text-cyan">Font Lab</p>

        <div className="mt-5 grid gap-8 lg:grid-cols-[0.95fr_0.6fr] lg:items-end">
          <div>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
              Signature tests.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              A quick side-by-side test for the site signature. We’re looking
              for something personal and memorable without making the whole
              header feel too precious or hard to read.
            </p>
          </div>

          <aside className="paper-card p-6">
            <p className="lab-label text-cyan">What to judge</p>
            <p className="mt-4 leading-7 text-muted">
              Readability first, then personality. The best option should feel
              like you, work at small header size, and still look polished beside
              the systems-lab UI.
            </p>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="grid gap-5 lg:grid-cols-2">
          {signatureFonts.map((font) => (
            <SignatureCard
              key={font.name}
              name={font.name}
              file={font.file}
              className={font.className}
              note={font.note}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-note p-7 md:p-9">
          <p className="field-heading text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            The winner should feel handwritten, but not like the website put on
            perfume and forgot it had work to do.
          </p>
        </div>
      </section>
    </main>
  );
}