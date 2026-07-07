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
      className="flex min-h-[82px] w-full items-center justify-center rounded-[1.35rem] px-3 py-4 text-center shadow-[0_14px_32px_rgba(15,23,42,0.12)] outline-none focus-visible:ring-4 focus-visible:ring-slate-300"
      style={{ backgroundColor: team.color }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.965 }}
      transition={{ type: "spring", stiffness: 420, damping: 30 }}
    >
      <span className="whitespace-nowrap text-[17px] font-black leading-none tracking-[-0.04em] text-white">
        {team.name}
      </span>
    </motion.button>
  );
}
