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
      'route':'/about',
      'title':'About'
    },
    {
      'route':'/events',
      'title':'Events'
    },
    // {
    //   'route':'/sponsors',
    //   'title':'Sponsors'
    // },
    {
      'route':'/colonight',
      'title':'Colo Night'
    },
  ]
  return (
   <>
   <header className={`transition-all duration-300 flex items-center py-1 bg-space-bg border-b-[1px] border-gray-900 border-solid fixed top-0 left-0 right-0 opacity-100 z-50`}>
        <nav className='flex items-center justify-between w-[95vw] m-auto'>
          <div className='flex items-center'>
            <img src={Logo} alt="Colosseum Logo" className='h-12 aspect-square pr-2'/>
            <NavLink to="/"><p className='text-4xl lg:text-3xl md:text-4xl font-black text-white uppercase font-WorkSans'>Colosseum</p></NavLink>	
          </div>
          <ul className='items-center text-xl lg:text-2xl hidden md:flex lg:gap-7 gap-4 text-white font-extrabold'>
            {links.map((link, index)=>(
              <li key={index}><NavLink to={link.route}><p className="font-Oswald">{link.title}</p></NavLink></li> 
            ))}
          </ul>
          <ul className='md:hidden flex items-center'>
            <li>
              <button type='button' className='flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer relative pr-4 interactable' onClick={onTriggerPopup}  datatype={`${popupState ? 'open' : 'close'}`}>
                <GiHamburgerMenu className={`absolute transition-all text-2xl text-slate-50 duration-100 ${popupState ? 'opacity-0 rotate-45': 'opacity-100 rotate-0'}`}/>
                <IoClose className={`absolute transition-all text-2xl scale-110 text-slate-50 duration-100  ${popupState ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'}`}/>
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