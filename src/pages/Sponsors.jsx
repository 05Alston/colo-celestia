import React, { useState, useEffect } from 'react';
import { Footer, Sponsor } from '../components';
const Sponsors = () => {
	const [loading, setLoading] = useState(true);
	const [sponsorDetails, setSponsorDetails] = useState([]);
	useEffect(()=> {
		async function getDetails() {
			setLoading(true);
			// window.scrollTo(0, 0);
			let res = await axios.get('http://localhost:1337/api/sponsors/?populate=*');
			console.log(res.data.data);
			setSponsorDetails(res.data.data);
			setLoading(false);
		}
		getDetails();
	},[])
	return (
		<div className=' text-slate-100 bg-space-bg'>
            <div className='h-[33vh] w-full '></div>
            <section className=" md:px-12 pb-20 max-w-[110rem] mx-auto">
                <p className="px-6 md:px-0 text-5xl md:text-7xl font-black font-Oswald uppercase">Sponsors</p>
                <div className={`grid place-items-center ${loading ? 'animate-pulse' : ''}`}>
					{loading && (
							[...Array(8)].map((idx)=>(
								<Sponsor key={idx} loading={loading}/>))
						)}
						{!loading && (
							sponsorDetails.map((sponsor, index)=> (
									<Sponsor key={index} page={'sponsor'} image={sponsor['attributes']['Logo']['data']['attributes']['formats']['thumbnail']['url']} section={sponsor['attributes']['section']} loading={loading}/>
								))
						)}
				</div>
            </section>
            <Footer/>
        </div>
	)
}

export default Sponsors