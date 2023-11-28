import Image from 'next/image';
import AnimatedMouse from '../AnimatedMouse/AnimatedMouse';
import profileImage from '../../../../public/profile.png';

function HeaderSection() {
  return (
    <div className="bg-yellow-400 h-screen grid grid-rows-3 p-2 xxs:p-3 md:grid-rows-5 xl:p-5 2xl:p-8">
      <div className="row-span-2 flex flex-col gap-5 md:flex-row md:row-span-3 md:justify-between">
        <h2 className="text-5xl font-medium uppercase break-words sm:text-6xl s:w-3/4 lg:w-2/4 lg:text-7xl xl:text-8xl 3xl:text-9xl">Frontend Developer</h2>
        <div className="max-h-96 w-full md:max-w-xs 2xl:max-w-sm 2xl:max-h-full">
          <Image src={profileImage} alt="Profile picture" className="object-top object-cover max-h-full w-full" />
        </div>
      </div>
      <div className="row-span-2 pb-5 flex justify-between items-end sm:flex-row sm:justify-between">
        <div className="p-2 sm:p-5">
          <AnimatedMouse />
        </div>
        <h1 className="text-right w-3/4 font-medium uppercase text-4xl xs:text-5xl s:w-96 sm:text-right break-words sm:text-6xl sm:w-4/6 lg:text-7xl xl:text-8xl 2xl:w-6/12 3xl:text-9xl">
          Ignacio Kruchowski
        </h1>
      </div>
    </div>
  );
}

export default HeaderSection;
