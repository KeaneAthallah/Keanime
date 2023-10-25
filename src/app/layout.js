import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Utilities/Navbar";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "KuyAnimeList",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
