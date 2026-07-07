"use client";

import { motion } from "framer-motion";
import { OnboardingLayout } from "@/components/OnboardingLayout";
import type { Team } from "@/lib/teams";
import { teams } from "@/lib/teams";
import { TeamCard } from "./TeamCard";

type TeamSelectProps = {
  onSelectTeam: (team: Team) => void;
  onRecommend: () => void;
};

export function TeamSelect({ onSelectTeam, onRecommend }: TeamSelectProps) {
  return (
    <OnboardingLayout
      title="당신의 팀을 선택하세요"
      description="응원팀을 선택하면 당신만의 KBO 홈이 만들어집니다."
      footer={
        <motion.button
          type="button"
          onClick={onRecommend}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.35 }}
          className="mx-auto block w-full rounded-full border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200"
        >
          아직 응원팀이 없어요. 나에게 맞는 팀 찾기
        </motion.button>
      }
    >
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { delayChildren: 0.12, staggerChildren: 0.035 },
          },
        }}
        className="grid grid-cols-2 gap-3"
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
    </OnboardingLayout>
  );
}
