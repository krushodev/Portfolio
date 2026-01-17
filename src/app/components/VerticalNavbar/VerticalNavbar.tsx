'use client';

import sections from '@/app/constants/sections';
import { useState, useEffect } from 'react';

function VerticalNavbar() {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [scrollContainer, setScrollContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const container = document.querySelector('.overflow-y-auto') as HTMLElement;
    setScrollContainer(container);

    if (!container) return;

    const handleScroll = () => {
      const sectionElements = sections.map(section => document.getElementById(section));

      let currentIndex = 0;
      sectionElements.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentIndex = index;
          }
        }
      });

      setActiveSection(currentIndex);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (sectionName: string) => {
    const element = document.getElementById(sectionName);
    if (element && scrollContainer) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isInitialSection = activeSection === 0;
  const isEvenSection = activeSection % 2 === 0;

  if (isInitialSection) return null;

  return (
    <div className="top-2/4 translate-y-[-50%] fixed right-5 hidden md:block z-50">
      <ul className="flex flex-col">
        {sections.map((section, index) => (
          <li key={index} className="p-1 cursor-pointer">
            <button
              onClick={() => handleClick(section)}
              className={`${isEvenSection ? 'bg-black' : 'bg-[#dbd9d3]'} h-[0.5em] w-[0.5em] rounded-full transition-transform duration-150 outline-none border-none ${activeSection === index ? 'scale-[2]' : 'scale-100 hover:scale-150'}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VerticalNavbar;
