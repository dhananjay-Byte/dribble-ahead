"use client";
import { useState, useEffect } from "react";
import { FaApple } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

function Header() {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-4 lg:gap-0 p-8 lg:p-24 lg:mt-0 lg:mb-0 m-4 lg:m-20 h-screen bg-slate-100 rounded-2xl mt-0 transition-all duration-500 shadow-md ${
        rendered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div
        className={`text-center lg:text-left transition-all duration-500 ${
          rendered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-lg lg:text-xl">Ahead App</p>
        <h1 className="font-bold text-4xl lg:text-6xl xl:text-7xl w-full lg:w-[600px] transition-all duration-500">
          Master your life by mastering emotions
        </h1>
        <div
          className={`flex flex-col lg:flex-row gap-4 lg:gap-8 mt-4 lg:mt-8 transition-all duration-500 ${
            rendered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a className="bg-black text-white p-2 rounded-md flex items-center justify-center lg:justify-start transition-all duration-300 hover:bg-gray-800">
            <FaApple />
            <span className="ml-2">Download</span>
          </a>
          <p
            className={`flex flex-col items-center lg:items-start transition-all duration-500 ${
              rendered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="flex text-yellow-400">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
            </span>
            <span>100+ AppStore Reviews</span>
          </p>
        </div>
      </div>
      <img
        className={`w-full lg:w-auto mt-8 lg:mt-0 transition-all duration-500 ${
          rendered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        src="phone.png"
        alt="phone-image"
      />
    </div>
  );
}

export default Header;
