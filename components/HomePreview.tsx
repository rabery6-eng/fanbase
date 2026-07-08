"use client";

import { motion } from "framer-motion";
import { AIBriefingCard } from "@/components/home/AIBriefingCard";
import { BottomNav } from "@/components/home/BottomNav";
import { FanReactionCard } from "@/components/home/FanReactionCard";
import { HomeHeader } from "@/components/home/HomeHeader";
import { NextGameCard } from "@/components/home/NextGameCard";
import { TeamNewsCard } from "@/components/home/TeamNewsCard";
import { TodayGameCard } from "@/components/home/TodayGameCard";
import type { Team } from "@/lib/teams";

type HomePreviewProps = {
  team: Team;
  onNavigate: (
    screen: "home" | "game" | "community" | "records" | "my",
  ) => void;
  onOpenSearch: () => void;
};

export type HomeData = {
  todayGame: {
    status: string;
    time: string;
    opponent: string;
    stadium: string;
    note: string;
  };
  briefing: {
    headline: string;
    points: string[];
  };
  fanReaction: {
    mood: string;
    volume: string;
    highlight: string;
  };
  news: {
    title: string;
    source: string;
    age: string;
  }[];
  nextGame: {
    date: string;
    opponent: string;
    stadium: string;
  };
};

const homeData: HomeData = {
  todayGame: {
    status: "오늘 경기 예정",
    time: "18:30",
    opponent: "vs 오늘의 상대",
    stadium: "홈 구장",
    note: "선발 라인업은 경기 1시간 전 업데이트됩니다.",
  },
  briefing: {
    headline: "최근 타선 흐름이 좋아 초반 득점 가능성이 높아요.",
    points: ["상위 타순 출루율 상승", "불펜 소모는 안정권", "홈 경기 응원 화력 우세"],
  },
  fanReaction: {
    mood: "기대감 높음",
    volume: "12.8K",
    highlight: "팬들은 오늘 클린업 타선의 장타를 가장 기대하고 있어요.",
  },
  news: [
    {
      title: "오늘 경기 관전 포인트 3가지",
      source: "Fanbase Brief",
      age: "12분 전",
    },
    {
      title: "주간 선수 컨디션 리포트 공개",
      source: "Team Desk",
      age: "38분 전",
    },
  ],
  nextGame: {
    date: "내일 18:30",
    opponent: "정규 시즌 다음 경기",
    stadium: "원정 경기",
  },
};

export function HomePreview({ team, onNavigate, onOpenSearch }: HomePreviewProps) {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto min-h-screen w-full max-w-md pb-28 sm:max-w-2xl lg:max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <HomeHeader
            team={team}
            todayGame={homeData.todayGame}
            onOpenSearch={onOpenSearch}
          />
        </motion.div>

        <motion.section
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { delayChildren: 0.12, staggerChildren: 0.055 },
            },
          }}
          className="grid gap-3 px-4 pt-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3"
        >
          <CardMotion className="sm:col-span-2 lg:col-span-2">
            <TodayGameCard team={team} game={homeData.todayGame} />
          </CardMotion>
          <CardMotion>
            <AIBriefingCard team={team} briefing={homeData.briefing} />
          </CardMotion>
          <CardMotion>
            <FanReactionCard team={team} reaction={homeData.fanReaction} />
          </CardMotion>
          <CardMotion>
            <TeamNewsCard news={homeData.news} />
          </CardMotion>
          <CardMotion>
            <NextGameCard team={team} nextGame={homeData.nextGame} />
          </CardMotion>
        </motion.section>
      </div>
      <BottomNav activeTab="Home" team={team} onTabChange={onNavigate} />
    </main>
  );
}

function CardMotion({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
