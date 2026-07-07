"use client";

import { motion } from "framer-motion";
import type { Team } from "@/lib/teams";

type HomePreviewProps = {
  team: Team;
};

const previewItems = ["오늘 경기", "AI 브리핑", "팬 반응", "팀 뉴스"];

export function HomePreview({ team }: HomePreviewProps) {
  return (
    <main
      className="min-h-screen px-5 py-8 text-white sm:px-6"
      style={{ backgroundColor: team.color }}
    >
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-4xl flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 inline-flex rounded-full bg-white/14 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            Personal KBO Home
          </p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-[-0.05em] sm:text-6xl">
            Welcome to {team.name}
          </h1>
          <p className="mt-5 text-base font-medium text-white/78 sm:text-lg">
            당신의 야구는 이곳에서 시작됩니다.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { delayChildren: 0.2, staggerChildren: 0.06 },
            },
          }}
          className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {previewItems.map((item) => (
            <motion.article
              key={item}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
              className="rounded-2xl border border-white/18 bg-white/14 p-5 shadow-soft backdrop-blur-xl"
            >
              <p className="text-lg font-semibold tracking-[-0.02em]">{item}</p>
              <div className="mt-8 h-1.5 w-16 rounded-full bg-white/42" />
            </motion.article>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
