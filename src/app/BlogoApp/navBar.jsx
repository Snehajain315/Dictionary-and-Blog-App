'use client'
import Link from "next/link";
import React from "react";
import Home from "./page";

export default function NavBar(){
    return(
        <nav className="bg-white shadow-lg border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-gray-800">BlogoApp</h1>
                    </div>
                    
                    <div className="flex space-x-8">
                        <ul className="flex space-x-8">
                            <li>
                                <Link 
                                    href="/" 
                                    className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/BlogoApp/blogs"
                                    className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                >
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/BlogoApp/addBlog" 
                                    className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                >
                                    Add Blog
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/BlogoApp/about" 
                                    className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}