import React from 'react'
import Poster from '../assets/arch-linux-poster.webp';

const EventCard = () => {
  return (
    <div className="rounded-lg flex flex-col overflow-hidden group w-72 h-96 md:w-[19rem] md:h-[26rem] bg-gray-800 shadow-xl relative interactable" datatype='link'>
        <figure className="group-hover:px-12 group-hover:pb-12 z-10 transition-all duration-200">
            <img src={Poster} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="p-8 flex flex-col flex-auto gap-2 items-start absolute bottom-0">
            <div className="flex justify-between w-full items-end">
            <h2 className="flex items-center gap-2 text-lg font-semibold">Event!</h2>
            <div className="badge text-white bg-sky-600 ">
                workshop
            </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
  )
}

export default EventCard;