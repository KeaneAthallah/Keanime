import Link from "next/link"
import { authUserSession } from "@/libs/auth-list"
const UserActionButton = async () => {
  const user = await authUserSession()
  const actionLabel = user ? "Sign Out" : "Sign In"
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"
  return (
    <>
      <Link
        href={actionURL}
        className="bg-color-accent p-2 rounded text-color-dark text-font-bold">
        {actionLabel}
      </Link>
    </>
  )
}

export default UserActionButton
