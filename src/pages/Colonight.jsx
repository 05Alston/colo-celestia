import React from 'react';
import backdrop from '../assets/colonite.webp';
import { DateLoc, TicketV, TicketH } from '../components';

const Colonight = () => {
	return (
		<div className='w-full h-screen bg-black text-gray-100'>
			<div className='w-full h-screen bg-colonight absolute bg-center bg-cover blur-[5px]'></div>
			<div className='w-full h-screen bg-black opacity-40 absolute'></div>
			<section className="flex flex-col md:flex-row md:px-12 sm:px-8 px-3 items-center justify-evenly min-h-screen max-w-[110rem] mx-auto relative">
				<div>
					<p className="text-5xl sm:text-7xl font-black font-Oswald uppercase">Colo Night</p>
					<p className="lg:pt-6 md:text-3xl text-xl">Hurry up! Time is running out.</p>
					<p className="md:text-3xl text-xl">Don't wait, GET your ticket right now.</p>
					<DateLoc date={"today"} location={"Here"}/>
				</div>
				<div className='hidden md:block'>
					<TicketV/>
				</div>
				<div className='md:hidden block'>
					<TicketH/>
				</div>
			</section>
		</div>
	)
}

export default Colonight;