import skills from '@/app/mocks/skills';
import Image from 'next/image';

function KnowledgeSection() {
  return (
    <div className="h-screen">
      <h3 className="text-4xl font-medium uppercase p-10 xxs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 3xl:text-9xl">My Skills</h3>
      <div className="flex justify-center items-center">
        <div className="p-3 grid grid-cols-3 gap-6 xxs:grid-cols-4 xs:gap-8 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 xl:gap-10">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col gap-1 items-center justify-center">
              <Image src={skill.icon} alt={skill.name} className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 xl:w-28 xl:h-28 transition duration-300 lg:hover:scale-[1.06]" />
              <h5 className="hidden sm:block text-center">{skill.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KnowledgeSection;
