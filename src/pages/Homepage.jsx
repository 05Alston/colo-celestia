import React, { useState } from 'react'
import { DateLoc } from '../components';
import { NavLink } from 'react-router-dom';

const Homepage = () => {
	const [effect, setEffect] = useState(false);
	return (
		<>
			{/* Hero section */}
			<div className="grid px-12 pb-20 justify-start place-items-end min-h-screen text-slate-100 bg-slate-800 md:place-items-center md:pb-0">
				<div>
					<p className="sm:text-5xl text-7xl font-bold">CELESTIA</p>
					<p className="py-6 text-3xl md:text-xl">Land of infinite possibilites.</p>
					<DateLoc date={"today"} location={"Here"}/>
				</div>
			</div>
			{/* Throwback */}
			<div className='px-12 md:px-5 min-h-screen text-slate-100 bg-slate-800 pt-20 flex flex-col justify-center'>
				<div className="flex gap-10 justify-between items-start lg:flex-col-reverse">
					<div className='flex-initial w-5/12 lg:w-auto'>
						<p className='text-base md:text-sm'>What we're about?</p>
						<div className="pt-12 text-xl font-bold lg:text-base md:font-semibold text-justify">
							Colosseum is the Annual Technical Festival of Don Bosco Institute of Technology hosted by the faculty and
							various student committees of DBIT. These committees organize various event, as well as many other social
							projects and outreach activities throughout a period of two days.<div className='py-2'></div> Colosseum is well-known for holding a range
							of activities such as contests, exhibits, talks, and seminars along with fun activities for students across
							the campus!
						</div>
					</div>
					<div className='w-[700px] md:w-11/12 aspect-video rounded-xl bg-gray-600 text-slate-50 bg-opacity-40 flex-grow' datatype='video'>
						{/* Video */}
					</div>
				</div>
				<NavLink to="/">
					<button className={`btn bg-gray-900 gap-2 ${effect && 'animate-buttonPop'}`} onClick={() => setEffect(true)} onAnimationEnd={() => setEffect(false)}>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
						Button
					</button>
				</NavLink>
			</div>
			{/* Featuring */}
			<div className='flex flex-col px-12 pb-20'>
			<div className="grid gap-10 justify-start min-h-screen text-slate-100 bg-slate-800 md:place-items-center md:pb-0">
				<div>
					
				</div>
			</div>
			</div>
		</>
	)
}

export default Homepage;