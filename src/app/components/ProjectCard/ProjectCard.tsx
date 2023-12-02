import { Project } from '@/app/mocks/projects';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  data: Project;
}

function ProjectCard({ data }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-full relative rounded-lg" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Image src={data.image} alt={data.name} className="w-full h-full object-cover cursor-pointer hover:blur-[2.5px] hover:brightness-[0.75] hover:scale-[1.07] duration-500" />
      <div className={`${isHovered ? 'opacity-100' : 'opacity-0'} absolute  top-1/2 left-1/2 translate-x-[-50%] transition duration-500`}>Hola mundo</div>
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
