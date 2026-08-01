"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./merge-notebook.module.css";

const winModes = [
  {
    title: "Casual",
    copy: "No winner. Eliminate states for the absurd names and questionable geography.",
    stamp: "just vibes",
  },
  {
    title: "Champion the Anchor",
    copy: "Players own starting states. Whoever owns the final anchor wins.",
    stamp: "individual",
  },
  {
    title: "Team Conquest",
    copy: "Two to four teams compete to control the anchor of the final mega-state.",
    stamp: "team play",
  },
  {
    title: "Survivor Points",
    copy: "Earn points while your states remain independent, plus a final-anchor bonus.",
    stamp: "score chase",
  },
  {
    title: "Pure Prediction",
    copy: "Call the final anchor before the first vote. Brag forever if you are right.",
    stamp: "prophecy",
  },
];

const roundSteps = [
  ["1", "Make the case", "Let people defend a state before democracy destroys it."],
  ["2", "Vote it off", "Use Quick Merge or collect a tally directly on the map."],
  ["3", "Pick the absorber", "A neighboring state takes the territory, unless Free Merge is on."],
  ["4", "Name the mess", "Accept the generated name, reroll it, or type the group’s suggestion."],
  ["5", "Repeat", "Continue until one deeply cursed mega-state remains."],
];

const builds = [
  {
    label: "Standalone browser game",
    description:
      "Real state shapes, curated mega-state names, embedded music, offline-friendly play after the first map load, and no Cowork session required.",
  },
  {
    label: "Cowork artifact",
    description:
      "Tile-grid map with Claude-generated mega-state names and winner lore generated live each round.",
  },
  {
    label: "Tracker companion",
    description:
      "A second-screen obituary board with all 50 states, snarky descriptions, elimination states, and one-click restoration.",
  },
];

const featureNotes = [
  "Named multi-save manager with resume, delete, export, and cross-device copy/paste",
  "5, 10, 15, or 30-minute session budget with auto-save on timeout",
  "Round timer and player or team turn rotation",
  "Historical Hijinks event deck with an in-session on/off toggle",
  "Earthquake, Civil War, and Defection random events",
  "Music, sound effects, map animation, and final-two spotlight",
  "Custom mega-state naming and winner lore",
  "Host guide for 15-minute Brown Bags and team facilitation",
];

const eventCards = [
  ["Earthquake", "The map shakes. Someone loses composure."],
  ["Civil War", "Progress can be undone because history enjoys chaos."],
  ["Defection", "A state changes allegiance at the worst possible moment."],
];

export function MergeNotebook() {
  const [selectedMode, setSelectedMode] = useState(2);
  const [eventIndex, setEventIndex] = useState(0);

  return (
    <div className={styles.shell}>
      <div className={styles.topBar}>
        <Link href="/lab" className={styles.backLink}>
          ← Back to the lab
        </Link>
        <span>Merge the Union · playable creative technology case study</span>
      </div>

      <section className={styles.notebook}>
        <div className={styles.binding} aria-hidden="true">
          {Array.from({ length: 15 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>

        <div className={`${styles.pageLeaf} ${styles.leftPage}`}>
          <p className={styles.kicker}>Playable browser game + team icebreaker</p>
          <h1>Merge the Union</h1>

          <p className={styles.lead}>
            Break the ice. Break the map.
          </p>

          <p className={styles.intro}>
            Each round, the group votes one state off the map. Another state
            absorbs it, gets a ridiculous mashup name, and the country becomes
            slightly more united and much less defensible.
          </p>

          <div className={styles.actionRow}>
            <a href="#playable-game" className={styles.primaryAction}>
              Play the game below ↓
            </a>
            <a href="#system" className={styles.secondaryAction}>
              Study the system ↓
            </a>
          </div>

          <div className={styles.stickyThesis}>
            <span className={styles.tape} aria-hidden="true" />
            <strong>Design question</strong>
            <p>
              How can a silly premise become a game people can facilitate, pause,
              save, resume, score, and reuse?
            </p>
          </div>

          <div className={styles.sectionTitle}>
            <span>Round anatomy</span>
            <h2>Use one loop and increasingly cursed geography</h2>
          </div>

          <div className={styles.roundTrack}>
            {roundSteps.map(([step, title, copy]) => (
              <article key={step}>
                <span>{step}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div id="playable-game" className={`${styles.pageLeaf} ${styles.rightPage}`}>
          <div className={styles.logoCard}>
            <span className={styles.tapeLeft} aria-hidden="true" />
            <span className={styles.tapeRight} aria-hidden="true" />
            <img
              src="/lab/merge-the-union/logo.png"
              alt="Merge the Union logo"
            />
          </div>

          <div className={styles.mapHeading}>
            <p className={styles.kicker}>Playable build</p>
            <h2>Play the full game here</h2>
            <p>
              Configure the Spice settings, vote states off the map, pick the
              absorber, rename the resulting mega-state, save the session, and
              keep going until one deeply cursed union remains.
            </p>
          </div>

          <div className={styles.gameFrameWrap}>
            <span className={styles.tapeLeft} aria-hidden="true" />
            <span className={styles.tapeRight} aria-hidden="true" />
            <iframe
              src="/lab/merge-the-union/game.html"
              title="Playable Merge the Union game"
              className={styles.gameFrame}
              loading="lazy"
              allow="fullscreen"
            />
          </div>

          <div className={styles.gameFrameFooter}>
            <p>
              This is the standalone game itself, embedded directly into the
              notebook. Full screen is available for group facilitation.
            </p>
            <a
              href="/lab/merge-the-union/game.html"
              target="_blank"
              rel="noreferrer"
            >
              Open game full screen ↗
            </a>
          </div>

          <div className={styles.chaosNote}>
            <span className={styles.tape} aria-hidden="true" />
            <p>Chaos is not a side effect.</p>
            <strong>Chaos is a feature.</strong>
          </div>
        </div>
      </section>

      <section className={styles.activitySpread}>
        <div className={styles.sectionTitle}>
          <span>Facilitator settings</span>
          <h2>Give different groups a reason to care</h2>
        </div>

        <div className={styles.modeLayout}>
          <div className={styles.modeTabs} role="tablist" aria-label="Win modes">
            {winModes.map((mode, index) => (
              <button
                key={mode.title}
                type="button"
                role="tab"
                aria-selected={selectedMode === index}
                className={selectedMode === index ? styles.activeMode : ""}
                onClick={() => setSelectedMode(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {mode.title}
              </button>
            ))}
          </div>

          <article className={styles.modeCard}>
            <span className={styles.tape} aria-hidden="true" />
            <p>{winModes[selectedMode].stamp}</p>
            <h3>{winModes[selectedMode].title}</h3>
            <p>{winModes[selectedMode].copy}</p>
          </article>
        </div>
      </section>

      <section id="system" className={styles.systemSpread}>
        <div className={styles.systemIntro}>
          <p className={styles.kicker}>Product system</p>
          <h2>The product includes three coordinated tools</h2>
          <p>
            The game, live artifact, and tracker solve different parts of the
            facilitation problem. The point was not one clever screen. It was a
            reusable activity with setup, recovery, pacing, and handoff.
          </p>
        </div>

        <div className={styles.buildGrid}>
          {builds.map((build, index) => (
            <article key={build.label} className={styles[`build${index}`]}>
              <span className={styles.tape} aria-hidden="true" />
              <p>Build {index + 1}</p>
              <h3>{build.label}</h3>
              <p>{build.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.featureSpread}>
        <div>
          <p className={styles.kicker}>Under the silly premise</p>
          <h2>Product decisions under the silly premise</h2>
        </div>

        <ul>
          {featureNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <section className={styles.hijinksSpread}>
        <div className={styles.hijinksIntro}>
          <p className={styles.kicker}>Historical Hijinks</p>
          <h2>Sometimes the map fights back</h2>
          <p>
            Random events keep a long session from becoming predictable and
            give the facilitator a way to restore energy without inventing a
            new rule on the spot.
          </p>

          <button
            type="button"
            onClick={() =>
              setEventIndex((current) => (current + 1) % eventCards.length)
            }
          >
            Draw another event →
          </button>
        </div>

        <article className={styles.eventCard}>
          <span className={styles.tape} aria-hidden="true" />
          <p>Event card {eventIndex + 1}</p>
          <h3>{eventCards[eventIndex][0]}</h3>
          <p>{eventCards[eventIndex][1]}</p>
        </article>
      </section>

      <section className={styles.hostSpread}>
        <div>
          <p className={styles.kicker}>Adoption layer</p>
          <h2>Give the host clear setup instructions</h2>
          <p>
            The guide includes a sample script, settings for a 15-minute Brown
            Bag, group-size recommendations, facilitation tips, controls, and
            troubleshooting.
          </p>
        </div>

        <aside>
          <span className={styles.tape} aria-hidden="true" />
          <strong>Recommended 15-minute setup</strong>
          <ul>
            <li>Preload and share the map before the meeting begins.</li>
            <li>Use a win mode appropriate for the group size.</li>
            <li>Let people defend a state before it is eliminated.</li>
            <li>Read every bad mega-state name aloud.</li>
            <li>Screenshot the winner and share it in Slack.</li>
          </ul>
        </aside>
      </section>

      <section className={styles.closingSpread}>
        <p className={styles.kicker}>Result</p>
        <h2>
          Playful prototypes still need interaction design, state management,
          facilitation rules, documentation, and testing
        </h2>

        <div>
          <Link href="/lab/merge-the-union" className={styles.primaryAction}>
            Play the current build →
          </Link>
          <Link href="/lab" className={styles.secondaryAction}>
            Return to the lab
          </Link>
        </div>
      </section>
    </div>
  );
}
