'use client';

import Image from 'next/image';
import Title from '../Title/Title';
import aboutImage from '../../../../public/images/about-picture.jpeg';
import { useTranslations } from 'next-intl';
import { useState, useEffect, useRef } from 'react';

function About() {
  const t = useTranslations('sections');
  const tAbout = useTranslations('about');
  const [needsScroll, setNeedsScroll] = useState(false);
  const [showImageOnly, setShowImageOnly] = useState(true);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScroll = () => {
      if (textContainerRef.current) {
        const hasScroll = textContainerRef.current.scrollHeight > textContainerRef.current.clientHeight;
        setNeedsScroll(hasScroll);
      }
    };

    const checkImageDisplay = () => {
      const shouldShowImage = window.innerWidth >= 1024; // Solo mostrar en desktop (lg)
      setShowImageOnly(shouldShowImage);
    };

    checkScroll();
    checkImageDisplay();

    window.addEventListener('resize', () => {
      checkScroll();
      checkImageDisplay();
    });

    return () => {
      window.removeEventListener('resize', checkScroll);
      window.removeEventListener('resize', checkImageDisplay);
    };
  }, []);

  return (
    <div className="h-full flex flex-col">
      <Title content={t('about')} />
      <div className="grid grid-cols-1 lg:grid-cols-6 grid-row-4 lg:grid-rows-1 h-full overflow-hidden">
        <div className={`${showImageOnly ? 'lg:col-span-4' : 'col-span-1'} flex lg:items-center lg:w-full`}>
          <div className="max-h-[70vh] lg:max-h-[60vh] relative overflow-hidden">
            <div ref={textContainerRef} className="overflow-y-auto max-h-[70vh] lg:max-h-[60vh] pr-2">
              <p className="text-lg xs:text-xl s:text-2xl md:text-3xl screen-h-md:leading-relaxed lg:text-3xl lg:!leading-loose 2xl:text-4xl 2xl:leading-loose 3xl:text-6xl 3xl:leading-loose">
                {tAbout('description')}
              </p>
            </div>
            {needsScroll && (
              <>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#ecebe8] to-transparent pointer-events-none lg:from-black lg:to-transparent"></div>
                <div className="absolute bottom-2 right-2 text-xs opacity-50 animate-bounce lg:text-[#dbd9d3]">↓</div>
              </>
            )}
          </div>
        </div>
        {showImageOnly && (
          <div className="hidden lg:flex lg:col-span-2 lg:items-center lg:justify-center lg:h-full">
            <Image
              src={aboutImage}
              alt="Picture of me"
              className="w-full p-3 h-[12em] screen-h-md:h-[24em] screen-h-xl:h-[45em] lg:p-0 lg:max-h-[60vh] lg:min-h-[25em] lg:w-fit md:pr-7 object-cover rounded"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
