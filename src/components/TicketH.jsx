import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const TicketH = () => {
	const [effect, setEffect] = useState(false);
	return (
		<div className="flex group w-96 h-52 relative interactable" datatype='link'>
			<div className='grid place-items-center w-full shadow-xl border-dashed border-black border-r-2 h-full rounded-lg bg-gray-800'>
				<div className=' font-semibold text-center text-base px-8'>Get your colo night passes now</div>
				<div className='font-black text-center text-7xl font-Oswald px-8'>$ 333</div>
			</div>
			<div className={`${effect && 'animate-ticketTear'} grid shadow-xl place-items-center w-20 border-dashed border-black origin-bottom-left border-l-2 h-full rounded-lg bg-gray-800`}>
				<NavLink to="/">
					<button onClick={() => setEffect(true)} onAnimationEnd={() => setEffect(false)}>
						<div className='-mx-12 -rotate-90 whitespace-nowrap font-semibold text-center text-lg uppercase'>Buy Now</div>
					</button>
					</NavLink>
			</div>
	    </div>
	)
}

export default TicketH