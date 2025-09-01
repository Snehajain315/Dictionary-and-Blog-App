'use client'
import React, { useState } from "react"
import axios from "axios"
import { useContext } from "react"
import { MovieContext } from "../context/MovieContext"
import { useRouter } from "next/navigation"
import { Heart } from "lucide-react"


export default function Movies() {

  const [searchMovie, setSearchMovie] = useState("")
  const router= useRouter()
//   const [movieData, setMovieData] = useState([])
  const {movie, setMovie,favMovie, setFavMovie}= useContext(MovieContext)

  const handleSearch = async () => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=450155c8&s=${searchMovie}`
    )
    setMovie(res.data.Search || [])
  }

  const handleFav=(movie)=>{
    alert('Movie added to favorite')
     setFavMovie([
      ...favMovie, movie
     ])
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold text-blue-400 mb-8">
        Search for Movie Detail
      </h1>

      {/* Search Bar */}
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchMovie(e.target.value)}
          className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                     text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                     focus:ring-blue-400 focus:border-transparent transition-all duration-200"
        />
        <button
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium 
                     rounded-lg transition-all duration-200 focus:outline-none 
                     focus:ring-2 focus:ring-blue-400"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movie.map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-xl 
                       hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="h-80">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                {movie.Title}
              </h2>
              <div className="flex justify-between items-center text-gray-400 text-sm">
                <span className="bg-gray-700 px-2 py-1 rounded">{movie.Year}</span> 
                <button className="capitalize bg-blue-600 px-2 py-1 rounded text-white"
                 onClick={()=>router.push(`/MovieFinder/movies/${movie.imdbID}`)}
                >
                    Detail
                </button>
                <span onClick={()=>handleFav(movie)}><Heart size={22} strokeWidth={2} color="white"/></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
