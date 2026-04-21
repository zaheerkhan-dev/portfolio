# Dub.co — Grid Design Pattern & Architecture

> **Why this doc exists:** So you never have to re-research this.  
> **Source project:** `C:\Users\user\Desktop\Orunk\2.Orunk-GO\dub.co\dub-main\dub-main`  
> **Last updated:** April 21, 2026

---

## TL;DR

Dub.co uses **two techniques** together across their entire site:

1. **`<Grid />` SVG component** — a repeating SVG pattern that draws thin grid lines as a background texture (like graph paper)
2. **Tailwind `divide-x/y` + `border-t/b/l/r`** — hairline 1px borders between content cells (shared borders, not individual card borders)

Together they create a **ruled layout** — the entire page feels like it's built on an architectural grid. Clean, structured, premium.

---

## Part 1: The `<Grid />` SVG Component

### What it is

A reusable React component that renders an **SVG pattern** of repeating grid lines across any container. It's purely decorative (background texture).

### Where it lives in Dub.co

```
packages/ui/src/grid.tsx
```

### The actual source code

```tsx
import { cn } from "@dub/utils";
import { useId } from "react";

export function Grid({
  cellSize = 12,
  strokeWidth = 1,
  patternOffset = [0, 0],
  className,
}: {
  cellSize?: number;
  strokeWidth?: number;
  patternOffset?: [number, number];
  className?: string;
}) {
  const id = useId();

  return (
    <svg
      className={cn(
        "pointer-events-none absolute inset-0 text-black/10",
        className,
      )}
      width="100%"
      height="100%"
    >
      <defs>
        <pattern
          id={`grid-${id}`}
          x={patternOffset[0] - 1}
          y={patternOffset[1] - 1}
          width={cellSize}
          height={cellSize}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`}
            fill="transparent"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
        </pattern>
      </defs>
      <rect fill={`url(#grid-${id})`} width="100%" height="100%" />
    </svg>
  );
}
```

### How the SVG path works

The path `M ${cellSize} 0 L 0 0 0 ${cellSize}` draws an "L" shape:

```
(cellSize, 0) ──── (0, 0)
                     │
                     │
                   (0, cellSize)
```

When repeated via `<pattern>`, this creates a full grid because each cell's top + left edge merges with the next cell's bottom + right edge.

### Props

| Prop | Default | What it does |
|------|---------|-------------|
| `cellSize` | `12` | Space between grid lines in px. Dub uses `80` for hero/CTA sections. |
| `strokeWidth` | `1` | Thickness of the lines. Always 1px. |
| `patternOffset` | `[0, 0]` | Shifts the grid alignment to fine-tune positioning. |
| `className` | — | To control position, size, color, and masking. |

### How Dub.co uses it

**Hero section** (`ui/placeholders/hero.tsx`):
```tsx
<Grid
  cellSize={80}
  patternOffset={[1, -58]}
  className="inset-[unset] left-1/2 top-0 w-[1200px] -translate-x-1/2 text-neutral-300 [mask-image:linear-gradient(transparent,black_70%)]"
/>
```

**CTA section** (`ui/placeholders/cta.tsx`):
```tsx
<Grid
  cellSize={80}
  patternOffset={[1, -20]}
  className="inset-[unset] left-1/2 top-0 w-[1200px] -translate-x-1/2 text-neutral-200 [mask-image:linear-gradient(black_50%,transparent)]"
/>
```

### Key patterns to notice

1. **`pointer-events-none`** — Grid is non-interactive, content sits on top
2. **`absolute inset-0`** — Covers the parent container completely
3. **`text-black/10`** or `text-neutral-200/300` — Color is set via `currentColor` (stroke inherits text color)
4. **`mask-image: linear-gradient(...)`** — Fades the grid in/out so it doesn't dominate. Hero fades IN from top, CTA fades OUT to bottom.
5. **`w-[1200px]` + `left-1/2 -translate-x-1/2`** — Grid is wider than the container and centered, so it looks infinite
6. **`useId()`** — Each Grid instance gets a unique SVG pattern ID to avoid conflicts when multiple Grids exist on the same page

---

## Part 2: Tailwind Ruled Dividers (Content Borders)

### What it is

Instead of giving each card its own border/shadow, content cells **share 1px divider lines** between them using Tailwind's `divide-x`, `divide-y`, and explicit `border-t/b/l/r` utilities.

### How Dub.co uses it

**Features section** (`ui/placeholders/features-section.tsx`):

```tsx
{/* 2-column grid with NO gap */}
<div className="grid grid-cols-1 sm:grid-cols-2">

  {/* Row 1: Two cards, vertical divider on desktop, horizontal on mobile */}
  <div className="contents divide-neutral-200 max-sm:divide-y sm:divide-x">
    <FeatureCard ... />
    <FeatureCard ... />
  </div>

  {/* Row 2: Full-width card with explicit top & bottom border */}
  <FeatureCard className="border-y border-neutral-200 sm:col-span-2" ... />

  {/* Row 3: Two more cards, same pattern + forced top border on each child */}
  <div className="contents divide-neutral-200 max-sm:divide-y sm:divide-x [&>*]:border-t [&>*]:border-neutral-200">
    <FeatureCard ... />
    <FeatureCard ... />
  </div>
</div>
```

### The visual result

```
┌─────────────────┬─────────────────┐
│  Custom Domains  │    QR Codes     │  ← divide-x between them
├─────────────────┴─────────────────┤
│        Analytics (full width)      │  ← border-y
├─────────────────┬─────────────────┤
│ Advanced Links   │  Collaboration  │  ← divide-x + border-t
└─────────────────┴─────────────────┘
```

Every line is a **single shared 1px hairline**. No doubled borders. No gaps. No shadows. Just structure.

### Key Tailwind classes

| Class | What it does |
|-------|-------------|
| `divide-x` | Adds `border-left` to all children except the first |
| `divide-y` | Adds `border-top` to all children except the first |
| `divide-neutral-200` | Sets the divider color |
| `border-t border-neutral-200` | Explicit top border on a specific element |
| `border-y` | Top AND bottom border |
| `[&>*]:border-t` | Forces top border on ALL direct children |
| `contents` | Makes the wrapper invisible to the grid layout (children flow into parent grid) |

### The `contents` trick

```tsx
<div className="contents divide-neutral-200 sm:divide-x">
```

`display: contents` makes the wrapper div **invisible to the layout** — its children act as direct children of the parent grid. But the `divide-x` still works because it applies borders to direct children of THIS div. This lets you group cards for divide behavior without breaking the grid layout.

---

## Part 3: Customers/Testimonials Grid (The Bento Variation)

On the `/customers` page, Dub.co uses the same border approach but with **asymmetric cell sizes** — some cells span 2 columns or 2 rows. This is the **Bento grid** pattern.

```
┌────────────┬────────────┬────────────────────────┐
│   Twilio    │   Buffer   │       Framer           │
│   (logo)    │   (logo)   │    (testimonial +      │
│             │            │     quote + avatar)     │
├────────────┼────────────┤                         │
│   Vercel    │ Polymarket │                         │
│ (testimonial│   (logo)   │                         │
│  + quote)   │            │                         │
└────────────┴────────────┴────────────────────────┘
```

The borders flow seamlessly — vertical lines between columns, horizontal lines between rows, all single 1px.

---

## Part 4: Adapting for Dark Theme (zak-dev / iamzak.xyz)

Dub.co is light theme (`black/10` on white bg). For the zak-dev portfolio:

| Dub.co (Light) | zak-dev (Dark) |
|----------------|----------------|
| `text-black/10` | `text-white/10` or `text-white/5` |
| `divide-neutral-200` | `divide-white/10` |
| `border-neutral-200` | `border-white/10` |
| `bg-neutral-50` | `bg-white/5` or `bg-black/60` |
| `mask-image: linear-gradient(...)` | Same technique, just inverted |

### Example dark Grid usage:

```tsx
<Grid
  cellSize={80}
  patternOffset={[0, 0]}
  className="absolute inset-0 text-white/[0.06] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
/>
```

---

## Part 5: File Locations in Dub.co Codebase

| File | What it is |
|------|-----------|
| `packages/ui/src/grid.tsx` | The `<Grid />` SVG component |
| `apps/web/ui/placeholders/hero.tsx` | Hero using Grid + gradient blurs |
| `apps/web/ui/placeholders/cta.tsx` | CTA section using Grid |
| `apps/web/ui/placeholders/features-section.tsx` | Feature cards with `divide-x/y` + `border-t/b` |
| `apps/web/ui/placeholders/logos.tsx` | Logo marquee with infinite scroll |
| `apps/web/styles/globals.css` | Global styles (scrollbar, etc.) |
| `packages/tailwind-config/` | Shared Tailwind config |

---

## Design Vocabulary Cheat Sheet

| Term | What it means |
|------|--------------|
| **Ruled layout** | A layout where thin lines (rules) separate content areas — borrowed from newspapers/editorial design |
| **SVG Grid Pattern** | Repeating SVG lines used as a background texture (what `<Grid />` does) |
| **Bento grid** | Asymmetric grid where cells have different sizes (Apple-popularized term) |
| **Divide utilities** | Tailwind's `divide-x/y` for shared borders between siblings |
| **Graph paper / Blueprint** | The visual metaphor — the page looks like it's drawn on engineering paper |
| **Hairline** | A 1px line — the thinnest possible visual divider |
| **`contents` trick** | Using `display: contents` to group elements for divide behavior without affecting grid layout |
