"use client";

import { motion } from "framer-motion";
import type { Team } from "@/lib/teams";

type TeamCardProps = {
  team: Team;
  onSelect: (team: Team) => void;
};

export function TeamCard({ team, onSelect }: TeamCardProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(team)}
      className="group flex min-h-24 items-center justify-between rounded-2xl border border-slate-200/80 bg-white px-5 text-left shadow-sm outline-none transition-colors hover:border-slate-300 focus-visible:ring-4 focus-visible:ring-slate-200"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 30 }}
    >
      <span className="text-[15px] font-semibold tracking-[-0.01em] text-slate-950">
        {team.name}
      </span>
      <span
        className="h-3.5 w-3.5 rounded-full shadow-[0_0_0_6px_rgba(15,23,42,0.04)] transition-transform group-hover:scale-110"
        style={{ backgroundColor: team.color }}
        aria-hidden="true"
      />
    </motion.button>
  );
}
