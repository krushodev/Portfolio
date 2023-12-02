'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import ProjectCard from '../ProjectCard/ProjectCard';
import projects from '@/app/mocks/projects';

import 'swiper/css';
import 'swiper/css/scrollbar';

function Work() {
  return (
    <div className="h-full flex flex-col gap-2">
      <h3 className="text-4xl text-center font-medium uppercase py-10 xxs:text-5xl sm:text-6xl md:text-6xl lg:text-left lg:text-7xl xl:text-8xl 3xl:text-9xl">What I do</h3>
      <div className="h-3/4 flex items-center">
        <Swiper
          scrollbar={{
            hide: true
          }}
          modules={[Scrollbar]}
          grabCursor={true}
          breakpoints={{
            1024: {
              slidesPerView: 2
            },
            1100: {
              slidesPerView: 3
            },
            1450: {
              slidesPerView: 4
            },
            2000: {
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
