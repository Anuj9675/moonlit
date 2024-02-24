'use client'
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const ScrollDownButton = () => {
  const handleScrollDown = () => {
    window.scroll({
      top: window.scrollY + 200,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className="fixed bottom-4 right-4 bg-indigo-500 p-2 rounded-full text-white hover:bg-indigo-700"
      onClick={handleScrollDown}
    >
      <FaChevronDown />
    </button>
  );
};

export default ScrollDownButton;

