"use client";

type FollowButtonProps = {
  following: boolean;
  onToggle: () => void;
  color: string;
};

export function FollowButton({ following, onToggle, color }: FollowButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="rounded-full px-4 py-2.5 text-sm font-black transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200"
      style={
        following
          ? { backgroundColor: `${color}14`, color }
          : { backgroundColor: color, color: "#ffffff" }
      }
    >
      {following ? "팔로잉" : "팔로우"}
    </button>
  );
}
