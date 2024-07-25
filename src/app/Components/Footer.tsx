"use client"
import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

function Footer() {
  return (
    <div className='flex flex-col items-center mt-[100px]'>
        <div className='w-[80%] '>
        <hr/>
        </div>
        <div className='flex flex-col items-center gap-[30px] mt-[50px]'>
            <h1 className='font-bold text-[30px]'>App logo</h1>
            <div className='flex gap-[40px] justify-center'>
                <p className='flex items-center gap-[5px]'> <MdLocationOn/> Address</p>
                <p className='flex items-center gap-[5px]'> <IoMail/> Email Address</p>
            </div>
            <a className="bg-black font-thin text-white p-2 rounded-md flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-gray-800">
            <FaApple />
            <span >Download</span>
          </a>
        </div>
    </div>
  )
}

export default Footer