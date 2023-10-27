import { Gabarito, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Utilities/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "KeAnimeList",
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
