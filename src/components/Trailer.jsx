import React, { useEffect } from 'react';
import { BsPlay, BsImage } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Trailer = () => {
	useEffect(()=>{
		const getTrailerClass = type => {
			switch(type) {
				case "video":
					return <BsPlay/>;
				case "image":
					return <BsImage/>;
				case "link":
					return <FaExternalLinkAlt className='text-[0.25rem]'/>;
				case "open":
					return <IoClose/>;
				case "close":
					return <GiHamburgerMenu/>;
				default:
					return ""; 
			}
		}

		const trailer = document.getElementById("trailer");
		window.onmousemove = e => {
			const interactable = e.target.closest(".interactable"),
			interacting = interactable !== null;

			animateTrailer(e, interacting);
			const content = document.getElementById("content");
			trailer.setAttribute("data-type","");
			content.innerHTML = "";
			if(interacting) {
				trailer.setAttribute("data-type",interactable.getAttribute("datatype"));
				content.innerHTML = ReactDOMServer.renderToString(getTrailerClass(interactable.getAttribute("datatype")));
			}
		}
		const animateTrailer = (e, interacting) => {

			const x = e.clientX - trailer.offsetWidth / 2;
			const y = e.clientY - trailer.offsetHeight / 2;

			const keyframes = {
				transform: `translate(${x}px, ${y}px) scale(${interacting ? 3 : 1})`
			}

			trailer.animate(keyframes, { 
				duration: 300, 
				fill: "forwards" 
			});
		}
	})
	return (
		<div id="trailer" className='hidden lg:grid'>
			<div id="content" className='text-gray-700 text-[0.5rem]'></div>
		</div>
	)
}

export default Trailer;