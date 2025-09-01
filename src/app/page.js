import Home from "./DictionaryApp/home/page"
import Component from "./FetchAPI/page"

import { redirect } from "next/navigation"

export default function RootPage(){

     //redirect("/BlogoApp")                          //Uncomment this to seee blogo app
    //  redirect("/MovieFinder")

    //When we want to see dictionary app than uncomment it and comment redirect
     return(
    //     <div>
    //         {/* Client side component and server side component Practice */}
            <Component/>

    //         {/* Uncomment Home to see DictionaryApp  */}
            //   <Home/>
    //     </div>
    )
}
