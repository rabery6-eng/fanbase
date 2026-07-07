"use client";

import type { PlayerRecord } from "@/lib/records";

type PlayerCardProps = {
  player: PlayerRecord;
};

export function PlayerCard({ player }: PlayerCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex gap-4">
        <div
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-lg font-black text-white"
          style={{ backgroundColor: player.team.color }}
          aria-label="사진 Placeholder"
        >
          {player.name.slice(0, 1)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-lg font-black tracking-[-0.03em] text-slate-950">
                {player.name}
              </h2>
              <p className="mt-1 text-xs font-bold text-slate-400">
                {player.team.name} · {player.position}
              </p>
            </div>
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-black text-slate-500">
              WAR {player.war}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        <Stat label="타율" value={player.battingAverage} />
        <Stat label="홈런" value={player.homeRuns} />
        <Stat label="타점" value={player.rbi} />
        <Stat label="OPS" value={player.ops} />
        <Stat label="도루" value={player.steals} />
        <Stat label="ERA" value={player.era} />
        <Stat label="탈삼진" value={player.strikeouts} />
        <Stat label="세이브" value={player.saves} />
        <Stat label="WAR" value={player.war} />
      </div>

      <div className="mt-4">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">
          최근 5경기
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {player.recentGames.map((game, index) => (
            <span
              key={`${game}-${index}`}
              className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-500"
            >
              {game}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-3">
      <p className="text-[11px] font-bold text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-black text-slate-950">{value}</p>
    </div>
  );
}
