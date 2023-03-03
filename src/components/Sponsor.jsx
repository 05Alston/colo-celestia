import React from 'react'

const Sponsor = ({ page, image }) => {
  return (
    <div className="w-full max-w-xs mt-20 interactable" datatype='link'>
      <div className={`${page == 'sponsor' ? 'block' : 'hidden'} text-center font-black uppercase text-5xl pb-10`}>Something Partner</div>
      <div className="w-full aspect-square rounded-lg bg-gray-600">
        <img src={`http://localhost:1337${image}`} className='bg-contain w-full h-auto' />
      </div>
    </div>
  )
}

export default Sponsor;