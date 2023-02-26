import React from 'react'

const Speaker = () => {
  return (
    <div className="w-full mt-20 interactable" datatype='link'>
      <div className="w-full h-72 md:h-96 rounded-lg bg-gray-600"></div>
      
      <h1 className="w-56 h-2 mt-4 rounded-lg bg-gray-700"></h1>
      <p className="w-24 h-2 mt-4 rounded-lg bg-gray-700"></p>
    </div>
    // <div className="rounded-xl flex flex-col relative overflow-hidden w-64 bg-slate-900 shadow-2xl group interactable" datatype="link" >
    //     <figure><img src={img} className="rounded-bl-[3rem] rounded-br-lg saturate-0 transition-all duration-400 group-hover:saturate-50" alt="Speaker"/></figure>
    //     <div className="p-4 text-sm flex flex-col gap-2 flex-auto">
    //         <h2 className="mb-1 items-center gap-2 text-2xl font-bold flex">Speaker Name</h2>
    //         <p className='text-slate-400'>Speaker description</p>
    //     </div>
    // </div>
  )
}

export default Speaker;