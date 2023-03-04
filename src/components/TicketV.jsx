import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const TicketV = () => {
	const [effect, setEffect] = useState(false);
	return (
		<div className="flex flex-col group w-72 h-96 md:w-[19rem] md:h-[26rem] relative">
			<div className='grid place-items-center font-semibold text-center text-base px-8 w-full border-dashed border-gray-900 border-b-2 h-32 rounded-lg bg-gray-800 shadow-xl'>Get your colo night passes now</div>
			<div className={`grid place-items-center w-full border-dashed border-gray-900 border-t-2 h-full shadow-xl rounded-lg bg-gray-800 origin-top-left ${effect && 'animate-ticketTear'}`}>
				<div className='font-black text-center text-7xl font-Oswald px-8'>$ 333</div>
				<NavLink to="/">
					<button id="btn" className='interactable btn bg-gray-900 gap-2 uppercase' datatype="link" onClick={() => setEffect(true)} onAnimationEnd={() => setEffect(false)}> Buy Now
					</button>
				</NavLink>
			</div>
	    </div>
	)
}

export default TicketV