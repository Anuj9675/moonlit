"use client"
import React, { useState, useEffect } from 'react';
import TournamentComponent from './Tournament';
import ScrimsComponent from './Scrims';

function Register() {
  const [selectedComponent, setSelectedComponent] = useState(
    localStorage.getItem('selectedComponent') || 'tournament'
  );

  const handleHeadingClick = (component) => {
    setSelectedComponent(component);
    localStorage.setItem('selectedComponent', component);
  };

  useEffect(() => {
    // Clean up local storage if needed when the component unmounts
    return () => {
      localStorage.removeItem('selectedComponent');
    };
  }, []);

  useEffect(() => {
    // If selectedComponent is not in localStorage, set it to 'tournament'
    if (!localStorage.getItem('selectedComponent')) {
      setSelectedComponent('tournament');
    }
  }, []);

  return (
    <section id='live' className='py-32'> 
      <div className="flex h-screen flex-col items-center justify-center m-12">
      <div>
        <p className="text-white text-5xl font-bold m-6 mb-10">Tournaments</p>
        
      </div>
      <div className="flex w-full bg-slate-900">
        <button
          className={`flex-1 text-white text-2xl font-bold  cursor-pointer relative ${
            selectedComponent === 'tournament' ? 'selected ' : ''
          }`}
          onClick={() => handleHeadingClick('tournament')}
        >
          Tournaments
          {selectedComponent === 'tournament' && (
            <div className="selected-line bg-blue-500 h-1 w-full absolute bottom-0"></div>
          )}
        </button>
        <button
          className={`flex-1 text-white text-2xl font-bold p-5 cursor-pointer relative ${
            selectedComponent === 'scrims' ? 'selected ' : ''
          }`}
          onClick={() => handleHeadingClick('scrims')}
        >
          Scrims
          {selectedComponent === 'scrims' && (
            <div className="selected-line bg-blue-500 h-1 w-full absolute bottom-0 left-0"></div>
          )}
        </button>
      </div>

      {selectedComponent === 'tournament' && (
        <div className="h-full w-full shadow shadow-slate-900 bg-transparent">
          <TournamentComponent/>
        </div>
      )}

      {selectedComponent === 'scrims' && (
        <div className="h-full w-full shadow shadow-slate-900 bg-transparent">
          <ScrimsComponent/>
        </div>
      )}
    </div>
    </section>
  );
}

export default Register;

