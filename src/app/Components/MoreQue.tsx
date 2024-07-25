import React from 'react';

function MoreQue() {
  return (
    <div className='flex flex-col md:items-center md:justify-between md:flex-row items-center justify-center mt-24 px-4'>
      <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl mb-4 max-w-lg text-center md:text-left'>
        Be the Best You with EQ
      </h1>
      <div className='flex flex-col md:flex-row justify-evenly items-start gap-4 w-full max-w-4xl'>
        <p className='w-full md:w-1/2 text-base md:text-lg lg:text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus augue, faucibus quis sem sed, pretium efficitur quam. Fusce ac ornare orci.
        </p>
        <p className='w-full md:w-1/2 text-base md:text-lg lg:text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus augue, faucibus quis sem sed, pretium efficitur quam. Fusce ac ornare orci.
        </p>
      </div>
    </div>
  );
}

export default MoreQue;
