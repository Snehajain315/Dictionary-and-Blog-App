'use client'
import React from "react";
import { use, useEffect, useState } from "react";

export default function BlogDetail({params}){
    // For demo purposes, using sample data instead of localStorage
    const [blogs, setBlogs] = useState({
        id: 1,
        title: "Sample Blog Post",
        desc: "This is a sample blog description to demonstrate the styling. In your actual implementation, this will be loaded from localStorage based on the blog ID."
    });
    
    // Original localStorage logic (commented out for demo)
   
    const {id} = use(params)
    
    useEffect(()=>{
        const savedBlogs= localStorage.getItem('blog')
        if(savedBlogs){
            const Blogs= JSON.parse(savedBlogs)
            console.log(Blogs);
            const foundBlog= Blogs.find((e)=> String(e.id)===id)
            console.log(foundBlog)
            setBlogs(foundBlog)
        }                
    },[id])
           
    return(
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
                Blog Detail
            </h1>
            
            <div className="flex justify-center mb-8">
                <img 
                    src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    className="h-48 w-80 object-cover rounded-lg shadow-lg"
                    alt="Blog post image"
                />
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h1 className="text-2xl font-semibold text-gray-900 mb-4">
                    Title: {blogs.title}
                </h1>
                <p className="text-gray-700 leading-relaxed text-lg">
                    {blogs.desc}
                </p>
            </div>
        </div>
    )
}