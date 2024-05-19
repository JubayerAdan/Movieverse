import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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

      {/* Main content */}
      <main className="flex-grow container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Unlimited Access</h3>
            <p>Access thousands of movies anytime, anywhere.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">High Quality</h3>
            <p>Enjoy high-quality streaming for an immersive experience.</p>
          </div>
          {/* Link to movies section */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Browse Movies</h3>
            <p>Explore our collection of free movies.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Free Movies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
