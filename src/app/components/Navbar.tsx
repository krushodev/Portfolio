'use client';

import sections from '@/app/constants/sections';
import { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="top-2/4 fixed right-10 bg-green-500 hidden md:block">
      <ul className="flex flex-col gap-2">
        {sections.map((section, index) => (
          <li key={index} className="p-1.5 cursor-pointer">
            <Link to={section} activeClass="bg-gray-100 scale-150 transition duration-150" className="block h-3 w-3 bg-gray-500 rounded" duration={50} spy={true} smooth={true}></Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
