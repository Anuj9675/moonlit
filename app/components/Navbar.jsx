'use client'
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Login from './page';
import Link from 'next/link';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "live",
      title: "Register",
    },
    {
      id: "social",
      title: "Social",
    },
  ];

  return (
    <nav className="w-full flex py-6 justify-between items-center">
      {/* Logo */}
      <Link href="/">
        <img src="../logo.png" alt="MOONLIT" className="w-[80px] h-[80px]" />
      </Link>

      {/* Navigation Links */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link href={`#${nav.id}`}>
              {nav.title}
            </Link>
          </li>
        ))}

        {/* Link to open Login form */}
        <li className="ml-6 cursor-pointer font-poppins font-normal text-[16px] text-white bg-violet-500 px-4 py-1 rounded-md" onClick={() => setToggle(!toggle)}>
          Login
        </li>
      </ul>

      {/* Login form */}
      {toggle && (
        <div>
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <div className="p-8 bg-white rounded-md shadow-md">
              <Login />
            </div>
          </div>
        </div>
      )}

      {/* Hamburger menu icon */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {toggle ? (
          <FaTimes
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <FaBars
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
