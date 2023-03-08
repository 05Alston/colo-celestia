import React, { useState, useEffect } from 'react';
import UpperSmoke from '../assets/upper-smoke.png';
import MidSmoke from '../assets/middle-smoke.png';
import LowerSmoke from '../assets/bottom-smoke.png';
import Alien from '../assets/nova.png';
import Portal from '../assets/portal.png';
import Background from '../assets/background.jpg';

const Intro = () => {
  return (
	<div className='overflow-hidden'>
        <div className="h-screen w-full relative bg-gradient-to-b from-black to-transparent">
            <img src={Background} alt="" className='w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block'/>
            <img src={Portal} alt="" className='md:w-[35.5vw] mt-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lower h-auto opacity-50'/>
            <img src={LowerSmoke} className="md:w-[24vw] animate-[customSpin_80s_linear_infinite] -z-10 opacity-40 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lower"/>
            <img src={MidSmoke} className="md:w-[32vw] animate-[customSpin_40s_linear_reverse_infinite] z-0 opacity-80 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 middle"/>
            <img src={UpperSmoke} className="md:w-[42vw] animate-[customSpin_60s_linear_reverse_infinite] z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 upper"/>
            <img src={Alien} alt="" className='w-[12vw] md:w-[12vw] z-20 absolute left-1/2 bottom-0 -translate-x-1/2 h-auto'/>
        </div>
    </div>
  )
}

export default Intro
// animate-[spin_80s_linear_infinite]
// animate-[spin_40s_linear_reverse_infinite]
// animate-[spin_60s_linear_reverse_infinite]