import { Project } from '@/app/mocks/projects';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  data: Project;
}

function ProjectCard({ data }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-full overflow-hidden relative rounded-lg cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Image src={data.image} alt={data.name} className={`w-full h-full object-contain md:object-cover duration-500 ${isHovered ? 'blur-[2.5px] brightness-[0.40] scale-[1.03]' : ''}`} />
      <div className={`${isHovered ? 'opacity-1' : 'opacity-0'} absolute inset-0 transition duration-500`}>
        <div className="h-full flex flex-col justify-center px-5">
          <h5 className="text-white text-4xl uppercase font-medium">{data.name}</h5>
          <p className="text-white text-sm mt-4 font-medium">{data.description}</p>
          <div className="mt-10 gap-5 flex justify-center flex-wrap">
            {data.techStack.map((item, index) => (
              <span key={index} className="text-sm text-slate-300 font-medium">
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="pl-4 bg-red-900 h-96 absolute">
        <h5 className="mt-10 mb-5 text-2xl">{data.name}</h5>
        <p className="text-lg">{data.description}</p>
        <div className="mt-16 flex items-center gap-4">
          <h6 className="text-lg">Technologies:</h6>
          <div className="flex gap-2">
            {data.techStack.map((tech, index) => (
              <Image key={index} src={tech.icon} alt={tech.name} className="w-6" />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ProjectCard;
