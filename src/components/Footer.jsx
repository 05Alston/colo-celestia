import React from 'react'
import Logo from '../assets/colologo.webp';
import { FiInstagram, FiFacebook, FiYoutube, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="w-full grid place-items-start lg:place-items-center gap-10 text-sm lg:grid-cols-2 p-10 bg-gray-800">
      <div>
        <img src={Logo} className='w-20 mb-4 aspect-square' alt='colo logo'/>
        <p>Colosseum Ltd.<br/>Bigger Better CraZieR</p>
      </div> 
      <div>
        <span className="uppercase opacity-50 mb-2 font-bold">Social</span> 
         <div className="grid grid-flow-col text-2xl gap-8 mt-4">
          <button onClick={()=>{window.location.href = "https://www.instagram.com/colosseumdbit/"}}>
            <FiInstagram/>
          </button>
          <button onClick={()=>{window.location.href = "https://www.youtube.com/channel/UC_GX-7wsZJMhc3lYgEMkAxA"}}>
            <FiYoutube/>
          </button>
          <button onClick={()=>{window.location.href = "https://www.linkedin.com/in/colosseum-dbit-336a58194/?originalSubdomain=in"}}>
            <FiLinkedin/>
          </button>
          <button onClick={()=>{window.location.href = "https://www.facebook.com/Colosseumdbit/"}}>
            <FiFacebook/>
          </button>
        </div> 
      </div>
    </footer>
  )
}

export default Footer;
