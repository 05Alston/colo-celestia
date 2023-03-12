import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa';

const Speaker = ({ image, name, domain, loading }) => {
  return (
    <button onClick={() => {
        window.location.href = "https://forms.gle/AG1TKymmNJ9afnPB8";
        }}>
      <div className="w-full mt-20 interactable flex flex-col group" datatype='link'>
        <div className="w-full h-96 rounded-lg overflow-hidden relative bg-gray-600">
            <img src={image} className={`object-cover object-center h-full w-full saturate-[0.4] transition-all duration-150 group-hover:scale-105 group-hover:saturate-100 rounded-lg after:block after:w-full after:h-full after:bg-black relative after:absolute after:top-0 after:left-0 ${loading ? 'hidden' : 'block'}`} />
            <FaExternalLinkAlt className='lg:hidden z-20 text-white m-4 absolute bottom-0 right-0'/>
            <div className='w-full absolute bottom-0 h-1/2 bg-gradient-to-t from-space-bg to-transparent'></div>
        </div>
        
        <h1 className={`w-full h-4 mt-4 rounded-lg text-xl lg:text-2xl font-bold whitespace-nowrap ${loading ? 'bg-gray-700' : ''}`}>{name}</h1>
        <p className={`w-full h-4 mt-8 rounded-lg text-base lg:text-lg font-normal ${loading ? 'bg-gray-700' : ''}`}>{domain}</p>
      </div>
    </button>
  )
}

export default Speaker;
