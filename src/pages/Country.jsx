import React from 'react'
import { Navigate, useParams } from 'react-router-dom';
import { data } from '../db/data';
import { useNavigate } from "react-router-dom";
import { useGlobaltrips } from '../contexts/tripAdviserContext';
import CountryCard from '../components/CountryCard';


const Country = () => {
    const navigate = useNavigate();
    const { continentName } = useParams()
    const { findCountries } = useGlobaltrips()
    const continent = findCountries(continentName)
    // console.log(data)
    return (
        <div className='w-full h-screen justify-center gap-3 pt-20 flex bg-slate-900'>
            <h1 className='text-2xl text-white'>top country in {continentName} </h1>
            {
                continent.countries.map((country) =>
                    <CountryCard key={country.id} continent={continent} country={country} />
                )
            }
        </div>
    )
}

export default Country
