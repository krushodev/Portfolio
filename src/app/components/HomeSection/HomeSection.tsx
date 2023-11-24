import Image from 'next/image';
import AnimatedMouse from '../AnimatedMouse/AnimatedMouse';
import profileImage from '../../../../public/profile.png';

function HomeSection() {
  return (
    <div className="bg-blue-500 h-screen grid grid-rows-3 xxs:p-3 md:grid-rows-5 xl:p-5 2xl:p-8">
      <div className="row-span-2 flex flex-col justify-evenly md:flex-row md:row-span-3 md:justify-between">
        <div className="p-5 s:w-3/4 lg:w-2/4">
          <h2 className="text-5xl uppercase break-words sm:text-6xl lg:text-7xl xl:text-8xl 3xl:text-9xl">Frontend Developer</h2>
        </div>
        <div className="max-h-80 w-full md:max-w-xs 2xl:max-w-md 2xl:max-h-full">
          <Image src={profileImage} alt="Profile picture" className="object-top object-cover max-h-full w-full" />
        </div>
      </div>
      <div className="row-span-2 flex flex-col-reverse justify-evenly items-center sm:flex-row sm:justify-between md:items-end">
        <div className="sm:p-5">
          <AnimatedMouse />
        </div>
        <h1 className="text-center uppercase text-4xl xs:text-5xl s:w-96 sm:text-right break-words sm:text-6xl sm:w-4/6 lg:text-7xl xl:text-8xl 2xl:w-6/12 3xl:text-9xl">Ignacio Kruchowski</h1>
      </div>
    </div>
  );
}

export default HomeSection;
