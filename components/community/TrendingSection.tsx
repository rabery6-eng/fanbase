"use client";

import type { CommunityPost } from "@/lib/community";
import { recommendedSections } from "@/lib/community";

type TrendingSectionProps = {
  posts: CommunityPost[];
};

export function TrendingSection({ posts }: TrendingSectionProps) {
  return (
    <>
      {recommendedSections.map((section, index) => {
        const post = posts[index % posts.length];

        return (
          <article
            key={section.title}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-lg font-black tracking-[-0.03em] text-slate-950">
              {section.title}
            </p>
            <p className="mt-2 text-sm font-medium leading-6 text-slate-500">
              {section.description}
            </p>
            {post && (
              <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: post.team.color }}
                    aria-hidden="true"
                  />
                  <span className="text-xs font-black text-slate-400">
                    {post.team.name} · {post.category}
                  </span>
                </div>
                <p className="mt-2 text-sm font-black leading-5 text-slate-900">
                  {post.title}
                </p>
              </div>
            )}
          </article>
        );
      })}
    </>
  );
}
