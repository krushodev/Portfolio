'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import projects from '@/data/projects';
import { Project } from '@/data/projects/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import CustomCursor from '@/app/components/CustomCursor/CustomCursor';
import { RxArrowTopRight } from 'react-icons/rx';
import { useTranslations } from 'next-intl';
import LanguagePicker from '@/app/components/LanguagePicker/LanguagePicker';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { useInView } from 'react-intersection-observer';

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

  // Refs for GSAP animations
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const overviewTitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const techTitleRef = useRef<HTMLHeadingElement>(null);
  const techItemsRef = useRef<HTMLDivElement>(null);
  const linksTitleRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const headerDividerRef = useRef<HTMLDivElement>(null);
  const linksDividerRef = useRef<HTMLDivElement>(null);

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    const slug = params.slug as string;
    const foundProject = projects.find(p => p.slug === slug);
    setProject(foundProject || null);
    setProjectSlug(slug);
  }, [params.slug]);

  // GSAP animations for text elements
  useEffect(() => {
    if (!inView || !project) return;

    const animateText = (element: HTMLElement | null, options: { delay?: number; stagger?: number } = {}) => {
      if (!element) return;

      const split = new SplitType(element, {
        types: 'lines,words',
        tagName: 'span'
      });

      // Set initial state
      gsap.set(split.lines, {
        y: '100%',
        opacity: 0
      });

      // Animate
      gsap.to(split.lines, {
        y: '0%',
        opacity: 1,
        duration: 0.6,
        ease: 'power1.out',
        stagger: options.stagger || 0.1,
        delay: options.delay || 0
      });
    };

    const animateWords = (element: HTMLElement | null, options: { delay?: number; stagger?: number } = {}) => {
      if (!element) return;

      const split = new SplitType(element, {
        types: 'words',
        tagName: 'span'
      });

      // Set initial state
      gsap.set(split.words, {
        y: '100%',
        opacity: 0
      });

      // Animate
      gsap.to(split.words, {
        y: '0%',
        opacity: 1,
        duration: 0.5,
        ease: 'power1.out',
        stagger: options.stagger || 0.05,
        delay: options.delay || 0
      });
    };

    const animateTitleWithUnderline = (titleElement: HTMLElement | null, underlineElement: HTMLElement | null, options: { delay?: number } = {}) => {
      if (!titleElement) return;

      const split = new SplitType(titleElement, {
        types: 'words',
        tagName: 'span'
      });

      // Set initial state
      gsap.set(split.words, {
        y: '100%',
        opacity: 0
      });

      // Set underline initial state
      if (underlineElement) {
        gsap.set(underlineElement, {
          width: '0px',
          display: 'inline-block'
        });
      }

      // Animate words
      gsap.to(split.words, {
        y: '0%',
        opacity: 1,
        duration: 0.5,
        ease: 'power1.out',
        stagger: 0.1,
        delay: options.delay || 0
      });

      // Animate underline
      if (underlineElement) {
        gsap.to(underlineElement, {
          width: titleElement.offsetWidth,
          duration: 0.8,
          ease: 'power3.out',
          delay: (options.delay || 0) + 0.8
        });
      }
    };

    // Get underline elements
    const overviewUnderline = overviewTitleRef.current?.parentElement?.querySelector('.title-underline') as HTMLElement | null;
    const techUnderline = techTitleRef.current?.parentElement?.querySelector('.title-underline') as HTMLElement | null;
    const linksUnderline = linksTitleRef.current?.parentElement?.querySelector('.title-underline') as HTMLElement | null;

    // Animate elements with staggered timing
    animateText(titleRef.current, { delay: 0 });
    animateWords(subtitleRef.current, { delay: 0.3 });
    animateTitleWithUnderline(overviewTitleRef.current, overviewUnderline, { delay: 0.5 });
    animateText(descriptionRef.current, { delay: 0.7, stagger: 0.2 });
    animateTitleWithUnderline(techTitleRef.current, techUnderline, { delay: 1.0 });

    // Animate tech stack items
    if (techItemsRef.current) {
      const techItems = techItemsRef.current.querySelectorAll('div');
      gsap.set(techItems, {
        y: '50px',
        opacity: 0
      });
      gsap.to(techItems, {
        y: '0%',
        opacity: 1,
        duration: 0.4,
        ease: 'power1.out',
        stagger: 0.1,
        delay: 1.2
      });
    }

    animateTitleWithUnderline(linksTitleRef.current, linksUnderline, { delay: 1.5 });

    // Animate links
    if (linksRef.current) {
      const links = linksRef.current.querySelectorAll('a');
      gsap.set(links, {
        y: '50px',
        opacity: 0
      });
      gsap.to(links, {
        y: '0%',
        opacity: 1,
        duration: 0.4,
        ease: 'power1.out',
        stagger: 0.1,
        delay: 1.7
      });
    }

    // Animate divider lines
    if (headerDividerRef.current) {
      gsap.set(headerDividerRef.current, {
        scaleX: 0,
        transformOrigin: 'left center'
      });
      gsap.to(headerDividerRef.current, {
        scaleX: 1,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.4
      });
    }

    if (linksDividerRef.current) {
      gsap.set(linksDividerRef.current, {
        scaleX: 0,
        transformOrigin: 'left center'
      });
      gsap.to(linksDividerRef.current, {
        scaleX: 1,
        duration: 0.8,
        ease: 'power3.out',
        delay: 1.6
      });
    }
  }, [inView, project]);

  if (!project) {
    return (
      <div className="w-screen h-screen bg-black flex items-center justify-center">
        <p className="text-[#ecebe8] text-2xl">{t('notFound')}</p>
      </div>
    );
  }

  return (
    <div ref={inViewRef} className="w-screen h-screen bg-black text-[#ecebe8] selection:bg-[#dbd9d3] selection:text-black overflow-hidden">
      <CustomCursor>
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
                {project.gallery && project.gallery.length > 0 ? (
                  <Swiper
                    navigation={true}
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    className="w-full h-full max-h-[50vh] lg:max-h-full rounded overflow-hidden project-swiper"
                    grabCursor={true}
                    direction="horizontal"
                    spaceBetween={10}
                  >
                    {project.gallery.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="w-full h-full flex items-center justify-center bg-gray-900/30">
                          <Image src={image.src} alt={`${project.name} - Image ${index + 1}`} width={image.width} height={image.height} className="w-full h-full object-cover object-center" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-900/30 rounded overflow-hidden">
                    <Image src={project.image.src} alt={project.name} width={project.image.width} height={project.image.height} className="w-full h-full object-cover object-center" />
                  </div>
                )}
              </div>
            </div>

            {/* Content Column */}
            <div className="order-1 lg:order-2 flex flex-col gap-4 lg:gap-6 overflow-y-auto">
              {/* Header */}
              <div className="pb-3 flex-shrink-0">
                <h1 ref={titleRef} className="text-xl xxs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase mb-2 tracking-tight">
                  {project.name}
                </h1>
                <div ref={subtitleRef} className="flex items-center gap-2 text-xs xxs:text-sm text-[#a9a69e] uppercase tracking-widest">
                  <span>●</span>
                  <span>{t('projectShowcase')}</span>
                  <span>●</span>
                </div>
                <div ref={headerDividerRef} className="border-b-2 border-[#dbd9d3] mt-3"></div>
              </div>

              {/* Description */}
              <div className="space-y-3 flex-shrink-0">
                <div className="relative inline-block">
                  <h2 ref={overviewTitleRef} className="text-base xxs:text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-wide">
                    {t('overview')}
                  </h2>
                  <span className="title-underline border-b-2 border-[#dbd9d3] absolute bottom-0 left-0 inline-block" />
                </div>
                <p ref={descriptionRef} className="text-xs xxs:text-sm sm:text-base lg:text-lg text-[#ecebe8] leading-relaxed text-justify mt-2">
                  {tProjects(`${projectSlug}.description`)}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3">
                <div className="relative inline-block">
                  <h2 ref={techTitleRef} className="text-lg xxs:text-xl font-bold uppercase tracking-wide">
                    {t('techStack')}
                  </h2>
                  <span className="title-underline border-b-2 border-[#dbd9d3] absolute bottom-0 left-0 inline-block" />
                </div>
                <div ref={techItemsRef} className="grid grid-cols-2 gap-2">
                  {project.techStack.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-[#dbd9d3]">|</span>
                      <span className="text-xs xxs:text-sm lg:text-base uppercase tracking-wide">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="space-y-3 flex-shrink-0">
                <div ref={linksDividerRef} className="border-t border-[#a9a69e] pt-4"></div>
                <div className="relative inline-block">
                  <h2 ref={linksTitleRef} className="text-base xxs:text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-wide">
                    {t('links')}
                  </h2>
                  <span className="title-underline border-b-2 border-[#dbd9d3] absolute bottom-0 left-0 inline-block" />
                </div>
                <div ref={linksRef} className="space-y-2">
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
      </CustomCursor>
    </div>
  );
}

export default ProjectDetail;
