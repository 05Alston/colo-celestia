import React from 'react'
import { DateLoc } from '../components';

const Homepage = () => {
	return (
		<>
			{/* Hero section */}
			<div className="grid px-12 pb-20 justify-start place-items-end min-h-screen text-slate-100 bg-gray-900 md:place-items-center md:pb-0">
				<div>
				<p className="sm:text-5xl text-7xl font-bold">CELESTIA</p>
				<p className="py-6 text-3xl md:text-xl">Land of infinite possibilites.</p>
				<DateLoc date={"today"} location={"Here"}/>
				</div>
			</div>
			{/* Throwback */}
			<div className="flex gap-10 px-12 min-h-screen text-slate-100 bg-gray-900 justify-center items-center lg:flex-col">
				<div className='flex-initial w-1/3 lg:w-auto'>
				<p>What we're about?</p>
				<p className="pt-12 text-xl font-bold">
          Colosseum is the Annual Technical Festival of Don Bosco Institute of Technology hosted by the faculty and
          various student committees of DBIT. These committees organize various event, as well as many other social
          projects and outreach activities throughout a period of two days.<div className='py-2'/> Colosseum is well-known for holding a range
          of activities such as contests, exhibits, talks, and seminars along with fun activities for students across
          the campus!
        </p>
				</div>
				<div className='w-[700px] aspect-video rounded-xl bg-gray-600 text-slate-50 bg-opacity-40 flex-initial' datatype='video'>
					{/* Video */}
				</div>
			</div>
		</>
	)
}

export default Homepage;