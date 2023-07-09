import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import './App.css'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Country from './pages/Country';
import Place from './pages/Place';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country/:name' element={<Country />} />
        <Route path='/place/:name' element={<Place />} />
      </Routes>


    </>
  )
}

export default App
