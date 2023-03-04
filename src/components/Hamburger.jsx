import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';
import { Backdrop } from '../components';

const Hamburger = ({ links, popupState, setPopupState }) => {
  const changeState = ()=> {
    setPopupState(!popupState);
  }
    const [effect, setEffect] = useState(false);
  return (
   <>
      <nav className={`
        fixed -left-0 top-0 z-20 bg-black text-white rounded-lg h-screen py-5 px-6 w-full flex md:hidden items-center justify-center transition-all duration-200 ${popupState ? 'left-0':'-left-[100%]'}`}>
          <div className='relative'>
            <ul className='flex items-center flex-col gap-11 text-4xl pt-16 lg:text-7xl font-black'>
              {links.map((link, index)=>(
                <li key={index}>
                  <NavLink to={link.route}>
                    <button onClick={changeState}>
                      {link.title}
                    </button> 
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink to="/">
                  <button id="btn" className={`interactable btn bg-gray-900 gap-2 ${effect && 'animate-buttonPop'}`} datatype="link" onClick={() => setEffect(true)} onAnimationEnd={() => setEffect(false)}>
                    <HiChevronRight className='text-3xl aspect-square'/>
                    Get Tickets
                  </button>
                </NavLink>
              </li>
            </ul>
        </div>
      </nav>
   </>
  )
}

export default Hamburger;