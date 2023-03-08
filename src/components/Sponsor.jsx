import React from 'react'

const Sponsor = ({ page, image, section, loading }) => {
  return (
    <div className="w-full max-w-xs mt-20">
      <div className={`${page == 'sponsor' ? 'block' : 'hidden'} text-center font-black uppercase text-5xl pb-10`}>{section} Partner</div>
      <div className="w-full aspect-square rounded-lg overflow-hidden bg-cover bg-gray-600">
        <img src={image} className={`rounded-lg ${loading ? 'hidden' : 'block'}`} />
      </div>
    </div>
  )
}

export default Sponsor;