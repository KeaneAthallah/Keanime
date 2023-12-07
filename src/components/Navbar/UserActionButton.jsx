import Link from "next/link"
import { authUserSession } from "@/libs/auth-list"
const UserActionButton = async () => {
  const user = await authUserSession()
  const actionLabel = user ? "Sign Out" : "Sign In"
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"
  return (
    <div className="flex gap-2 justify-between">
      {user ? (
        <Link href="/users/dashboard" className="py-1 text-color-dark">
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className="bg-color-dark rounded text-color-accent py-1 px-12 inline-block">
        {actionLabel}
      </Link>
    </div>
  )
}

export default UserActionButton
