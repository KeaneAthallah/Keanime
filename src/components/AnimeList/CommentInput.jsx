"use client"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [comment, setComment] = useState("")
  const [commentLenght, setCommentLength] = useState(0)
  const [isCreated, setisCreated] = useState(false)

  const router = useRouter()

  const handleLenght = (event) => {
    setComment(event.target.value)
    setCommentLength(event.target.value.length)
  }
  const handleInput = (event) => {
    setComment(event.target.value)
  }
  const handlePosting = async (event) => {
    event.preventDefault()
    if (commentLenght < 3) {
      alert("Komentar terlalu sedikit")
      return
    }
    const data = {
      anime_mal_id,
      user_email,
      comment,
      username,
      anime_title,
    }
    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    })
    const postComment = await response.json()

    if (postComment.status === 200) {
      setisCreated(true)
      setComment("")
      router.refresh()
    }
    return
  }
  return (
    <>
      <div className="flex flex-col gap-2">
        {isCreated && (
          <p className="text-color-primary">Postingan Terkirim...</p>
        )}
        <textarea
          value={comment}
          onChange={(handleInput, handleLenght)}
          className="w-full h-32 text-xl p-4"
        />
        <button
          onClick={handlePosting}
          className="w-52 py-2 px-3 bg-color-accent">
          Posting Komentar
        </button>
      </div>
    </>
  )
}

export default CommentInput
