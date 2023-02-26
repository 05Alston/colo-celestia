import React from 'react'

const Sponsor = ({ page }) => {
  return (
    <div className="w-full max-w-sm mt-20 interactable" datatype='link'>
      <div className={`${page == 'sponsor' ? 'block' : 'hidden'} text-center font-black uppercase text-6xl pb-10`}>Something Partner</div>
      <div className="w-full aspect-square bg-gray-300 rounded-lg dark:bg-gray-600"></div>
    </div>
  )
}

export default Sponsor;