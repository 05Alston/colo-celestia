import React from 'react'
import { BsPlay } from 'react-icons/bs';

const VideoCard = ({ year, url, vid }) => {
  return (
    <div className="rounded-lg flex flex-col overflow-hidden group w-[26rem] h-[30rem] bg-gray-800 shadow-xl relative">
        <div className="w-full h-1/2 bg-gray-600 rounded-lg grid place-items-center">
        <label for={`my-modal-${year}`}><div  className='place-items-center text-gray-700 text-3xl aspect-square w-16 bg-white rounded-full grid interactable' datatype='video'>
            <BsPlay/>
          </div></label>

        <input type="checkbox" id={`my-modal-${year}`}  className="modal-toggle" />
        <label for={`my-modal-${year}`}  className="modal cursor-pointer">
          <label  className="modal-box w-10/12 max-w-5xl aspect-video relative grid place-items-center" for="">
            <video preload="true" autoplay="false" muted="true" className='w-11/12 aspect-video rounded-xl' playsInline="" loop="false">
                <source src={vid} type="video/mp4"/>
            </video>
          </label>
        </label>
        </div>
        <div className="p-8 flex flex-col flex-auto gap-2 items-start">
            <p className="flex items-center gap-2 text-xs font-bold text-yellow-400">Video</p>
            <p className="flex items-center gap-2 text-xl md:text-4xl font-black uppercase">Colosseum {year} Highlights</p>
        </div>
    </div>
  )
}

export default VideoCard;
