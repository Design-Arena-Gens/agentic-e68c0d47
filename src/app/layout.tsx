import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-e68c0d47.vercel.app"),
  title: "AI Engineer Portfolio – CommandRex & Junior Researcher",
  description:
    "AI Engineer building production LLM systems, RAG pipelines, agent workflows, and open source tooling like CommandRex and Junior Researcher.",
  openGraph: {
    title: "AI Engineer Portfolio",
    description:
      "Production-focused AI Engineer shipping reliable LLM, RAG, and agent systems for real teams.",
    url: "https://agentic-e68c0d47.vercel.app",
    siteName: "AI Engineer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Engineer Portfolio",
    description:
      "Production-focused AI Engineer shipping reliable LLM, RAG, and agent systems for real teams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
