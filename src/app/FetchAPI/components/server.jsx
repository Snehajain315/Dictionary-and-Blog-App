import React from "react";
import axios from 'axios'
import ClientSideComponent from "./client";

const fetchData= async()=>{
    const res=await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(res.data)
    return res.data;
}



export default async function ServerSideComponent(){
    const data= fetchData();
   return(
      
      <ClientSideComponent data={data}/>
 )

}