import React from 'react';
import { NavLink } from 'react-router-dom';

const Hamburger = ({ links, popupState, setPopupState }) => {
  const changeState = ()=> {
    setPopupState(!popupState);
  }
  return (
   <>
      <nav className={`
        fixed -top-[100vh] left-1/2 -translate-x-[50%] z-20 bg-white backdrop-blur-lg backdrop-opacity-100 bg-opacity-20 rounded-lg h-screen py-5 px-6 w-full md:hidden flex items-start justify-center transition-all duration-300 ${popupState ? 'opacity-100 top-0':'opacity-0 -top-[100vh]'}`}>

        <ul className='flex items-center flex-col gap-11 text-4xl pt-16'>
          {links.map((link, index)=>(
            <li key={index}><NavLink to={link.route}>{link.title}</NavLink></li> 
          ))}
        </ul>

      </nav>
   </>
  )
}

export default Hamburger;