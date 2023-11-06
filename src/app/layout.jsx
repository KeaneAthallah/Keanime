import { Roboto } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Utilities/Navbar"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
})

export const metadata = {
  title: "KEANIMELIST",
  description: "Website Anime Indonesia",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-color-dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
