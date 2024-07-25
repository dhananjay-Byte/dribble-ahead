"use client";

import React, { useState } from 'react';

const HeaderComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <nav className="flex h-auto w-auto justify-between md:h-16">
        <div className="flex w-full justify-between">
          <div className={`flex px-6 w-1/2 items-center font-semibold md:w-1/5 md:px-1 md:flex md:items-center md:justify-center ${open ? 'hidden' : 'flex'}`}>
            <a href="/">Ahead App logo</a>
          </div>

          {open && (
            <div className="flex flex-col w-full h-auto md:hidden">
              <div className="flex flex-col items-center justify-center gap-2">
                <a href="#emotions">Emotions</a>
                <a href="#manifesto">Manifesto</a>
                <a href="#test">Self-awareness Test</a>
                <a href="#work">Work with us</a>
                <button className="bg-black mt-[20px] mb-[20px] rounded-full text-white p-[10px]">Download App</button>
              </div>
            </div>
          )}

          <div className="hidden w-2/5 items-center justify-evenly md:flex">
            <a href="#emotions">Emotions</a>
            <a href="#manifesto">Manifesto</a>
            <a href="#test">Self-awareness Test</a>
            <a href="#work">Work with us</a>
          </div>
          <div className="hidden w-1/5 items-center justify-evenly md:flex">
            <button className="bg-black rounded-full text-white p-[10px]">Download App</button>
          </div>
          <button
            className="text-gray-500 w-10 h-10 relative focus:outline-none bg-white md:hidden"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? 'rotate-45' : '-translate-y-1.5'}`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? 'opacity-0' : ''}`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? '-rotate-45' : 'translate-y-1.5'}`}
              ></span>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
