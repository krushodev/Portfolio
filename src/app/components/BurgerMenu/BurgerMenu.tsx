'use client';

import { useState, useEffect } from 'react';
import sections from '@/app/constants/sections';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<number>(0);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const container = document.querySelector('.overflow-y-auto') as HTMLElement;
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

  const isEvenSection = activeSection % 2 === 0;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const switchLocale = () => {
    const newLocale = locale === 'en' ? 'es' : 'en';
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setIsOpen(false);
  };

  return (
    <>
      {/* Menu trigger — small dots icon, right side, vertically centered */}
      <button
        onClick={handleToggle}
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-20 md:hidden transition-all duration-300 pl-3 pr-2 py-3 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label="Open navigation"
      >
        <div className="flex flex-col gap-[5px]">
          <span className={`block w-[5px] h-[5px] rounded-full transition-colors duration-300 ${isEvenSection ? 'bg-black/70' : 'bg-[#ecebe8]/70'}`} />
          <span className={`block w-[5px] h-[5px] rounded-full transition-colors duration-300 ${isEvenSection ? 'bg-black/70' : 'bg-[#ecebe8]/70'}`} />
          <span className={`block w-[5px] h-[5px] rounded-full transition-colors duration-300 ${isEvenSection ? 'bg-black/70' : 'bg-[#ecebe8]/70'}`} />
        </div>
      </button>

      {/* Fullscreen overlay menu */}
      <div className={`fixed inset-0 z-10 md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} ${isEvenSection ? 'bg-[#dbd9d3]' : 'bg-black'}`}>
        {/* Close button — small X on the right side */}
        <button
          onClick={handleToggle}
          className={`fixed right-5 top-5 z-20 transition-colors duration-300 ${isEvenSection ? 'text-black/60 hover:text-black' : 'text-[#ecebe8]/60 hover:text-[#ecebe8]'}`}
          aria-label="Close navigation"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="h-full flex flex-col justify-center items-center gap-8">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => handleNavigate(section)}
              className={`capitalize text-xl font-medium tracking-wide transition-opacity duration-300 hover:opacity-60 ${isEvenSection ? 'text-black' : 'text-[#ecebe8]'}`}
            >
              {section}
            </button>
          ))}
          <button
            onClick={switchLocale}
            className={`text-sm uppercase tracking-widest mt-4 transition-colors duration-300 ${isEvenSection ? 'text-black/40 hover:text-black' : 'text-[#ecebe8]/40 hover:text-[#ecebe8]'}`}
          >
            {locale === 'en' ? 'Español' : 'English'}
          </button>
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;
