// ═══════════════════════════════════════════════════════════════
// zak-dev — 250 Comments Challenge Data
//
// Static data file for the /250 challenge tracking page.
// You populate this manually during the challenge.
//
// WORKFLOW:
//   1. Comment on LinkedIn
//   2. Click ••• → "Copy link to comment"
//   3. Add entry to CHALLENGE_COMMENTS array below
//   4. git push → Vercel auto-deploys (~30 seconds)
//   5. Live at iamzak.xyz/250
//
// USED BY: views/challenge/sections/*
// ═══════════════════════════════════════════════════════════════

export interface ChallengeComment {
  /** Sequential number: 1 → 250 */
  id: number;
  /** Time of comment: "9:14 AM" */
  time: string;
  /** Author of the post you commented on */
  author: string;
  /** Topic/subject of their post */
  topic: string;
  /** Your actual comment (snippet) */
  comment: string;
  /** Link to the original LinkedIn post */
  postUrl?: string;
  /** Direct "Copy link to comment" URL — the proof */
  commentUrl?: string;
}

export const CHALLENGE_META = {
  title: "250 Comments Challenge",
  subtitle: "I average 2 comments a day. so naturally my brain said \"try 250.\"",
  date: "April 22, 2026",
  startTime: "9:00 AM IST",
  goal: 250,
  /** Challenge status — change this AFTER the challenge is over:
   *  "pending"   → challenge hasn't ended yet (default)
   *  "completed" → you hit 250! (shows success message)
   *  "failed"    → you didn't hit 250 (shows honest message)
   */
  status: "pending" as "pending" | "completed" | "failed",
} as const;

export const CHALLENGE_COMMENTS: ChallengeComment[] = [
  // Add entries here during the challenge
  // See build-docs/README.md for the copy-paste template
];
