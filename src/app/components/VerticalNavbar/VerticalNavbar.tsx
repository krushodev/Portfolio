'use client';

import sections from '@/app/constants/sections';
import { useState } from 'react';
import { Link } from 'react-scroll';

function VerticalNavbar() {
  const [isEvenSection, setIsEvenSection] = useState<boolean | null>(null);
  const [isInitialSection, setIsInitialSection] = useState<boolean | null>(null);

  const handleActive = (to: string, el: HTMLElement): void => {
    const indexSection = sections.findIndex(item => item === to);

    const isEven = indexSection % 2 === 0;
    const isInitial = indexSection === 0;

    setIsEvenSection(isEven);
    setIsInitialSection(isInitial);
  };

  return (
    <div className="top-2/4 translate-y-[-50%] fixed right-[0.3em] hidden md:block z-20">
      <ul className="flex flex-col gap-[0.1]">
        {sections.map((section, index) => (
          <li key={index} className="p-1.5 cursor-pointer">
            <Link
              to={section}
              activeClass="bg-black scale-[1.6] transition duration-150"
              onSetActive={handleActive}
              className={`${isEvenSection ? 'bg-black' : 'bg-[#dbd9d3]'} ${isInitialSection ? 'hidden' : 'block'} h-[0.7em] w-[0.7em]  rounded-full`}
              duration={50}
              spy={true}
              smooth={true}
            ></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VerticalNavbar;
