import Image from 'next/image';
import profileImg from '../../../../public/profile.png';

function AboutSection() {
  return (
    <div className="h-screen p-10">
      <div className="bg-red-300 p-5">
        <h3 className="text-6xl text-bold pb-8">About me</h3>
        <div className="bg-yellow-200 grid grid-cols-4">
          <p className="bg-orange-100 text-2xl col-span-3 p-5">
            I am a Software Developer based in Argentina, driven by a passion for crafting effective digital solutions. Eager to grow professionally, I am focused on writing clean code and staying
            updated on best practices. Actively seeking opportunities to collaborate within dynamic teams, I am enthusiastic about contributing my skills to projects that push the boundaries of web
            development.
          </p>
          <Image src={profileImg} alt="profile" className="w-fit my-0 mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
