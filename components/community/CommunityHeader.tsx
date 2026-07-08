"use client";

type CommunityHeaderProps = {
  onWrite: () => void;
};

export function CommunityHeader({ onWrite }: CommunityHeaderProps) {
  return (
    <header className="px-4 pt-5 sm:px-6">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
              KBO Feed
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-slate-950">
              Community
            </h1>
          </div>
          <button
            type="button"
            onClick={onWrite}
            className="rounded-full bg-slate-950 px-4 py-2.5 text-sm font-black text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200"
          >
            글쓰기
          </button>
        </div>
        <p className="mt-4 max-w-sm text-sm font-medium leading-6 text-slate-500">
          오늘 KBO 팬들이 가장 많이 이야기하는 순간들
        </p>
      </section>
    </header>
  );
}
