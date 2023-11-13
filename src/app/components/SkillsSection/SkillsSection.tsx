import skills from '@/app/mocks/skills';
import Image from 'next/image';

function KnowledgeSection() {
  return (
    <div className="h-screen bg-gray-300 flex justify-center items-center">
      <div className="bg-red-200 grid grid-cols-3 sm:grid-cols-4 sm:gap-10 gap-6 lg:grid-cols-8 xl:gap-14 p-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col gap-1 items-center justify-center">
            <Image src={skill.icon} alt={skill.name} className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 transition duration-500" />
            <h5 className="hidden sm:block text-center">{skill.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KnowledgeSection;
