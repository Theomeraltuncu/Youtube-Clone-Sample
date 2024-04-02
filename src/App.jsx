import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import Header from './Components/Header';
import VideoDetail from './pages/VideoDetail';
import Results from './pages/Results';
import Undefined from './pages/VideoDetail/Undefined';



const App = () => {
  return ( 
  
  <BrowserRouter>
  <Header/>
     <Routes>
         <Route path='/' element={<Feed/>} />
         <Route path='/watch' element={<VideoDetail/>} />
         <Route path='/results' element={<Results/>} />
         <Route path='*' element={<Undefined/>} />

     </Routes>
  </BrowserRouter>

  )
}

export default App