'use client';

import sections from '@/app/constants/sections';
import { Link } from 'react-scroll';

function VerticalNavbar() {
  return (
    <div className="top-2/4 translate-y-[-50%] fixed right-[0.8em] hidden md:block z-20">
      <ul className="flex flex-col gap-[0.1]">
        {sections.map((section, index) => (
          <li key={index} className="p-1.5 cursor-pointer">
            <Link to={section} activeClass="bg-black scale-[1.4] transition duration-150" className="block h-[0.7em] w-[0.7em] bg-black rounded-full" duration={50} spy={true} smooth={true}></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VerticalNavbar;
