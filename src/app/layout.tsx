import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Movies - Watch Thousands of Movies for Free",
  description:
    "Watch thousands of movies for free. Unlimited access to high-quality movies without ads.",
  keywords: "free movies, watch movies online, streaming movies, no ads movies",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0c0d0f] h-screen w-full`}>
        {children}
      </body>
    </html>
  );
}
