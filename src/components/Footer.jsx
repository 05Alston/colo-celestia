import React from 'react'
import Logo from '../assets/colologo.webp';
import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="w-full grid place-items-start lg:place-items-center gap-10 text-sm lg:grid-cols-2 p-10 bg-gray-900">
      <div>
        <img src={Logo} className='w-20 mb-4 aspect-square' alt='colo logo'/>
        <p>Colosseum Ltd.<br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div> 
      <div>
        <span className="uppercase opacity-50 mb-2 font-bold">Social</span> 
        <div className="grid grid-flow-col text-4xl gap-8 mt-4">
          <FiInstagram/>
          <FiYoutube/>
          <FiFacebook/>
        </div>
      </div>
    </footer>
  )
}

export default Footer;