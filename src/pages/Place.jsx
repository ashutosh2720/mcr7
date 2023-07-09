import React from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Place = () => {
    const { name } = useParams();
    const place = data.continents.destinations.find((item) => item.name === name)
    return (
        <div className='w-full h-screen justify-center gap-3 pt-20 flex bg-slate-900'>
            <h1 className='text-2xl text-white'>top country in {country.name} </h1>
            {
                place.destinations.map((item) =>
                    <div className=''>
                        <img src={item.image} alt="" className='w-[300px] h-[300px] rounded-lg ' />
                        <h1 className='text-white text-xl relative bottom-10 pl-3 font-bold'>{item.name}</h1>
                    </div>
                )
            }
        </div>
    )
}

export default Place
