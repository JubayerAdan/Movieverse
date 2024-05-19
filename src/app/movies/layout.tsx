import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

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
        <div className="navbar text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href={"/movies"}>Movies</Link>
                </li>
              </ul>
            </div>
            <Link href={"/"} className="btn btn-ghost text-xl">
              Movieverse
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href={"/movies"}>Movies</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
