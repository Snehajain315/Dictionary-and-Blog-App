'use client'
import NavBar from "./navBar";

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