'use client';

import Image from 'next/image';
import Title from '../../components/Title/Title';
import aboutImage from '../../../../public/images/about-picture.jpeg';
import { useTranslations } from 'next-intl';
import { useState, useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { useInView } from 'react-intersection-observer';

function About() {
  const t = useTranslations('sections');
  const tAbout = useTranslations('about');
  const [needsScroll, setNeedsScroll] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const [paragraphElement, setParagraphElement] = useState<HTMLParagraphElement | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const checkLayout = useCallback(() => {
    const isLargeScreen = window.innerWidth >= 1287;
    setShowImage(isLargeScreen);

    if (textContainerRef.current) {
      const hasScroll = textContainerRef.current.scrollHeight > textContainerRef.current.clientHeight;
      setNeedsScroll(hasScroll);
    }
  }, []);

  useEffect(() => {
    checkLayout();
    window.addEventListener('resize', checkLayout);
    return () => window.removeEventListener('resize', checkLayout);
  }, [checkLayout]);

  // Handle scroll indicator animation with GSAP
  useEffect(() => {
    if (scrollIndicatorRef.current && needsScroll && !isAtBottom) {
      gsap.to(scrollIndicatorRef.current, {
        y: 5,
        duration: 0.6,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true
      });
    }
  }, [needsScroll, isAtBottom]);

  // Handle scroll events to detect when at bottom
  const handleScroll = useCallback(() => {
    if (textContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = textContainerRef.current;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 10;
      setIsAtBottom(atBottom);
    }
  }, []);

  // Animate paragraph lines when in view
  useEffect(() => {
    const paragraph = paragraphElement;
    const image = imageRef.current;

    if (paragraph && inView) {
      const paragraphSplit = new SplitType(paragraph, {
        types: 'lines',
        tagName: 'span'
      });

      gsap.set(paragraphSplit.lines, {
        y: '100%',
        opacity: 0
      });

      gsap.to(paragraphSplit.lines, {
        y: '0%',
        opacity: 1,
        duration: 0.6,
        ease: 'power1.out',
        stagger: 0.2
      });
    }

    // Animate image when in view
    if (image && inView && showImage) {
      gsap.set(image, {
        y: '100%',
        opacity: 0
      });

      gsap.to(image, {
        y: '0%',
        opacity: 1,
        duration: 0.8,
        ease: 'power1.out',
        delay: 0.4
      });
    }
  }, [inView, paragraphElement, showImage]);

  return (
    <div className="h-full flex flex-col">
      <Title content={t('about')} />
      <div className="flex-1 overflow-hidden">
        <div className={`h-full ${showImage ? 'grid grid-cols-6' : 'flex items-center justify-center'}`}>
          <div className={`${showImage ? 'col-span-4 flex items-center' : 'w-full max-w-4xl'} px-4 s:px-6 md:px-8`}>
            <div className="relative w-full">
              <div
                ref={textContainerRef}
                onScroll={handleScroll}
                className={`${needsScroll ? 'overflow-y-auto max-h-[60vh] pr-2 scrollbar-thin scrollbar-thumb-[#dbd9d3]/30 scrollbar-track-transparent' : 'overflow-visible'}`}
              >
                <p
                  ref={node => {
                    if (node) {
                      setParagraphElement(node);
                      inViewRef(node);
                    }
                  }}
                  className={`text-base xxs:text-lg xs:text-xl s:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl 3xl:text-5xl leading-relaxed md:leading-relaxed lg:!leading-loose xl:!leading-loose 2xl:!leading-loose ${showImage ? 'text-left' : 'text-center'}`}
                >
                  {tAbout('description')}
                </p>
              </div>
              {needsScroll && !isAtBottom && (
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center pointer-events-none">
                  <div className="w-full h-12 bg-gradient-to-t from-black to-transparent"></div>
                  <div ref={scrollIndicatorRef} className="absolute bottom-2 flex flex-col items-center text-[#dbd9d3]/70">
                    <span className="text-xs mb-1">Scroll</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
          {showImage && (
            <div ref={imageRef} className="col-span-2 flex items-center justify-center h-full">
              <Image src={aboutImage} alt="Picture of me" className="max-h-[60vh] min-h-[25em] w-auto object-cover rounded pr-7" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
