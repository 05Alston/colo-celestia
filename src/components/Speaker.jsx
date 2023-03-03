import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa';

const Speaker = ({ image, name, domain, loading }) => {
  return (
    <div className="w-full mt-20 interactable" datatype='link'>
      <div className="w-full h-96 rounded-lg bg-gray-600 grid place-items-end">
      <img src={`http://localhost:1337${image}`} className={`bg-contain w-full h-auto ${loading ? 'hidden' : 'block'}`} />
        <FaExternalLinkAlt className='lg:hidden z-20 text-white m-4'/>
      </div>
      
      <h1 className={`w-56 h-4 mt-4 rounded-lg text-3xl lg:text-4xl font-bold  ${loading ? 'bg-gray-700' : ''}`}>{name}</h1>
      <p className={`w-24 h-4 mt-8 rounded-lg text-base lg:text-lg font-normal ${loading ? 'bg-gray-700' : ''}`}>{domain}</p>
    </div>
  )
}

export default Speaker;