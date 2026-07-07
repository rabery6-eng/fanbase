import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KBO Fan Home",
  description: "Choose your KBO team and start your personal fan home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
