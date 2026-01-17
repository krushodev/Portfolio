'use client';

import Image from 'next/image';
import Title from '../Title/Title';
import aboutImage from '../../../../public/images/about-picture.jpeg';
import { useTranslations } from 'next-intl';

function About() {
  const t = useTranslations('sections');
  const tAbout = useTranslations('about');

  return (
    <div className="h-full flex flex-col">
      <Title content={t('about')} />
      <div className="grid grid-cols-1 lg:grid-cols-6 grid-row-4 lg:grid-rows-1 h-full lg:h-auto">
        <div className="row-span-2 flex lg:items-center lg:col-span-4 lg:w-full">
          <p className="text-lg xs:text-xl s:text-2xl md:text-3xl screen-h-md:leading-relaxed lg:text-3xl lg:!leading-loose 2xl:text-4xl 2xl:leading-loose 3xl:text-6xl 3xl:leading-loose">
            {tAbout('description')}
          </p>
        </div>
        <div className="hidden screen-h-sm:flex items-end lg:col-span-2 lg:items-center lg:justify-center">
          <Image src={aboutImage} alt="Picture of me" className="w-full p-3 h-[12em] screen-h-md:h-[24em] screen-h-xl:h-[45em] lg:p-0 lg:!h-[25em] lg:w-fit md:pr-7  object-cover rounded" />
        </div>
      </div>
    </div>
  );
}

export default About;
