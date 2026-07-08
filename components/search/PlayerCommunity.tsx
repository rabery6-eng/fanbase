"use client";

import { initialCommunityPosts } from "@/lib/community";
import type { PlayerRecord } from "@/lib/records";

type PlayerCommunityProps = {
  player: PlayerRecord;
};

export function PlayerCommunity({ player }: PlayerCommunityProps) {
  const posts = initialCommunityPosts
    .filter((post) => post.team.id === player.team.id)
    .slice(0, 3);

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-black tracking-[-0.03em] text-slate-950">
        관련 게시글
      </h2>
      <div className="mt-4 space-y-3">
        {posts.map((post) => (
          <div key={post.id} className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-black text-slate-400">{post.category}</p>
            <p className="mt-1 text-sm font-black leading-5 text-slate-900">
              {post.title}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
