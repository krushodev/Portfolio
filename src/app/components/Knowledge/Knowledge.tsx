import Image from 'next/image';
import skills from '@/app/mocks/skills';
import Title from '../Title/Title';

function Knowledge() {
  return (
    <div className="h-full flex flex-col">
      <Title content="My Skills" />
      <div className="h-full flex justify-center items-center">
        <div className="p-5 grid grid-cols-6 gap-2 xxs:grid-cols-4 xxs:gap-6 xs:gap-8 s:grid-cols-5 sm:grid-cols-6 md:gap-10 lg:grid-cols-6 xl:gap-12 xl:grid-cols-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col gap-1 items-center">
              <Image src={skill.icon} alt={skill.name} className="w-20 h-20 transition duration-300 xxs:w-16 xxs:h-16 sm:w-28 sm:h-28 md:w-24 wd:h-24 lg:hover:scale-[1.06]" />
              <h5 className="hidden sm:block text-center">{skill.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Knowledge;
