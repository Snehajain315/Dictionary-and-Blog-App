'use client'
import React from "react"
import { redirect } from "next/navigation"
import Link from "next/link"

export default function Home(){
    return(
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="bg-white rounded-lg shadow-md p-12 border border-gray-200">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                        Welcome to BlogoApp
                    </h1>
                    
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Discover amazing stories, share your thoughts, and connect with fellow writers in our simple and elegant blogging platform.
                    </p>
                    
                    <div className="flex justify-center">
                        <Link href="/BlogoApp/blogs">
                            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg">
                                See the Blogs here
                            </button>
                        </Link>
                    </div>
                    
                    <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
                        <div className="p-4">
                            <div className="text-2xl mb-2">✍️</div>
                            <h3 className="font-semibold text-gray-800 mb-2">Write</h3>
                            <p className="text-sm text-gray-600">Create and publish your stories</p>
                        </div>
                        <div className="p-4">
                            <div className="text-2xl mb-2">📖</div>
                            <h3 className="font-semibold text-gray-800 mb-2">Read</h3>
                            <p className="text-sm text-gray-600">Discover engaging content</p>
                        </div>
                        <div className="p-4">
                            <div className="text-2xl mb-2">🌟</div>
                            <h3 className="font-semibold text-gray-800 mb-2">Share</h3>
                            <p className="text-sm text-gray-600">Connect with other writers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}