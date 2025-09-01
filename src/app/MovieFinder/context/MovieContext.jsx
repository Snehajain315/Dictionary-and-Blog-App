'use client'
import React from "react";
import { createContext, useState } from "react";


export const MovieContext= createContext();
//export const FavoriteContext= createContext();

export default function MovieProvider({children}){

    const [movie, setMovie]= useState([])
    const [favMovie, setFavMovie]= useState([])
    
    return(
        <div>
           <MovieContext.Provider  value={{movie, setMovie, favMovie, setFavMovie}}>
                 {children}
           </MovieContext.Provider>

        </div>
    )
}