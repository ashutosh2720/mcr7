import React from 'react'
import { data } from '../components/data'
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <div className='w-full bg-slate-900 h-screen '>
            <h1 className='text-white text-center text-2xl p-2'>top Continents for your next holyday</h1>
            <div className="continents flex justify-center items-start mt-10 gap-4 h-full">
                {
                    data.continents.map((continent) =>
                        <div className="data">
                            <img src={continent.image} alt="" className='w-[300px] h-[300px] rounded-lg cursor-pointer' onClick={() => navigate(`/country/${continent.name}`)} />
                            <h1 className='text-white relative bottom-10 left-5 text-2xl bg-slate-900 rounded-md pl-2'>{continent.name}</h1>
                        </div>

                    )
                }
            </div>
        </div>
    )
}

export default Home
