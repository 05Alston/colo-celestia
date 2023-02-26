import React from 'react';
import { Footer, Sponsor } from '../components';
const Sponsors = () => {
	return (
		<div className=' text-slate-100 bg-slate-800'>
            <div className='h-[33vh] w-full '></div>
            <section className=" md:px-12 pb-20 max-w-[110rem] mx-auto">
                <p className="px-6 md:px-0 text-5xl md:text-7xl font-black font-Oswald uppercase">Sponsors</p>
                <div className='grid place-items-center animate-pulse'>
				<Sponsor page={'sponsor'}/>
				<Sponsor page={'sponsor'}/>
				<Sponsor page={'sponsor'}/>
				<Sponsor page={'sponsor'}/>
				<Sponsor page={'sponsor'}/>
				<Sponsor page={'sponsor'}/>
				<Sponsor page={'sponsor'}/>
			</div>
            </section>
            <Footer/>
        </div>
	)
}

export default Sponsors