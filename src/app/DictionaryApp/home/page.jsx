import { Suspense, lazy } from "react"
import Loading from "./loading"
import Link from "next/link"

import Content from "./Content"

export default function Home(){
    return(
        <div>
            <Content/>
            {/* <Suspense fallback={<Loading/>}>
               <Content/>
            </Suspense> */}
            {/* <Link href="/about">about</Link>
            <Link href="/product">product</Link> */}
        </div>
    )
}