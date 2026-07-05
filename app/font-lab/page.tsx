import "./font-lab.css";

const pairings = [
  {
    name: "Premium Systems Lab",
    vibe: "Polished, editorial, intelligent, serious-lab-notebook energy.",
    className: "pairing-instrument",
    heading: "Instrument Serif",
    utility: "Iosevka",
  },
  {
    name: "Cozy Maker Lab",
    vibe: "Warm, tactile, creative, and a little handmade without losing structure.",
    className: "pairing-brique",
    heading: "Brique",
    utility: "Monaspace Argon",
  },
  {
    name: "Soft Systems Shelf",
    vibe: "Friendly, grounded, readable, cozy, and still professional.",
    className: "pairing-solway",
    heading: "Solway",
    utility: "Monaspace Argon",
  },
  {
    name: "Futuristic Field Notes",
    vibe: "Sharper, more technical, and cyber-ops adjacent without becoming cliché.",
    className: "pairing-mozilla",
    heading: "Mozilla Headline",
    utility: "Iosevka",
  },
];

export default function FontLabPage() {
  return (
    <main className="font-lab-page">
      <section className="intro-panel">
        <p className="eyebrow">Marquetta’s Lab · Typography Test</p>
        <h1>Font Lab</h1>
        <p>
          Same homepage content, different type systems. We’re looking for the
          one that feels polished, personal, warm, and unmistakably useful.
        </p>
      </section>

      <section className="pairing-grid">
        {pairings.map((pairing) => (
          <article className={`font-card ${pairing.className}`} key={pairing.name}>
            <div className="card-topline">
              <span>{pairing.name}</span>
              <span>
                {pairing.heading} + {pairing.utility}
              </span>
            </div>

            <div className="hero-sample">
              <p className="sample-label">Homepage hero</p>
              <h2>I build systems for messy information.</h2>
              <p className="sample-copy">
                AI workflows. Knowledge hubs. Support tools. Security-minded
                communication. Practical systems that help people find the right
                answer faster.
              </p>

              <div className="tag-row">
                <span>AI Enablement</span>
                <span>Knowledge Systems</span>
                <span>Support Ops</span>
                <span>Security-Aware Comms</span>
              </div>
            </div>

            <div className="project-sample">
              <p className="sample-label">Featured system</p>
              <h3>Aegis</h3>
              <p>
                AI creative intelligence pipeline built to turn competitor pages
                into testable, compliant ad concepts.
              </p>

              <div className="mini-meta">
                <span>Status: shipped</span>
                <span>Tools: Next.js · Gemini · Zod</span>
              </div>
            </div>

            <div className="lab-note">
              <span>Lab note</span>
              <p>{pairing.vibe}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}