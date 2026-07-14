# 🗺️ Merge the Union

*Break the ice. Break the map.*
Brown Bag Icebreaker · July 2026 · Host Guide

---

## What Is It?

Merge the Union is a browser-based icebreaker game played on a live map of the United States. Each round, the group votes a state off the map. A neighboring state absorbs it, gains a ridiculous new name ("The Sovereign Bog of Floribama"), and the game keeps going until only one mega-state remains. It's fast, visual, and genuinely funny.

| | |
| --- | --- |
| **Players** | 3–30+ (works great for full team Brown Bags) |
| **Time** | 5–15 minutes (use the built-in session timer to keep it tight) |
| **Tech needed** | One screen share + the Merge the Union HTML file |
| **Installs** | None for participants. They just watch and shout answers. Reference page: [Merge the Union — Team Icebreaker](https://abnormalsecurity.atlassian.net/wiki/x/QoC2WQE) |

---

## Host Setup (Before the Meeting)

### 1. Open the game

Open the file **`merge-the-union-browser.html`** in any modern browser (Chrome recommended). Internet is required for the *first* load (the map geometry pulls from a CDN) — after that, the browser caches it and you're good.

### 2. Configure the spice settings

Click **Skip** on the settings screen to go casual, or fill in a few options to add structure:

| Setting | Recommendation |
| --- | --- |
| Player names | Paste in everyone's first names (one per line). The game rotates who's "calling" the vote each round. |
| Win mode | **Casual** (no winner) works great for icebreakers. See Win Modes below if you want more stakes. |
| Random events | Turn ON for chaos — earthquakes, civil wars, and defections add surprise mid-game. |
| Historical Hijinks | Turn ON — fun history cards appear every few rounds with game effects. |
| Session length | **15 min** is the sweet spot for a Brown Bag slot. The game auto-saves when the timer hits 0. |
| Background music | Optional. "Sunday High Score" loops at 30% volume — toggle with the 🎵 button. |

### 3. Share your screen

Share the browser tab. Make the window full-screen (F11) so the map is large and readable. The map auto-fits to your screen.

---

## How to Play (Round by Round)

1. The group nominates a state to eliminate.
2. Click the nominated state on the map to cast a vote. You can click multiple states — the one with the most votes will get eliminated. Click **Tally Votes** to count and remove the loser.
3. The eliminated state's neighbors are shown. The group picks which one absorbs it.
4. The game auto-generates a new mega-state name (or you can type your own). Click **Continue**.
5. Repeat until one mega-state absorbs them all.

**⚡ Quick Merge Mode:** One click on a state immediately eliminates it — no voting step. Great for fast-paced play or if you want to drive the narrative solo.

### Sample Script

> "Alright, we're playing Merge the Union. Quick rules:
>
> We've got all 50 states on the map. Each round, we vote one off. The loser gets absorbed by a neighbor and they merge into one new mega-state with a completely unhinged name. We keep going until one state has eaten the whole country.
>
> You don't need to know anything about geography — we're just here to watch America fall apart.
>
> Here's how we vote: I'm going to ask who wants to eliminate a state. If nobody says anything, I'm picking for you — so speak up or suffer the consequences.
>
> I'll start us off: I'm nominating [pick a state that grinds your gears or alternatively, that will cause a lot of chaos]. Who's next?
>
> [Wait a beat, point at someone] — [Name], you look like you have opinions. Which state's going first?"

---

## Win Modes (Optional)

The "anchor" of the final mega-state is the state whose identity survived every merger — basically, whoever did all the absorbing without ever being absorbed.

| Mode | How It Works |
| --- | --- |
| **Casual** | No winner — just play for fun and laughs. Recommended for most Brown Bags. |
| **Champion the Anchor** | Each player is randomly assigned ~10 states. Winner: whoever owns the final anchor. |
| **Team Conquest** | Split players into 2–4 colored teams; states distributed across teams. Winner: the team that owns the final anchor. |
| **Survivor Points** | Each player is assigned states. Earn 1 point per round each of your states stays independent. +10 bonus if you own the final anchor. Highest score wins. |
| **Pure Prediction** | Before the game starts, each player picks one state they think will be the final anchor. Winners: everyone who picked correctly. |

---

## Random Events

If enabled, random events fire from round 4 onward (~18% chance per round) for a surprise twist:

* **🌋 Earthquake** — A random state is eliminated. The map physically shakes. Team still picks the absorber.
* **⚔️ Civil War** — The largest mega-state fractures. A rebel member breaks free and becomes independent again.
* **🏃 Defection** — A border state flips allegiance to a neighboring mega-state.

---

## Historical Hijinks Cards

Every 3 rounds (from round 3 on) a history-inspired card pops up. The host reads it aloud, then decides to **Apply** or **Skip**.

| Card | Effect |
| --- | --- |
| 🗺️ Louisiana Purchase | Next winning state may absorb two neighbors instead of one. |
| 🦅 First State Advantage | Delaware ignores its first elimination attempt. |
| 💰 Gold Rush | California gets temporary protection for one round. |
| 🔊 Tiny but Loud | Rhode Island can't be eliminated unless it loses by more than one vote. |
| 🌾 Oregon Trail | Oregon gets temporary protection for one round. |
| ⛰️ West Virginia Breakaway | If WV was already absorbed, it returns as an independent state once. |
| 🚀 Space Race | Florida, Texas, or Alabama gets protection for one round. |
| 🛣️ Route 66 | States along Route 66 may be treated as connected for merge purposes. |
| 🗳️ Recount! | If the vote is decided by one, the top two states revote. |

---

## Saving & Resuming Across Meetings

**Easy way (one browser, returning host):**

1. Click **Save / Load Game** in the sidebar.
2. Type a save name (e.g., "Tuesday Brown Bag week 1") and click 💾 **Save**.
3. Next session, just open the file in the same browser — the Save / Load modal opens automatically with your save listed. Click **Resume**.

**Cross-device / different host:**

1. Open **Save / Load Game** → expand **Advanced: copy or paste as text**.
2. Click **Copy current save** — copies the full game state as JSON to your clipboard.
3. Paste it into Slack, the host-handoff doc, or your notes.
4. Next session: open the game → Save / Load → Advanced → paste the JSON → **Load from text**.

**💡 Tip:** The session timer auto-saves the game when time's up (named `⏰ Auto-save Jun 11 at 1:39 PM`), so even if you forget to save manually, you can still resume.

---

## Host Tips & Facilitation Notes

### Keep energy up

* Read the auto-generated mega-state names out loud with dramatic flair. "The Damp Empire of Floribama" deserves a moment.
* For big groups, assign someone to type votes in chat — you click, they collect.
* Call on quieter folks. "Hey [name], which state are we sacrificing next?"

### Managing the vote

* Click each nominated state to log votes. Click a state multiple times to add more votes to it.
* Click **Clear Votes** to reset before a new round.
* Use Quick Merge mode if discussions drag and you want to keep pace.

### If something breaks

* **Undo Merge** — click to roll back the last merge.
* **Start Over** — resets the full map (it'll re-open the Spice settings).
* The game needs internet on first load to pull map geometry from a CDN. Once loaded, it works offline.

---

## Files

| File | Purpose |
| --- | --- |
| `merge-the-union-browser.html` | The main game. Real US state shapes. Standalone, ~600 KB, shareable. |
| `merge-the-union.html` | The Cowork artifact version. Tile-grid map; uses Claude live for funnier names. |
| `merge-the-union-tracker.html` | Companion sheet of all 50 states with snarky descriptions. Click to mark eliminated as you play. |

---

**🎴 Bonus:** Pair the main game with the [tracker file](#) on a second monitor so you can see the eliminated states' descriptions as they're voted off. Adds a fun "obituary" beat to each elimination.
