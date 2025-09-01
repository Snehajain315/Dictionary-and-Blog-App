'use client'
import React from "react"

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl bg-gray-800 p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-blue-400 mb-4 text-center">
          About This App
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          This Movie App allows you to search movies, view details, 
          and save your favorite ones. Built with Next.js, React Context API, 
          and Tailwind CSS, it provides a smooth and modern user experience.
        </p>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            ✨ Designed & Developed with ❤️ using React + Next.js
          </p>
        </div>
      </div>
    </div>
  )
}
