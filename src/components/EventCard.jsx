import React from 'react'

const EventCard = ({ title, category, description, image }) => {
    //TODO: Do something about the color of badges
  return (
    <div className="rounded-lg flex flex-col overflow-hidden group w-72 h-96 md:w-[19rem] md:h-[26rem] bg-gray-800 shadow-xl relative interactable" datatype='link'>
        <figure className="group-hover:px-14 group-hover:pb-14 group-hover:md:px-12 group-hover:md:pb-12 z-10 transition-all duration-200">
            <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="p-8 flex flex-col flex-auto gap-2 items-start absolute bottom-0">
            <div className="flex justify-between w-full items-end">
            <h2 className="flex items-center gap-2 text-lg font-semibold">{title}</h2>
            <div className="badge text-white bg-sky-600 ">
                {category}
            </div>
            </div>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default EventCard;