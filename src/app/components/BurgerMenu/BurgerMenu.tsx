'use client';

import { useState } from 'react';
import Hamburger from 'hamburger-react';
import sections from '@/app/constants/sections';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);

    const body = document.body;
    body.style.overflowY = isOpen ? 'scroll' : 'hidden';
  };

  return (
    <>
      <div className="fixed bg-red-200 right-10 top-5 z-20 md:hidden">
        <Hamburger toggled={isOpen} size={35} toggle={handleToggle} />
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} bg-red-200 fixed h-screen top-0 w-screen flex justify-center flex-col gap-8 items-center md:hidden`}>
        {sections.map((section, index) => (
          <a key={index} href={`#${section}`} onClick={handleToggle} className="capitalize text-xl">
            {section}
          </a>
        ))}
      </div>
    </>
  );
}

export default BurgerMenu;
