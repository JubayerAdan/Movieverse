"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Movie {
  id: number;
  name: string;
  thumbnail: string;
  url: string;
  category: string;
  country: string;
}

interface MoviesPageProps {
  movies: Movie[]; // Marking movies prop as required
}

const MoviesPage: React.FC<MoviesPageProps> = ({ movies }) => {
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);
  const [categoryFilter, setCategoryFilter] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    filterMovies(searchTerm, categoryFilter);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    setCategoryFilter(selectedCategory);
    filterMovies("", selectedCategory);
  };

  const filterMovies = (searchTerm: string, category: string) => {
    const filtered = movies.filter(
      (movie) =>
        movie.name.toLowerCase().includes(searchTerm) &&
        (category === "" || movie.category === category)
    );
    setFilteredMovies(filtered);
  };

  // Get unique categories for the selector
  const categories = Array.from(new Set(movies.map((movie) => movie.category)));

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-4 mt-2">
        <input
          type="text"
          placeholder="Search movies..."
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <select
          onChange={handleCategoryChange}
          className="p-2 border border-gray-300 rounded ml-2"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="card max-w-md rounded-lg shadow-md overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-600"
          >
            <div className="flex flex-col gap-y-4">
              <figure className="w-full relative">
                <div className="w-full h-80 relative">
                  <Image
                    src={movie.thumbnail}
                    alt={movie.name}
                    layout="fill" // Ensures the image takes up the entire div
                    objectFit="cover" // Ensures the image covers the entire div
                    className="rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black opacity-50 rounded-t-lg" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-4xl font-semibold text-white">
                      {movie.name}
                    </h2>
                  </div>
                </div>
              </figure>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <Link href={`/movies/${movie.name}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                      Watch Now
                    </button>
                  </Link>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <span className="text-yellow-400 font-semibold">9.5</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-400 text-sm">
                    {movie.category}
                  </span>
                  <span className="text-gray-400 text-sm">{movie.country}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  // Fetch movie data from an API
  const response = await fetch("/movies.json");
  const data = await response.json();

  return {
    props: {
      movies: data.movies.slice(0, 20), // Take only the first 20 movies
    },
    revalidate: 60 * 60, // Re-generate the page every hour
  };
}

export default MoviesPage;
