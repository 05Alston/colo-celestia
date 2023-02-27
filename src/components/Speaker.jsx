import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa';

const Speaker = () => {
  return (
    <div className="w-full mt-20 interactable" datatype='link'>
      <div className="w-full h-96 rounded-lg bg-gray-600 grid place-items-end">
        <FaExternalLinkAlt className='lg:hidden text-white m-4'/>
      </div>
      
      <h1 className="w-56 h-2 mt-4 rounded-lg bg-gray-700"></h1>
      <p className="w-24 h-2 mt-4 rounded-lg bg-gray-700"></p>
    </div>
  )
}

export default Speaker;