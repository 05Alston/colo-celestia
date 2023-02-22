import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from './Hamburger';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import Logo from '../assets/colologo.webp';

const Navbar = () => {
  const [popupState, setPopupState] = useState(false);
  const onTriggerPopup = () => setPopupState(!popupState);
  const links = [
    {
      'route':'/',
      'title':'Home'
    },
    {
      'route':'/events',
      'title':'Events'
    },
    {
      'route':'/workshops',
      'title':'Workshops'
    },
    {
      'route':'/sponsors',
      'title':'Sponsors'
    },
    {
      'route':'/colonite',
      'title':'Colo-Nite'
    },
  ]
  return (
   <>
   {/* TODO: Fix Seam between navbar and hamburger menus */}
   <header className={`transition-all duration-300 ${popupState ? 'backdrop-blur-none' : "backdrop-blur-sm backdrop-opacity-100"} flex items-center h-[9vh] bg-opacity-100 fixed top-0 left-0 right-0 opacity-100 z-50
      `}>
        <nav className='flex items-center justify-between w-[95vw] m-auto text-2xl'>
          <div className='flex'>
            <img src={Logo} alt="Colosseum Logo" className='w-10 h-auto'/>
            <p className='text-4xl font-black text-white'><NavLink to="/">COLOSSEUM</NavLink></p>	
          </div>
          <ul className='flex items-center md:hidden gap-7 text-white font-semibold'>
            {links.map((link, index)=>(
              <li key={index}><NavLink to={link.route}>{link.title}</NavLink></li> 
            ))}
          </ul>
          <ul className='hidden md:flex items-center'>
            <li>
              <button type='button' className='flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer relative pr-4' onClick={onTriggerPopup}>
                <GiHamburgerMenu className={`absolute transition-all duration-100 ${popupState ? 'opacity-0 rotate-45': 'opacity-100 rotate-0'}`}/>
                <IoClose className={`absolute transition-all duration-100 scale-110 ${popupState ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'}`}/>
              </button>
            </li>
            <li>
            </li>
          </ul>
        </nav>
      </header>
      <Hamburger links={links} popupState={popupState} setPopupState={setPopupState}/>
   </>
  )
}

export default Navbar;