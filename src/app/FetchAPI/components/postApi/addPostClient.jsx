'use client'
import React from "react";
import { AddPostServer } from "./addPostServer";

export default function AddPostClient(){

   const handleSubmit=(e)=>{
      e.preventDefault();
   }
   
   return(
     <div>
        <form action={AddPostServer}>

            <input type="text" name="name" placeholder="Enter name"/>
             <input type="text" name="username" placeholder="Enter username"/>
              <input type="email" name="email" placeholder="Enter email"/>

              <button type="submit">Add</button>
        </form>
     </div>
   )
}