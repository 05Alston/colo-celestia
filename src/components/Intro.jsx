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
            <div className='w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='relative'>
                <img src={Background} alt="" className='w-full brightness-[0.3] block md:opacity-100 opacity-0'/>
                <img src={Alien} alt="" className='h-[20vw] md:h-[12vw] z-20 absolute left-1/2 bottom-1/4 md:bottom-0 -translate-x-1/2 w-auto'/>
                <div className='object-contain z-20 absolute right-[9.4vw] translate-x-0 w-[11vw] h-[7vw] bottom-[15.4vw] pt-20 -translate-y-1/2'>
                    <div className='w-full text-center py-[0.8vw] px-[2px] font-Barrio text-[1.2vw] screen font-bold md:opacity-100 opacity-0 glitch' datatype='COLOSSEUM IS NOW LIVE'>COLOSSEUM IS NOW LIVE</div>
                </div>
                </div>
            </div>
            <img src={LowerSmoke} className="md:w-[24vw] animate-[customSpin_80s_linear_infinite] z-10 opacity-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
            <img src={Portal} alt="" className='md:w-[35.5vw] z-[5] mt-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 middle h-auto opacity-90'/>
            <img src={MidSmoke} className="md:w-[30vw] animate-[customSpin_40s_linear_reverse_infinite] z-0 opacity-80 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
            <img src={UpperSmoke} className="md:w-[42vw] animate-[customSpin_60s_linear_reverse_infinite] z-20 absolute opacity-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
            <div className='font-semibold text-lg z-20 absolute left-0 bottom-1/4 animate-[customBounce_2s_ease-in-out_infinite]'>Scroll Down</div>
        </div>
    </div>
  )
}

export default Intro
