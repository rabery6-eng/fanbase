"use client";

import { motion } from "framer-motion";
import type { TeamRecommendation } from "@/lib/team-recommendations";

type RecommendCardProps = {
  recommendation: TeamRecommendation;
  onSelect: (recommendation: TeamRecommendation) => void;
};

export function RecommendCard({
  recommendation,
  onSelect,
}: RecommendCardProps) {
  const { strength, description } = recommendation;

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(recommendation)}
      className="group w-full rounded-[1.5rem] border border-slate-200 bg-white p-5 text-left shadow-sm outline-none transition hover:border-slate-300 focus-visible:ring-4 focus-visible:ring-slate-200"
      whileTap={{ scale: 0.975 }}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 420, damping: 30 }}
    >
      <p className="text-xl font-black leading-tight tracking-[-0.045em] text-slate-950">
        {strength}
      </p>
      <p className="mt-3 text-sm font-medium leading-6 text-slate-500">
        {description}
      </p>
    </motion.button>
  );
}
