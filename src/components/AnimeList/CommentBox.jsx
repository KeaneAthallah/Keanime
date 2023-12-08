import prisma from "@/libs/prisma"
import React from "react"

const CommentBox = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } })
  return (
    <div className="grid grid-rows gap-4 mb-4">
      {comments.map((comment) => {
        return (
          <div
            key={comment.id}
            className=" bg-color-accent text-color-secondary p-4 rounded">
            <p className="font-bold">{comment.username}</p>
            <small>{comment.comment}</small>
          </div>
        )
      })}
    </div>
  )
}

export default CommentBox

// Penambahan fitur untuk hanya menampilkan 3 komen terbaru
