import Image from 'next/image';
import ScrollDownIndicator from '../../components/ScrollDownIndicator/ScrollDownIndicator';
import profileImage from '../../../../public/images/profile.jpg';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

function Header() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const name = nameRef.current;
    const image = imageRef.current;

    if (title && name && image) {
      // Split text into words
      const titleSplit = new SplitType(title, {
        types: 'words',
        tagName: 'span'
      });

      const nameSplit = new SplitType(name, {
        types: 'words',
        tagName: 'span'
      });

      // Initial state - hide words from below
      gsap.set(titleSplit.words, {
        y: '100%',
        opacity: 0
      });

      gsap.set(nameSplit.words, {
        y: '100%',
        opacity: 0
      });

      // Initial state - hide image from below
      gsap.set(image, {
        y: '50%',
        opacity: 0
      });

      // Animate words with stagger effect
      gsap.to(titleSplit.words, {
        y: '0%',
        opacity: 1,
        duration: 0.5,
        ease: 'power1.out',
        stagger: 0.1,
        delay: 0.3
      });

      gsap.to(nameSplit.words, {
        y: '0%',
        opacity: 1,
        duration: 0.5,
        ease: 'power1.out',
        stagger: 0.1,
        delay: 0.8
      });

      // Animate image to appear in sync with texts
      gsap.to(image, {
        y: '0%',
        opacity: 1,
        duration: 0.6,
        ease: 'power1.out',
        delay: 0.5
      });
    }
  }, []);
  return (
    <div className="h-full grid grid-rows-6 md:grid-rows-5">
      <div className="flex flex-col gap-5 row-span-4 md:flex-row md:row-span-3 md:justify-between">
        <h2 ref={titleRef} className="text-3xl font-medium uppercase break-words sm:text-4xl s:w-3/4 lg:w-2/4 lg:text-6xl xl:text-7xl 2xl:text-8xl">
          Fullstack Developer
        </h2>
        <div ref={imageRef} className="w-full max-h-52 xxs:max-h-60 xs:max-h-72 md:max-w-xs md:max-h-72 xl:max-w-sm xl:max-h-80">
          <Image
            src={profileImage}
            alt="Ignacio Kruchowski - Full Stack Developer"
            width={512}
            height={512}
            className="w-full max-h-full object-center object-cover brightness-95 contrast-105 rounded-md saturate-150"
            priority
          />
        </div>
      </div>
      <div className="flex justify-between items-end row-span-2 sm:flex-row sm:justify-between">
        <ScrollDownIndicator />
        <h1 ref={nameRef} className="w-3/4 text-2xl text-right font-medium uppercase xs:text-3xl s:w-96 sm:text-right sm:text-4xl sm:w-4/6 lg:text-6xl xl:text-7xl 2xl:w-8/12 2xl:text-8xl">
          Ignacio
          <br />
          Kruchowski
        </h1>
      </div>
    </div>
  );
}

export default Header;
