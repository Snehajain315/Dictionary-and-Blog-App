'use client'
import React from "react"
import { useRouter } from "next/navigation"



export default function Home(){

    const router= useRouter()

    return(
        <>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="bg-white rounded-lg shadow-md p-12 border border-gray-200">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                        Welcome to BlogoApp
                    </h1>
                    
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Discover amazing stories, share your thoughts, and connect with fellow writers in our simple and elegant blogging platform.
                    </p>

                     {/* {/* <Image src="https://www.shutterstock.com/image-photo/blog-information-website-concept-workplace-260nw-1189626925.jpg"
                     alt="Description"
                    width={400} height={80} style={{objectFit: "cover", margin:"20px auto"}} 
                    /> */}
                    {/*<Image src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Images" width={400} height={100}/> */}
                    
                    <div className="flex justify-center">
                        
                            <button 
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg"
                            onClick={()=>router.push('/BlogoApp/blogs')}
                            >
                                See the Blogs here
                            </button>
                        
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
    </>
    )
}