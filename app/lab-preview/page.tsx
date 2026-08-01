import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { labExperiments } from "@/data/labExperiments";
import styles from "./lab-preview.module.css";

export const metadata: Metadata = {
  title: "Lab Preview",
  description: "Notebook-inspired preview of the AlwaysReady4Moore creative Lab.",
  robots: { index: false, follow: false },
};

const principles = [
  ["01", "Play is still evidence.", "Fun projects still reveal how I think, package ideas, build systems, and learn in public.", "cyan"],
  ["02", "Make the weird thing real.", "Ideas get easier to judge once they have an audience, a workflow, a prototype, or a URL.", "lavender"],
  ["03", "Build first. Learn fast.", "The fun starts getting useful when imagination meets a real constraint.", "gold"],
] as const;

const archiveItems = [
  ["ChartFinder", "A Chrome extension experiment for faster support workflows."],
  ["The Nurses Get the Short Rib", "A visual novel and narrative-systems project in development."],
  ["Rooted", "A game concept built around world systems and relationships."],
  ["More experiments", "Prompt systems, tiny tools, and odd ideas still becoming artifacts."],
] as const;

function Tag({ children, tone = "cyan" }: { children: React.ReactNode; tone?: "cyan" | "lavender" | "mint" | "gold" | "neutral" }) {
  return <span className={`${styles.tag} ${styles[`tag_${tone}`]}`}>{children}</span>;
}

function SideTabs() {
  return (
    <div className={styles.sideTabs} aria-hidden="true">
      {[
        ["Playable", "cyan"],
        ["Creative worlds", "pink"],
        ["Maker systems", "gold"],
        ["In progress", "green"],
        ["Archive", "lavender"],
      ].map(([label, tone]) => (
        <span key={label} className={`${styles.sideTab} ${styles[`sideTab_${tone}`]}`}>{label}</span>
      ))}
    </div>
  );
}

function PrincipleNote({ number, title, note, tone }: { number: string; title: string; note: string; tone: string }) {
  return (
    <article className={`${styles.stickyNote} ${styles[`sticky_${tone}`]}`}>
      <span className={styles.tape} aria-hidden="true" />
      <p className={styles.noteNumber}>{number}</p>
      <h3>{title}</h3>
      <p>{note}</p>
    </article>
  );
}

function MergeFeature() {
  return (
    <article className={styles.mergeFeature}>
      <span className={`${styles.projectTape} ${styles.projectTapeMerge}`} aria-hidden="true" />
      <div className={styles.mergeCopy}>
        <div className={styles.projectMeta}>
          <span className={styles.projectNumber}>01</span>
          <Tag>Featured experiment</Tag>
        </div>
        <h2>Merge the Union</h2>
        <p className={styles.projectType}>Playable browser game + team icebreaker</p>
        <p className={`${styles.projectDescription} ${styles.handwrittenBody}`}>
          Vote states off the map. Merge the survivors. Create ridiculous mega-states.
          Argue passionately about geography. Repeat.
        </p>
        <div className={styles.featureSignals}>
          <span>5 win modes</span><span>Team voting</span><span>Random events</span><span>Save + resume</span>
        </div>
        <Link href="/lab/merge-the-union" className={styles.primaryAction}>
          Play it and read the case study →
        </Link>
      </div>
      <div className={styles.mergeVisual}>
        <div className={styles.polaroid}>
          <img src="/lab/merge-the-union/logo.png" alt="Merge the Union logo" />
        </div>
        <div className={styles.yellowNote}><strong>Chaos is a feature.</strong></div>
        <div className={styles.doodleArrow} aria-hidden="true">↙</div>
      </div>
    </article>
  );
}

function DamaliCard() {
  return (
    <Link href="/lab/damali-street" className={styles.projectCardLink}>
      <article className={`${styles.projectCard} ${styles.damaliCard}`}>
        <span className={`${styles.projectTape} ${styles.projectTapeDamali}`} aria-hidden="true" />
        <div className={styles.projectMeta}>
          <span className={styles.projectNumber}>02</span>
          <Tag tone="lavender">Creative world</Tag>
        </div>
        <h3>Damali Street</h3>
        <p className={styles.projectType}>Artist project + identity system</p>
        <div className={styles.damaliVisual}>
          <img
            src="/damali/damali-promo.png"
            alt="Damali Street Solar Psychosis promotional artwork"
            className={styles.damaliPromo}
          />
        </div>
        <ul className={styles.handwrittenList}>
          <li>Two album eras with distinct visual systems</li>
          <li>Original songs and lyrical direction</li>
          <li>Reels, promo, branding, and press</li>
          <li>AI-assisted creative workflows</li>
        </ul>
        <span className={styles.cardAction}>Explore the world →</span>
      </article>
    </Link>
  );
}

function MakerCard() {
  const maker = labExperiments.find((experiment) => experiment.title === "Moore Family Print Shop");
  if (!maker) return null;
  const href = "href" in maker ? maker.href : "/lab";

  return (
    <Link href={href} className={styles.projectCardLink}>
      <article className={`${styles.projectCard} ${styles.makerCard}`}>
        <span className={`${styles.projectTape} ${styles.projectTapeMaker}`} aria-hidden="true" />
        <div className={styles.projectMeta}>
          <span className={styles.projectNumber}>03</span>
          <Tag tone="gold">Maker system</Tag>
        </div>
        <h3>Moore Family Print Shop</h3>
        <p className={styles.projectType}>3D print shop + product systems lab</p>
        <div className={styles.makerVisual}>
          <img
            src="/lab/moore-family-print-shop/moore-family-print-shop-logo.png"
            alt="Moore Family Print Shop logo"
            className={styles.makerLogo}
          />
        </div>
        <ul className={styles.handwrittenList}>{maker.methods.slice(0, 5).map((item) => <li key={item}>{item}</li>)}</ul>
        <span className={styles.cardAction}>See the systems →</span>
      </article>
    </Link>
  );
}

export default function LabPreviewPage() {
  return (
    <main className={styles.previewPage}>
      <SiteHeader />
      <section className={styles.previewShell}>
        <div className={styles.browserFrame}>
          <div className={styles.browserChrome}>
            <div className={styles.browserDots} aria-hidden="true"><span /><span /><span /></div>
            <p>AlwaysReady4Moore · The Lab</p>
            <span className={styles.previewBadge}>Preview</span>
          </div>

          <div className={styles.notebookWrap}>
            <div className={styles.notebookCover} aria-hidden="true" />
            <div className={styles.spiral} aria-hidden="true">
              {Array.from({ length: 20 }).map((_, index) => <span key={index} />)}
            </div>
            <SideTabs />

            <div className={styles.openNotebook}>
              <section className={`${styles.notebookPage} ${styles.leftPage}`}>
                <div className={styles.redMargin} aria-hidden="true" />

                <div className={styles.pageIntro}>
                  <div>
                    <p className={styles.kicker}>Experiment log · 07 / 2026</p>
                    <h1>The Lab</h1>
                    <div className={styles.inkUnderline} />
                  </div>
                  <div className={styles.introCallout}>
                    A place for curiosity to become something real.
                  </div>
                </div>

                <p className={`${styles.introCopy} ${styles.handwrittenBody}`}>
                  Experiments, creative worlds, prototypes, tools, and small-business systems
                  I build because I want them to exist.
                </p>

                <div className={styles.leftPageGrid}>
                  <aside className={styles.principlesColumn}>
                    <div className={styles.sectionLabel}>Lab principles</div>
                    <div className={styles.principlesStack}>
                      {principles.map(([number, title, note, tone]) => (
                        <PrincipleNote key={number} number={number} title={title} note={note} tone={tone} />
                      ))}
                    </div>

                    <div className={styles.toolsList}>
                      <p className={styles.sectionLabel}>Tools I live in</p>
                      <div>
                        {["ChatGPT","Gemini","Suno","Notion","VS Code","Bambu Studio","ElevenLabs","GitHub"]
                          .map((tool) => <span key={tool}>• {tool}</span>)}
                      </div>
                    </div>
                  </aside>

                  <div className={styles.leftPageMain}><MergeFeature /></div>
                </div>
              </section>

              <section className={`${styles.notebookPage} ${styles.rightPage}`}>
                <div className={styles.redMargin} aria-hidden="true" />

                <div className={styles.rightPageTop}>
                  <p>Playground for ideas, side quests, weird experiments, and systems that started with “what if?”</p>
                  <div className={styles.currentMood}>
                    <span>Current mood:</span>
                    <strong>coffee · music · side quests</strong>
                    <em>build → break → learn → repeat</em>
                  </div>
                </div>

                <div className={styles.projectPair}><DamaliCard /><MakerCard /></div>

                <div className={styles.archiveSection}>
                  <div className={styles.archiveHeading}>
                    <Tag tone="neutral">Work in progress</Tag>
                    <h2>More experiments in the notebook</h2>
                  </div>
                  <div className={styles.archiveGrid}>
                    {archiveItems.map(([title, body], index) => (
                      <article key={title} className={`${styles.archiveNote} ${index % 2 === 0 ? styles.archiveTiltLeft : styles.archiveTiltRight}`}>
                        <span className={styles.miniClip} aria-hidden="true" />
                        <h3>{title}</h3><p>{body}</p>
                      </article>
                    ))}
                  </div>
                </div>

                <div className={styles.closingNote}>
                  <p>Some experiments stay small. The good ones grow.</p>
                  <strong>Ideas become artifacts.</strong>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
