import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import "./font-lab.css";

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
    note: "Soft, personal, and elegant. This is the current site signature direction.",
  },
  {
    name: "Water Brush",
    file: "WaterBrush-Regular.woff2",
    className: "font-water-brush",
    note: "Expressive and handmade. Strong personality, but louder at small sizes.",
  },
  {
    name: "Alucky",
    file: "Alucky.otf",
    className: "font-alucky",
    note: "Loose and memorable. Worth testing for personality without losing polish.",
  },
  {
    name: "Adusian Signature",
    file: "Adusian Signature.otf",
    className: "font-adusian",
    note: "A more classic signature option. The question is whether it feels refined or overly formal.",
  },
];

const notebookBodyFonts = [
  {
    name: "Welcome Saturday",
    file: "WelcomeSaturday.otf",
    className: "body-welcome-saturday",
    verdict:
      "The strongest candidate for short handwritten body copy, sticky notes, and commentary.",
  },
  {
    name: "Jackwrite",
    file: "Jackwrite.woff2",
    className: "body-jackwrite",
    verdict:
      "Great for headings and emphatic notes. Potentially tiring for longer paragraphs.",
  },
  {
    name: "Solway",
    file: "Solway-Regular.ttf",
    className: "body-solway",
    verdict:
      "Readable and warm. Less handwritten, but excellent for supporting copy on paper.",
  },
  {
    name: "Instrument Serif",
    file: "InstrumentSerif-Regular.otf",
    className: "body-instrument",
    verdict:
      "Editorial and elegant. Best when the notebook should feel like a designed journal.",
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
    <article className="signature-card">
      <p className="font-file">{file}</p>

      <div className="signature-preview">
        <p className={className}>Marquetta Moore</p>
        <span>AlwaysReady4Moore.com</span>
      </div>

      <h2>{name}</h2>
      <p>{note}</p>
    </article>
  );
}

function BodyFontCard({
  name,
  file,
  className,
  verdict,
}: {
  name: string;
  file: string;
  className: string;
  verdict: string;
}) {
  return (
    <article className="body-font-card">
      <div className="font-card-header">
        <div>
          <p className="font-file">{file}</p>
          <h3>{name}</h3>
        </div>

        <span className="test-label">Notebook body test</span>
      </div>

      <div className={`body-copy-sample ${className}`}>
        <p>
          I build strange little systems because I want to know whether the
          idea still works once it has a real audience, a real workflow, and a
          real constraint.
        </p>

        <p>
          Sometimes the result is a browser game. Sometimes it is an artist
          persona, a teaching guide, or a product system for a tiny 3D-printing
          shop. The format changes. The instinct does not.
        </p>
      </div>

      <div className="font-verdict">
        <span>What to judge</span>
        <p>{verdict}</p>
      </div>
    </article>
  );
}

function NotebookSystemPreview() {
  return (
    <section className="notebook-system">
      <div className="notebook-margin" aria-hidden="true" />

      <div className="notebook-header">
        <div>
          <p className="mono-label">Typography system preview</p>
          <h2 className="body-jackwrite">The Lab</h2>
          <div className="ink-stroke" />
        </div>

        <p className="body-welcome-saturday notebook-intro">
          A place for curiosity to become something real.
        </p>
      </div>

      <div className="notebook-grid">
        <article className="sticky-sample sticky-cyan">
          <span className="paper-tape" />
          <p className="mono-label">Lab principle 01</p>
          <h3 className="body-jackwrite">Play is still evidence.</h3>
          <p className="body-welcome-saturday">
            Fun projects still reveal how I think, package ideas, build
            systems, and learn in public.
          </p>
        </article>

        <article className="project-sheet">
          <p className="mono-label">Featured experiment</p>
          <h3 className="body-jackwrite">Merge the Union</h3>

          <p className="body-welcome-saturday project-copy">
            Vote states off the map. Merge the survivors. Create ridiculous
            mega-states. Argue passionately about geography. Repeat.
          </p>

          <div className="signal-row">
            <span>5 win modes</span>
            <span>Team voting</span>
            <span>Random events</span>
            <span>Save + resume</span>
          </div>

          <a href="#cta-test" className="cta-test">
            <span className="cta-kicker">Featured playable project</span>
            <strong>Play it + read the case study</strong>
            <span aria-hidden="true" className="cta-arrow">
              →
            </span>
          </a>
        </article>
      </div>
    </section>
  );
}

export default function FontLabPage() {
  return (
    <main className="font-lab-page">
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

      <section className="font-lab-shell intro-panel">
        <p className="eyebrow">Font Lab</p>

        <h1>Notebook typography tests.</h1>

        <p>
          We are testing a complete hierarchy, not trying to make every word
          look handwritten. The winner needs to feel authored and personal
          while staying easy to read.
        </p>
      </section>

      <section className="font-lab-shell lab-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Test 01</p>
            <h2>Handwritten body copy.</h2>
          </div>

          <p>
            Best used for short project descriptions, annotations, sticky-note
            copy, and human commentary. Labels and actions stay structured.
          </p>
        </div>

        <div className="body-font-grid">
          {notebookBodyFonts.map((font) => (
            <BodyFontCard key={font.name} {...font} />
          ))}
        </div>
      </section>

      <section className="font-lab-shell lab-section" id="cta-test">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Test 02</p>
            <h2>Put the hierarchy together.</h2>
          </div>

          <p>
            Jackwrite handles expressive headings. Welcome Saturday handles
            short handwritten copy. Monaspace handles metadata, signals, and
            the action language.
          </p>
        </div>

        <NotebookSystemPreview />
      </section>

      <section className="font-lab-shell lab-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Test 03</p>
            <h2>Signature options.</h2>
          </div>

          <p>
            The header signature is a separate decision from the notebook
            handwriting. It should remain readable at navigation size.
          </p>
        </div>

        <div className="signature-grid">
          {signatureFonts.map((font) => (
            <SignatureCard key={font.name} {...font} />
          ))}
        </div>
      </section>
    </main>
  );
}
