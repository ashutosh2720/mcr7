import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Country from './pages/Country';
import Place from './pages/Place';
import DestinationDetails from './pages/DestinationDetails';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:continentName/countries' element={<Country />} />
        <Route path='/:continentName/:countryName/destinations' element={<Place />} />
        <Route path={'/:continentName/:countryName/:destinationName/details'} element={<DestinationDetails />} />
      </Routes>


    </>
  )
}

export default App
