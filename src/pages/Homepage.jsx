import React, { useState } from 'react'
import { DateLoc, Speaker, Sponsor, Footer } from '../components';
import { NavLink } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi'

const Homepage = () => {
	const [effect, setEffect] = useState(false);
	return (
		<div className=' text-slate-100 bg-slate-800'>
			{/* Hero section */}
			<section className="grid px-12 md:pb-20 justify-start md:place-items-end min-h-screen place-items-center pb-0 max-w-[110rem] mx-auto">
				<div>
					<p className="text-5xl sm:text-7xl font-black font-Oswald uppercase">Celestia</p>
					<p className="py-6 md:text-3xl text-xl">Land of infinite possibilites.</p>
					<DateLoc date={"today"} location={"Here"}/>
				</div>
			</section>
			{/* Throwback */}
			<section className='md:px-12 sm:px-8 px-3 pt-20 flex gap-20 justify-between lg:items-start items-center flex-col lg:flex-row max-w-[110rem] mx-auto'>
				<div className='flex-initial lg:w-5/12 w-auto'>
					<p className='md:text-sm text-xs font-light'>What we're about?</p>
					<div className="pt-6 md:text-4xl text-2xl font-black uppercase font-Oswald">
						Colosseum is the Annual Technical Festival of Don Bosco Institute of Technology hosted by the faculty and
						various student committees of DBIT
					</div>
					<div className="pt-6 text-sm font-light">
						These committees organize various event, as well as many other social projects and outreach activities throughout a period of two days. We are well-known for holding a range of activities such as contests, exhibits, talks, and seminars along with fun activities for students across the campus!
					</div>
					<NavLink to="/">
						<button id="btn" className={`interactable btn bg-gray-900 gap-2 ${effect && 'animate-buttonPop'}`} datatype="link" onClick={() => setEffect(true)} onAnimationEnd={() => setEffect(false)}>
							<HiChevronRight className='text-3xl aspect-square'/>
							Button
						</button>
					</NavLink>
				</div>
				<div className='md:w-[700px] animate-pulse w-11/12 aspect-video rounded-xl bg-gray-600 text-slate-50 bg-opacity-40 flex-grow interactable' datatype='video'>
					{/* Video */}
				</div>
			</section>
			{/* Featuring */}
			<section className="px-12 pt-32 pb-20 max-w-[110rem] mx-auto">
				<p className="text-5xl md:text-7xl font-black font-Oswald uppercase">Featuring</p>
				<div className="container mx-auto animate-pulse">
					<div className="grid grid-cols-1 gap-8 mt-16 xl:mt-20 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
						<Speaker/>
						<Speaker/>
						<Speaker/>
						<Speaker/>
						<Speaker/>
						<Speaker/>
						<Speaker/>
						<Speaker/>
					</div>
				</div>
			</section>
			<section className="px-12 pt-32 pb-20 max-w-[110rem] mx-auto">
				<p className="text-5xl md:text-7xl font-black font-Oswald uppercase">Sponsors</p>
				<div className="container mx-auto animate-pulse">
					<div className="grid grid-cols-1 gap-8 mt-16 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:mt-20 xl:gap-12">
						<Sponsor/>
						<Sponsor/>
						<Sponsor/>
						<Sponsor/>
						<Sponsor/>
						<Sponsor/>
						<Sponsor/>
					</div>
				</div>
			</section>
			<Footer/>

		</div>
	)
}

export default Homepage;