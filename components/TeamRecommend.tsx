"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { OnboardingLayout } from "@/components/OnboardingLayout";
import { RecommendCard } from "@/components/RecommendCard";
import { shuffleItems } from "@/lib/shuffle";
import {
  teamRecommendations,
  type TeamRecommendation,
} from "@/lib/team-recommendations";
import type { Team } from "@/lib/teams";

type TeamRecommendProps = {
  onBack: () => void;
  onSelectTeam: (team: Team) => void;
};

export function TeamRecommend({ onBack, onSelectTeam }: TeamRecommendProps) {
  const [orderedRecommendations, setOrderedRecommendations] =
    useState<TeamRecommendation[]>(teamRecommendations);

  useEffect(() => {
    setOrderedRecommendations(shuffleItems(teamRecommendations));
  }, []);

  const handleSelect = (recommendation: TeamRecommendation) => {
    onSelectTeam(recommendation.team);
  };

  return (
    <OnboardingLayout
      eyebrow="TEAM FINDER"
      title="어떤 야구를 좋아하세요?"
      description="끌리는 팀의 매력을 하나 골라보세요."
      footer={
        <button
          type="button"
          onClick={onBack}
          className="mx-auto block rounded-full px-4 py-3 text-sm font-bold text-slate-500 transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200"
        >
          직접 팀을 고를래요
        </button>
      }
    >
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { delayChildren: 0.1, staggerChildren: 0.035 },
          },
        }}
        className="space-y-3"
      >
        {orderedRecommendations.map((recommendation) => (
          <motion.div
            key={recommendation.team.id}
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <RecommendCard
              recommendation={recommendation}
              onSelect={handleSelect}
            />
          </motion.div>
        ))}
      </motion.div>
    </OnboardingLayout>
  );
}
