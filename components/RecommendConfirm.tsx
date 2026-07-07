"use client";

import { motion } from "framer-motion";
import { OnboardingLayout } from "@/components/OnboardingLayout";
import { teamRecommendations } from "@/lib/team-recommendations";
import type { Team } from "@/lib/teams";

type RecommendConfirmProps = {
  team: Team;
  onConfirm: () => void;
  onBack: () => void;
};

export function RecommendConfirm({
  team,
  onConfirm,
  onBack,
}: RecommendConfirmProps) {
  const recommendation = teamRecommendations.find(
    (item) => item.team.id === team.id,
  );

  return (
    <OnboardingLayout
      eyebrow="YOUR TEAM"
      title={`${team.name}의 팬으로 시작하시겠습니까?`}
      description="마음이 움직였다면, 이제 당신만의 KBO 홈을 열어볼 시간입니다."
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft"
      >
        <div
          className="h-3"
          style={{ backgroundColor: team.color }}
          aria-hidden="true"
        />
        <div className="p-6">
          <div className="flex items-center gap-3">
            <span
              className="h-4 w-4 rounded-full"
              style={{ backgroundColor: team.color }}
              aria-hidden="true"
            />
            <p className="text-sm font-bold text-slate-500">{team.name}</p>
          </div>
          <p className="mt-5 text-2xl font-black leading-tight tracking-[-0.05em] text-slate-950">
            {recommendation?.strength}
          </p>
          <p className="mt-4 text-sm font-medium leading-6 text-slate-500">
            {recommendation?.description}
          </p>
        </div>
      </motion.div>

      <div className="mt-5 grid gap-3">
        <motion.button
          type="button"
          onClick={onConfirm}
          className="rounded-full px-5 py-4 text-sm font-black text-white shadow-lg outline-none focus-visible:ring-4 focus-visible:ring-slate-300"
          style={{ backgroundColor: team.color }}
          whileTap={{ scale: 0.98 }}
        >
          네, 이 팀으로 시작할게요
        </motion.button>
        <button
          type="button"
          onClick={onBack}
          className="rounded-full border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-slate-600 shadow-sm transition hover:text-slate-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200"
        >
          다시 고를래요
        </button>
      </div>
    </OnboardingLayout>
  );
}
