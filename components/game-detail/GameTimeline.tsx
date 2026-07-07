"use client";

import type { Game } from "@/lib/games";
import type { Team } from "@/lib/teams";
import { TimelineEvent, type TimelineEventItem } from "./TimelineEvent";

type GameTimelineProps = {
  game: Game;
  team: Team;
};

const timelineEvents: TimelineEventItem[] = [
  { inning: "1회초", type: "안타", description: "선두 타자가 깔끔한 안타로 출루" },
  { inning: "3회말", type: "홈런", description: "중심 타선의 큼직한 한 방" },
  { inning: "5회초", type: "교체", description: "흐름을 바꾸기 위한 투수 교체" },
  { inning: "7회말", type: "적시타", description: "동점 주자를 불러들이는 결정적 타구" },
];

export function GameTimeline({ game, team }: GameTimelineProps) {
  const events =
    game.status === "예정"
      ? timelineEvents.slice(0, 2).map((event) => ({
          ...event,
          description: "경기 시작 후 주요 장면이 이곳에 쌓입니다.",
        }))
      : timelineEvents;

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-black tracking-[-0.03em] text-slate-950">
          경기 타임라인
        </h2>
        <span className="text-xs font-bold text-slate-400">{game.status}</span>
      </div>
      <div className="mt-5 space-y-0">
        {events.map((event, index) => (
          <TimelineEvent
            key={`${event.inning}-${event.type}-${index}`}
            event={event}
            isLast={index === events.length - 1}
            team={team}
          />
        ))}
      </div>
    </article>
  );
}
