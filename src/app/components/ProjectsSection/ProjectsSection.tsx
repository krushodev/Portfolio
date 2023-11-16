'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from '../ProjectCard/ProjectCard';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { EffectCoverflow } from 'swiper/modules';

import projects from '@/app/mocks/projects';

function ProjectsSection() {
  return (
    <div className="h-screen bg-red-700 flex">
      <Swiper
        className="bg-red-200 my-36"
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        modules={[EffectCoverflow]}
        grabCursor={true}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
      >
        {projects.map((project, index) => (
          <SwiperSlide className="bg-yellow-100" key={index}>
            <ProjectCard data={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectsSection;
