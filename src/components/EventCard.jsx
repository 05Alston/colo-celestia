import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const EventCard = ({ title, category, venue, date, time, fee1, fee2, team, desc, image, loading }) => {
    //TODO: Do something about the color of badges
    const [effect, setEffect] = useState(false);
    const navigate = useNavigate();
    const badgeColor = cat => {
        switch(cat){
        case 'Workshop': return 'bg-sky-600'; break;
        case 'Talk': return 'bg-purple-600'; break;
        case 'Competitions': return 'bg-red-400'; break;
        }
    }
    return (
    <div className="rounded-lg flex flex-col overflow-hidden group w-80 md:w-[19rem] h-[28rem] bg-gray-800 shadow-xl relative">
        {/* <figure className={`group-hover:opacity-0 w-full h-full opacity-100 pointer-events-none z-10 transition-all duration-200 bg-gray-800  ${loading ? 'animate-pulse' : ''}`}>
            <img src={`http://localhost:1337${image}`} alt="" className={`rounded-lg ${loading ? 'hidden' : 'block'}`} />
        </figure> */}
        <figure className={`group-hover:opacity-0 w-full h-full opacity-100 pointer-events-none z-10 transition-all duration-200 bg-gray-800  ${loading ? 'animate-pulse' : ''} ${image == null ? 'hidden' : 'block'}`}>
            <img src={image} alt="" className={`rounded-lg min-h-full ${image == null ? 'hidden' : 'block'}`} />
        </figure>
        <div className={`p-8 flex flex-col flex-auto gap-2 items-start justify-between w-full h-full absolute`}>
            <div className="flex justify-between gap-4 items-center">
                <h2 className="flex items-center gap-2 text-xl font-bold">{title}</h2>
                {/*<div className={`badge text-white ${badgeColor(category)}`}>{category}</div>*/}
            </div>
            <div className="h-full flex flex-col justify-between gap-4 items-start">
                <div>
                    <p className='text-sm font-medium pt-1'>Venue: {venue}</p>
                    <p className='text-sm font-medium pt-1'>Date: {date}</p>
                    <p className='text-sm font-medium pt-1'>Time: {time}</p>
                    <p className='text-sm font-medium pt-1'>Entry Fee: {fee1}</p>
                    <p className={`text-sm font-medium pt-1 ${fee2 == null ? 'hidden' : 'block'}`}>Entry Fee: {fee2}</p>
                    <p className={`text-sm font-medium pt-1 ${team == null ? 'hidden' : 'block'}`}>Team: {team} members</p>
                    <p className={`text-sm font-medium pt-1 ${desc == null ? 'hidden' : 'block'}`}>Description: {desc}</p>
                </div>
                <button className='interactable btn bg-gray-900 gap-2 uppercase' datatype="link" onClick={() => {
                            setEffect(true);
                            setTimeout(() => {
                                window.location.href = "https://tinyurl.com/colosseum23workshoplink";
                            },500)}} onAnimationEnd={() => setEffect(false)}> Register Now
                </button>
            </div>
        </div>
    </div>
  )
}

export default EventCard;