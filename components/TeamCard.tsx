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
      className="group relative flex min-h-[132px] overflow-hidden rounded-[1.6rem] p-4 text-left shadow-[0_18px_40px_rgba(15,23,42,0.12)] outline-none focus-visible:ring-4 focus-visible:ring-slate-300"
      style={{ backgroundColor: team.color }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.965 }}
      transition={{ type: "spring", stiffness: 420, damping: 30 }}
    >
      <span className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/12 transition-transform group-hover:scale-110" />
      <span className="absolute bottom-3 right-3 h-10 w-10 rounded-full border border-white/16 bg-white/10" />
      <span
        className="relative z-10 mt-auto text-[18px] font-black leading-tight tracking-[-0.04em] text-white"
      >
        {team.name}
      </span>
    </motion.button>
  );
}
