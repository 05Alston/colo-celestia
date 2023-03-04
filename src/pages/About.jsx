import React from 'react';
import { VideoCard, Footer, Backdrop } from '../components';

const About = () => {
    return (
        <div className=' text-slate-100 bg-space-bg relative z-0'>
			<Backdrop/>
            <div className='h-[30vh] w-full '></div>
			{/* Header */}
			<section className="grid px-12 md:pb-20 justify-start min-h-screen place-items-center pb-0 max-w-[110rem] mx-auto">
				<div>
					<p className="text-5xl sm:text-7xl py-8 font-black font-Oswald uppercase">OUR HISTORY</p>
					<p className="py-6 md:text-lg text-base max-w-[60ch]">Colosseum is an annual inter collegiate technical festival organized by the students of DBIT. It is a platform for students from different colleges to showcase their technical skills and compete in various events related to computer science, electronics, and other technical fields.</p>
					<p className="py-6 md:text-lg text-base max-w-[60ch]">The fest is known for its vibrant atmosphere, enthusiastic participation, and innovative events.Colosseum provides a great opportunity for students to learn new skills, meet like-minded individuals, and enhance their career prospects.</p>
				</div>
			</section>
			{/* Gallery */}
			<section className='max-w-[110rem] relative'>
				<div className='w-full absolute -z-10 h-full Bg bg-cover bg-bottom'>
				</div>
				<p className="text-5xl sm:text-7xl py-8 font-black font-Oswald uppercase pt-16">Gallery</p>
				<div className="mx-auto px-3 mt-8 max-w-2xl sm:px-6 grid gid-cols-1 lg:max-w-full lg:grid-cols-2 lg:gap-x-8 lg:px-8">
					<div className="grid grid-cols-1 gap-4 py-4 lg:py-0 lg:gap-8">
			          <div className="overflow-hidden rounded-lg block">
				          <div className="w-full aspect-video lg:h-full bg-decor bg-center bg-gray-400 bg-cover interactable" datatype='image'>
						  </div>
			          </div>
			          <div className="grid grid-cols-2 gap-4 lg:gap-8">
			            <div className="overflow-hidden rounded-lg">
			              <div className="w-full aspect-square lg:aspect-video lg:h-full bg-robot bg-center bg-gray-400 bg-cover interactable" datatype='image'></div>
			            </div>
			            <div className="overflow-hidden rounded-lg">
			              <div className="w-full aspect-square lg:aspect-video lg:h-full bg-player bg-center bg-gray-400 bg-cover interactable" datatype='image'></div>
			            </div>
			          </div>
					</div>
		          <div className="overflow-hidden rounded-lg">
		            <div className="w-full aspect-3/4 bg-speaker1 bg-gray-400 bg-cover bg-center interactable" datatype='image'></div>
		          </div>
		        </div>
				<div className="mx-auto px-3 pb-16 mt-4 lg:mt-8 max-w-2xl sm:px-6 grid gid-cols-1 lg:max-w-full lg:grid-cols-2 lg:gap-x-8 lg:px-8">
		          <div className="pb-4 lg:pb-0 overflow-hidden rounded-lg">
		            <div className="w-full aspect-square bg-speaker2 bg-gray-400 bg-cover bg-top interactable" datatype='image'></div>
		          </div>
					<div className="grid grid-cols-1 gap-4 lg:gap-8">
			          <div className="overflow-hidden rounded-lg block">
				          <div className="w-full aspect-video lg:h-full bg-speaker3 bg-right bg-gray-400 bg-cover interactable" datatype='image'></div>
			          </div>
			          <div className="grid grid-cols-2 gap-4 lg:gap-8">
			            <div className="overflow-hidden rounded-lg">
			              <div className="w-full aspect-square lg:aspect-video lg:h-full bg-colonight-alt bg-gray-400 bg-cover interactable" datatype='image'></div>
			            </div>
			            <div className="overflow-hidden rounded-lg">
			              <div className="w-full aspect-square lg:aspect-video lg:h-full bg-entrage bg-gray-400 bg-cover interactable" datatype='image'></div>
			            </div>
			          </div>
					</div>
		        </div>
	        </section>
			{/* Past highlights */}
			<section className="px-12 pt-40 min-h-screen pb-20 max-w-[110rem] mx-auto">
				<p className="text-5xl md:text-7xl font-black font-Oswald uppercase">Blasts from the past</p>
				<div className="container mx-auto pt-32 flex gap-10 flex-wrap justify-center">
					<VideoCard year={2022} url={''}/>
					<VideoCard year={2021} url={''}/>
					<VideoCard year={2020} url={''}/>
				</div>
			</section>
			<Footer/>
        </div>
    )
}

export default About;