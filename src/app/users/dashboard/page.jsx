import { authUserSession } from "@/libs/auth-list"
import Image from "next/image"
import Link from "next/link"
const Page = async () => {
  const user = await authUserSession()
  return (
    <div className="text-color-primary flex justify-center items-center flex-col">
      <h5 className="text-2xl font-bold">Welcome, {user.name}</h5>
      <Image src={user.image} alt="..." width={250} height={250} />
      <div className="py-8 flex gap-4 flex-wrap">
        <Link
          href="/users/dashboard/collection"
          className="bg-color-accent text-color-dark py-3 px-4 text-xl font-bold">
          My Collection
        </Link>
        <Link
          href="/users/dashboard/comment"
          className="bg-color-accent text-color-dark py-3 px-4 text-xl font-bold">
          My Comments
        </Link>
      </div>
    </div>
  )
}

export default Page
