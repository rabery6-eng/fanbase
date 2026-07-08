"use client";

import type { CommunityPost } from "@/lib/community";
import { CommunityPostCard } from "./CommunityPostCard";

type GameDiscussionSectionProps = {
  posts: CommunityPost[];
};

export function GameDiscussionSection({ posts }: GameDiscussionSectionProps) {
  return (
    <>
      {posts.map((post) => (
        <CommunityPostCard key={post.id} post={post} />
      ))}
    </>
  );
}
