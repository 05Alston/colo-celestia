import React from 'react';
import { VideoCard, Footer, Backdrop } from '../components';
import Bg from '../assets/backdrop.webp';

const About = () => {
    return (
        <div className=' text-slate-100 bg-space-bg relative z-0'>
			<Backdrop/>
			{/* Header */}
			<section className="grid px-12 md:pb-20 justify-start min-h-screen place-items-center pb-0 max-w-[110rem] mx-auto">
				<div>
					<p className="text-5xl sm:text-7xl font-black font-Oswald uppercase">OUR HISTORY</p>
					<p className="py-6 md:text-3xl text-xl">Land of infinite possibilites.</p>
				</div>
			</section>
			{/* Gallery */}
			<section className='max-w-[110rem] relative'>
				<div className='w-full absolute -z-10'>
						<img src={Bg} className="w-full h-[80rem]"/>
				</div>
				<div className="mx-auto px-3 lg:pt-8 mt-8 max-w-2xl sm:px-6 grid gid-cols-1 lg:max-w-full lg:grid-cols-2 lg:gap-x-8 lg:px-8">
					<div className="grid grid-cols-1 gap-4 py-4 lg:py-0 lg:gap-8">
			          <div className="overflow-hidden rounded-lg block">
				          <div className="w-full aspect-video lg:h-full bg-entrage bg-gray-400 bg-cover bg-blend-multiply hover:bg-blend-normal interactable" datatype='image'>
						  </div>
			          </div>
			          <div className="grid grid-cols-2 gap-4 lg:gap-8">
			            <div className="overflow-hidden rounded-lg">
			              <div className="w-full aspect-square lg:aspect-video lg:h-full bg-entrage bg-gray-400 bg-cover bg-blend-multiply hover:bg-blend-normal interactable" datatype='image'></div>
			            </div>
			            <div className="overflow-hidden rounded-lg">
			              <div className="w-full aspect-square lg:aspect-video lg:h-full bg-entrage bg-gray-400 bg-cover bg-blend-multiply hover:bg-blend-normal interactable" datatype='image'></div>
			            </div>
			          </div>
					</div>
		          <div className="sm:overflow-hidden sm:rounded-lg">
		            <div className="w-full aspect-3/4 bg-speaker1 bg-gray-400 bg-cover bg-blend-multiply hover:bg-blend-normal interactable" datatype='image'></div>
		          </div>
		        </div>
				<div className="mx-auto px-3 mt-8 max-w-2xl sm:px-6 grid gid-cols-1 lg:max-w-full lg:grid-cols-2 lg:gap-x-8 lg:px-8">
		          <div className="pb-4 lg:pb-0 sm:overflow-hidden sm:rounded-lg">
		            <div className="w-full aspect-square bg-speaker2 bg-gray-400 bg-cover bg-blend-multiply hover:bg-blend-normal interactable" datatype='image'></div>
		          </div>
					<div className="grid grid-cols-1 gap-4 lg:gap-8">
			          <div className="overflow-hidden rounded-lg block">
				          <div className="w-full aspect-video lg:h-full  bg-entrage bg-gray-400 bg-cover bg-blend-multiply hover:bg-blend-normal interactable" datatype='image'></div>
			          </div>
			          <div className="grid grid-cols-2 gap-4 lg:gap-8">
			            <div className="overflow-hidden rounded-lg">
			              <div className="w-full aspect-square lg:aspect-video lg:h-full  bg-entrage bg-gray-400 bg-cover bg-blend-multiply hover:bg-blend-normal interactable" datatype='image'></div>
			            </div>
			            <div className="overflow-hidden rounded-lg">
			              <div className="w-full aspect-square lg:aspect-video lg:h-full  bg-entrage bg-gray-400 bg-cover bg-blend-multiply hover:bg-blend-normal interactable" datatype='image'></div>
			            </div>
			          </div>
					</div>
		        </div>
	        </section>
			{/* Past highlights */}
			<section className="px-12 pt-40 min-h-screen pb-20 max-w-[110rem] mx-auto">
				<p className="text-5xl md:text-7xl font-black font-Oswald uppercase">Blasts from the past</p>
				<div className="container mx-auto pt-32 flex gap-10 flex-wrap justify-center">
					<VideoCard/>
					<VideoCard/>
					<VideoCard/>
				</div>
			</section>
			<Footer/>
        </div>
    )
}

export default About;