import React from 'react';
import { MdDateRange, MdLocationOn } from 'react-icons/md';

const DateLoc = ({ date, location }) => {
  return (
    <div className='flex gap-3 items-center pt-20'>
        <div className="w-10 bg-slate-300 text-gray-800 text-2xl rounded-full aspect-square grid place-items-center">
          <MdDateRange/>
        </div>
        <p className='text-xl font-semibold pr-10'>{date}</p>
        <div className="w-10 bg-slate-300 text-gray-800 text-2xl rounded-full aspect-square grid place-items-center">
          <MdLocationOn/>
        </div>
        <p className='text-xl font-semibold pr-10'>{location}</p>
    </div>
  )
}

export default DateLoc