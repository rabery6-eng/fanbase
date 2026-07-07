"use client";

import type { Team } from "@/lib/teams";

type FanChatPreviewProps = {
  team: Team;
};

const chats = [
  "오늘 초반 분위기 괜찮은데요?",
  "선발이 5회까지만 버텨주면 승산 있어요.",
  "응원 소리 벌써 올라오는 느낌입니다.",
];

export function FanChatPreview({ team }: FanChatPreviewProps) {
  return (
    <article className="h-full rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-black tracking-[-0.03em] text-slate-950">
        팬 채팅
      </h2>
      <div className="mt-4 space-y-2">
        {chats.map((chat) => (
          <p
            key={chat}
            className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium leading-5 text-slate-600"
          >
            {chat}
          </p>
        ))}
      </div>
      <button
        type="button"
        className="mt-4 w-full rounded-2xl px-4 py-3 text-sm font-black text-white"
        style={{ backgroundColor: team.color }}
      >
        채팅방 입장
      </button>
    </article>
  );
}
