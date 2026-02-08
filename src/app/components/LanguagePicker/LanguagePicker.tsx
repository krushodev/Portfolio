'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

interface Props {
  isProjectPage?: boolean;
}

function LanguagePicker({ isProjectPage = false }: Props) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isEvenSection, setIsEvenSection] = useState(false);

  useEffect(() => {
    if (isProjectPage) {
      setIsVisible(true);
      setIsEvenSection(false);
      return;
    }

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSectionIndex = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSectionIndex = index;
        }
      });

      setIsVisible(currentSectionIndex > 0);
      setIsEvenSection(currentSectionIndex % 2 === 0);
    };

    const scrollContainer = document.querySelector('.overflow-y-auto');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isProjectPage]);

  const switchLocale = () => {
    const newLocale = locale === 'en' ? 'es' : 'en';
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  if (!isVisible) return null;

  const textColor = isProjectPage ? 'text-[#ecebe8]' : isEvenSection ? 'text-black' : 'text-[#dbd9d3]';

  return (
    <button
      onClick={switchLocale}
      className={`fixed top-5 right-5 z-50 font-medium uppercase text-lg tracking-wider transition-colors duration-300 hover:opacity-70 hidden md:block ${textColor}`}
      style={{ fontFamily: 'inherit' }}
    >
      {locale === 'en' ? 'ES' : 'EN'}
    </button>
  );
}

export default LanguagePicker;
