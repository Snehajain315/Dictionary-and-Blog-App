import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import SideBar from "./SideBar";
import MovieProvider from './context/MovieContext';

export const metadata={
    title: "MovieSearch ",
    description: "You can search movie"
}

export default function RootLayout({children}){
    return(
        <html lang="en">
            <body className="bg-gray-900 text-white reative">
                <MovieProvider>
                <div className='flex'>
                <SideBar />
                <main className="w-full flex-1 min-h-screen ml-64 overflow-y-auto overflow-x-hidden">
                {children}
                </main>
                </div>
                </MovieProvider>
                
            </body>
        </html>
    )
}  