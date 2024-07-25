import React from 'react';

function Improvement() {
  return (
    <div id="manifesto" className='min-h-screen p-8 md:p-16 lg:p-32'>
      <h3 className='font-medium text-lg md:text-xl lg:text-2xl mb-4'>Wrong with self-improvement and how we are fixing it.</h3>
      <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl mb-12'>Self-Improvement. Ugh.</h1>
      <div className='flex flex-col gap-8 lg:ml-32 h-[55vh] overflow-y-scroll pr-4'>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className='flex flex-col gap-2'>
            <h2 className='font-semibold text-xl md:text-2xl'>Title</h2>
            <p className='font-light text-base md:text-lg lg:text-xl lg:w-2/3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus augue, faucibus quis sem sed, pretium efficitur quam. Fusce ac ornare orci.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Improvement;
