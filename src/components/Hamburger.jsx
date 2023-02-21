import React from 'react';
import { NavLink } from 'react-router-dom';

const Hamburger = ({ popupState, setPopupState }) => {
  const changeState = ()=> {
    setPopupState(!popupState);
  }
  return (
   <>
      <nav className={`
        fixed -top-[100vh] left-1/2 -translate-x-[50%] z-10 bg-white bg-opacity-20 opacity-100 backdrop-filter backdrop-blur-md rounded-lg h-screen py-5 px-6 w-full hidden md:flex items-start justify-center transition-all duration-300 ${popupState ? 'md:opacity-100 md:top-0':'md:opacity-0 md:-top-[100vh]'}`}>

        <ul className='flex items-center flex-col gap-11 text-4xl pt-16'>
            <li><NavLink to="/route">title</NavLink></li> 
        </ul>

      </nav>
   </>
  )
}

export default Hamburger;