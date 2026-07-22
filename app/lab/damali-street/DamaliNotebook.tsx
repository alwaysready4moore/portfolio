"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./damali-notebook.module.css";

type EraKey = "crimson" | "solar";

const eras = {
  crimson: {
    shortLabel: "Crimson Confetti",
    label: "Red era · released",
    title: "Crimson Confetti",
    thesis: "Romantic damage dressed like a victory lap.",
    description:
      "The original Damali world: dark hair, sharp eyeliner, theatrical confidence, confetti, smoke, lipstick, and big feelings performed like an encore.",
    image: "/damali/Crimson-Confetti.png",
    album:
      "https://open.spotify.com/album/25Wb5muzSiE6fDDvIp4yzz?si=5Hrp5iIDS--z2L96OP5HcA",
    rules: [
      "Dark hair and red-forward styling",
      "Glam-rock drama instead of polished pop perfection",
      "Confetti, lipstick, smoke, and stage-light imagery",
      "Romantic wreckage delivered with confidence",
    ],
    lyric: "I am pretty wreckage, glitter in the dust.",
  },
  solar: {
    shortLabel: "Solar Psychosis",
    label: "Yellow era · current",
    title: "Solar Psychosis",
    thesis: "Too bright to trust and too pretty to ignore.",
    description:
      "The current album world turns Damali blonde and floods the frame with solar yellow, gold, flash photography, false light, heat haze, red lips, and manic glamour.",
    image: "/damali/solar-psychosis-promo.png",
    album:
      "https://open.spotify.com/album/2PvFSxzu5qiYcHvs0Mubcr?si=MBSee7_DSs-ctSkRF2ij0A",
    rules: [
      "Blonde hair and unmistakable red lips",
      "Solar yellow, gold, flash photography, and heat haze",
      "Gloss, spectacle, false light, and sweetness with teeth",
      "Confidence one degree away from combustion",
    ],
    lyric: "If I disappear, does the light go too?",
  },
} as const;

const proof = [
  {
    label: "My role",
    value:
      "Concept creator, songwriter, creative director, visual-system designer, AI workflow operator, editor, publisher, and campaign strategist.",
  },
  {
    label: "What shipped",
    value:
      "Two album worlds, music releases, visual campaigns, short-form content, public channels, press, and a paid audience experiment.",
  },
  {
    label: "AI assisted",
    value:
      "Music, image, and video production; ideation; editing support; and production acceleration under human direction.",
  },
  {
    label: "Human decisions",
    value:
      "Persona, lyrics, era rules, prompts, selection, rejection, sequencing, captions, disclosure, and campaign interpretation.",
  },
];

const workflow = [
  ["01", "Emotional thesis", "Define what the era feels like before generating anything."],
  ["02", "Musical vocabulary", "Write song concepts, lyrics, hooks, pacing, and track roles."],
  ["03", "Visual rules", "Lock hair, makeup, color, lighting, styling, type, and symbols."],
  ["04", "Generate + reject", "Use AI for speed, then remove drift and identity errors aggressively."],
  ["05", "Package the release", "Build covers, reels, captions, platform copy, and press materials."],
  ["06", "Test the signal", "Use audience response to decide what the next experiment should answer."],
];

const campaignStats = [
  ["1,806", "total reel views"],
  ["1,505", "accounts reached"],
  ["84", "interactions"],
  ["52", "follows attributed to reel activity"],
  ["107", "paid profile visits"],
  ["$0.16", "cost per profile visit"],
];

const visualMoments = [
  {
    title: "Static Halo",
    note: "Campaign visual",
    image: "/damali/static-halo-promo.png",
    caption: "The promoted Solar Psychosis lyric moment.",
  },
  {
    title: "Pretty Wreckage",
    note: "Red-era throwback",
    image: "/damali/pretty-wreckage-promo.png",
    caption: "Romantic ruin, confidence, and old-school rock glamour.",
  },
  {
    title: "Solar Psychosis",
    note: "Album cover",
    image: "/damali/Solar-Psychosis.png",
    caption: "The final cover system for the current yellow era.",
  },
];

export function DamaliNotebook() {
  const [activeEra, setActiveEra] = useState<EraKey>("solar");
  const era = eras[activeEra];

  return (
    <div className={`${styles.shell} ${styles[activeEra]}`}>
      <div className={styles.topBar}>
        <Link href="/lab" className={styles.backLink}>
          ← Back to the Lab
        </Link>
        <span>Damali Street · Creative Experiment</span>
      </div>

      <section className={styles.notebook}>
        <div className={styles.binding} aria-hidden="true">
          {Array.from({ length: 15 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>

        <div className={`${styles.pageLeaf} ${styles.leftPage}`}>
          <div className={styles.tapeTop} aria-hidden="true" />

          <p className={styles.kicker}>Creative technology case study</p>
          <h1>Damali Street</h1>

          <p className={styles.lead}>
            My rock-star side quest became an end-to-end creative production
            system.
          </p>

          <p className={styles.bodyCopy}>
            Damali began with the old dream of writing songs and performing
            them with more drama than everyday life allows. I turned her into a
            live experiment spanning persona design, music, visual identity,
            release operations, short-form content, disclosure, press, and
            audience testing.
          </p>

          <div className={styles.heroActionRow}>
            <div className={styles.heroButtons}>
              <a
                href="https://www.damalistreet.com"
                target="_blank"
                rel="noreferrer"
              >
                Visit DamaliStreet.com ↗
              </a>
              <a
                href="https://www.youtube.com/@DamaliStreet"
                target="_blank"
                rel="noreferrer"
              >
                Watch on YouTube ↗
              </a>
              <a
                href="https://www.instagram.com/damalistreet/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram ↗
              </a>
            </div>

            <img
              src="/damali/Signature-Yellow.png"
              alt="Damali Street signature"
              className={styles.heroSignatureStamp}
            />
          </div>

          <div className={styles.marginNote}>
            <strong>The actual experiment:</strong>
            <p>
              Can one creative director use generative tools to build a
              coherent artist world, maintain it across eras, publish it, and
              learn from real audience response?
            </p>
          </div>

          <div className={styles.proofHeading}>
            <span>Proof strip</span>
            <h2>What was mine, what AI assisted, and what shipped.</h2>
          </div>

          <div className={styles.proofGrid}>
            {proof.map((item, index) => (
              <article
                key={item.label}
                className={index % 2 ? styles.noteTiltRight : styles.noteTiltLeft}
              >
                <span className={styles.cardTape} aria-hidden="true" />
                <h3>{item.label}</h3>
                <p>{item.value}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={`${styles.pageLeaf} ${styles.rightPage}`}>
          <div className={styles.eraTabs} role="tablist" aria-label="Damali eras">
            {(Object.keys(eras) as EraKey[]).map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={activeEra === key}
                className={activeEra === key ? styles.activeEraTab : undefined}
                onClick={() => setActiveEra(key)}
              >
                {eras[key].shortLabel}
              </button>
            ))}
          </div>

          <div className={styles.eraSpread}>
            <figure className={styles.albumPhoto}>
              <span className={styles.photoTapeLeft} aria-hidden="true" />
              <span className={styles.photoTapeRight} aria-hidden="true" />
              <img src={era.image} alt={`${era.title} album artwork`} />
              <figcaption>{era.label}</figcaption>
            </figure>

            <div className={styles.eraCopy}>
              <p className={styles.kicker}>{era.label}</p>
              <h2>{era.title}</h2>
              <blockquote>{era.thesis}</blockquote>
              <p>{era.description}</p>

              <ul>
                {era.rules.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>

              <a href={era.album} target="_blank" rel="noreferrer">
                Listen to this era ↗
              </a>
            </div>
          </div>

          <div className={styles.lyricScrap}>
            <span className={styles.cardTape} aria-hidden="true" />
            <p>lyric pinned to the mood board</p>
            <strong>“{era.lyric}”</strong>
          </div>

          <div className={styles.workflowHeading}>
            <span>Production map</span>
            <h2>The repeatable system under the fantasy.</h2>
          </div>

          <div className={styles.workflowTrack}>
            {workflow.map(([step, title, description]) => (
              <article key={step}>
                <span>{step}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className={styles.modelSheetSection}>
        <div className={styles.modelSheetHeading}>
          <p className={styles.kicker}>Character continuity system</p>
          <h2>Damali needed a model sheet, not just a mood board.</h2>
          <p>
            As the Solar Psychosis era expanded across image and video tools,
            consistency became a production problem. This reference locks the
            details that make Damali recognizable: face shape, hair, makeup,
            jewelry, expressions, proportions, silhouette, color, and styling.
          </p>
        </div>

        <figure className={styles.modelSheetFrame}>
          <span className={styles.modelTapeLeft} aria-hidden="true" />
          <span className={styles.modelTapeRight} aria-hidden="true" />
          <img
            src="/damali/damali-model-sheet.png"
            alt="Damali Street Solar Psychosis era character model sheet showing turnarounds, expressions, details, full-body views, costume references, colors, and signature elements"
          />
          <figcaption>
            <strong>What this controls</strong>
            <span>
              Identity continuity across prompts, generations, edits, campaign
              assets, and video references.
            </span>
          </figcaption>
        </figure>
      </section>

      <section className={styles.campaignSpread}>
        <div className={styles.campaignIntro}>
          <p className={styles.kicker}>Live campaign experiment</p>
          <h2>What happened when Static Halo met strangers.</h2>
          <p>
            A four-day Instagram and Facebook promotion used a $20 maximum
            budget to test whether a coherent persona and an emotionally direct
            lyric could make unfamiliar viewers curious.
          </p>

          <div className={styles.hypothesis}>
            <span className={styles.cardTape} aria-hidden="true" />
            <strong>Hypothesis</strong>
            <p>
              A believable rock identity plus the line “If I disappear, does
              the light go too?” could earn profile curiosity without an
              established audience.
            </p>
          </div>
        </div>

        <div className={styles.statsBoard}>
          {campaignStats.map(([value, label], index) => (
            <article key={label} className={index % 2 ? styles.statGold : ""}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}

          <div className={styles.proofPoint}>
            <p>Unexpected proof point</p>
            <strong>
              A viewer asked whether Damali was a solo artist or a band.
            </strong>
            <span>
              The world-building was coherent enough to be treated like a real
              music act.
            </span>
          </div>
        </div>
      </section>

      <section className={styles.visualSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>Visual proof</p>
          <h2>Campaign pieces from both sides of the notebook.</h2>
        </div>

        <div className={styles.photoGrid}>
          {visualMoments.map((moment, index) => (
            <figure
              key={moment.title}
              className={
                index === 1 ? styles.photoMiddle : index === 2 ? styles.photoLast : ""
              }
            >
              <span className={styles.cardTape} aria-hidden="true" />
              <img src={moment.image} alt={`${moment.title} promotional visual`} />
              <figcaption>
                <span>{moment.note}</span>
                <strong>{moment.title}</strong>
                <p>{moment.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.closingPage}>
        <div>
          <p className={styles.kicker}>What this proves</p>
          <h2>Creative technology is not just generation.</h2>
          <p>
            Damali Street tests writing, taste, creative direction, production
            systems, tool orchestration, publishing, disclosure, and audience
            learning in one end-to-end build.
          </p>
        </div>

        <aside>
          <div className={styles.heroButtons}>
            <a
              href="https://www.damalistreet.com"
              target="_blank"
              rel="noreferrer"
            >
              Explore the Damali Street universe ↗
            </a>
          </div>

          <span className={styles.cardTape} aria-hidden="true" />
          <strong>Disclosure</strong>
          <p>
            Damali Street is an AI-assisted fictional artist created and
            directed by Marquetta Moore. AI supports portions of music, image,
            and video production. The persona, lyrics, era systems, editing,
            selection, publishing, and campaign decisions remain human-led.
          </p>
          <div className={styles.closingSignatureCrop} aria-hidden="true">
            <img
              src="/damali/Signature-Yellow.png"
              alt=""
              className={styles.closingSignature}
            />
          </div>
        </aside>
      </section>
    </div>
  );
}
