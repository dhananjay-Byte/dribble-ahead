"use client"
import React from 'react'

function About() {
  return (
    <div className='flex flex-col md:items-center md:justify-evenly md:flex-row justify-center items-center mt-24 px-4'>
      <h1 className='font-bold text-[30px] md:text-[40px] lg:text-[40px] mb-4'>
        EQ beats IQ
      </h1>
      <div className='flex flex-col md:flex-row justify-evenly items-start gap-4 w-full max-w-4xl'>
        <p className='w-full md:w-1/2 text-[20px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus augue, faucibus quis sem sed, pretium efficitur quam. Fusce ac ornare orci.
        </p>
        <p className='w-full md:w-1/2 text-[20px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus augue, faucibus quis sem sed, pretium efficitur quam. Fusce ac ornare orci.
        </p>
      </div>
    </div>
  )
}

export default About
