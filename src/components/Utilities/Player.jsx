"use client"
import { useState } from "react"
import Youtube from "react-youtube"

const Video = ({ youtubeId }) => {
  const option = {
    width: "350",
    height: "350",
  }

  return (
    <>
      <Youtube
        videoId={youtubeId}
        onReady={(event) => event.target.pauseVideo()}
        opts={option}
        onError={() => alert("Video is Broken, Please Try Another")}
      />
    </>
  )
}
export default Video
