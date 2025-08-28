'use server'
import axios from "axios";


export async function AddPostServer(formData){

    const name= formData.get("name")
    const username= formData.get("username")
    const email= formData.get("email")

    const userData={name, username, email}

    const res= await axios.post("https://jsonplaceholder.typicode.com/users", userData)
    console.log("Data:", userData)
    console.log("Response:", res.data)
    return res.data;
      
} 
