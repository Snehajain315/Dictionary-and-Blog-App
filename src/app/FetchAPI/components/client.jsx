'use client'
import React from "react";
import { use } from "react";

export default function ClientSideComponent({data}){
  const users= data
  console.log(users)
  return(
    <div>
      <h1>This is a client page</h1>
      {users.map((user)=>(
        <div key={user.id}>
            <label>Name: {user.name}</label>
            <br />
            <label>UserName: {user.username}</label>
            <br />
            <label>Email: {user.email}</label>
             <hr />
        </div>
      ))}
    </div>
  )
}