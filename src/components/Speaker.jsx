import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa';

const Speaker = ({ image, name, domain, loading }) => {
  return (
    <button onClick={() => {
        window.location.href = "https://forms.gle/AG1TKymmNJ9afnPB8";
        }}>
      <div className="w-full mt-20 interactable flex flex-col" datatype='link'>
        <div className="w-full h-96 rounded-lg overflow-hidden bg-gray-600 grid place-items-end">
        <img src={image} className={`object-cover rounded-lg h-full ${loading ? 'hidden' : 'block'}`} />
          <FaExternalLinkAlt className='lg:hidden z-20 text-white m-4'/>
        </div>
        
        <h1 className={`w-full h-4 mt-4 rounded-lg text-xl lg:text-2xl font-bold whitespace-nowrap ${loading ? 'bg-gray-700' : ''}`}>{name}</h1>
        <p className={`w-full h-4 mt-8 rounded-lg text-base lg:text-lg font-normal ${loading ? 'bg-gray-700' : ''}`}>{domain}</p>
      </div>
    </button>
  )
}

export default Speaker;