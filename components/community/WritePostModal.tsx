"use client";

import { useState } from "react";
import type { CommunityCategory, CommunityPost } from "@/lib/community";
import type { Team } from "@/lib/teams";
import { PostCategorySelector } from "./PostCategorySelector";
import { TeamTagSelector } from "./TeamTagSelector";

type WritePostModalProps = {
  team: Team;
  onClose: () => void;
  onSubmit: (post: CommunityPost) => void;
};

export function WritePostModal({ team, onClose, onSubmit }: WritePostModalProps) {
  const [category, setCategory] = useState<CommunityCategory>("자유글");
  const [teamTag, setTeamTag] = useState<Team>(team);
  const [title, setTitle] = useState("");
  const [preview, setPreview] = useState("");

  const canSubmit = title.trim().length > 0 && preview.trim().length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-end bg-slate-950/28 px-3 pb-3 backdrop-blur-sm sm:items-center sm:justify-center">
      <section className="mx-auto w-full max-w-md rounded-[2rem] bg-white p-5 shadow-soft">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-black tracking-[-0.04em] text-slate-950">
            글쓰기
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-slate-100 px-3 py-2 text-xs font-black text-slate-600"
          >
            닫기
          </button>
        </div>

        <div className="mt-5 space-y-5">
          <PostCategorySelector
            value={category}
            color={team.color}
            onChange={setCategory}
          />
          <TeamTagSelector value={teamTag} color={team.color} onChange={setTeamTag} />

          <label className="block">
            <span className="text-sm font-black text-slate-900">제목</span>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="mt-2 h-12 w-full rounded-2xl border border-slate-200 px-4 text-sm font-semibold outline-none focus:ring-4 focus:ring-slate-200"
              placeholder="팬들과 나누고 싶은 순간"
            />
          </label>

          <label className="block">
            <span className="text-sm font-black text-slate-900">내용</span>
            <textarea
              value={preview}
              onChange={(event) => setPreview(event.target.value)}
              className="mt-2 min-h-28 w-full resize-none rounded-2xl border border-slate-200 p-4 text-sm font-semibold leading-6 outline-none focus:ring-4 focus:ring-slate-200"
              placeholder="오늘 KBO에서 기억에 남은 이야기를 남겨보세요."
            />
          </label>
        </div>

        <button
          type="button"
          disabled={!canSubmit}
          onClick={() => {
            if (!canSubmit) {
              return;
            }

            onSubmit({
              id: `post-${Date.now()}`,
              team: teamTag,
              category,
              title: title.trim(),
              preview: preview.trim(),
              author: "나",
              createdAt: "방금 전",
              likes: 0,
              comments: 0,
              linkedGameId:
                category === "오늘 경기 이야기" ? "my-team-game" : undefined,
            });
          }}
          className="mt-5 w-full rounded-2xl px-4 py-4 text-sm font-black text-white disabled:cursor-not-allowed disabled:bg-slate-300"
          style={canSubmit ? { backgroundColor: team.color } : undefined}
        >
          올리기
        </button>
      </section>
    </div>
  );
}
