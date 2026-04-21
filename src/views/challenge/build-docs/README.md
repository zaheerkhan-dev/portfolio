# /250 Challenge Page — Build Docs

> **What:** Live tracking page for the "250 Comments in 24 Hours" LinkedIn challenge  
> **Route:** `iamzak.xyz/250`  
> **LinkedIn Post:** `linkryse-main/linkedin/my-posts/2026-04-21-250-comments-challenge/post.md`  
> **Post DNA:** `linkryse-main/linkedin/my-posts/2026-04-21-250-comments-challenge/dna.md`  
> **Last updated:** April 21, 2026

---

## ⚡ CHALLENGE DAY CHEAT SHEET

**This is the only section you need during the challenge. Everything below is context.**

### Step-by-step (repeat 250 times lol)

```
1. Comment on someone's LinkedIn post (genuinely, not "great post 🔥")
2. Click ••• on YOUR comment → "Copy link to comment"
3. Open VS Code → src/data/challenge.ts
4. Add entry to CHALLENGE_COMMENTS array (copy the template below)
5. Save the file
6. Terminal: git add . && git commit -m "comment #N" && git push
7. Vercel auto-deploys in ~30 seconds
8. Live at iamzak.xyz/250
```

### Copy-paste template (for each comment)

```typescript
{
  id: 1,                          // next number (just increment)
  time: "9:14 AM",                // when you commented
  author: "Palvisha Agha",        // whose post you commented on
  topic: "1200 followers in 40 days",  // what their post was about
  comment: "40 days. most people haven't even figured out...",  // your comment (snippet)
  postUrl: "https://linkedin.com/posts/...",         // OPTIONAL — link to the post
  commentUrl: "https://linkedin.com/feed/update/...", // the proof link (copy link to comment)
},
```

### Speed tips (because ADHD + 250 entries = pain)

- **Batch pushes.** Comment 5-10 times, THEN log them all at once, THEN push once. Don't push after every single comment — you'll burn out on git commits before comment 50.
- **Minimal fields first.** During the challenge, only fill: `id`, `time`, `author`, `comment`. Fill `topic`, `postUrl`, `commentUrl` AFTER the challenge is over. Speed > completeness.
- **Keep a notepad open.** Every time you comment, just paste the author name + your comment in a text file. Batch-add them to `challenge.ts` later.
- **The `id` is just the next number.** Don't overthink it. 1, 2, 3, 4...

### Quick commands

```bash
# Run dev server (to preview locally)
npm run dev

# The deploy cycle (after editing challenge.ts)
git add .
git commit -m "comment #47"
git push
# Vercel auto-deploys in ~30 seconds
```

---

## The LinkedIn Post

The post that links to this page. Here's the key info you need:

**Hook:** "I'm going to engage with 250 posts in the next 24 hours. genuinely. no templates. no spam."

**The [link] placeholder:** Replace with `iamzak.xyz/250` before posting. Or use a Linkryse shortlink for click tracking (meta-marketing — your own SaaS tracking your own challenge).

**The rules (from the post):**
- → every comment has to add something new
- → no copy paste
- → no templates
- → if I can't say something genuine I scroll past

**5 self-reply comments (pre-written in post.md):**

| # | Comment | When to post |
|---|---------|-------------|
| 1 | 125x increase math (self-deprecating) | First hour ✅ |
| 2 | Palvisha shoutout (warm, gives credit) | First hour ✅ |
| 3 | Genuine is the hard part (real insight) | First hour ✅ |
| 4 | Not stalking, on a mission (humor) | First hour ✅ |
| 5 | Full results promise (accountability) | LAST — after engagement |

**Origin story (from dna.md, for context):**
- Palvisha casually mentioned she does 50+ comments/day
- You misheard it as 250
- Your ADHD brain skipped "try 50" and went straight to "what if I tried 250?"
- The mishearing became the challenge

**Where the post files live:**
```
linkryse-main/linkedin/my-posts/2026-04-21-250-comments-challenge/
├── post.md   ← The post + 5 self-reply comments
└── dna.md    ← Why every word was chosen
```

---

## File Structure

```
src/
├── app/(portfolio)/250/
│   └── page.tsx              ← Route (one-liner, imports ChallengeView)
│                                Exports custom OG metadata for /250
│
├── views/challenge/
│   ├── ChallengeView.tsx     ← Orchestrator (assembles sections in order)
│   ├── build-docs/           ← YOU ARE HERE
│   └── sections/
│       ├── challenge-hero/   ← Title + subtitle + Grid bg + glow + back link
│       ├── challenge-stats/  ← 3-column stats + progress bar (auto-calculates)
│       ├── challenge-rules/  ← Blockquote — your words from the LinkedIn post
│       └── challenge-feed/   ← Comment log table/cards + empty state
│           ├── index.tsx     ← Feed orchestrator + empty state
│           ├── CommentRow.tsx ← Desktop row (table layout, md+ only)
│           └── CommentCard.tsx ← Mobile card (stacked, <md only)
│
├── data/
│   └── challenge.ts          ← THE DATA FILE (add entries here)
│                                Contains: ChallengeComment interface,
│                                CHALLENGE_META (title, subtitle, date, goal),
│                                CHALLENGE_COMMENTS array (empty until challenge day)
│
└── components/ui/
    ├── Grid.tsx              ← SVG Grid Pattern (Dub.co style)
    ├── Container.tsx         ← max-w-7xl centered container
    └── animations/
        └── ScrollReveal.tsx  ← Framer Motion scroll-triggered reveals
```

---

## Section Breakdown (Current State)

### 1. Challenge Hero (`challenge-hero/index.tsx`)
- Back link → `/` (portfolio) with animated arrow
- Centered title: **"250 Comments. 24 Hours."** (gradient text, `<h2>`)
- Centered subtitle: from `CHALLENGE_META.subtitle`
- SVG Grid background (subtle `white/[0.03]`, radial mask, fades out)
- Emerald ambient glow — positioned at bottom of section, flows into stats card
- **No overflow-hidden** — the glow is intentionally allowed to bleed past the section boundary

### 2. Challenge Stats (`challenge-stats/index.tsx`)
- Glassmorphic card: `rounded-3xl border-white/10 bg-black/60 backdrop-blur-xl`
- 3-column grid with ruled dividers (`divide-x divide-white/10`)
- **Stats (auto-calculated from data):**
  - Column 1: Comments count (`CHALLENGE_COMMENTS.length`) / of 250
  - Column 2: Completion % (`Math.round(length / 250 * 100)`) / remaining count
  - Column 3: Challenge date (from `CHALLENGE_META.date`) / start time
- Progress bar: emerald gradient, width = completion %
- Mobile: stacks to 1 column with `divide-y`
- Has its own emerald ambient glow (bottom-right)
- **You never need to edit this file.** It auto-calculates everything from `CHALLENGE_COMMENTS`.

### 3. Challenge Rules (`challenge-rules/index.tsx`)
- **Redesigned as a blockquote** (was originally → arrow list)
- Single flowing italic quote: "every comment has to add something new. no copy paste..."
- Centered, `text-lg md:text-2xl`, `italic font-light`
- No arrows, no dividers, no attribution line
- These are YOUR words from the LinkedIn post, presented as a personal statement

### 4. Challenge Feed (`challenge-feed/index.tsx`)
- **Empty state:** Message icon + "Challenge hasn't started yet." + "Check back on challenge day"
- **Populated (desktop, md+):** Table layout
  - Header row: `# | TIME | COMMENT | LINK`
  - `CommentRow` for each entry — author name bold, topic muted, comment in italic quotes
  - Vertical dividers between columns
  - Row hover: `bg-white/[0.02]`
- **Populated (mobile, <md):** Card stack
  - `CommentCard` for each entry
  - Emerald numbered badge
  - 2-line truncation on comment (`line-clamp-2`)
- Glassmorphic card wrapper with emerald ambient glow (top-right)

---

## Data Layer (`src/data/challenge.ts`)

### The interface

```typescript
export interface ChallengeComment {
  id: number;          // Sequential: 1, 2, 3... → 250
  time: string;        // "9:14 AM" format
  author: string;      // Whose post you commented on
  topic: string;       // What their post was about
  comment: string;     // Your actual comment (snippet)
  postUrl?: string;    // Link to the original post (optional)
  commentUrl?: string; // "Copy link to comment" URL — the proof (optional)
}
```

### The meta

```typescript
export const CHALLENGE_META = {
  title: "250 Comments Challenge",
  subtitle: "No templates. No spam. Every single one genuine.",
  date: "April 22, 2026",    // ← UPDATE THIS to your actual challenge date
  startTime: "9:00 AM IST",
  goal: 250,
} as const;
```

### Where things are used

| Data | Used by |
|------|---------|
| `CHALLENGE_META.subtitle` | Hero subtitle |
| `CHALLENGE_META.date` | Stats card (column 3) |
| `CHALLENGE_META.startTime` | Stats card (column 3 sublabel) |
| `CHALLENGE_META.goal` | Stats card (progress bar, percentage, remaining) |
| `CHALLENGE_COMMENTS.length` | Stats card (count, percentage), Feed (empty/populated toggle) |
| `CHALLENGE_COMMENTS` array | Feed section (renders rows/cards) |

---

## Design Tokens (Must Match Portfolio)

| Token | Value | Where |
|-------|-------|-------|
| Card bg | `bg-black/60 backdrop-blur-xl` | Stats, Feed |
| Card border | `border border-white/10 rounded-3xl` | Stats, Feed |
| Ruled dividers | `divide-white/10` or `border-white/10` | Stats, Feed |
| Ambient glow | `bg-emerald-500/[0.07] blur-[150px]` | Hero (bottom), Stats (bottom-right), Feed (top-right) |
| Title gradient | `bg-gradient-to-b from-white via-white to-gray-600` | Hero, Feed heading |
| Text hierarchy | `text-white` → `text-gray-400` → `text-gray-500` → `text-gray-600` | All |
| Monospace | `font-mono` | IDs, times, numbers |
| Number alignment | `tabular-nums` | Stats, row IDs |
| Grid SVG | `text-white/[0.03]` with radial mask | Hero background |
| Quote text | `text-gray-400 italic font-light text-lg md:text-2xl` | Rules section |

---

## Architecture Pattern

Same pattern as your Linkryse and Sturga projects:

```
app/(portfolio)/250/page.tsx    →  ONE-LINER (imports view, exports metadata)
views/challenge/ChallengeView   →  ORCHESTRATOR (composes sections in order)
sections/challenge-*/index.tsx  →  SELF-CONTAINED sections
components/ui/*                 →  SHARED primitives (Container, Grid, ScrollReveal)
data/challenge.ts               →  DATA (separated from UI)
```

The route group `(portfolio)` provides the shared shell:
- `Starfield` (Three.js background — 4000 stars in a sphere)
- `ObsidianShell` (rounded container with blade-scroll)

Every page under `(portfolio)/` gets this automatically. Don't touch the shell.

---

## OG / SEO Metadata

The `/250` page has its own metadata in `app/(portfolio)/250/page.tsx`:

```typescript
title: "250 Comments Challenge"
description: "250 genuine LinkedIn comments in 24 hours. No templates. No spam."
openGraph.images: "/og-image.png"  // ← currently uses the portfolio OG image
                                   // TODO: create a challenge-specific OG image
```

---

## How the SVG Grid Works

The subtle grid lines in the hero background come from `Grid.tsx`.
It renders a repeating SVG pattern via `<pattern>` + `<rect fill>`.

Full docs: → `global-build-docs/dub-co-grid-design-pattern/README.md`

Key settings for this page:
- `cellSize={80}` — spacing between grid lines
- `text-white/[0.03]` — very subtle (doesn't fight starfield)
- `radial-gradient mask` — fades out from center so it's not a hard rectangle

---

## What NOT to Touch

| File | Why |
|------|-----|
| `ObsidianShell` | Shared with homepage — breaking it breaks everything |
| `Starfield` | Shared with homepage — heavy Three.js component |
| `globals.css` | blade-scroll, glitch animations, hero-enter are global |
| `layout.tsx` (root) | Sora font, CinematicLoader, metadataBase |
| `(portfolio)/layout.tsx` | Shell wrapper for all pages under (portfolio) |
| `Grid.tsx` | Shared SVG component, used by hero + potentially other pages |
| `Container.tsx` | Shared max-w container |
| `ScrollReveal.tsx` | Shared animation wrapper |

---

## Changes Log

| Date | What changed |
|------|-------------|
| Apr 21, 2026 | Initial build — all 4 sections created |
| Apr 21, 2026 | Rules section: changed from → arrow list to centered italic blockquote |
| Apr 21, 2026 | Hero glow: removed overflow-hidden, repositioned glow to bottom to flow into stats card |

---

## After the Challenge

Things to do when the 24 hours are over:

1. **Fill in missing fields.** Go back through `CHALLENGE_COMMENTS` and fill in `topic`, `postUrl`, `commentUrl` for any entries you skipped during speed mode.
2. **Write the results post.** Your post.md Comment 5 promises "I'll post the full results after." Make good on that.
3. **Screenshot the final stats.** The stats card at the top will show your final count and completion %. Screenshot it for the results post.
4. **Consider adding a "Results" section.** A new section below the feed that shows post-challenge reflections, total time, comments-per-hour, what you learned.
5. **Create a challenge-specific OG image.** Right now `/og-image.png` is the generic portfolio image. A custom one would look better when people share the link.
