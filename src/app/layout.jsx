import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../components/Navbar"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata = {
  title: "KEANIMELIST",
  description: "Website Anime Indonesia",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-color-dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
