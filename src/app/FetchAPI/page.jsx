import React from "react";
import ServerSideComponent from "./components/server";
//import AddPostServer from "./components/postApi/addPostServer";
import AddPostClient from "./components/postApi/addPostClient";
import { Suspense } from "react";

export default function Component(){
    return(
        <div>  
            {/* <AddPostClient/> */}
            <Suspense fallback={<div>Loading...</div>}>
            <ServerSideComponent/>
            </Suspense>
          
        </div>
    )
}