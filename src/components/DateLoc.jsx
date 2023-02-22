import React from 'react';
import Logo from '../assets/colologo.webp';

const DateLoc = ({ date, location }) => {
  return (
    <div className='flex gap-3 items-center pt-20'>
        <div className="w-10 bg-slate-300 rounded-full aspect-square">
        </div>
        <p className='text-xl font-semibold pr-10'>{date}</p>
        <div className="w-10 bg-slate-300 rounded-full aspect-square">
        </div>
        <p className='text-xl font-semibold pr-10'>{location}</p>
    </div>
  )
}

export default DateLoc