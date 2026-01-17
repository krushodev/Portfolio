'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import ProjectCard from '../ProjectCard/ProjectCard';
import projects from '@/data/projects';
import { useTranslations } from 'next-intl';

import 'swiper/css';
import 'swiper/css/scrollbar';
import Title from '../Title/Title';

function Work() {
  const t = useTranslations('sections');

  return (
    <div className="h-full flex flex-col gap-2">
      <Title content={t('work')} />
      <div className="h-3/4 flex items-center pr-8">
        <Swiper
          scrollbar={{
            hide: true
          }}
          modules={[Scrollbar]}
          grabCursor={true}
          breakpoints={{
            1100: {
              slidesPerView: 2
            },
            1400: {
              slidesPerView: 3
            },
            1700: {
              slidesPerView: 4
            },
            2100: {
              slidesPerView: 5
            }
          }}
          spaceBetween={20}
          className="h-full"
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
