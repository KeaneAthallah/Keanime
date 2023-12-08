"use client"
import React, { useState } from "react"

const CollectionButton = ({
  anime_mal_id,
  user_email,
  anime_title,
  anime_image,
}) => {
  const [isCreated, setisCreated] = useState(false)
  const handleCollection = async (event) => {
    event.preventDefault()
    const data = {
      anime_mal_id,
      user_email,
      anime_title,
      anime_image,
    }
    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    })
    const collection = await response.json()
    if (collection.status === 200) {
      setisCreated(true)
    }
    return
  }
  return (
    <>
      {isCreated ? (
        <span className="text-color-primary py-1 px-2 rounded">
          Berhasil ditambahkan
        </span>
      ) : (
        <div className="mt-2 mb-2">
          <button
            onClick={handleCollection}
            className="px-2 py-1 bg-color-accent font-bold rounded">
            Add to Collection
          </button>
        </div>
      )}
    </>
  )
}

export default CollectionButton
