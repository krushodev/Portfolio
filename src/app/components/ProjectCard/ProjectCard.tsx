import { Project } from '@/app/mocks/projects';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

interface Props {
  data: Project;
}

function ProjectCard({ data }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const slug = data.name.toLowerCase().replace(/\s+/g, '-');
  const locale = useLocale();
  const t = useTranslations('projects');

  return (
    <div className="h-full overflow-hidden relative rounded-lg" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link href={`/${locale}/project/${slug}`}>
        <Image src={data.image} alt={data.name} className={`w-full h-full object-contain md:object-cover duration-500 ${isHovered ? 'blur-[2.5px] brightness-[0.40] scale-[1.03]' : ''}`} />
        <div className={`${isHovered ? 'opacity-1' : 'opacity-0'} absolute inset-0 transition duration-500`}>
          <div className="h-full flex flex-col justify-center px-5 screen-h-md:gap-5 screen-h-lg:gap-10">
            <h5 className="text-white text-2xl uppercase font-medium xxs:text-3xl s:text-4xl">{data.name}</h5>
            <p className="text-white text-xs xxs:text-sm s:text-lg xl:text-sm mt-4 font-medium">{t(`${slug}.description`)}</p>
            <div className="mt-10 gap-5 flex justify-center flex-wrap">
              {data.techStack.map((item, index) => (
                <span key={index} className="text-xs xxs:text-sm text-slate-300 font-medium">
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
