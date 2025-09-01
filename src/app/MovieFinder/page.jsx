'use client'
import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router= useRouter();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-400 mb-6">
          Welcome to Movie Finder 🎬
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Discover movies, explore details, and save your favorites — 
          all in one place with a modern, simple design.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all duration-200"
           onClick={()=>router.push('/MovieFinder/movies')}
          >
            Search Movies
          </button>
          <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition-all duration-200"
            onClick={()=>router.push('/MovieFinder/favourites')}
          >
            View Favorites
          </button>
        </div>
      </div>
    </div>
  );
}
