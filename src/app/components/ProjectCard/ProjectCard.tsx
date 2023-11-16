import { Project } from '@/app/mocks/projects';
import Image from 'next/image';

interface Props {
  data: Project;
}

function ProjectCard({ data }: Props) {
  return (
    <div className="bg-white h-full grid grid-rows-2 ">
      <Image src={data.image} alt={data.name} className="w-full h-full object-cover" />
      <div className="pl-4 bg-red-900 h-full">
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
      </div>
    </div>
  );
}

export default ProjectCard;
