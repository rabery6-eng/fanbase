"use client";

import { useState } from "react";
import type { Game } from "@/lib/games";
import type { Team } from "@/lib/teams";

type PredictionCardProps = {
  game: Game;
  team: Team;
};

export function PredictionCard({ game, team }: PredictionCardProps) {
  const [prediction, setPrediction] = useState<"home" | "away" | null>(null);

  return (
    <article className="h-full rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-black tracking-[-0.03em] text-slate-950">
        승부예측
      </h2>
      <p className="mt-2 text-sm font-medium text-slate-500">
        오늘 이길 팀을 골라보세요.
      </p>
      <div className="mt-4 grid gap-2">
        <PredictButton
          active={prediction === "away"}
          color={team.color}
          label={`${game.awayTeam.name} 승`}
          onClick={() => setPrediction("away")}
        />
        <PredictButton
          active={prediction === "home"}
          color={team.color}
          label={`${game.homeTeam.name} 승`}
          onClick={() => setPrediction("home")}
        />
      </div>
    </article>
  );
}

function PredictButton({
  active,
  color,
  label,
  onClick,
}: {
  active: boolean;
  color: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-2xl border px-4 py-3 text-sm font-black transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200"
      style={
        active
          ? { borderColor: color, backgroundColor: `${color}12`, color }
          : { borderColor: "#e2e8f0", color: "#475569" }
      }
    >
      {label}
    </button>
  );
}
