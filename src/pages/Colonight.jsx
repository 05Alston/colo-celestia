import React from 'react';
import backdrop from '../assets/colonite.webp';
import { DateLoc, TicketV, TicketH } from '../components';

const Colonight = () => {
	return (
		<div className='w-full h-screen overflow-x-hidden bg-black text-gray-100'>
			<div className='w-full h-screen absolute bg-center bg-cover blur-[5px] bg-colonite'></div>
			<div className='w-full h-screen bg-black opacity-40 absolute'></div>
            <div className={`${screen.availWidth > screen.availHeight ? 'h-[33vh]' : ''} w-full`}></div>
			<section className="flex flex-col md:flex-row overflow-y-hidden md:px-12 sm:px-8 px-3 items-center justify-evenly min-h-screen max-w-[110rem] mx-auto relative">
				<div>
					<p className="text-5xl sm:text-7xl font-black font-Oswald uppercase">Colo Night</p>
					<p className="lg:pt-6 md:text-3xl text-xl">Hurry up! Time is running out.</p>
					<p className="md:text-3xl text-xl">Don't wait, GET your ticket right now.</p>
					<DateLoc date={"16th March"} location={"Kurla, Mumbai"}/>
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
