"use client";

import type { CommunityPost } from "@/lib/community";
import { CommunityPostCard } from "./CommunityPostCard";

type FreeBoardListProps = {
  posts: CommunityPost[];
};

export function FreeBoardList({ posts }: FreeBoardListProps) {
  return (
    <>
      {posts.map((post) => (
        <CommunityPostCard key={post.id} post={post} />
      ))}
    </>
  );
}
