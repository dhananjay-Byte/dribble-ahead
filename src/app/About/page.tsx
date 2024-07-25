"use client"
import React from 'react'
import { BsEmojiSurpriseFill } from "react-icons/bs";
import { TbGhost } from "react-icons/tb";
import About from '../Components/About';

function Facts() {
    return (
        <div className='w-full h-full'>
            <About />
            <div className='px-4 py-8 md:px-8 lg:px-16'>
                <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl flex items-center mb-4 md:mb-8'>
                    Does this sound familiar...
                    <TbGhost className='-rotate-12 text-rose-700 text-5xl md:text-6xl lg:text-7xl ml-2' />
                </h1>
                <div className='flex space-x-4 overflow-x-auto scrollContainer py-4'>
                    {
                        Array.from({ length: 6 }).map((value, index) => (
                            <div key={index} className={`bg-red-50 rounded-lg p-4 shadow-md min-w-[300px] md:min-w-[350px] lg:min-w-[400px] ${index === 2 ? 'rotate-6 md:rotate-12' : ''} transition-transform duration-300`}>
                                <BsEmojiSurpriseFill className='text-3xl md:text-4xl lg:text-5xl text-yellow-700' />
                                <h2 className='font-bold text-xl md:text-2xl lg:text-3xl mt-2'>Title</h2>
                                <p className='text-sm md:text-base lg:text-lg mt-2'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu imperdiet nisi. Cras accumsan, arcu nec eleifend consectetur, elit nisi fringilla urna, ac placerat nibh neque ac lacus.
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Facts;
