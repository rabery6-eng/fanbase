"use client";

import type { CommunityPost } from "@/lib/community";
import type { PlayerRecord } from "@/lib/records";
import { CommunityPostCard } from "./CommunityPostCard";

type GameDiscussionSectionProps = {
  posts: CommunityPost[];
  player?: PlayerRecord;
  onOpenPlayer?: (player: PlayerRecord) => void;
};

export function GameDiscussionSection({
  posts,
  player,
  onOpenPlayer,
}: GameDiscussionSectionProps) {
  return (
    <>
      {posts.map((post) => (
        <CommunityPostCard
          key={post.id}
          post={post}
          player={player}
          onOpenPlayer={onOpenPlayer}
        />
      ))}
    </>
  );
}
