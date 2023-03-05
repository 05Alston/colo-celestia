import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TicketH = () => {
	const [effect, setEffect] = useState(false);
	const navigate = useNavigate();
	return (
		<div className="flex group w-96 h-52 relative interactable px-4 md:px-0" datatype='link'>
			<div className='grid place-items-center w-full shadow-xl border-dashed border-gray-900 border-r-2 h-full rounded-lg bg-gradient-to-r from-blue-800 to-indigo-900'>
				<div className=' font-semibold text-center text-base px-8'>Get your colo night passes now</div>
				<div className='font-black text-center text-7xl font-Oswald px-8'>₹ 333</div>
			</div>
			<div className={`${effect && 'animate-ticketTear'} grid shadow-xl place-items-center w-20 border-dashed border-gray-900 origin-bottom-left border-l-2 h-full rounded-lg bg-gradient-to-r from-blue-800 to-indigo-900`}>
					<button onClick={() => {
						setEffect(true);
						setTimeout(() => {
							navigate("/");
						},1000)
					}} onAnimationEnd={() => setEffect(false)}>
						<div className='-mx-12 -rotate-90 whitespace-nowrap font-semibold text-center text-lg uppercase'>Buy Now</div>
					</button>
			</div>
	    </div>
	)
}

export default TicketH