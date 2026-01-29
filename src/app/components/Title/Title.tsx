import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { useInView } from 'react-intersection-observer';

interface Props {
  content: string;
  isFirstSection?: boolean;
}

function Title({ content, isFirstSection = false }: Props) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    const title = titleRef.current;

    if (title && inView) {
      // Split text into words
      const titleSplit = new SplitType(title, {
        types: 'words',
        tagName: 'span'
      });

      // Get separate elements
      const textContent = title.querySelector('.title-content');
      const underline = title.parentElement?.querySelector('.title-underline');

      // Initial state - hide words from below
      gsap.set(titleSplit.words, {
        y: '100%',
        opacity: 0
      });

      // Set underline initial state
      if (underline) {
        gsap.set(underline, {
          width: '0px',
          display: 'inline-block'
        });
      }

      // Animate words with stagger effect
      gsap.to(titleSplit.words, {
        y: '0%',
        opacity: 1,
        duration: 0.5,
        ease: 'power1.out',
        stagger: 0.1
      });

      // Animate underline if not first section
      if (!isFirstSection && underline && textContent) {
        // Get the width of the text content to match underline exactly
        gsap.to(underline, {
          width: (textContent as HTMLElement).offsetWidth,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.8 // Reduced from 1.0s to 0.8s
        });
      }
    }
  }, [inView, isFirstSection]);

  const setRefs = (node: HTMLHeadingElement | null) => {
    titleRef.current = node;
    inViewRef(node);
  };

  return (
    <div className="title-container relative inline-block mb-8 lg:mb-10">
      <h3 ref={setRefs} className="xxs:py-5 text-bold text-center mb-0 lg:mb-0 lg:text-left font-medium uppercase text-3xl xxs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
        {!isFirstSection ? <span className="title-content">{content}</span> : content}
      </h3>
      {!isFirstSection && <span className="title-underline border-b-4 border-current absolute bottom-0 left-0 inline-block" />}
    </div>
  );
}

export default Title;
