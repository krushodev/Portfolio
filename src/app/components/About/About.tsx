import Image from 'next/image';
import Title from '../Title/Title';
import aboutImage from '../../../../public/images/about-picture.jpg';

function About() {
  return (
    <div className="h-full flex flex-col">
      <Title content="Who I am" />
      <div className="grid grid-cols-1 lg:grid-cols-6 grid-row-4 lg:grid-rows-1 h-full lg:h-auto">
        <div className="row-span-2 flex lg:items-center lg:col-span-4 lg:w-full">
          <p className="text-lg xs:text-xl s:text-2xl md:text-3xl screen-h-md:leading-relaxed lg:text-3xl lg:!leading-loose 2xl:text-4xl 2xl:leading-loose 3xl:text-6xl 3xl:leading-loose">
            I am a Software Developer based in Argentina, driven by a passion for crafting effective digital solutions. Eager to grow professionally, I am focused on writing clean code and staying
            updated on best practices. Actively seeking opportunities to collaborate within dynamic teams, I am enthusiastic about contributing my skills to projects that push the boundaries of web
            development.
          </p>
        </div>
        <div className="hidden screen-h-sm:flex items-end lg:col-span-2 lg:items-center lg:justify-center">
          <Image src={aboutImage} alt="Picture of me" className="w-full p-3 h-[12em] screen-h-md:h-[24em] screen-h-xl:h-[45em] lg:p-0 lg:!h-[25em] lg:w-fit md:pr-7  object-cover rounded" />
        </div>
      </div>
    </div>
  );
}

export default About;
