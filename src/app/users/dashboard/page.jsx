import { authUserSession } from "@/libs/auth-list"
import Image from "next/image"
const Page = async () => {
  const user = await authUserSession()
  return (
    <div className="text-color-primary">
      <h3>DASHBOARD</h3>
      <h3>Welcome, {user.name}</h3>
      <Image src={user.image} alt="..." width={250} height={250} />
    </div>
  )
}

export default Page
