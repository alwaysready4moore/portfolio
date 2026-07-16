"use client";

import Link from "next/link";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import styles from "./launchpad.module.css";

const flows = [
  {
    number: "01",
    title: "Assessment",
    summary:
      "Compares a target role with the user’s real profile, assigns a 1–5 readiness score, classifies every gap, and creates the first daily task.",
  },
  {
    number: "02",
    title: "Progress update",
    summary:
      "Logs completed or missed work, updates the streak and score history, then chooses the next highest-leverage task.",
  },
  {
    number: "03",
    title: "Materials + content",
    summary:
      "Strengthens resumes, LinkedIn profiles, portfolio writing, and thought leadership against the target role.",
  },
  {
    number: "04",
    title: "Momentum check-in",
    summary:
      "Responds to discouragement with an honest inventory, a grounded diagnosis, and one deliberately small visible win.",
  },
];

const gapTypes = [
  {
    label: "Skill",
    question: "Can they actually do the work?",
    fix: "Practice, training, or direct experience",
    tone: "blue",
  },
  {
    label: "Proof",
    question: "Can they prove they can do it?",
    fix: "A visible artifact, case study, or result",
    tone: "gold",
  },
  {
    label: "Language",
    question: "Are they describing it in the right terms?",
    fix: "Stronger framing and role-aligned vocabulary",
    tone: "gray",
  },
  {
    label: "Positioning",
    question: "Does the full story make sense for the role?",
    fix: "A clearer narrative connecting the evidence",
    tone: "violet",
  },
];

const technicalDetails = [
  "Packaged as SKILL.md plus four focused reference files",
  "Self-contained HTML, CSS, and JavaScript artifact",
  "No database or external runtime dependency",
  "Persistent career goals, completed days, rest days, score history, and content pipeline",
  "Configurable rest days that do not break the streak",
  "Conditional rendering for empty score-history and content-pipeline states",
  "HTML escaping applied to user-supplied values written into the artifact",
];

const versionChanges = [
  "Added discouragement and momentum check-in flow",
  "Expanded materials flow to support thought-leadership content",
  "Added task preview before full task assignment",
  "Added dated readiness score history",
  "Added tracked content pipeline",
];

function CommandCenterDemo() {
  const [activeTab, setActiveTab] = useState<
    "today" | "gaps" | "roadmap" | "pipeline"
  >("today");

  return (
    <div className={styles.demoShell}>
      <div className={styles.demoHeader}>
        <div>
          <p className={styles.demoBrand}>Launchpad</p>
          <h3>Creative Technologist</h3>
          <span>Target role · Remote</span>
        </div>

        <div className={styles.scoreBlock}>
          <strong>4</strong>
          <span>/5</span>
          <p>Viable with focused proof-building</p>
        </div>
      </div>

      <div className={styles.demoTabs}>
        {[
          ["today", "Today"],
          ["gaps", "Gap map"],
          ["roadmap", "Roadmap"],
          ["pipeline", "Content"],
        ].map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() =>
              setActiveTab(id as "today" | "gaps" | "roadmap" | "pipeline")
            }
            className={activeTab === id ? styles.activeTab : undefined}
          >
            {label}
          </button>
        ))}
      </div>

      {activeTab === "today" ? (
        <div className={styles.demoGrid}>
          <article className={styles.demoCard}>
            <p className={styles.demoLabel}>Today’s task</p>
            <h4>Publish the Launchpad case study</h4>
            <div className={styles.demoTags}>
              <span>~45 min</span>
              <span>Proof gap</span>
              <span>3-month goal</span>
            </div>
            <p>
              Turn the working Claude skill into visible evidence of AI workflow
              design, persistent state, and product judgment.
            </p>
            <small>
              Done when: the public case study explains the system and links to
              the downloadable skill.
            </small>
          </article>

          <article className={styles.streakCard}>
            <p className={styles.demoLabel}>Streak</p>
            <div className={styles.streakNumber}>8</div>
            <p>days of visible career-building work</p>

            <div className={styles.calendar}>
              {Array.from({ length: 21 }).map((_, index) => (
                <span
                  key={index}
                  className={
                    index < 8
                      ? styles.dayDone
                      : index === 12 || index === 13
                        ? styles.dayRest
                        : undefined
                  }
                />
              ))}
            </div>
          </article>

          <article className={`${styles.demoCard} ${styles.fullCard}`}>
            <p className={styles.demoLabel}>Nearest goals</p>
            <div className={styles.goalRow}>
              <span>3 months</span>
              <p>Ship two AI-system case studies and sharpen positioning.</p>
            </div>
            <div className={styles.goalRow}>
              <span>6 months</span>
              <p>Apply consistently to Creative Technologist-adjacent roles.</p>
            </div>
            <div className={styles.goalRow}>
              <span>12 months</span>
              <p>Land a role combining AI systems, content, and interaction.</p>
            </div>
          </article>
        </div>
      ) : null}

      {activeTab === "gaps" ? (
        <div className={styles.gapDemo}>
          {gapTypes.map((gap) => (
            <article key={gap.label} className={styles.demoCard}>
              <p className={`${styles.gapBadge} ${styles[`gap_${gap.tone}`]}`}>
                {gap.label}
              </p>
              <h4>{gap.question}</h4>
              <p>{gap.fix}</p>
            </article>
          ))}
        </div>
      ) : null}

      {activeTab === "roadmap" ? (
        <div className={styles.roadmap}>
          {[
            ["30 days", "Refine positioning and ship the first proof artifact."],
            ["60 days", "Publish supporting content and deepen role-specific evidence."],
            ["90+ days", "Apply with a stronger narrative, portfolio, and interview stories."],
          ].map(([period, body]) => (
            <article key={period}>
              <span>{period}</span>
              <p>{body}</p>
            </article>
          ))}
        </div>
      ) : null}

      {activeTab === "pipeline" ? (
        <div className={styles.pipeline}>
          {[
            ["Launchpad case study", "Case study", "Live"],
            ["AI workflows article", "Article", "Drafted"],
            ["Career systems post", "LinkedIn post", "Published"],
          ].map(([title, type, status]) => (
            <article key={title}>
              <span
                className={
                  status === "Live"
                    ? styles.statusLive
                    : status === "Published"
                      ? styles.statusPublished
                      : styles.statusDrafted
                }
              >
                {status}
              </span>
              <div>
                <h4>{title}</h4>
                <p>{type}</p>
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function LaunchpadPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <section className={styles.hero}>
        <Link href="/work" className={styles.backLink}>
          ← Back to Work
        </Link>

        <div className={styles.heroGrid}>
          <div>
            <div className={styles.eyebrowRow}>
              <span>AI workflow system</span>
              <span>Custom Claude skill</span>
              <span>Active · v2.0</span>
            </div>

            <h1>Launchpad</h1>

            <p className={styles.heroLead}>
              A career-readiness system that turns “Am I qualified?” into a
              grounded score, a classified gap map, and one concrete task at a
              time.
            </p>

            <p className={styles.heroBody}>
              I built Launchpad as a custom Claude skill in Cowork. It assesses
              readiness for a target role, separates missing capability from
              missing proof or weak positioning, and maintains a persistent
              command-center artifact across sessions.
            </p>

            <div className={styles.heroActions}>
              <a
                href="/work/launchpad/launchpad-v2.skill"
                className={styles.primaryButton}
                download
              >
                Download the Claude skill
              </a>

              <a
                href="/work/launchpad/launchpad-guide.pdf"
                target="_blank"
                rel="noreferrer"
                className={styles.secondaryButton}
              >
                Read the product guide ↗
              </a>
            </div>
          </div>

          <aside className={styles.heroAside}>
            <div className={styles.launchMark} aria-hidden="true">
              <div className={styles.rocket}>↑</div>
              <div className={styles.orbit} />
            </div>

            <p className={styles.asideLabel}>What it changes</p>
            <p>
              Generic career advice becomes a persistent system with explicit
              evaluation rules, sequenced proof-building, and continuity across
              sessions.
            </p>
          </aside>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div>
            <p>Live system preview</p>
            <h2>The artifact is part coach, part dashboard, part memory.</h2>
          </div>

          <p>
            Launchpad does not end after producing advice. It creates and
            updates a self-contained command center that carries goals, tasks,
            score history, streak data, and proof-building work forward.
          </p>
        </div>

        <CommandCenterDemo />
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div>
            <p>System model</p>
            <h2>Four flows cover the full loop.</h2>
          </div>

          <p>
            The skill detects the user’s intent before choosing an output
            structure. Assessment, execution, material improvement, and
            emotional momentum are treated as different system states.
          </p>
        </div>

        <div className={styles.flowGrid}>
          {flows.map((flow) => (
            <article key={flow.number}>
              <span>{flow.number}</span>
              <h3>{flow.title}</h3>
              <p>{flow.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.frameworkSection}>
        <div className={styles.frameworkIntro}>
          <p>Core framework</p>
          <h2>Not every career gap needs the same fix.</h2>
          <p>
            Launchpad separates four gap types so the user does not waste time
            taking a course when the actual problem is proof, language, or
            positioning.
          </p>
        </div>

        <div className={styles.frameworkGrid}>
          {gapTypes.map((gap) => (
            <article key={gap.label}>
              <span className={styles[`framework_${gap.tone}`]}>
                {gap.label}
              </span>
              <h3>{gap.question}</h3>
              <p>{gap.fix}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.splitSection}>
          <div>
            <p className={styles.smallKicker}>Product judgment</p>
            <h2>Honesty without a dead end.</h2>

            <div className={styles.principleList}>
              <article>
                <h3>A score of 3 is useful information.</h3>
                <p>
                  The system does not inflate readiness to encourage the user.
                  It explains the score and defines what would move it.
                </p>
              </article>

              <article>
                <h3>One daily task beats a motivational avalanche.</h3>
                <p>
                  Work is prioritized by goal proximity, leverage, energy, and
                  whether momentum matters more than intensity that day.
                </p>
              </article>

              <article>
                <h3>Rest is modeled, not punished.</h3>
                <p>
                  Users choose their own rest days. A missed task on a scheduled
                  rest day never breaks the streak.
                </p>
              </article>

              <article>
                <h3>Discouragement is a system state.</h3>
                <p>
                  The fourth flow inventories real progress, distinguishes a
                  perception gap from a genuine plateau, and assigns one small
                  visible win.
                </p>
              </article>
            </div>
          </div>

          <aside className={styles.outputPanel}>
            <p className={styles.smallKicker}>Initial assessment output</p>
            <strong>17 required sections</strong>
            <p>
              The system covers role requirements, inputs, score rationale,
              strengths, four gap categories, next steps, 30/60/90 plans,
              portfolio builds, material changes, weekly focus, score
              milestones, and the first daily task.
            </p>

            <div className={styles.outputStats}>
              <span>
                <strong>8</strong>
                progress-update sections
              </span>
              <span>
                <strong>5</strong>
                content-review sections
              </span>
              <span>
                <strong>5</strong>
                discouragement sections
              </span>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.technicalSection}>
        <div className={styles.technicalCopy}>
          <p>Implementation</p>
          <h2>Persistent without a database.</h2>
          <p>
            The generated command center is a self-contained HTML artifact.
            Structured JavaScript objects embedded in the file preserve the
            state Claude needs to read and update later.
          </p>
        </div>

        <ul>
          {technicalDetails.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <div className={styles.versionGrid}>
          <div>
            <p className={styles.smallKicker}>Iteration</p>
            <h2>Version 2 closed the human gaps.</h2>
            <p>
              The first version handled assessment, progress, materials,
              streaks, goals, and a portfolio queue. Version 2 made the system
              more adaptive, more emotionally grounded, and better at treating
              published content as career proof.
            </p>
          </div>

          <div className={styles.versionCard}>
            <div className={styles.versionHeader}>
              <span>v1.0</span>
              <span>→</span>
              <strong>v2.0</strong>
            </div>

            <ul>
              {versionChanges.map((change) => (
                <li key={change}>{change}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.closingSection}>
        <p>What this proves</p>
        <h2>
          I can turn a fuzzy human problem into a structured AI system with
          rules, memory, interface, documentation, and iteration.
        </h2>

        <div>
          <a
            href="/work/launchpad/launchpad-v2.skill"
            className={styles.primaryButton}
            download
          >
            Download Launchpad
          </a>
          <Link href="/work" className={styles.secondaryButton}>
            Return to Work
          </Link>
        </div>
      </section>
    </main>
  );
}
