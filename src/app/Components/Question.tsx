"use client"
import React from 'react';
import { GiFlowerEmblem } from "react-icons/gi";

function Question() {
  return (
    <div className='h-auto min-h-screen flex flex-col items-center justify-center gap-4 bg-teal-50 mx-4 md:mx-16 lg:mx-32 xl:mx-40 my-20 p-8 md:p-16 lg:p-24 rounded-3xl shadow-md transition-all duration-300 ease-in-out'>
        <h2 className='font-light text-lg md:text-xl text-center'>Let your friends, family, and co-workers - anonymously - rate your social skills.</h2>
        <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl text-center'>Ever wondered what others think of you?</h1>
        <div className='flex flex-col md:flex-row justify-between mt-12 w-full md:w-4/5 lg:w-3/4'>
            <p className='w-full md:w-1/4 text-center flex flex-col items-center font-thin mb-6 md:mb-0'>
                <GiFlowerEmblem className='text-4xl md:text-5xl text-amber-300 mb-2' /> 
                Answer questions on your social skills.
            </p>
            <p className='w-full md:w-1/4 text-center flex flex-col items-center font-thin mb-6 md:mb-0'>
                <GiFlowerEmblem className='text-4xl md:text-5xl text-amber-300 mb-2' /> 
                Let others anonymously answer the same questions about you.
            </p>
            <p className='w-full md:w-1/4 text-center flex flex-col items-center font-thin'>
                <GiFlowerEmblem className='text-4xl md:text-5xl text-amber-300 mb-2' /> 
                Find out where you and others see things the same way - and where not.
            </p>
        </div>
        <div className='bg-white rounded-3xl w-full md:w-3/4 lg:w-2/3 h-[200px] mt-16 transition-all duration-300 ease-in-out'>
            
        </div>
    </div>
  );
}

export default Question;
