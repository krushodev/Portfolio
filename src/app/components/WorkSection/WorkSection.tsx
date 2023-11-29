'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from '../ProjectCard/ProjectCard';

import 'swiper/css';
import 'swiper/css/scrollbar';

import projects from '@/app/mocks/projects';
import { FreeMode, Scrollbar } from 'swiper/modules';
import { useWindow } from '@/app/hooks/useWindow';

function WorkSection() {
  const { width } = useWindow();

  const isMobile = (width as number) <= 700;

  const slidesPerView = isMobile ? 1 : (width as number) <= 1200 ? 2 : (width as number) <= 1360 ? 3 : 4;

  return (
    <div className="h-screen bg-red-200">
      <h3 className="text-4xl font-medium uppercase p-10 xxs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 3xl:text-9xl">What I do</h3>
      <div className="bg-red-300">
        <Swiper
          scrollbar={{
            hide: true
          }}
          modules={[Scrollbar, FreeMode]}
          grabCursor={true}
          slidesPerView={slidesPerView}
          spaceBetween={20}
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

export default WorkSection;
