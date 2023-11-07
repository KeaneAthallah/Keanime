import { getAnimeResponse } from "../../../libs/api-libs"
import VideoPlayer from "../../../components/Utilities/VideoPlayer"
import Image from "next/image"
import React from "react"

const page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`)
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-color-primary text-2xl">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3 className="font-bold">Peringkat</h3>
          <p className="text-center">#{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3 className="font-bold">Score</h3>
          <p className="text-center">{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3 className="font-bold">Episode</h3>
          <p className="text-center">{anime.data.episodes}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3 className="font-bold">Status</h3>
          <p className="text-center">{anime.data.status}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-primary sm:flex-nowrap flex-wrap">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={350}
          height={350}
          className="w-full rounded object-cover"
        />
        <p className="text-justify">{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  )
}

export default page
