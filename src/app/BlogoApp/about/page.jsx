'use client'
import React from "react";

export default function AboutBlog(){
    return(
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                        About BlogoApp
                    </h1>
                    
                    <div className="prose max-w-none">
                        <div className="text-center mb-8">
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Welcome to BlogoApp - your simple and elegant blogging platform
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8 mt-8">
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Our Mission
                                </h2>
                                <p className="text-gray-600">
                                    To provide a clean, simple platform for sharing your thoughts and ideas through beautiful blog posts.
                                </p>
                            </div>
                            
                            <div className="bg-green-50 p-6 rounded-lg">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Features
                                </h2>
                                <p className="text-gray-600">
                                    Easy blog creation, clean reading experience, and simple management of your content.
                                </p>
                            </div>
                        </div>
                        
                        <div className="text-center mt-8 pt-8 border-t border-gray-200">
                            <p className="text-gray-500">
                                Start your blogging journey with us today!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}