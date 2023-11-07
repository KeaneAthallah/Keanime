import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOption } from "../../app/api/auth/[...nextauth]/route"

const UserActionButton = async () => {
  const user = await getServerSession(authOption)
  return (
    <>
      <Link
        href="/api/auth/signin"
        className="bg-color-primary p-2 rounded text-color-dark">
        Sign In
      </Link>
    </>
  )
}

export default UserActionButton
