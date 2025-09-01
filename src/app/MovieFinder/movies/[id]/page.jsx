'use client'
import React, { useContext, useEffect, useState, use } from "react";
import { MovieContext } from "../../context/MovieContext";

export default function MovieDetail({ params }) {
  const [movieData, setMovieData] = useState({});
  const { movie } = useContext(MovieContext);

  // ✅ unwrap the params Promise
  const { id } = use(params);

  useEffect(() => {
    if (movie && id) {
      const MovieData = movie.find((e) => String(e.imdbID) === String(id));
      setMovieData(MovieData || null);
    }
  }, [id, movie]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex justify-center items-center">
      {movieData ? (
        <div className="max-w-4xl w-full bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Poster */}
          <div className="w-full h-[300px]">
            <img
              src={movieData.Poster}
              alt={movieData.Title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Details */}
          <div className="p-6 space-y-4">
            <h1 className="text-4xl font-bold text-blue-400">{movieData.Title}</h1>
            <div className="flex gap-4 text-gray-300 text-lg">
              <span className="bg-gray-700 px-3 py-1 rounded">{movieData.Type}</span>
              <span className="bg-gray-700 px-3 py-1 rounded">{movieData.Year}</span>
              <span className="bg-blue-600 px-3 py-1 rounded text-white">
                {movieData.imdbID}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-400 text-xl">Movie not found</p>
      )}
    </div>
  );
}
