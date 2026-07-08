"use client";

import type { CommunityPost } from "@/lib/community";
import type { PlayerRecord } from "@/lib/records";

type CommunityPostCardProps = {
  post: CommunityPost;
  player?: PlayerRecord;
  onOpenPlayer?: (player: PlayerRecord) => void;
};

export function CommunityPostCard({
  post,
  player,
  onOpenPlayer,
}: CommunityPostCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="rounded-full px-3 py-1 text-[11px] font-black text-white"
          style={{ backgroundColor: post.team.color }}
        >
          {post.team.name}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-black text-slate-500">
          {post.category}
        </span>
        {post.linkedGameId && (
          <span className="rounded-full bg-slate-950 px-3 py-1 text-[11px] font-black text-white">
            경기 연결됨
          </span>
        )}
      </div>
      <h2 className="mt-4 text-lg font-black leading-6 tracking-[-0.03em] text-slate-950">
        {post.title}
      </h2>
      <p className="mt-2 text-sm font-medium leading-6 text-slate-500">
        {post.preview}
      </p>
      <div className="mt-4 flex items-center justify-between gap-3 text-xs font-bold text-slate-400">
        <span>
          {post.author} · {post.createdAt}
        </span>
        <span>
          좋아요 {post.likes} · 댓글 {post.comments}
        </span>
      </div>
      {player && onOpenPlayer && (
        <button
          type="button"
          onClick={() => onOpenPlayer(player)}
          className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-black text-slate-700 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200"
        >
          관련 선수 보기 · {player.name}
        </button>
      )}
    </article>
  );
}
