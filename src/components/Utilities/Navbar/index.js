import Link from "next/link"

const Navbar = () => {
    return (
        <header className="bg-indigo-950">
            <div className="flex md:flex-row flex-col justify-between  p-4 gap-2">
                <Link className="font-bold text-white text-2xl" href="/">KUYANIMELIST</Link>
                <input placeholder="Cari Anime.."/>
            </div>
        </header>
    )
}
export default Navbar