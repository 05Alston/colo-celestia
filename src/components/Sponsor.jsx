import React from 'react'

const Sponsor = ({ page, image, section, loading }) => {
  return (
    <div className="w-full max-w-xs mt-20">
      <div className={`${page == 'sponsor' ? 'block' : 'hidden'} text-center font-black uppercase text-5xl pb-10`}>{section} Partner</div>
      <div className="w-full aspect-square rounded-lg bg-gray-600">
        <img src={`http://localhost:1337${image}`} className={`bg-contain w-full h-auto ${loading ? 'hidden' : 'block'}`} />
      </div>
    </div>
  )
}

export default Sponsor;