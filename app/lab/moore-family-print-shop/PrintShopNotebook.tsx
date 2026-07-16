"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./print-shop-notebook.module.css";

const workflow = [
  {
    step: "01",
    title: "Spot the idea",
    detail:
      "Something useful, giftable, seasonal, satisfying, or strange enough to deserve a test print.",
    output: "Product hypothesis",
  },
  {
    step: "02",
    title: "Prototype it",
    detail:
      "Slice, print, inspect, adjust supports, test fit, change material, and decide whether the object passes the vibe check.",
    output: "Working object",
  },
  {
    step: "03",
    title: "Package the listing",
    detail:
      "Write the title, description, tags, variants, measurements, photos, and realistic expectations.",
    output: "Shop-ready story",
  },
  {
    step: "04",
    title: "Learn from reality",
    detail:
      "Watch what people click, favorite, ask about, buy, ignore, or misunderstand, then improve the product or explanation.",
    output: "Next iteration",
  },
];

const buildLayers = [
  {
    label: "Product experiments",
    note:
      "Small-batch prints, seasonal ideas, keychains, fidgets, desk pieces, accessories, and whatever passes the “wait, I could make that” test.",
    swatch: "cyan",
  },
  {
    label: "Listing systems",
    note:
      "Titles, descriptions, variants, photos, tags, measurements, and the tiny details that help a handmade object make sense online.",
    swatch: "yellow",
  },
  {
    label: "Shop operations",
    note:
      "Materials, print settings, packaging, fulfillment habits, troubleshooting, and the repeatable work behind a joyful hobby.",
    swatch: "mint",
  },
  {
    label: "Brand voice",
    note:
      "Friendly, clear, and warm. The copy should explain the object without sanding all the personality off it.",
    swatch: "pink",
  },
];

const artifacts = [
  "3D-printed products and small-batch product ideas",
  "Marketplace listings and customer-facing copy",
  "Shop voice and brand presentation",
  "Packaging and fulfillment decisions",
  "Product photography direction",
  "Seasonal and giftable item planning",
  "Printer troubleshooting and material choices",
  "AI-assisted copy, listing, and marketing experiments",
  "Future storefront revamp planning",
];

const tools = [
  ["Bambu Studio", "Slicing, print preparation, supports, settings, and production decisions"],
  ["Bambu X1C + A1 Mini", "Fast iteration across product tests and small-batch runs"],
  ["Tinkercad", "Quick edits, fit fixes, and practical object changes"],
  ["Blender + Nomad Sculpt", "Shape exploration and more expressive model work"],
  ["ChatGPT + Gemini", "Listing support, naming, marketing systems, and workflow thinking"],
  ["Etsy + storefront", "Public testing surfaces for products, positioning, and customer clarity"],
];

const lessons = [
  {
    title: "Can a hobby support itself?",
    copy:
      "The shop helps pay for filament, replacement parts, failed experiments, and the next idea. It does not need to cosplay as a venture-backed startup to be valuable.",
  },
  {
    title: "Can product pages carry the experience?",
    copy:
      "A small object needs useful photos, measurements, realistic expectations, and enough charm for someone to understand why it belongs in their life.",
  },
  {
    title: "Can making stay joyful?",
    copy:
      "The systems exist to reduce friction. If operations make every print feel like homework, the system has failed the hobby.",
  },
];

const revampChecklist = [
  "Clearer product categories",
  "Stronger product photography system",
  "Better path from browsing to understanding",
  "More visible material and size information",
  "Warmer maker-story moments",
  "Less marketplace dependence",
  "A storefront that feels like the actual shop",
];

const sampleSettings = {
  "Functional fit test": [
    ["Layer height", "0.20 mm"],
    ["Walls", "3"],
    ["Infill", "15%"],
    ["Material", "PLA"],
    ["Status", "Check tolerances"],
  ],
  "Tiny giftable object": [
    ["Layer height", "0.16 mm"],
    ["Walls", "3"],
    ["Infill", "12%"],
    ["Material", "Matte PLA"],
    ["Status", "Photograph next"],
  ],
  "Prototype with moving parts": [
    ["Layer height", "0.20 mm"],
    ["Walls", "4"],
    ["Infill", "20%"],
    ["Material", "PETG"],
    ["Status", "Test clearance"],
  ],
} as const;

type SettingKey = keyof typeof sampleSettings;

export function PrintShopNotebook() {
  const [settingKey, setSettingKey] =
    useState<SettingKey>("Functional fit test");

  return (
    <div className={styles.shell}>
      <div className={styles.topBar}>
        <Link href="/lab" className={styles.backLink}>
          ← Back to the Lab
        </Link>
        <span>Moore Family Print Shop · maker systems case study</span>
      </div>

      <section className={styles.notebook}>
        <div className={styles.binding} aria-hidden="true">
          {Array.from({ length: 15 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>

        <div className={`${styles.pageLeaf} ${styles.leftPage}`}>
          <p className={styles.kicker}>Maker business + fabrication systems</p>

          <div className={styles.logoFrame}>
            <span className={styles.tapeLeft} aria-hidden="true" />
            <span className={styles.tapeRight} aria-hidden="true" />
            <img
              src="/lab/moore-family-print-shop/moore-family-print-shop-logo.png"
              alt="Moore Family Print Shop"
            />
          </div>

          <h1>
            Technology turns into
            <br />
            tiny physical joy.
          </h1>

          <p className={styles.lead}>
            The shop is less about building a business empire and more about
            sharing the hobby, paying for the hobby, and giving the things I
            make somewhere real to land.
          </p>

          <div className={styles.actionRow}>
            <a
              href="https://www.moorefamilyprintshop.com"
              target="_blank"
              rel="noreferrer"
              className={styles.primaryAction}
            >
              Open the shop ↗
            </a>
            <a
              href="https://www.etsy.com/shop/moorefamilyprintshop"
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryAction}
            >
              Open Etsy ↗
            </a>
          </div>

          <div className={styles.marginNote}>
            <span className={styles.tape} aria-hidden="true" />
            <strong>The honest business model</strong>
            <p>
              Make things I enjoy. Sell enough of them to buy more filament,
              test the next idea, replace the occasional part, and keep making.
            </p>
          </div>

          <div className={styles.sectionTitle}>
            <span>Build pipeline</span>
            <h2>From “I could make that” to something another person can buy.</h2>
          </div>

          <div className={styles.workflow}>
            {workflow.map((item) => (
              <article key={item.step}>
                <span>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <small>{item.output}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={`${styles.pageLeaf} ${styles.rightPage}`}>
          <div className={styles.blueprintHeader}>
            <p className={styles.kicker}>The system under the products</p>
            <h2>A tiny shop still needs real infrastructure.</h2>
            <p>
              A print is only the visible object. Behind it are design choices,
              material constraints, settings, quality checks, customer
              expectations, photos, copy, packaging, and fulfillment.
            </p>
          </div>

          <div className={styles.layerGrid}>
            {buildLayers.map((layer, index) => (
              <article
                key={layer.label}
                className={`${styles.layerCard} ${styles[layer.swatch]}`}
              >
                <span className={styles.tape} aria-hidden="true" />
                <p>Layer {String(index + 1).padStart(2, "0")}</p>
                <h3>{layer.label}</h3>
                <p>{layer.note}</p>
              </article>
            ))}
          </div>

          <div className={styles.settingsHeading}>
            <p className={styles.kicker}>Interactive print note</p>
            <h2>Settings are part of the product decision.</h2>
          </div>

          <div className={styles.settingsTabs}>
            {(Object.keys(sampleSettings) as SettingKey[]).map((key) => (
              <button
                key={key}
                type="button"
                className={settingKey === key ? styles.activeSetting : ""}
                onClick={() => setSettingKey(key)}
              >
                {key}
              </button>
            ))}
          </div>

          <div className={styles.settingsCard}>
            <span className={styles.tape} aria-hidden="true" />
            <p className={styles.settingsLabel}>{settingKey}</p>
            <dl>
              {sampleSettings[settingKey].map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <small>
              Example planning notes, not universal printer prescriptions.
            </small>
          </div>

          <div className={styles.inlineArtifacts}>
            <div className={styles.inlineArtifactHeading}>
              <p className={styles.kicker}>Current artifact map</p>
              <h2>The shop system so far.</h2>
              <p>
                The portfolio value is not one product listing. It is the full
                maker-business loop and the operational thinking behind it.
              </p>
            </div>

            <div className={styles.inlineArtifactList}>
              {artifacts.map((artifact, index) => (
                <article key={artifact}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{artifact}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.toolsSpread}>
        <div className={styles.sectionTitle}>
          <span>Workbench</span>
          <h2>The tools change. The judgment travels.</h2>
        </div>

        <div className={styles.toolGrid}>
          {tools.map(([tool, use], index) => (
            <article key={tool}>
              <span className={styles.tape} aria-hidden="true" />
              <p>{String(index + 1).padStart(2, "0")}</p>
              <h3>{tool}</h3>
              <p>{use}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.revampSpread}>
        <div>
          <p className={styles.kicker}>Next build</p>
          <h2>The storefront revamp is waiting in the wings.</h2>
          <p>
            The current site proves the hobby has a public home. The next
            version should make that home clearer, warmer, easier to browse, and
            more recognizably ours.
          </p>
        </div>

        <aside>
          <span className={styles.tape} aria-hidden="true" />
          <strong>Revamp checklist</strong>
          <ul>
            {revampChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className={styles.lessonsSpread}>
        <div className={styles.sectionTitle}>
          <span>What the shop is teaching me</span>
          <h2>The real outputs are judgment, systems, and a lot of filament.</h2>
        </div>

        <div className={styles.lessonGrid}>
          {lessons.map((lesson, index) => (
            <article key={lesson.title}>
              <span className={styles.tape} aria-hidden="true" />
              <p>Lesson {String(index + 1).padStart(2, "0")}</p>
              <h3>{lesson.title}</h3>
              <p>{lesson.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.closingSpread}>
        <p className={styles.kicker}>What this proves</p>
        <h2>
          I can move an idea through design, fabrication, explanation,
          storefront presentation, fulfillment thinking, and iteration.
        </h2>

        <div className={styles.actionRow}>
          <a
            href="https://www.moorefamilyprintshop.com"
            target="_blank"
            rel="noreferrer"
            className={styles.primaryAction}
          >
            Visit the shop ↗
          </a>
          <Link href="/lab" className={styles.secondaryAction}>
            Return to the Lab
          </Link>
        </div>
      </section>
    </div>
  );
}
