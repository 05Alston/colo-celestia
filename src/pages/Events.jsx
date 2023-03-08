import React, { useState,useEffect } from 'react'
import { EventCard, Footer } from '../components';
import axios from 'axios';
import Warli from '../assets/events/workshop/Warli.webp';
import CANSAT from '../assets/events/workshop/CANSAT.webp';
import EHCS from '../assets/events/workshop/Ethical-Hacking-&-Cyber-Security.webp';
import Finance from '../assets/events/workshop/Finance.webp';
import PaperMagic from '../assets/events/workshop/Paper-Magic.webp';
import RoboWars from '../assets/events/workshop/Robo-Wars.webp';
import Spark from '../assets/events/workshop/Spark-AR.webp';
import Web3 from '../assets/events/workshop/Web-3-Blockchain.webp';

const Events = () => {
    const [loading, setLoading] = useState(true);
    const [eventsDetails, setEventsDetails] = useState([]);
    // useEffect(()=> {
    //     async function getDetails() {
    //         setLoading(true);
    //         window.scrollTo(0, 0);
    //         let res = await fetch('/api/api/events/?populate=*', {
    //             method: 'GET',
    //             mode: 'cors',
    //             headers: {
    //               'Access-Control-Allow-Origin': '*',
    //               'Content-Type': 'application/json',
    //             }});
    //             console.log(res)
    //         setEventsDetails(res.data.data);
    //         setLoading(false);
    //     }
    //     getDetails();
    // },[])
    return (
        <div className=' text-slate-100 bg-space-bg'>
            <div className='h-[33vh] w-full'></div>
            <section className=" md:px-12 pb-20 max-w-[110rem] mx-auto">
                <p className="px-6 md:px-0 text-5xl md:text-7xl font-black font-Oswald uppercase">Workshops</p>
                <div className="container mx-auto grid place-items-center grid-cols-1 gap-8 mt-16 sm:gap-9 lg:gap-9 xl:mt-20 xl:gap-20 sm:grid-cols-2 lg:grid-cols-3">
                    <EventCard 
                        title={'Warli Workshop'} 
                        category={'Workshop'}
                        venue={'Mech Drawing Hall 1'}
                        date={'14th March'}
                        time={'11:00 am - 01:00 pm'}
                        fee1={'₹50 per person'}
                        fee2={null}
                        team={null}
                        image={Warli}
                        loading={false}
                        />
                    <EventCard 
                        title={'Spark AR Workshop'} 
                        category={'Workshop'}
                        venue={'EXTC Lab 4'}
                        date={'13-14th March'}
                        time={'03:00 pm - 05:00 pm'}
                        fee1={'₹80 per person (CSI Member)'}
                        fee2={'₹100 per person (Not CSI Member)'}
                        team={null}
                        image={Spark} 
                        loading={false}
                        />
                    <EventCard
                        title={'Web-3 Blockchain Workshop'} 
                        category={'Workshop'}
                        venue={'Computer Center'}
                        date={'13th March'}
                        time={'09:30 am - 11:00 am'}
                        fee1={'₹50 per person'}
                        fee2={null}
                        team={null}
                        image={Web3} 
                        loading={false}
                        />
                    <EventCard
                        title={'Robo Wars Workshop'} 
                        category={'Workshop'}
                        venue={'Seminar Hall'}
                        date={'13-14th March'}
                        time={'09:00 am - 01:00 pm'}
                        fee1={'₹370 per person (IETE Member)'}
                        fee2={'₹400 per person (Non IETE Member)'}
                        team={'5'}
                        image={RoboWars} 
                        loading={false}
                        />
                    <EventCard
                        title={'CANSAT Workshop'} 
                        category={'Workshop'}
                        venue={'Mondini Hall'}
                        date={'13th March, 14th March'}
                        time={'09:00 am - 05:00 pm, 09:00 am - 01:00 pm'}
                        fee1={'₹2550 per team'}
                        fee2={null}
                        team={'3'}
                        image={CANSAT} 
                        loading={false}
                        />
                    <EventCard
                        title={'Paper Magic Workshop'} 
                        category={'Workshop'}
                        venue={'Outside Mondini Hall'}
                        date={'10th March'}
                        time={'02:00 pm - 05:00 pm'}
                        fee1={'₹150 per person'}
                        fee2={null}
                        team={null}
                        image={PaperMagic} 
                        loading={false}
                        />
                    <EventCard
                        title={'Ethical Hacking & Cybersecurity Workshop'} 
                        category={'Workshop'}
                        venue={'Bosco Hall'}
                        date={'13-14th March'}
                        time={'12:00 pm - 03:00 pm'}
                        fee1={'₹600 per person'}
                        fee2={null}
                        team={null}
                        image={EHCS} 
                        loading={false}
                        />
                    <EventCard 
                        title={'Finance Workshop'} 
                        category={'Workshop'}
                        venue={'Seminar Hall'}
                        date={'10-11th March'}
                        time={'10:00 am - 01:00 pm'}
                        fee1={'₹50 per person'}
                        fee2={null}
                        team={null}
                        image={Finance} 
                        loading={false}
                        />
                    {/*{loading && (
                        [...Array(7)].map((x, index)=>(
                            <EventCard key={index} loading={loading}/>))
                    )}
                    {!loading && (
                        eventsDetails.map((event, index)=> (
                            <EventCard
                            key={index} 
                            title={event['attributes']['title']} 
                            category={event['attributes']['categories']['data'][0]['attributes']['Name']}
                            venue={event['attributes']['venue']}
                            speaker={event['attributes']['speaker']}
                            date={event['attributes']['date']}
                            time={event['attributes']['time']}
                            fee1={event['attributes']['fee1']}
                            fee2={event['attributes']['fee2']}
                            team={event['attributes']['team']}
                            image={`/api${event['attributes']['image']['data']['attributes']['formats']['medium']['url']}`}
                            loading={loading}
                            />
                        ))
                    )}*/}
                </div>
            </section>
            <section className=" md:px-12 pb-20 max-w-[110rem] mx-auto">
                <p className="px-6 md:px-0 text-5xl md:text-7xl font-black font-Oswald uppercase">Competitions</p>
                <div className="container mx-auto grid place-items-center grid-cols-1 gap-8 mt-16 sm:gap-9 lg:gap-9 xl:mt-20 xl:gap-20 sm:grid-cols-2 lg:grid-cols-3">
                    <EventCard 
                        title={'Stock market simulation'} 
                        category={'Competitions'}
                        venue={'Online'}
                        date={'13th-16th March'}
                        time={'Entire day'}
                        fee1={'₹50 per person'}
                        fee2={null}
                        team={'1'}
                        desc={'The players will be given the same amount of virtual money the 3 players with the most profit at the end of the event win.'}
                        image={null}
                        loading={false}
                        />
                    <EventCard 
                        title={'Digital Art'} 
                        category={'Competitions'}
                        venue={'TBD'}
                        date={'14th March'}
                        time={'11:00am - 01:00pm'}
                        fee1={'₹30 per person'}
                        fee2={null}
                        team={'1'}
                        desc={'The players have to make art based on a given theme and limited credit using an online AI platform(Dall-E). The top 3 players with the best art win.'}
                        image={null} 
                        loading={false}
                        />
                    <EventCard
                        title={'Arts and crafts'} 
                        category={'Competitions'}
                        venue={'Bosco Hall'}
                        date={'15th March'}
                        time={'02:00 pm - 04:00 pm'}
                        fee1={'₹100 per team'}
                        fee2={null}
                        team={'2-3'}
                        desc={'Out of the given items, the team to make the best art wins.'}
                        image={null} 
                        loading={false}
                        />
                    <EventCard
                        title={'Coding Premier League'} 
                        category={'Competitions'}
                        venue={'Computer Centre'}
                        date={'15th March'}
                        time={'11:00 am - 01:00 pm'}
                        fee1={'₹30 per person'}
                        fee2={null}
                        team={'3 (2 coders + 1 manager)'}
                        desc={'The team will be decided through an auction system. The manager will get to auction 2 coders using given credits. The teams will be given a bug ridden code/problem statement. 3 teams with the highest scores win.'}
                        image={null} 
                        loading={false}
                        />
                    <EventCard
                        title={'Treasure hunt '} 
                        category={'Competitions'}
                        venue={'Campus'}
                        date={'16th March'}
                        time={'11:00 am'}
                        fee1={'₹200 per team'}
                        fee2={null}
                        team={'4'}
                        desc={'Teams will have to go through all the hints and clues to find the final object. The first two teams to find the objects win. We suggest 1 person each from all departments ;) (Mech, Extc, Tech, FE)'}
                        image={null} 
                        loading={false}
                        />
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Events;