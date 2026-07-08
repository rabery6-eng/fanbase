"use client";

import type { CommunityPost } from "@/lib/community";

type CommunityPostCardProps = {
  post: CommunityPost;
};

export function CommunityPostCard({ post }: CommunityPostCardProps) {
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
    </article>
  );
}
