import React from 'react';

function Test() {
  return (
    <div id='test' className='flex h-screen flex-col justify-center items-center gap-2 p-4 md:p-8 lg:p-16'>
      <h2 className='font-light text-lg md:text-xl lg:text-2xl text-center'>We Take Privacy Seriously</h2>
      <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl text-center'>Before You Get Started</h1>
      <h2 className='w-full md:w-2/3 lg:w-1/2 text-base md:text-lg lg:text-xl font-light text-center my-4'>We will not share your answers with anyone and not even tell you which friends said what about you.</h2>
      <h2 className='font-light text-lg md:text-xl lg:text-2xl text-center mt-4'>With Love, Team Ahead</h2>
      <div className='flex flex-col items-center mt-8 gap-4'>
        <button className='bg-black text-white py-2 px-6 cursor-pointer font-thin rounded-full transition-transform transform hover:scale-105'>Start a Test</button>
        <p className='font-thin text-sm md:text-base lg:text-lg'>Takes Only 5 Minutes</p>
      </div>
    </div>
  );
}

export default Test;
