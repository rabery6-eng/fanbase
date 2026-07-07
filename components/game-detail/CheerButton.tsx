"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Team } from "@/lib/teams";

type CheerButtonProps = {
  team: Team;
};

export function CheerButton({ team }: CheerButtonProps) {
  const [cheerCount, setCheerCount] = useState(1284);

  return (
    <article className="h-full rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
        Cheer Meter
      </p>
      <p className="mt-3 text-3xl font-black tracking-[-0.06em] text-slate-950">
        {cheerCount.toLocaleString()}
      </p>
      <p className="mt-1 text-sm font-medium text-slate-500">오늘의 응원</p>
      <motion.button
        type="button"
        onClick={() => setCheerCount((count) => count + 1)}
        className="mt-5 w-full rounded-2xl px-4 py-3 text-sm font-black text-white"
        style={{ backgroundColor: team.color }}
        whileTap={{ scale: 0.94 }}
      >
        응원하기
      </motion.button>
    </article>
  );
}
