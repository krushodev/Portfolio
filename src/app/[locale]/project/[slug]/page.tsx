'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import projects, { Project } from '@/app/mocks/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import AnimatedCursor from 'react-animated-cursor';
import { RxArrowTopRight } from 'react-icons/rx';
import { useTranslations } from 'next-intl';
import LanguagePicker from '@/app/components/LanguagePicker/LanguagePicker';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [projectSlug, setProjectSlug] = useState<string>('');
  const t = useTranslations('project');
  const tProjects = useTranslations('projects');

  useEffect(() => {
    const slug = params.slug as string;
    const foundProject = projects.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === slug);
    setProject(foundProject || null);
    setProjectSlug(slug);
  }, [params.slug]);

  if (!project) {
    return (
      <div className="w-screen h-screen bg-black flex items-center justify-center">
        <p className="text-[#ecebe8] text-2xl">{t('notFound')}</p>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen bg-black text-[#ecebe8] selection:bg-[#dbd9d3] selection:text-black overflow-hidden">
      <LanguagePicker isProjectPage={true} />
      <div className="h-full p-3 xxs:p-4 xl:p-6 2xl:p-8 flex flex-col">
        {/* Back Button */}
        <button onClick={() => router.push(`/${params.locale}`)} className="group flex items-center gap-2 mb-4 text-[#ecebe8] hover:text-[#dbd9d3] transition-colors duration-300 flex-shrink-0">
          <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm uppercase font-medium">{t('back')}</span>
        </button>

        {/* Main Content - Newspaper Style */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 min-h-0">
          {/* Image Column */}
          <div className="order-2 lg:order-1">
            <div className="border-l-4 border-[#dbd9d3] pl-4 h-full flex items-center">
              <Swiper
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="w-full h-full max-h-[50vh] lg:max-h-full rounded overflow-hidden project-swiper"
                grabCursor={true}
                direction="horizontal"
              >
                <SwiperSlide>
                  <div className="w-full h-full flex items-center justify-center bg-gray-900/30">
                    <Image src={project.image} alt={project.name} className="w-full h-full object-cover object-center" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2 flex flex-col gap-4 lg:gap-6 overflow-y-auto">
            {/* Header */}
            <div className="border-b-2 border-[#dbd9d3] pb-3 flex-shrink-0">
              <h1 className="text-xl xxs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase mb-2 tracking-tight">{project.name}</h1>
              <div className="flex items-center gap-2 text-xs xxs:text-sm text-[#a9a69e] uppercase tracking-widest">
                <span>●</span>
                <span>{t('projectShowcase')}</span>
                <span>●</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3 flex-shrink-0">
              <h2 className="text-base xxs:text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-wide border-b border-[#a9a69e] pb-1 inline-block">{t('overview')}</h2>
              <p className="text-xs xxs:text-sm sm:text-base lg:text-lg text-[#ecebe8] leading-relaxed text-justify">{tProjects(`${projectSlug}.description`)}</p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <h2 className="text-lg xxs:text-xl font-bold uppercase tracking-wide border-b border-[#a9a69e] pb-1 inline-block">{t('techStack')}</h2>
              <div className="grid grid-cols-2 gap-2">
                {project.techStack.map((tech, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-[#dbd9d3]">|</span>
                    <span className="text-xs xxs:text-sm lg:text-base uppercase tracking-wide">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="space-y-3 pt-4 border-t border-[#a9a69e] flex-shrink-0">
              <h2 className="text-base xxs:text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-wide border-b border-[#a9a69e] pb-1 inline-block">{t('links')}</h2>
              <div className="space-y-2">
                <a href={project.repository} target="_blank" rel="noopener noreferrer" className="relative block text-sm xxs:text-base sm:text-base lg:text-lg uppercase pb-1 cursor-pointer">
                  <span className="relative inline-flex items-center gap-2 after:content-[''] after:transition-transform after:duration-500 after:h-[1px] after:w-full after:left-0 after:bottom-0 after:bg-[#ecebe8] after:absolute after:scale-x-0 after:scale-y-100 after:origin-[0%_100%] hover:after:scale-x-100">
                    <span className="text-[#dbd9d3]">▸</span>
                    {t('sourceCode')}
                    <RxArrowTopRight className="text-[#dbd9d3]" />
                  </span>
                </a>
                {project.deploy && (
                  <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="relative block text-sm xxs:text-base sm:text-base lg:text-lg uppercase pb-1 cursor-pointer">
                    <span className="relative inline-flex items-center gap-2 after:content-[''] after:transition-transform after:duration-500 after:h-[1px] after:w-full after:left-0 after:bottom-0 after:bg-[#ecebe8] after:absolute after:scale-x-0 after:scale-y-100 after:origin-[0%_100%] hover:after:scale-x-100">
                      <span className="text-[#dbd9d3]">▸</span>
                      {t('liveDemo')}
                      <RxArrowTopRight className="text-[#dbd9d3]" />
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Cursor */}
      <AnimatedCursor
        innerSize={8}
        outerSize={38}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: '#a59f92'
        }}
        outerStyle={{
          border: '2px solid #a59f92'
        }}
      />
    </div>
  );
}

export default ProjectDetail;
