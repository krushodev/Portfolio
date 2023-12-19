import contact from '@/app/mocks/contact';
import Title from '../Title/Title';
import { RxArrowTopRight, RxArrowDown } from 'react-icons/rx';

function Contact() {
  return (
    <div className="h-full flex flex-col">
      <Title content="Get in touch" />
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col justify-evenly gap-8 xxs:gap-12 xs:gap-14 sm:flex-row sm:gap-1 lg:gap-8 2xl:gap-16">
          {contact.map((item, index) => (
            <a
              key={index}
              className="relative flex items-center gap-2 text-xl uppercase mx-5 pb-3 cursor-pointer after:content-[''] after:transition-transform after:duration-500 after:h-[2px] after:w-full after:left-0 after:bottom-0 after:bg-black after:absolute after:scale-x-0 after:scale-y-100 after:origin-[0%_100%] hover:after:scale-x-100 xxs:text-2xl xs:text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
              href={item.link}
              download={item.isFile}
              target={`${item.isFile ? '' : '_blank'}`}
            >
              {item.name}
              {item.isFile ? <RxArrowDown /> : <RxArrowTopRight />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
