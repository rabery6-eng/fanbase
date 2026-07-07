"use client";

import { motion } from "framer-motion";
import type { Team } from "@/lib/teams";
import { teams } from "@/lib/teams";
import { TeamCard } from "./TeamCard";

type TeamSelectProps = {
  onSelectTeam: (team: Team) => void;
  onRecommend: () => void;
};

export function TeamSelect({ onSelectTeam, onRecommend }: TeamSelectProps) {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10 sm:px-6">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-3xl flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            KBO FAN HOME
          </p>
          <h1 className="text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl">
            당신의 팀을 선택하세요
          </h1>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-7 text-slate-500 sm:text-base">
            응원팀을 선택하면 당신만의 KBO 홈이 만들어집니다.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { delayChildren: 0.14, staggerChildren: 0.035 },
            },
          }}
          className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {teams.map((team) => (
            <motion.div
              key={team.id}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <TeamCard team={team} onSelect={onSelectTeam} />
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          type="button"
          onClick={onRecommend}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.35 }}
          className="mx-auto mt-7 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200"
        >
          아직 응원팀이 없어요
        </motion.button>
      </section>
    </main>
  );
}
