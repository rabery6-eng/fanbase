"use client";

import { myPosts } from "@/lib/my-profile";

export function MyPostsPreview() {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-black tracking-[-0.03em] text-slate-950">
        내 활동
      </h2>
      <div className="mt-4 divide-y divide-slate-100">
        {myPosts.map((post) => (
          <div key={`${post.type}-${post.title}`} className="py-3 first:pt-0 last:pb-0">
            <p className="text-xs font-black text-slate-400">{post.type}</p>
            <p className="mt-1 text-sm font-bold leading-5 text-slate-900">
              {post.title}
            </p>
            <p className="mt-1 text-xs font-medium text-slate-400">{post.meta}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
