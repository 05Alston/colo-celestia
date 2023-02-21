import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from './Hamburger';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
// import Toggle from './Toggle';

const Navbar = () => {
  const [popupState, setPopupState] = useState(false);
  const onTriggerPopup = () => setPopupState(!popupState);

  return (
   <>
   {/* TODO: Fix Seam between navbar and hamburger menus */}
      <header className={`backdrop-filter transition-all duration-300 ${popupState ? 'backdrop-blur-none' : "backdrop-blur-md"} bg-opacity-20 flex items-center h-[9vh] fixed top-0 left-0 right-0 opacity-100 z-50
      `}>
        <nav className='flex items-center justify-between w-[85vw] xl:w-[95vw] m-auto text-2xl'>
            <p className='font-londrina text-4xl'>Colosseum</p>	
          <ul className='flex items-center md:hidden gap-7'>
            <li><NavLink to="/route">title</NavLink></li> 
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
      <Hamburger popupState={popupState} setPopupState={setPopupState}/>
   </>
  )
}

export default Navbar;