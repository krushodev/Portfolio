'use client';

import Image from 'next/image';
import Title from '../Title/Title';
import aboutImage from '../../../../public/images/about-picture.jpeg';
import { useTranslations } from 'next-intl';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { useInView } from 'react-intersection-observer';

function About() {
  const t = useTranslations('sections');
  const tAbout = useTranslations('about');
  const [needsScroll, setNeedsScroll] = useState(false);
  const [showImageOnly, setShowImageOnly] = useState(true);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

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

  // Animate paragraph lines when in view
  useEffect(() => {
    const paragraph = paragraphRef.current;

    if (paragraph && inView) {
      // Split text into lines
      const paragraphSplit = new SplitType(paragraph, {
        types: 'lines',
        tagName: 'span'
      });

      // Initial state - hide lines from below
      gsap.set(paragraphSplit.lines, {
        y: '100%',
        opacity: 0
      });

      // Animate lines with stagger effect
      gsap.to(paragraphSplit.lines, {
        y: '0%',
        opacity: 1,
        duration: 0.6,
        ease: 'power1.out',
        stagger: 0.2
      });
    }
  }, [inView]);

  return (
    <div className="h-full flex flex-col">
      <Title content={t('about')} />
      <div className="grid grid-cols-1 lg:grid-cols-6 grid-row-4 lg:grid-rows-1 h-full overflow-hidden">
        <div className={`${showImageOnly ? 'lg:col-span-4' : 'col-span-1'} flex lg:items-center lg:w-full`}>
          <div className="max-h-[70vh] lg:max-h-[60vh] relative overflow-hidden">
            <div ref={textContainerRef} className="overflow-y-auto max-h-[70vh] lg:max-h-[60vh] pr-2">
              <p
                ref={node => {
                  if (node) {
                    paragraphRef.current = node;
                    inViewRef(node);
                  }
                }}
                className="text-lg xs:text-xl s:text-2xl md:text-3xl screen-h-md:leading-relaxed lg:text-3xl lg:!leading-loose 2xl:text-4xl 2xl:leading-loose 3xl:text-6xl 3xl:leading-loose"
              >
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
