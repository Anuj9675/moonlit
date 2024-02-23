"use client"
import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
   
    setIsVisible(window.scrollY > 300);
  };

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
   
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-4 right-4 bg-indigo-500 p-2 rounded-full text-white hover:bg-indigo-700 ${
        isVisible ? 'visible' : 'invisible'
      }`}
      onClick={handleScrollUp}
    >
      <FaChevronUp />
    </button>
  );
};

export default ScrollUpButton;
