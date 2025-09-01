import React from "react";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white shadow-xl">
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-blue-400">FilmFinder</h1>
      </div>
      
      <aside className="mt-8">
        <nav className="space-y-2 px-4">
          <Link href="/" className="block">
            <div className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-200 cursor-pointer">
              <span className="text-lg font-medium">Home</span>
            </div>
          </Link>
          
          <Link href="/MovieFinder/movies" className="block">
            <div className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-200 cursor-pointer">
              <span className="text-lg font-medium">Movies</span>
            </div>
          </Link>
          
          <Link href="/MovieFinder/favourites" className="block">
            <div className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-200 cursor-pointer">
              <span className="text-lg font-medium">Favorites</span>
            </div>
          </Link>
          
          <Link href="/MovieFinder/about" className="block">
            <div className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-200 cursor-pointer">
              <span className="text-lg font-medium">About</span>
            </div>
          </Link>
        </nav>
      </aside>
    </div>
  );
}
