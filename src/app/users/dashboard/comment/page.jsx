import Header from "@/components/Dashboard/Header"
import { authUserSession } from "@/libs/auth-list"
import prisma from "@/libs/prisma"
import Link from "next/link"
import React from "react"

const page = async () => {
  const user = await authUserSession()
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  })
  const countComments = await prisma.comment.count({
    where: { user_email: user.email },
  })

  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"My Comments"} />
      {countComments > 0 ? (
        <div className="grid grid-rows gap-4 mb-4 mt-2 py-2">
          {comments.map((comment) => {
            return (
              <Link
                href={`/anime/${comment.anime_mal_id}`}
                key={comment.id}
                className=" bg-color-primary text-color-secondary p-4 rounded">
                <p className="font-bold">{comment.anime_title}</p>
                <small className="italic">{comment.comment}</small>
              </Link>
            )
          })}
        </div>
      ) : (
        <p className="text-color-primary text-center">Belum Ada Komentar</p>
      )}
    </section>
  )
}

export default page
