import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import { Navbar } from './components';
import { About, Homepage, Events, Error, Sponsors } from './pages';
import { useEffect } from 'react';
import { BsPlay } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { FaExternalLinkAlt } from 'react-icons/fa';

function App() {
  useEffect(()=>{
    const getTrailerClass = type => {
      switch(type) {
        case "video":
          return <BsPlay/>;
        case "link":
          return <FaExternalLinkAlt className='text-[0.25rem]'/>;
        case "open":
          return <IoClose/>;
        case "close":
          return <GiHamburgerMenu/>;
        default:
          return ""; 
      }
    }
    const trailer = document.getElementById("trailer");
    window.onmousemove = e => {
      const interactable = e.target.closest(".interactable"),
      interacting = interactable !== null;
      
      animateTrailer(e, interacting);
      const content = document.getElementById("content");
      trailer.setAttribute("data-type","");
      content.innerHTML = "";
      if(interacting) {
        trailer.setAttribute("data-type",interactable.getAttribute("datatype"));
        content.innerHTML = ReactDOMServer.renderToString(getTrailerClass(interactable.getAttribute("datatype")));
      }
    }
    const animateTrailer = (e, interacting) => {
      
      const x = e.clientX - trailer.offsetWidth / 2;
      const y = e.clientY - trailer.offsetHeight / 2;
      
      const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 3 : 1})`
      }
      
      trailer.animate(keyframes, { 
        duration: 300, 
        fill: "forwards" 
      });
    }
  })

  return (
    <BrowserRouter> 
      <div id="trailer" className='hidden lg:grid'>
        <div id="content" className='text-gray-700 text-[0.5rem]'></div>
      </div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        {/* <Route path="/tech-summit" element={<div>Summit</div>}/> */}
        <Route path="/about" element={<About/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/talks/:slug" element={<div className='pt-40'>Talking and stuff</div>}/>
        <Route path="/workshops/:slug" element={<div className='pt-40'>Working the heck off</div>}/>
        <Route path="/competitions/:slug" element={<div className='pt-40'>Working the heck off</div>}/>        
        <Route path="/sponsors" element={<Sponsors/>}/>
        {/*<Route path="/colonite" element={}/>*/}
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
