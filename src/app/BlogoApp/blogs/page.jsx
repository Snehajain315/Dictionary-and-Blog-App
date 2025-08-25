"use client"
import React, { useEffect, useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const savedBlogs = localStorage.getItem("blog");
    if (savedBlogs){
    setBlogs(JSON.parse(savedBlogs));
    }
  },[]);


  const handleDelete=(id)=>{
    const item= blogs.filter((e)=>e.id !== id)
    setBlogs(item)
    //const updateData= localStorage.removeItem('item')
    localStorage.setItem('blog', JSON.stringify(item))
  }


  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {blogs.length > 0 ? (
          <div className="space-y-6">
            {blogs.map((e, i) => (
              <div 
                key={i} 
                className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {e.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {e.desc}
                </p>

               <div style={{display:"flex", columnGap:"10px", margin:"10px auto"}}>
                <button 
                 className="px-4 py-2 bg-blue-400 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >Details
                </button>

                <button onClick={()=>handleDelete(e.id)}
                 className="px-4 py-2 bg-blue-400 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" 
                >Delete
                </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
              <p className="text-lg text-gray-500 mb-4">No blogs found</p>
              <p className="text-sm text-gray-400">
                Start by adding your first blog post!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}