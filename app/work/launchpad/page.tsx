"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import styles from "./launchpad.module.css";

type DemoTab = "today" | "gaps" | "roadmap" | "pipeline";

const flows = [
  {
    number: "01",
    icon: "◎",
    title: "Assess",
    summary:
      "Compare the target role with the user’s evidence, score readiness, and assign the first useful task.",
  },
  {
    number: "02",
    icon: "↗",
    title: "Advance",
    summary:
      "Record completed or missed work, update progress, and choose the next high-value action.",
  },
  {
    number: "03",
    icon: "✦",
    title: "Build proof",
    summary:
      "Improve the résumé, LinkedIn profile, portfolio, and public writing against the target role.",
  },
  {
    number: "04",
    icon: "◌",
    title: "Protect momentum",
    summary:
      "Review what changed, separate a setback from a plateau, and assign one small, visible win.",
  },
];

const gapTypes = [
  {
    label: "Skill",
    question: "Can they do the work?",
    fix: "Practice, training, or direct experience",
    tone: "blue",
  },
  {
    label: "Proof",
    question: "Can they prove it?",
    fix: "A visible artifact, case study, or result",
    tone: "gold",
  },
  {
    label: "Language",
    question: "Can they explain it?",
    fix: "Stronger framing and role-aligned vocabulary",
    tone: "gray",
  },
  {
    label: "Positioning",
    question: "Does the full story make sense?",
    fix: "A clearer narrative connecting the evidence",
    tone: "violet",
  },
];

const principles = [
  {
    title: "Honesty without a dead end",
    body: "Launchpad uses an honest score, explains it, and shows what would improve it.",
  },
  {
    title: "One task, not an avalanche",
    body: "Launchpad ranks work by goal, value, available energy, and the need to rebuild momentum.",
  },
  {
    title: "Rest is part of the model",
    body: "Users choose their rest days. Scheduled rest does not break a streak or count as missed work.",
  },
  {
    title: "Discouragement changes the route",
    body: "The system reviews completed work, checks for a real plateau, and assigns one visible win.",
  },
];

const architecture = [
  ["01", "User context", "Goals, target role, evidence, constraints"],
  ["02", "Launchpad skill", "Rules, routing, scoring, task logic"],
  ["03", "Command center", "Self-contained HTML, CSS, and JavaScript"],
  ["04", "Persistent state", "Goals, streaks, score history, pipeline"],
  ["05", "Next session", "Claude reads state and continues the system"],
];

const versionChanges = [
  "Escaped variable content before DOM insertion",
  "Blocked javascript: URLs and whitelisted status values",
  "Clarified closing-script injection guidance",
  "Fixed Flow 4 priority when discouragement and missed work overlap",
  "Added SCORE_HISTORY migration support for v1 artifacts",
  "Clarified CONTENT_PIPELINE versus COMPLETED_DAYS",
  "Added half-score labels and cleaned stale Flow 3 naming",
];

const productFeatures = [
  "Gap classification",
  "Daily task engine",
  "Progress memory",
  "Score history",
  "Portfolio builder",
];

function CommandCenterDemo() {
  const [activeTab, setActiveTab] = useState<DemoTab>("today");

  const tabs: Array<[DemoTab, string]> = [
    ["today", "Today"],
    ["gaps", "Gap map"],
    ["roadmap", "Roadmap"],
    ["pipeline", "Content"],
  ];

  return (
    <div className={styles.appWindow}>
      <div className={styles.windowBar}>
        <div className={styles.windowDots} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p>Launchpad command center</p>
        <span className={styles.windowStatus}>Synced</span>
      </div>

      <div className={styles.appLayout}>
        <aside className={styles.appSidebar}>
          <Image
            src="/logos/launchpad-logo.png"
            alt=""
            width={52}
            height={52}
            className={styles.sidebarLogo}
          />
          <p className={styles.sidebarTitle}>Launchpad</p>
          <span className={styles.sidebarRole}>Creative technologist</span>

          <nav aria-label="Launchpad preview navigation">
            {tabs.map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                className={activeTab === id ? styles.activeNav : undefined}
              >
                <span aria-hidden="true">{id === "today" ? "●" : "○"}</span>
                {label}
              </button>
            ))}
          </nav>

          <div className={styles.sidebarFoot}>
            <span>Claude-native</span>
            <span>No database</span>
          </div>
        </aside>

        <div className={styles.appMain}>
          <div className={styles.appTopline}>
            <div>
              <p className={styles.demoKicker}>Target role · Remote</p>
              <h3>Creative technologist</h3>
            </div>
            <div className={styles.scorePill}>
              <strong>4</strong>
              <span>/5</span>
              <p>Focused proof-building</p>
            </div>
          </div>

          {activeTab === "today" ? (
            <div className={styles.todayGrid}>
              <article className={styles.taskCard}>
                <p className={styles.demoKicker}>Today’s task</p>
                <h4>Publish the Launchpad case study</h4>
                <div className={styles.demoTags}>
                  <span>~45 min</span>
                  <span>Proof gap</span>
                  <span>3-month goal</span>
                </div>
                <p>
                  Publish the working Claude skill as evidence of AI workflow
                  design, persistent state, and product judgment.
                </p>
                <small>
                  Done when the public case study explains the system and links
                  to the downloadable skill.
                </small>
              </article>

              <article className={styles.streakCard}>
                <p className={styles.demoKicker}>Momentum</p>
                <div className={styles.streakNumber}>8</div>
                <p>days of visible career-building work</p>
                <div className={styles.calendar} aria-label="Eight-day streak">
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

              <article className={styles.goalsCard}>
                <p className={styles.demoKicker}>Nearest goals</p>
                {[
                  ["3 months", "Ship two AI-system case studies and sharpen positioning."],
                  ["6 months", "Apply consistently to Creative Technologist-adjacent roles."],
                  ["12 months", "Land a role combining AI systems, content, and interaction."],
                ].map(([period, body]) => (
                  <div className={styles.goalRow} key={period}>
                    <span>{period}</span>
                    <p>{body}</p>
                  </div>
                ))}
              </article>
            </div>
          ) : null}

          {activeTab === "gaps" ? (
            <div className={styles.gapDemo}>
              {gapTypes.map((gap) => (
                <article key={gap.label}>
                  <span className={`${styles.gapBadge} ${styles[`gap_${gap.tone}`]}`}>
                    {gap.label}
                  </span>
                  <h4>{gap.question}</h4>
                  <p>{gap.fix}</p>
                </article>
              ))}
            </div>
          ) : null}

          {activeTab === "roadmap" ? (
            <div className={styles.roadmapDemo}>
              {[
                ["30 days", "Refine positioning and ship the first proof artifact."],
                ["60 days", "Publish supporting content and deepen role-specific evidence."],
                ["90+ days", "Apply with a stronger narrative, portfolio, and interview stories."],
              ].map(([period, body], index) => (
                <article key={period}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p>{period}</p>
                    <h4>{body}</h4>
                  </div>
                </article>
              ))}
            </div>
          ) : null}

          {activeTab === "pipeline" ? (
            <div className={styles.pipelineDemo}>
              {[
                ["Launchpad case study", "Case study", "Live"],
                ["AI workflows article", "Article", "Drafted"],
                ["Career systems post", "LinkedIn post", "Published"],
              ].map(([title, type, status]) => (
                <article key={title}>
                  <span className={styles[`status${status}`]}>{status}</span>
                  <div>
                    <h4>{title}</h4>
                    <p>{type}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function LaunchpadPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <section className={styles.hero}>
        <Link href="/work" className={styles.backLink}>
          ← Back to work
        </Link>

        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <div className={styles.eyebrowRow}>
              <span>AI workflow system</span>
              <span>Custom Claude skill</span>
              <span>Active · v2.1</span>
            </div>

            <Image
              src="/logos/launchpad-wordmark.png"
              alt="Launchpad"
              width={760}
              height={250}
              priority
              className={styles.wordmark}
            />

            <p className={styles.heroLead}>
              A career-readiness system with a score, a plan, and a memory.
            </p>

            <p className={styles.heroBody}>
              Launchpad answers “Am I qualified?” with a readiness score, a gap
              map, and one task at a time. It keeps goals, evidence, and progress
              across sessions.
            </p>

            <div className={styles.heroActions}>
              <a
                href="/work/launchpad/launchpad-v2.1.skill"
                className={styles.primaryButton}
                download
              >
                Download the Claude skill
              </a>
              <a
                href="/work/launchpad/launchpad-v2.1-guide.pdf"
                target="_blank"
                rel="noreferrer"
                className={styles.secondaryButton}
              >
                Read the product guide ↗
              </a>
            </div>
          </div>

          <aside className={styles.productCard}>
            <div className={styles.productGlow} aria-hidden="true" />
            <Image
              src="/logos/launchpad-logo.png"
              alt="Launchpad rocket logo"
              width={150}
              height={150}
              className={styles.productLogo}
            />
            <p className={styles.productType}>AI career operating system</p>
            <h2>Ready for launch</h2>
            <p className={styles.productDescription}>
              Career guidance that records progress, prioritizes the next task,
              and builds evidence over time.
            </p>
            <div className={styles.ratingRow}>
              <span>★★★★</span><span>☆</span><small>v2.1</small>
            </div>
            <ul>
              {productFeatures.map((feature) => (
                <li key={feature}><span>✓</span>{feature}</li>
              ))}
            </ul>
            <div className={styles.productMeta}>
              <span>Claude-native</span>
              <span>Persistent</span>
              <span>No database</span>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div>
            <p>Live system preview</p>
            <h2>A command center that keeps the plan</h2>
          </div>
          <p>
            Launchpad updates a command center with goals, tasks, score history,
            streaks, and evidence. Each session starts with the current plan.
          </p>
        </div>
        <CommandCenterDemo />
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div>
            <p>System model</p>
            <h2>Four flows manage the work</h2>
          </div>
          <p>
            The system handles assessment, daily work, portfolio improvement, and
            lost momentum as separate states with separate rules.
          </p>
        </div>

        <div className={styles.flowGrid}>
          {flows.map((flow, index) => (
            <article key={flow.number}>
              <div className={styles.flowTopline}>
                <span className={styles.flowIcon}>{flow.icon}</span>
                <span className={styles.flowNumber}>{flow.number}</span>
              </div>
              <h3>{flow.title}</h3>
              <p>{flow.summary}</p>
              {index < flows.length - 1 ? <span className={styles.flowArrow}>→</span> : null}
            </article>
          ))}
        </div>
      </section>

      <section className={styles.gapSection}>
        <div className={styles.gapIntro}>
          <p>Core framework</p>
          <h2>Match each gap to the right fix</h2>
          <p>
            Launchpad separates skill, proof, language, and positioning so the
            user works on the actual gap.
          </p>
        </div>

        <div className={styles.gapGrid}>
          {gapTypes.map((gap, index) => (
            <article key={gap.label}>
              <span className={`${styles.gapIndex} ${styles[`gap_${gap.tone}`]}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <p>{gap.label}</p>
              <h3>{gap.question}</h3>
              <span className={styles.gapFix}>{gap.fix}</span>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.designGrid}>
          <div>
            <p className={styles.kicker}>Design principles</p>
            <h2>Give honest guidance without burying the user</h2>
          </div>

          <div className={styles.principleList}>
            {principles.map((principle, index) => (
              <article key={principle.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.outputStrip}>
          <div>
            <span>17</span>
            <p>initial assessment sections</p>
          </div>
          <div>
            <span>8</span>
            <p>progress update sections</p>
          </div>
          <div>
            <span>5</span>
            <p>content review sections</p>
          </div>
          <div>
            <span>5</span>
            <p>momentum check-in sections</p>
          </div>
        </div>
      </section>

      <section className={styles.architectureSection}>
        <div className={styles.architectureCopy}>
          <p>Implementation</p>
          <h2>Keep state without a database</h2>
          <p>
            The command center is a self-contained HTML file. JavaScript objects
            store the goals, history, and pipeline that Claude reads in the next
            session.
          </p>
        </div>

        <div className={styles.architectureFlow}>
          {architecture.map(([number, title, body], index) => (
            <article key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
              {index < architecture.length - 1 ? <b aria-hidden="true">↓</b> : null}
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.changelogGrid}>
          <div>
            <p className={styles.kicker}>Changelog</p>
            <h2>Version 2.1 fixed security and routing issues</h2>
            <p>
              Version 2 improved task routing and momentum support. Version 2.1
              added safer rendering, migration logic, clearer routing, and
              half-score support after a security and scope review.
            </p>
          </div>

          <div className={styles.changelogCard}>
            <div className={styles.versionRail}>
              <span>v2.1</span>
              <b />
              <span>v2.0</span>
              <b />
              <span>v1.0</span>
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
        <Image
          src="/logos/launchpad-logo.png"
          alt=""
          width={120}
          height={120}
          className={styles.closingLogo}
        />
        <p>What I built</p>
        <h2>
          I can define the rules, state, interface, documentation, and review
          points for an AI workflow
        </h2>
        <div>
          <a
            href="/work/launchpad/launchpad-v2.1.skill"
            className={styles.primaryButton}
            download
          >
            Download Launchpad
          </a>
          <a
            href="/work/launchpad/launchpad-v2.1-guide.pdf"
            target="_blank"
            rel="noreferrer"
            className={styles.secondaryButton}
          >
            Read the guide ↗
          </a>
          <Link href="/work" className={styles.textLink}>
            Return to work →
          </Link>
        </div>
      </section>
    </main>
  );
}
