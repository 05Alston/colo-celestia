import React, { useState, useEffect } from 'react';
import UpperSmoke from '../assets/upper-smoke.png';
import MidSmoke from '../assets/middle-smoke.png';
import LowerSmoke from '../assets/bottom-smoke.png';
import Alien from '../assets/nova.png';
import Portal from '../assets/portal.png';
import Background from '../assets/background.jpg';

const Intro = () => {
  return (
	<div className='overflow-x-hidden'>
        <div className="h-screen w-full grid place-items-center relative bg-gradient-to-b from-black to-transparent">
            <img src={Background} alt="" className='w-full absolute h-auto'/>
            <img src={Portal} alt="" className='md:w-[35.5vw] mt-5 absolute lower h-auto opacity-50'/>
            <img src={LowerSmoke} className="md:w-[24vw] animate-[spin_80s_linear_infinite] -z-10 opacity-40 absolute lower"/>
            <img src={MidSmoke} className="md:w-[32vw] animate-[spin_40s_linear_reverse_infinite] z-0 opacity-80 absolute middle"/>
            <img src={UpperSmoke} className="md:w-[42vw] animate-[spin_60s_linear_reverse_infinite] z-10 absolute upper"/>
            <img src={Alien} alt="" className='w-[12vw] md:w-[12vw] pt-40 z-20 absolute h-auto'/>
        </div>
    </div>
  )
}

export default Intro
