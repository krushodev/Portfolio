import Image from 'next/image';
import ScrollDownIndicator from '../ScrollDownIndicator/ScrollDownIndicator';
import profileImage from '../../../../public/images/profile.jpg';

function Header() {
  return (
    <div className="h-full grid grid-rows-6 md:grid-rows-5">
      <div className="flex flex-col gap-5 row-span-4 md:flex-row md:row-span-3 md:justify-between">
        <h2 className="text-5xl font-medium uppercase break-words sm:text-6xl s:w-3/4 lg:w-2/4 lg:text-7xl xl:text-8xl 2xl:text-9xl">Fullstack Developer</h2>
        <div className="w-full md:max-w-xs md:max-h-72 xl:max-w-sm xl:max-h-80 z-10">
          <Image src={profileImage} alt="Profile picture" width={512} height={512} className="w-full max-h-full object-center object-cover brightness-95 contrast-105 rounded-md saturate-150" />
        </div>
      </div>
      <div className="flex justify-between items-end row-span-2 sm:flex-row sm:justify-between">
        <ScrollDownIndicator />
        <h1 className="w-3/4 text-3xl text-right font-medium uppercase xs:text-4xl s:w-96 sm:text-right break-words sm:text-6xl sm:w-4/6 lg:text-7xl xl:text-8xl 2xl:w-8/12 2xl:text-9xl">
          Ignacio Kruchowski
        </h1>
      </div>
    </div>
  );
}

export default Header;
