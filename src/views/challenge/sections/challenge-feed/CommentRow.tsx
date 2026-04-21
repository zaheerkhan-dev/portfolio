// ═══════════════════════════════════════════════════════════════
// zak-dev — Comment Row (Desktop Variant)
//
// A single comment entry rendered as a horizontal row.
// Used in the feed table on desktop viewports (md+).
//
// DESIGN:
//   - 4 cells: # | TIME | CONTENT | LINK
//   - border-b for ruled divider between rows
//   - Monospace for ID and time
//   - Author bold, topic muted, comment in italic quotes
//
// USED BY: views/challenge/sections/challenge-feed/index.tsx
// ═══════════════════════════════════════════════════════════════

import { ExternalLink } from "lucide-react";
import type { ChallengeComment } from "@/data/challenge";

interface CommentRowProps {
  comment: ChallengeComment;
}

export function CommentRow({ comment }: CommentRowProps) {
  return (
    <div className="flex items-start gap-0 border-b border-white/10 group/row hover:bg-white/[0.02] transition-colors duration-200">

      {/* Time */}
      <div className="w-20 shrink-0 py-4 px-4">
        <span className="text-gray-500 font-mono text-xs">
          {comment.time}
        </span>
      </div>

      {/* Divider */}
      <div className="w-px bg-white/10 self-stretch shrink-0" />

      {/* Content */}
      <div className="flex-1 py-4 px-4 min-w-0">
        <div className="flex items-baseline gap-1.5 mb-1 flex-wrap">
          <span className="text-emerald-400 font-mono text-xs font-bold mr-1">#{comment.id}</span>
          <span className="text-gray-500 text-xs">commented on</span>
          <span className="text-white font-medium text-sm">{comment.author}&apos;s</span>
          <span className="text-gray-500 text-xs">post</span>
          <span className="text-gray-500 text-xs italic truncate">&ldquo;{comment.topic}&rdquo;</span>
        </div>
        <p className="text-gray-400 text-sm italic leading-relaxed truncate">
          &ldquo;{comment.comment}&rdquo;
        </p>
      </div>

      {/* Divider */}
      <div className="w-px bg-white/10 self-stretch shrink-0" />

      {/* Link */}
      <div className="w-12 shrink-0 py-4 flex items-center justify-center">
        {comment.commentUrl ? (
          <a
            href={comment.commentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-white transition-colors duration-300"
            aria-label={`View comment #${comment.id} on LinkedIn`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="text-gray-700">
            <ExternalLink className="w-3.5 h-3.5" />
          </span>
        )}
      </div>
    </div>
  );
}
