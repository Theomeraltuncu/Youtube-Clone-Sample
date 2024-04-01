import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import Header from './Components/Header';



const App = () => {
  return ( 
  
  <BrowserRouter>
  <Header/>
     <Routes>
         <Route path='/' element={<Feed/>} />
     </Routes>
  </BrowserRouter>

  )
}

export default App