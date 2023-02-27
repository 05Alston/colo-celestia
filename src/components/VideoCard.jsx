import React from 'react'
import Poster from '../assets/arch-linux-poster.webp';
import { BsPlay } from 'react-icons/bs';

const VideoCard = () => {
  return (
    <div className="rounded-lg flex flex-col overflow-hidden group w-[26rem] h-[30rem] bg-gray-800 shadow-xl relative interactable" datatype='video'>
        <div className="w-full h-1/2 bg-gray-600 rounded-lg grid place-items-center">
          <div className='lg:hidden place-items-center text-gray-700 text-3xl aspect-square w-16 bg-white rounded-full grid'>
            <BsPlay/>
          </div>
        </div>
        <div className="p-8 flex flex-col flex-auto gap-2 items-start">
            <p className="flex items-center gap-2 text-xs font-bold text-yellow-400">Video</p>
            <p className="flex items-center gap-2 text-4xl font-black uppercase">Colosseum 20xx Highlights</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
  )
}

export default VideoCard;