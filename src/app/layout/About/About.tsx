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
  const contentAreaRef = useRef<HTMLDivElement>(null);
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

    const contentArea = contentAreaRef.current;
    const textContainer = textContainerRef.current;

    if (contentArea && textContainer) {
      const availableHeight = contentArea.clientHeight;
      textContainer.style.maxHeight = `${availableHeight}px`;

      requestAnimationFrame(() => {
        const hasScroll = textContainer.scrollHeight > textContainer.clientHeight;
        setNeedsScroll(hasScroll);
      });
    }
  }, []);

  useEffect(() => {
    checkLayout();
    window.addEventListener('resize', checkLayout);
    return () => window.removeEventListener('resize', checkLayout);
  }, [checkLayout]);

  // Re-check after fonts/content load
  useEffect(() => {
    const timer = setTimeout(checkLayout, 500);
    return () => clearTimeout(timer);
  }, [checkLayout]);

  // Handle scroll indicator animation with GSAP
  useEffect(() => {
    if (scrollIndicatorRef.current && needsScroll && !isAtBottom) {
      gsap.killTweensOf(scrollIndicatorRef.current);
      gsap.to(scrollIndicatorRef.current, {
        y: 4,
        duration: 0.8,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true
      });
    }

    const indicatorEl = scrollIndicatorRef.current;
    return () => {
      if (indicatorEl) {
        gsap.killTweensOf(indicatorEl);
      }
    };
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
      <div ref={contentAreaRef} className="flex-1 overflow-hidden">
        <div className={`h-full ${showImage ? 'grid grid-cols-6' : 'flex items-center justify-center'}`}>
          <div className={`${showImage ? 'col-span-4 flex items-center' : 'w-full max-w-4xl'} px-4 s:px-6 md:px-8`}>
            <div className="relative w-full">
              <div ref={textContainerRef} onScroll={handleScroll} className="overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-current/20 scrollbar-track-transparent">
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
            </div>
          </div>
          {showImage && (
            <div ref={imageRef} className="col-span-2 flex items-start justify-center h-full pt-8">
              <Image src={aboutImage} alt="Picture of me" className="max-h-[60vh] min-h-[25em] w-auto object-cover rounded pr-7" />
            </div>
          )}
        </div>
      </div>
      {needsScroll && !isAtBottom && (
        <div className="flex justify-center py-2 pointer-events-none">
          <div ref={scrollIndicatorRef} className="opacity-50">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
