import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Homepage } from './pages';

function App() {
  const trailer = document.getElementById("trailer");

  // const animateTrailer = (e, interacting) => {
  //   const x = e.clientX - trailer.offsetWidth / 2,
  //         y = e.clientY - trailer.offsetHeight / 2;
    
  //   const keyframes = {
  //     transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
  //   }
    
  //   trailer.animate(keyframes, { 
  //     duration: 800, 
  //     fill: "forwards" 
  //   });
  // }
  // window.onmousemove = e => {
  //   const interactable = e.target.closest(".interactable"),
  //         interacting = interactable !== null;
    
  //   const content = document.getElementById("content");
    
  //   animateTrailer(e, interacting);
    
  //   trailer.dataset.type = interacting ? interactable.dataset.type : "";
    
  //   if(interacting) {
  //     content.innerHTML = getTrailerClass(interactable.dataset.type);
  //   }
  // }

  // const getTrailerClass = type => {
  //   switch(type) {
  //     case "video":
  //       return "Play";
  //     case "link":
  //       return "Register";
  //     default:
  //       return ""; 
  //   }
  // }
  return (
    <BrowserRouter> 
      <div id="trailer" onMouseMove={e=>{}}>
        <div id="content"></div>
      </div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/tech-summit" element={<div>Summit</div>}/>
        <Route path="/events" element={<div>Events</div>}/>
        <Route path="/talks/:slug" element={<div>Talking and stuff</div>}/>
        <Route path="/workshops/:slug" element={<div>Working the heck off</div>}/>
        <Route path="/competitions/:slug" element={<div>Working the heck off</div>}/>
        <Route path="/colonite" element={<div>Party!!!!</div>}/>
        <Route path="*" element={<div>Wrong place</div>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
