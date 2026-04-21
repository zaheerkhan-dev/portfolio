// ═══════════════════════════════════════════════════════════════
// zak-dev — Comment Card (Mobile Variant)
//
// A single comment entry rendered as a vertical card.
// Used in the feed on mobile viewports (<md).
//
// DESIGN:
//   - Emerald badge for comment number
//   - Author + topic + comment stacked vertically
//   - Link icon bottom-right
//   - border-b for ruled divider between cards
//
// USED BY: views/challenge/sections/challenge-feed/index.tsx
// ═══════════════════════════════════════════════════════════════

import { ExternalLink } from "lucide-react";
import type { ChallengeComment } from "@/data/challenge";

interface CommentCardProps {
  comment: ChallengeComment;
}

export function CommentCard({ comment }: CommentCardProps) {
  return (
    <div className="py-5 border-b border-white/10">

      {/* Top Row: Badge + Time + Link */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          {/* Number Badge */}
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
            {comment.id}
          </span>
          {/* Time */}
          <span className="text-gray-500 font-mono text-xs">
            {comment.time}
          </span>
        </div>

        {/* Link Icon */}
        {comment.commentUrl ? (
          <a
            href={comment.commentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-white transition-colors duration-300 p-1"
            aria-label={`View comment #${comment.id} on LinkedIn`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="text-gray-700 p-1">
            <ExternalLink className="w-3.5 h-3.5" />
          </span>
        )}
      </div>

      {/* Context Context */}
      <div className="flex items-baseline gap-1.5 mb-1.5 flex-wrap">
        <span className="text-gray-500 text-xs">commented on</span>
        <span className="text-white font-medium text-sm">{comment.author}&apos;s</span>
        <span className="text-gray-500 text-xs">post</span>
        <span className="text-gray-500 text-xs italic">&ldquo;{comment.topic}&rdquo;</span>
      </div>

      {/* Comment Snippet */}
      <p className="text-gray-400 text-sm italic leading-relaxed line-clamp-2">
        &ldquo;{comment.comment}&rdquo;
      </p>
    </div>
  );
}
