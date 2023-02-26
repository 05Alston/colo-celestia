import React from 'react'
import Poster from '../assets/arch-linux-poster.webp';

const VideoCard = () => {
  return (
    <div className="rounded-lg flex flex-col overflow-hidden group w-[26rem] h-[30rem] bg-gray-800 shadow-xl relative interactable" datatype='link'>
        <div className="w-full h-1/2 bg-gray-600 rounded-lg animate-pulse"></div>
        <div className="p-8 flex flex-col flex-auto gap-2 items-start">
            <p className="flex items-center gap-2 text-xs font-bold text-yellow-400">Video</p>
            <p className="flex items-center gap-2 text-4xl font-black uppercase">Colosseum 20xx Highlights</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
  )
}

export default VideoCard;