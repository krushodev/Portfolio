'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation } from 'swiper/modules';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projects from '@/data/projects';
import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import Title from '../../components/Title/Title';

function Work() {
  const t = useTranslations('sections');
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;

    if (swiperContainer) {
      // Get all project cards
      const projectCards = swiperContainer.querySelectorAll('.project-card');

      // Initial state - hide cards from below with opacity
      gsap.set(projectCards, {
        y: '100%',
        opacity: 0
      });

      // Animate cards with stagger effect
      gsap.to(projectCards, {
        y: '0%',
        opacity: 1,
        duration: 0.8,
        ease: 'power1.out',
        stagger: 0.2,
        delay: 0.6
      });
    }
  }, []);

  return (
    <div className="h-full flex flex-col gap-2">
      <Title content={t('work')} />
      <div ref={swiperRef} className="h-3/4 flex items-center pr-8 overflow-hidden">
        <Swiper
          scrollbar={{
            hide: true
          }}
          navigation={{
            enabled: true,
            hiddenClass: 'swiper-button-hidden'
          }}
          modules={[Scrollbar, Navigation]}
          grabCursor={true}
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: true,
              navigation: {
                enabled: true
              }
            },
            1100: {
              slidesPerView: 1.5,
              centeredSlides: false,
              navigation: {
                enabled: false
              }
            },
            1400: {
              slidesPerView: 2,
              centeredSlides: false,
              navigation: {
                enabled: false
              }
            },
            1700: {
              slidesPerView: 2.5,
              centeredSlides: false,
              navigation: {
                enabled: false
              }
            },
            2100: {
              slidesPerView: 3,
              centeredSlides: false,
              navigation: {
                enabled: false
              }
            }
          }}
          spaceBetween={30}
          className="h-full work-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard data={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Work;
