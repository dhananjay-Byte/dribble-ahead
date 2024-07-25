"use client"
import React, { useState } from 'react';
import Footer from './Footer';

function Vacancy() {
    const [profile, setProfile] = useState([
        {
            "title": "Senior Full-Stack Engineer",
            "perks": [
                "full-time position",
                "Berlin or Remote",
                "65-85k, 0.5-1.50% equity share options"
            ]
        },
        {
            "title": "Senior Designer",
            "perks": [
                "full-time position",
                "Berlin or Remote",
                "65-85k, 0.5-1.50% equity share options"
            ]
        },
        {
            "title": "Superstar Intern",
            "perks": [
                "full-time position",
                "Berlin or Remote",
                "65-85k, 0.5-1.50% equity share options"
            ]
        },
    ]);

    return (
        <div className='min-h-screen p-8'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-12'>Open Vacancies</h1>
            <div className='flex flex-wrap justify-center gap-8'>
                {
                    profile.map((value, index) => (
                        <div key={index} className='bg-red-50 w-full md:w-1/2 lg:w-1/3 p-6 rounded-2xl group transition-transform transform hover:scale-105'>
                            <h1 className='font-semibold text-xl md:text-2xl'>{value.title}</h1>
                            <ul className='list-disc pl-5 mt-4 font-light text-sm md:text-base'>
                                {value.perks.map((perk, i) => (
                                    <li key={i}>{perk}</li>
                                ))}
                            </ul>
                            <button className='bg-black text-white rounded-full py-2 px-4 text-xs mt-6 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                                More Details
                            </button>
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div>
    );
}

export default Vacancy;
