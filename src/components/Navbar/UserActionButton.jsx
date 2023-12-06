import Link from "next/link"
import { authUserSession } from "@/libs/auth-list"
const UserActionButton = async () => {
  const user = await authUserSession()
  const actionLabel = user ? "Sign Out" : "Sign In"
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"
  return (
    <div className="flex gap-2 justify-between">
      {user ? (
        <Link
          href="/users/dashboard"
          className="bg-color-primary p-2 rounded text-color-secondary py-2 px-8 ">
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className="bg-color-dark p-2 rounded text-color-accent py-2 px-8 inline-block">
        {actionLabel}
      </Link>
    </div>
  )
}

export default UserActionButton
