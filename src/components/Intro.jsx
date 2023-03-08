import React, { useState, useEffect } from 'react';
import UpperSmoke from '../assets/upper-smoke.png';
import MidSmoke from '../assets/middle-smoke.png';
import LowerSmoke from '../assets/bottom-smoke.png';
import Alien from '../assets/nova.png';
import Portal from '../assets/portal.png';
import Background from '../assets/background.jpg';

const Intro = () => {
    const [value, setValue] = useState(1);
    // const heroScroller = gsap.timeline({
    //     paused: true,
    //     scrollTrigger: {
    //       trigger: ".hero-header.h-1",
    //       scroller: ".smooth-scroll",
    //       pin: ".pin-wrapper",
    //       start: "top 10%",
    //       scrub: true,
    //       end: "top 100vh",
    //     },
    //   });
	const upperElement = document.querySelector(".upper");
	const middleElement = document.querySelector(".middle");
	const bottomElement = document.querySelector(".bottom");
	const divElement = document.querySelector(".banner");
    // useEffect(()=> {
	// 	const update = () => {
    //         upperElement.style.scale = value * 0.05 + 1;
    //         middleElement.style.scale = value * 0.03 + 1;
    //         bottomElement.style.scale = value * 0.01 + 1;
    //         divElement.style.width = value * 6 + 1 + 'px';
    //         divElement.style.height = value * 6 + 1 + 'px';
    //         if(window.scrollY > 4 * screen.height / 5){
    //             upperElement.style.opacity = 0;
    //             middleElement.style.opacity = 0;
    //             bottomElement.style.opacity = 0;
    //             divElement.style.opacity = 0;
    //         }
    //         else{
    //             divElement.style.opacity = 1;
    //             bottomElement.style.opacity = 1;
    //             middleElement.style.opacity = 1;
    //             upperElement.style.opacity = 1;
    //         }
    //     }
    //     // update();
	// })
    // onScroll={setValue(()=>{return value < 0 ? 0 : window.scrollY})}
  return (
	<div className='w-full h-screen overflow-hidden relative'>
        <div className="h-screen w-full grid place-items-center relative overflow-x-hidden">
            <img src={Background} alt="" className='w-full absolute h-auto'/>
            <img src={Portal} alt="" className='w-[35.5vw] mt-5 absolute middle h-auto'/>
            <img src={LowerSmoke} className="w-[24vw] animate-[spin_80s_linear_infinite] -z-10 opacity-40 absolute lower"/>
            <img src={MidSmoke} className="w-[32vw] animate-[spin_40s_linear_reverse_infinite] z-0 opacity-80 absolute middle"/>
            <img src={UpperSmoke} className="w-[42vw] animate-[spin_60s_linear_reverse_infinite] z-10 absolute upper"/>
            {/*<div className="banner fixed rounded-full z-30"></div>*/}
            <img src={Alien} alt="" className='w-[12vw] pt-20 z-20 absolute h-auto'/>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Intro