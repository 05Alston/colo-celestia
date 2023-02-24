import React, { useState } from 'react'
import { DateLoc } from '../components';
import { NavLink } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi'

const Homepage = () => {
	const [effect, setEffect] = useState(false);
	return (
		<div className=' text-slate-100 bg-slate-800'>
			{/* Hero section */}
			<div className="grid px-12 pb-20 justify-start place-items-end min-h-screen md:place-items-center md:pb-0">
				<div>
					<p className="sm:text-5xl text-7xl font-black uppercase">Celestia</p>
					<p className="py-6 text-3xl md:text-xl">Land of infinite possibilites.</p>
					<DateLoc date={"today"} location={"Here"}/>
				</div>
			</div>
			{/* Throwback */}
			<div className='px-12 md:px-8 sm:px-3 min-h-screen pt-20 flex flex-col justify-center'>
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
					<div className='w-[700px] md:w-11/12 aspect-video rounded-xl bg-gray-600 text-slate-50 bg-opacity-40 flex-grow interactable' datatype='video'>
						{/* Video */}
					</div>
				</div>
				<NavLink to="/">
					<button className={`interactable btn bg-gray-900 gap-2 ${effect && 'animate-buttonPop'}`} datatype="link" onClick={() => setEffect(true)} onAnimationEnd={() => setEffect(false)}>
						<HiChevronRight className='text-3xl aspect-square'/>
						Button
					</button>
				</NavLink>
			</div>
			{/* Featuring */}
			<div className='flex flex-col px-12 pt-32 min-h-screen'>
				<div className="grid gap-10 justify-startmd:place-items-center md:pb-0">
					<div>
					<p className="sm:text-5xl text-6xl font-black uppercase">Featuring</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Homepage;