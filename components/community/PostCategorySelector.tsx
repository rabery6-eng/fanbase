"use client";

import type { CommunityCategory } from "@/lib/community";
import { postCategories } from "@/lib/community";

type PostCategorySelectorProps = {
  value: CommunityCategory;
  onChange: (category: CommunityCategory) => void;
  color: string;
};

export function PostCategorySelector({
  value,
  onChange,
  color,
}: PostCategorySelectorProps) {
  return (
    <div>
      <p className="text-sm font-black text-slate-900">
        무엇을 작성하시겠어요?
      </p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {postCategories.map((category) => {
          const active = value === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onChange(category)}
              className="rounded-2xl border px-3 py-3 text-sm font-black transition"
              style={
                active
                  ? {
                      borderColor: color,
                      backgroundColor: `${color}12`,
                      color,
                    }
                  : { borderColor: "#e2e8f0", color: "#475569" }
              }
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
