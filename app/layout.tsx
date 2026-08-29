import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vigilant Ear",
  description:
    "Sound awareness for Deaf and hard-of-hearing people. What happened, where it came from, who said it, and what they said.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
