"use client";

import type { PlayerRecord } from "@/lib/records";

type PlayerStatsProps = {
  player: PlayerRecord;
};

export function PlayerStats({ player }: PlayerStatsProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-black tracking-[-0.03em] text-slate-950">
        시즌 기록
      </h2>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <Stat label="타율" value={player.battingAverage} />
        <Stat label="홈런" value={player.homeRuns} />
        <Stat label="타점" value={player.rbi} />
        <Stat label="OPS" value={player.ops} />
        <Stat label="WAR" value={player.war} />
        <Stat label="도루" value={player.steals} />
        <Stat label="ERA" value={player.era} />
        <Stat label="탈삼진" value={player.strikeouts} />
        <Stat label="세이브" value={player.saves} />
      </div>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-3">
      <p className="text-[11px] font-black text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-black text-slate-950">{value}</p>
    </div>
  );
}
