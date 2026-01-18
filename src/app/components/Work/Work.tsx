'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation } from 'swiper/modules';
import ProjectCard from '../ProjectCard/ProjectCard';
import projects from '@/data/projects';
import { useTranslations } from 'next-intl';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import Title from '../Title/Title';

function Work() {
  const t = useTranslations('sections');

  return (
    <div className="h-full flex flex-col gap-2">
      <Title content={t('work')} />
      <div className="h-3/4 flex items-center pr-8 overflow-hidden">
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
