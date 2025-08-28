// 'use client'
import NavBar from "./navBar";


export const metadata={
  title:"BlogoApp",
  description:"This is a Blog App"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <NavBar/>
      <main>
        {children}  
      </main>
      </body>
    </html>
  );
}