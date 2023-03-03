import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { DateLoc, Speaker, Sponsor, Footer, Backdrop } from '../components';
import { NavLink } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';
import { BsPlay } from 'react-icons/bs';

const Homepage = () => {
	const [effect, setEffect] = useState(false);
	const [loading, setLoading] = useState(true);
	const [sponsorDetails, setSponsorDetails] = useState([]);
	const [speakerDetails, setSpeakerDetails] = useState([]);
	useEffect(()=> {
		async function getDetails() {
			setLoading(true);
			// window.scrollTo(0, 0);
			let res = await axios.get('http://localhost:1337/api/sponsors/?populate=*');
			console.log(res.data.data.attributes.Logo.data.attributes);
			setSponsorDetails(res.data.data.attributes.Logo.data.attributes);
			res = await axios.get('http://localhost:1337/api/speakers/?populate=*');
			console.log(res.data.data);
			setLoading(false);
		}
		getDetails();
	},[])
	return (
		<div className='text-slate-100 bg-space-bg relative z-0'>
			{/*<Backdrop/>*/}
			{/* Hero section */}
			<section className="grid md:pb-20 justify-start md:place-items-end min-h-screen place-items-center pb-0 max-w-[110rem] mx-auto relative">
				<div className='md:px-12 sm:px-8 px-3'>
					<p className="text-5xl sm:text-7xl font-black font-Oswald uppercase">Celestia</p>
					<p className="lg:py-6 md:text-3xl text-xl">Infinite opportunities, Endless horizons.</p>
					<DateLoc date={"today"} location={"Here"}/>
				</div>
			</section>
			{/* Throwback */}
			<section className='flex gap-20 justify-between lg:items-start items-center flex-col lg:flex-row max-w-[110rem] mx-auto relative'>
				<div className='w-full absolute -z-10 h-[80rem] Bg bg-cover bg-bottom'>
				</div>
				<div className='mt-20 md:mx-12 sm:mx-8 mx-3 flex-initial lg:w-5/12 w-auto'>
					<p className='md:text-sm text-xs font-semibold'>What we're about?</p>
					<div className="mt-6 md:text-4xl text-2xl font-black uppercase font-Oswald">
						Colosseum is the Annual Technical Festival of Don Bosco Institute of Technology hosted by the faculty and
						various student committees of DBIT
					</div>
					<div className="mt-6 text-sm font-normal">
						These committees organize various event, as well as many other social projects and outreach activities throughout a period of two days. We are well-known for holding a range of activities such as contests, exhibits, talks, and seminars along with fun activities for students across the campus!
					</div>
					<NavLink to="/">
						<button id="btn" className={`interactable btn bg-gray-900 gap-2 ${effect && 'animate-buttonPop'}`} datatype="link" onClick={() => setEffect(true)} onAnimationEnd={() => setEffect(false)}>
							<HiChevronRight className='text-3xl aspect-square'/>
							Get Tickets
						</button>
					</NavLink>
				</div>
				{/* Video */}
				<div className='md:mt-20 md:mx-12 sm:mx-8 mx-3 md:w-[700px] w-11/12 aspect-video rounded-xl bg-gray-800 text-slate-50 bg-opacity-60 flex-grow interactable grid place-items-center' datatype='video'>
					<div className='lg:hidden place-items-center text-gray-700 text-3xl aspect-square w-16 bg-white rounded-full grid'>
						<BsPlay/>
					</div>
				</div>
			</section>
			{/* Featuring */}
			<section className="px-12 pt-32 pb-20 max-w-[110rem] mx-auto">
				<p className="text-5xl md:text-7xl font-black font-Oswald uppercase">Featuring</p>
				<div className={`container mx-auto ${loading ? 'animate-pulse' : ''}`}>
					<div className="grid grid-cols-1 gap-8 mt-16 xl:mt-20 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
						{loading && (
							[...Array(7)].map((idx)=>(
								<Speaker key={idx} loading={loading}/>))
						)}
						{!loading && (
							speakerDetails.map((speaker, index)=> (
									<Speaker key={index} name={'name'} domain={'domain'} loading={loading}/>
								))
						)}
					</div>
				</div>
			</section>
			{/* Sponsors */}
			<section className="px-12 pt-32 pb-20 max-w-[110rem] mx-auto">
				<p className="text-5xl md:text-7xl font-black font-Oswald uppercase">Sponsors</p>
				<div className={`container mx-auto ${loading ? 'animate-pulse' : ''}`}>
					<div className="grid grid-cols-1 place-items-center gap-8 mt-16 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:mt-20 xl:gap-12">
						{loading && (
							[...Array(8)].map((idx)=>(
								<Sponsor key={idx} loading={loading}/>))
						)}
						{!loading && (
							sponsorDetails.map((sponsor)=> (
									<Sponsor key={sponsor['name']} page={'home'} image={sponsor['formats']['thumbnail']['url']} section={null} loading={loading}/>
								))
						)}
					</div>
				</div>
			</section>
			<Footer/>
		</div>
	)
}

export default Homepage;