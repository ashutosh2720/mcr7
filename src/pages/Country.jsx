import React from 'react'
import { Navigate, useParams } from 'react-router-dom';
import { data } from '../components/data';
import { useNavigate } from "react-router-dom";


const Country = () => {
    const navigate = useNavigate();
    const { name } = useParams();
    const country = data.continents.find((item) => item.name === name)
    // console.log(data)
    return (
        <div className='w-full h-screen justify-center gap-3 pt-20 flex bg-slate-900'>
            <h1 className='text-2xl text-white'>top country in {country.name} </h1>
            {
                country.countries.map((item) =>
                    <div className=''>
                        <img src={item.image} alt="" className='w-[300px] h-[300px] rounded-lg ' onClick={() => navigate(`/place/${item.name}`)} />
                        <h1 className='text-white text-xl relative bottom-10 pl-3 font-bold'>{item.name}</h1>
                    </div>
                )
            }
        </div>
    )
}

export default Country
