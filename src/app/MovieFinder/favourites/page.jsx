'use client'
import React, { use, useContext, useState } from "react"
import { MovieContext } from "../context/MovieContext"

export default function Favorites({ params }) {
  const { id } = use(params)
  const [favorite, setFavorite] = useState([])
  const { favMovie } = useContext(MovieContext)

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold text-blue-400 mb-8 text-center">
        Your Favorite Movies
      </h1>

      {favMovie.length === 0 ? (
        <p className="text-gray-400 text-center text-lg">
          No favorite movies added yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favMovie.map((movie, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-xl 
                         hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Poster */}
              <div className="h-80">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {movie.Title}
                </h2>
                <div className="flex justify-between items-center text-gray-400 text-sm">
                  <span className="bg-gray-700 px-2 py-1 rounded">
                    {movie.Year || movie.year}
                  </span>
                  <span className="bg-blue-600 px-2 py-1 rounded text-white">
                    Favorite
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
