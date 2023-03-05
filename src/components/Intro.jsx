import React, { useState, useEffect } from 'react';
import UpperSmoke from '../assets/upper-smoke.png';
import MidSmoke from '../assets/middle-smoke.png';
import LowerSmoke from '../assets/bottom-smoke.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

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
    useEffect(()=> {
		const update = () => {
            upperElement.style.scale = value * 0.05 + 1;
            middleElement.style.scale = value * 0.03 + 1;
            bottomElement.style.scale = value * 0.01 + 1;
            divElement.style.width = value * 6 + 1 + 'px';
            divElement.style.height = value * 6 + 1 + 'px';
            if(window.scrollY > 4 * screen.height / 5){
                upperElement.style.opacity = 0;
                middleElement.style.opacity = 0;
                bottomElement.style.opacity = 0;
                divElement.style.opacity = 0;
            }
            else{
                divElement.style.opacity = 1;
                bottomElement.style.opacity = 1;
                middleElement.style.opacity = 1;
                upperElement.style.opacity = 1;
            }
        }
        // update();
	})
  return (
    <div className="grid place-items-center overflow-x-hidden w-full h-screen" onScroll={setValue(()=>{return value < 0 ? 0 : window.scrollY})}>
				<div className="h-screen w-full grid place-items-center fixed overflow-hidden top-0 left-0">
					<img src={LowerSmoke} className="w-[20vw] animate-[spin_80s_linear_infinite] -z-10 opacity-40 fixed lower"/>
					<img src={MidSmoke} className="w-[28vw] animate-[spin_40s_linear_reverse_infinite] z-0 opacity-80 fixed middle"/>
					<img src={UpperSmoke} className="w-[39vw] animate-[spin_60s_linear_reverse_infinite] z-10 fixed upper"/>
					<div className="banner fixed rounded-full z-30"></div>
				</div>
			</div>
  )
}

export default Intro