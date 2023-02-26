import React from 'react';
import { VideoCard, Footer } from '../components';

const About = () => {
    return (
        <div className=' text-slate-100 bg-slate-800'>
			<section className="grid px-12 md:pb-20 justify-start min-h-screen place-items-center pb-0 max-w-[110rem] mx-auto">
				<div>
					<p className="text-5xl sm:text-7xl font-black font-Oswald uppercase">Celestia</p>
					<p className="py-6 md:text-3xl text-xl">Land of infinite possibilites.</p>
				</div>
			</section>
			{/* Gallery */}
			<div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
	          <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
		          <div className="w-full h-full bg-gray-600 animate-pulse">1</div>
	          </div>
	          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
	            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
	              <div className="w-full h-full bg-gray-600 animate-pulse">2</div>
	            </div>
	            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
	              <div className="w-full h-full bg-gray-600 animate-pulse">3</div>
	            </div>
	          </div>
	          <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
	            <div className="w-full h-full bg-gray-600 animate-pulse">4</div>
	          </div>
	        </div>
			{/* Past highlights */}
			<section className="px-12 pt-32 pb-20 max-w-[110rem] mx-auto">
				<p className="text-5xl md:text-7xl font-black font-Oswald uppercase">Blasts from the past</p>
				<div className="container mx-auto flex gap-10 flex-wrap justify-center">
					<VideoCard/>
					<VideoCard/>
					<VideoCard/>
				</div>
			</section>
        </div>
    )
}

export default About;