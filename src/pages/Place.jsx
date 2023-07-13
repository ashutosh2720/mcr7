import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { data } from '../db/data';
import { useGlobaltrips } from '../contexts/tripAdviserContext';
import DestinationCard from '../components/DestinationCard';

const Place = () => {
    const { continentName, countryName } = useParams()
    const { findDestinations } = useGlobaltrips()
    const navigate = useNavigate()

    const country = findDestinations(continentName, countryName)
    return (
        <div className='w-full h-screen justify-center gap-3 pt-20 flex bg-slate-900'>
            <h1 className='text-2xl text-white'> top place in {countryName}</h1>

            {
                country.destinations.map((destination) =>
                    <DestinationCard key={destination.id} destination={destination} country={country} continentName={continentName} />
                )
            }
        </div>
    )
}

export default Place
