"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BottomNav } from "@/components/home/BottomNav";
import {
  initialCommunityPosts,
  type CommunityPost,
  type CommunityTab,
} from "@/lib/community";
import type { Team } from "@/lib/teams";
import { CommunityHeader } from "./CommunityHeader";
import { CommunityPostCard } from "./CommunityPostCard";
import { CommunityTabs } from "./CommunityTabs";
import { FreeBoardList } from "./FreeBoardList";
import { GameDiscussionSection } from "./GameDiscussionSection";
import { TrendingSection } from "./TrendingSection";
import { WritePostModal } from "./WritePostModal";

type CommunityScreenProps = {
  team: Team;
  onNavigate: (
    screen: "home" | "game" | "community" | "records" | "my",
  ) => void;
};

export function CommunityScreen({ team, onNavigate }: CommunityScreenProps) {
  const [activeTab, setActiveTab] = useState<CommunityTab>("추천");
  const [posts, setPosts] = useState<CommunityPost[]>(initialCommunityPosts);
  const [writing, setWriting] = useState(false);

  const visiblePosts = useMemo(() => {
    if (activeTab === "경기") {
      return posts.filter((post) => post.category === "오늘 경기 이야기");
    }

    if (activeTab === "내 팀") {
      return posts.filter((post) => post.team.id === team.id);
    }

    if (activeTab === "직관") {
      return posts.filter((post) => post.category === "직관 후기");
    }

    if (activeTab === "밈") {
      return posts.filter((post) => post.category === "밈");
    }

    if (activeTab === "자유") {
      return posts.filter((post) => post.category === "자유글");
    }

    return posts;
  }, [activeTab, posts, team.id]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto min-h-screen w-full max-w-md pb-28 sm:max-w-2xl lg:max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <CommunityHeader onWrite={() => setWriting(true)} />
        </motion.div>

        <motion.section
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { delayChildren: 0.1, staggerChildren: 0.05 },
            },
          }}
          className="grid gap-3 px-4 pt-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3"
        >
          <motion.div
            variants={itemVariants}
            className="sm:col-span-2 lg:col-span-3"
          >
            <CommunityTabs
              activeTab={activeTab}
              color={team.color}
              onChange={setActiveTab}
            />
          </motion.div>

          {activeTab === "추천" && (
            <TrendingSection posts={posts.slice(0, 8)} />
          )}

          {activeTab === "경기" && (
            <GameDiscussionSection posts={visiblePosts} />
          )}

          {activeTab === "자유" && <FreeBoardList posts={visiblePosts} />}

          {activeTab !== "추천" &&
            activeTab !== "경기" &&
            activeTab !== "자유" &&
            visiblePosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <CommunityPostCard post={post} />
              </motion.div>
            ))}
        </motion.section>
      </div>

      <BottomNav activeTab="Community" team={team} onTabChange={onNavigate} />

      {writing && (
        <WritePostModal
          team={team}
          onClose={() => setWriting(false)}
          onSubmit={(post) => {
            setPosts((currentPosts) => [post, ...currentPosts]);
            setActiveTab(post.category === "자유글" ? "자유" : "내 팀");
            setWriting(false);
          }}
        />
      )}
    </main>
  );
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};
