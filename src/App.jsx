import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Trailer } from './components';
import { About, Colonight, Homepage, Events, Error, Sponsors } from './pages';

function App() {
  

  return (
    <BrowserRouter> 
      <Trailer/>
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
        <Route path="/colonight" element={<Colonight/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
