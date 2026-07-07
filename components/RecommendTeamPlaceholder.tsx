"use client";

import { motion } from "framer-motion";

type RecommendTeamPlaceholderProps = {
  onBack: () => void;
};

export function RecommendTeamPlaceholder({
  onBack,
}: RecommendTeamPlaceholderProps) {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10 sm:px-6">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-xl flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft sm:p-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Team Finder
          </p>
          <h1 className="mt-5 text-2xl font-bold tracking-[-0.035em] text-slate-950 sm:text-4xl">
            몇 가지 질문으로 당신에게 어울리는 팀을 추천해드릴게요.
          </h1>
          <button
            type="button"
            onClick={onBack}
            className="mt-8 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-300"
          >
            팀 선택으로 돌아가기
          </button>
        </motion.div>
      </section>
    </main>
  );
}
