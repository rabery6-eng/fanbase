"use client";

import { motion } from "framer-motion";
import type { Team } from "@/lib/teams";

type TeamTransitionProps = {
  team: Team;
};

export function TeamTransition({ team }: TeamTransitionProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 h-10 w-10 rounded-full"
        style={{ backgroundColor: team.color }}
        initial={{ x: "-50%", y: "-50%", scale: 0 }}
        animate={{ x: "-50%", y: "-50%", scale: 90 }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="relative z-10 px-6 text-center text-white"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.34, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
          환영합니다.
        </p>
        <p className="mt-4 text-base font-medium text-white/82 sm:text-lg">
          이제부터 당신의 팀은 {team.name}입니다.
        </p>
      </motion.div>
    </motion.div>
  );
}
