"use client"
import { XCircle } from "@phosphor-icons/react"
import React, { useState } from "react"
import Youtube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true)
  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const option = {
    width: "300",
    height: "250",
  }

  const Player = () => {
    return (
      <>
        <div className="fixed bottom-2 right-2">
          <button
            onClick={handleVideoPlayer}
            className="text-color-primary float-right bg-color-secondary px-3 mb-1">
            X
          </button>
          <Youtube
            videoId={youtubeId}
            onReady={(event) => event.target.pauseVideo()}
            opts={option}
            onError={() => alert("Video is Broken, Please Try Another")}
          />
        </div>
      </>
    )
  }
  const Button = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className=" fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark p-1 rounded text-md hover:bg-color-accent transition-all shadow-xl">
        Tonton Trailer
      </button>
    )
  }
  return isOpen ? <Player /> : <Button />
}

export default VideoPlayer

// Perubahan untuk mengaganti video player menjadi dibawah gambar
