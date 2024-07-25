import React from 'react';
import { TbGhost } from "react-icons/tb";

function Work() {
  return (
    <div id="work" className='min-h-screen bg-slate-100 flex flex-col lg:flex-row justify-between mx-4 md:mx-16 lg:mx-32 xl:mx-40 my-20 p-4 md:p-8 lg:p-16 rounded-2xl shadow-md transition-all duration-300 ease-in-out'>
        <div className='flex-1 mb-10 lg:mb-0'>
            <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl'>Work with us</h1>
            <div className='bg-white w-full md:w-3/4 lg:w-2/3 rounded-2xl shadow-md mt-6 '>
                <div className='flex flex-col justify-start gap-4 p-6'>
                    <TbGhost className='text-5xl text-blue-500'/>
                    <h2 className='font-bold text-2xl md:text-3xl'>About</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus augue nec rutrum viverra. Duis non ullamcorper magna, id malesuada ante. In mattis blandit pellentesque. Donec molestie nibh sed quam consectetur porttitor at sed sapien. Sed hendrerit consectetur vehicula.</p>
                </div>

                <div className='bg-red-50 rounded-2xl p-6 shadow-md flex flex-col justify-start gap-4 mt-6'>
                    <h2 className='font-bold text-2xl md:text-3xl'>Product</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus augue nec rutrum viverra. Duis non ullamcorper magna, id malesuada ante. In mattis blandit pellentesque. Donec molestie nibh sed quam consectetur porttitor at sed sapien. Sed hendrerit consectetur vehicula.</p>
                </div>
            </div>
        </div>
        <div className='flex-1'>
            <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl text-purple-500'>ahead</h1>
            <div className='flex flex-col gap-6 h-[70vh] overflow-y-auto mt-6'>
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className='bg-white p-6 flex flex-col gap-4 rounded-lg shadow-md'>
                        <h1 className='font-bold'>
                            Power through, even when the going gets tough.
                        </h1>
                        <p className='font-thin text-sm md:text-base'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit dapibus nulla in vestibulum. Integer eleifend tempor nisl. Aenean a iaculis nisi.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Work;
