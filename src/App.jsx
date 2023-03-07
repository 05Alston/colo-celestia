import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Trailer } from './components';
import { About, Colonight, Homepage, Events, Error, Sponsors, Payment } from './pages';

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
        <Route path="/events/:id" element={<Payment/>}/>    
        <Route path="/sponsors" element={<Sponsors/>}/>
        <Route path="/colonight" element={<Colonight/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
