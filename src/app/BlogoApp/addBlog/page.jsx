'use client'
import React, { useEffect, useState } from "react";
// import { BlogContext } from "../context/BlogContext";
// import { useContext } from "react";

export default function AddBlog(){

     const [blog, setBlog]= useState({id:Date.now(),title:"", desc:""})
     const [data, setData]= useState([])
 

    useEffect(()=>{
        const savedBlogs = localStorage.getItem("blog");
        if (savedBlogs){
        setBlog(JSON.parse(savedBlogs));
        }
    },[])

    
     useEffect(()=>{
        if(data.length > 0){
        localStorage.setItem('blog', JSON.stringify(data))
        }
     },[data])


     const handleChange=(e)=>{
       setBlog({
        ...blog,
        [e.target.name]: e.target.value
       })
     }
    
     const handleSubmit=(event)=>{
       event.preventDefault();
       const newBlog={id: Date.now(),...blog}
       setData([...data, newBlog])

      setBlog({title:"", desc:""})
     }

    
    return( 
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Add New Blog
                    </h1>
                    
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Blog Title:
                            </label>
                            <input 
                                type="text" 
                                placeholder="Enter title" 
                                name="title" 
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Blog Description:
                            </label>
                            <textarea 
                                name="desc" 
                                placeholder="Enter description here" 
                                onChange={handleChange}
                                rows="6"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 resize-vertical"
                            ></textarea>
                        </div>
                        
                        <div className="flex justify-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none"
                            onClick={handleSubmit}
                            >
                                Add Blog
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}