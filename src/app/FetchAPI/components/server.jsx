import React from "react";
import axios from 'axios'
import ClientSideComponent from "./client";

const fetchData= async()=>{
    const res=await axios.get(`https://jsonplaceholder.typicode.com/users/`,{
     cache: "force-cache" 
    })
    console.log(res.data)
    return res.data;
}

export default async function ServerSideComponent(){
    //const {id}= await params;
    const data=await fetchData();
   return(  
      <ClientSideComponent data={data}/>
 )
}