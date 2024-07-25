'use client'
import React from 'react';
import { Parallax } from 'react-parallax';

const MyParallaxComponent = () => {
  return (
    <div>
      <Parallax
        bgImage="ManForest.jpg" // Replace with your image path
        strength={700} // Adjust the strength of the parallax effect
      >
        <div className="h-[500px] flex items-center justify-center">
          <div className="bg-white bg-opacity-50 p-6 rounded-lg">
            <h1 className="text-4xl font-bold text-center">Your Content Here</h1>
            <p className="mt-4 text-lg text-center">This content is over a parallax background.</p>
          </div>
        </div>
      </Parallax>

      <div className="h-96 flex items-center justify-center">
        <h2 className="text-2xl font-bold">Other Content Below</h2>
        <p>This is regular content below the parallax effect.</p>
      </div>
    </div>
  );
};

export default MyParallaxComponent;
