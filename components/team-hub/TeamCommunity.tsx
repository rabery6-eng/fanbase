"use client";

import type { CommunityPost } from "@/lib/community";

type TeamCommunityProps = {
  posts: CommunityPost[];
};

export function TeamCommunity({ posts }: TeamCommunityProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-black tracking-[-0.03em] text-slate-950">
        팬 반응
      </h2>
      <div className="mt-4 space-y-3">
        {posts.map((post) => (
          <div key={post.id} className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-black text-slate-400">
              {post.author} · {post.category}
            </p>
            <p className="mt-1 text-sm font-black leading-5 text-slate-900">
              {post.title}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
