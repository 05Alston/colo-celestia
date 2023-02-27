import React from 'react'
import { EventCard, Footer } from '../components';
import Poster from '../assets/arch-linux-poster.webp';

const Events = () => {
    return (
        <div className=' text-slate-100 bg-space-bg'>
            <div className='h-[33vh] w-full '></div>
            <section className=" md:px-12 pb-20 max-w-[110rem] mx-auto">
                <p className="px-6 md:px-0 text-5xl md:text-7xl font-black font-Oswald uppercase">Events</p>
                <div className="container mx-auto grid place-items-center grid-cols-1 gap-8 mt-16 sm:gap-9 lg:gap-9 xl:mt-20 xl:gap-20 sm:grid-cols-2 lg:grid-cols-3">
                    <EventCard title={"Event"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={Poster} category={"Workshop"}/>
                    <EventCard title={"Event"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={Poster} category={"Workshop"}/>
                    <EventCard title={"Event"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={Poster} category={"Workshop"}/>
                    <EventCard title={"Event"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={Poster} category={"Workshop"}/>
                    <EventCard title={"Event"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={Poster} category={"Workshop"}/>
                    <EventCard title={"Event"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={Poster} category={"Workshop"}/>
                    <EventCard title={"Event"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={Poster} category={"Workshop"}/>
                    <EventCard title={"Event"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={Poster} category={"Workshop"}/>
                    <EventCard title={"Event"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={Poster} category={"Workshop"}/>
                    <EventCard title={"Event"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={Poster} category={"Workshop"}/>
                    <EventCard title={"Event"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={Poster} category={"Workshop"}/>
                    <EventCard title={"Event"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={Poster} category={"Workshop"}/>
                    <EventCard title={"Event"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={Poster} category={"Workshop"}/>
                    <EventCard title={"Event"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={Poster} category={"Workshop"}/>
                    <EventCard title={"Event"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={Poster} category={"Workshop"}/>
                    <EventCard title={"Event"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={Poster} category={"Workshop"}/>                    
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Events;