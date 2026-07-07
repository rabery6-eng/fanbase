"use client";

import { motion } from "framer-motion";

type OnboardingLayoutProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function OnboardingLayout({
  eyebrow = "KBO FAN HOME",
  title,
  description,
  children,
  footer,
}: OnboardingLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-6 text-slate-950 sm:px-6">
      <section className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-[430px] flex-col justify-center">
        <motion.header
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="pb-7 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            {eyebrow}
          </p>
          <h1 className="mx-auto mt-4 max-w-none text-[34px] font-black leading-[1.08] tracking-[-0.055em] text-slate-950 sm:text-[40px]">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-[23rem] break-keep text-[15px] font-medium leading-6 text-slate-500">
            {description}
          </p>
        </motion.header>

        {children}

        {footer && <div className="pt-6">{footer}</div>}
      </section>
    </main>
  );
}
