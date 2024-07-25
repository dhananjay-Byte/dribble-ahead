import React from 'react';
import { TbGhost } from "react-icons/tb";

function Intro() {
  return (
    <div className='bg-red-100 mx-8 md:mx-16 lg:mx-32 xl:mx-40 my-20 h-auto min-h-screen rounded-2xl p-8 md:p-16 lg:p-24  pt-24 shadow-md transition-all duration-300 ease-in-out'>
        <p className='text-lg md:text-xl'>Built out of Frustration</p>
        <h1 className='font-semibold text-4xl md:text-5xl'>Meet the ahead app</h1>
        <div className='flex flex-col md:flex-row justify-evenly items-center mt-12'>
            <TbGhost className='bg-white rounded-full text-7xl md:text-8xl lg:text-[200px] text-rose-700 transition-transform duration-300 ease-in-out hover:scale-110'/>
            <div className='w-full md:w-3/5 lg:w-2/5 flex flex-col gap-4 mt-10 md:mt-0'>
            <p className='font-light text-base md:text-lg lg:text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus augue, faucibus quis sem sed, pretium efficitur quam. Fusce ac ornare orci.
            </p>
            <p className='font-light text-base md:text-lg lg:text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus augue, faucibus quis sem sed, pretium efficitur quam. Fusce ac ornare orci.
            </p>
            </div>
        </div>
    </div>
  );
}

export default Intro;
