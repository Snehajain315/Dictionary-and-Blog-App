import React from "react";
import axios from 'axios'
import ClientSideComponent from "./client";

const fetchData= async(id)=>{
    const res=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    console.log(res.data)
    return res.data;
}

export default async function ServerSideComponent({params}){
    //const {id}= await params;
    const data=await fetchData(params.id);
   return(  
      <ClientSideComponent data={data}/>
 )

}