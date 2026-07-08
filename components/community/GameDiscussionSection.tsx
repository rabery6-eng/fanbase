"use client";

import type { CommunityPost } from "@/lib/community";
import type { PlayerRecord } from "@/lib/records";
import type { Team } from "@/lib/teams";
import { CommunityPostCard } from "./CommunityPostCard";

type GameDiscussionSectionProps = {
  posts: CommunityPost[];
  player?: PlayerRecord;
  onOpenPlayer?: (player: PlayerRecord) => void;
  onOpenTeam?: (team: Team) => void;
};

export function GameDiscussionSection({
  posts,
  player,
  onOpenPlayer,
  onOpenTeam,
}: GameDiscussionSectionProps) {
  return (
    <>
      {posts.map((post) => (
        <CommunityPostCard
          key={post.id}
          post={post}
          player={player}
          onOpenPlayer={onOpenPlayer}
          onOpenTeam={onOpenTeam}
        />
      ))}
    </>
  );
}
