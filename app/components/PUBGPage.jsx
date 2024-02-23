import React from 'react';
import Hero from './Hero';

const PUBGPage = () => {
  return (
    <div className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden">
      <div className="absolute inset-0 bg-indigo-800 opacity-40"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-4 h-48 bg-indigo-500 animate-laser"></div>
      </div>
      <Hero/>
    </div>
  );
};

export default PUBGPage;
