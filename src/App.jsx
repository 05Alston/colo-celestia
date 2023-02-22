import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Homepage } from './pages';

function App() {
  return (
    <BrowserRouter> 
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
