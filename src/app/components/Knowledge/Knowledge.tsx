'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Title from '../Title/Title';
import skills from '@/app/mocks/skills';
import { useTranslations } from 'next-intl';

function Knowledge() {
  const t = useTranslations('sections');
  const containerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);
  const row4Ref = useRef<HTMLDivElement>(null);
  const row5Ref = useRef<HTMLDivElement>(null);
  const row6Ref = useRef<HTMLDivElement>(null);

  const allSkills = skills.map(skill => skill.name);

  const row1Skills = allSkills.slice(0, 4);
  const row2Skills = allSkills.slice(4, 8);
  const row3Skills = allSkills.slice(8, 12);
  const row4Skills = allSkills.slice(12, 16);
  const row5Skills = allSkills.slice(16, 20);
  const row6Skills = allSkills.slice(20).concat(allSkills.slice(0, 2));

  useEffect(() => {
    const ctx = gsap.context(() => {
      const createMarquee = (element: HTMLDivElement | null, direction: 'left' | 'right', duration: number) => {
        if (!element) return;

        const content = element.querySelector('.marquee-content') as HTMLElement;
        if (!content) return;

        const contentWidth = content.offsetWidth;

        gsap.set(element, {
          x: direction === 'left' ? 0 : -contentWidth / 2
        });

        gsap.to(element, {
          x: direction === 'left' ? -contentWidth / 2 : 0,
          duration,
          ease: 'none',
          repeat: -1
        });
      };

      createMarquee(row1Ref.current, 'left', 20);
      createMarquee(row2Ref.current, 'right', 25);
      createMarquee(row3Ref.current, 'left', 18);
      createMarquee(row4Ref.current, 'right', 22);
      createMarquee(row5Ref.current, 'left', 20);
      createMarquee(row6Ref.current, 'right', 24);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const MarqueeRow = ({ skills, rowRef, className = '' }: { skills: string[]; rowRef: React.RefObject<HTMLDivElement>; className?: string }) => {
    const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

    return (
      <div className={`overflow-hidden whitespace-nowrap ${className}`}>
        <div ref={rowRef} className="inline-flex">
          <div className="marquee-content inline-flex items-center">
            {duplicatedSkills.map((skill, skillIndex) => (
              <span key={skillIndex} className="inline-flex items-center px-4 md:px-6 lg:px-8">
                <span className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase tracking-wider text-black/90 hover:text-black transition-colors duration-300">{skill}</span>
                <span className="mx-4 md:mx-6 lg:mx-8 text-lg md:text-xl lg:text-2xl text-black/40">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col" ref={containerRef}>
      <Title content={t('knowledge')} />
      <div className="flex-1 flex flex-col justify-evenly overflow-hidden py-2">
        <MarqueeRow skills={row1Skills} rowRef={row1Ref as React.RefObject<HTMLDivElement>} />
        <MarqueeRow skills={row2Skills} rowRef={row2Ref as React.RefObject<HTMLDivElement>} className="opacity-60" />
        <MarqueeRow skills={row3Skills} rowRef={row3Ref as React.RefObject<HTMLDivElement>} />
        <MarqueeRow skills={row4Skills} rowRef={row4Ref as React.RefObject<HTMLDivElement>} className="opacity-60" />
        <MarqueeRow skills={row5Skills} rowRef={row5Ref as React.RefObject<HTMLDivElement>} />
        <MarqueeRow skills={row6Skills} rowRef={row6Ref as React.RefObject<HTMLDivElement>} className="opacity-60" />
      </div>
    </div>
  );
}

export default Knowledge;
