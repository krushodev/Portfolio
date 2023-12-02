import { RxArrowTopRight } from 'react-icons/rx';

function Contact() {
  const linkStyle =
    "relative flex items-center gap-2 text-xl uppercase p-5 cursor-pointer after:content-[''] after:transition-transform after:duration-500 after:h-[2px] after:w-full after:left-0 after:bottom-0 after:bg-black after:absolute after:scale-x-0 after:scale-y-100 after:origin-[0%_100%] hover:after:scale-x-100 xxs:text-2xl xs:text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl";

  return (
    <div className="h-full p-10 flex flex-col">
      <h5 className="text-bold text-center mb-8 lg:mb-10 lg:text-left 2xl:mb-14 font-medium uppercase text-4xl xxs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 3xl:text-9xl">
        Get in touch
      </h5>
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col justify-evenly gap-2 xxs:gap-5 xs:gap-8 sm:flex-row sm:gap-1 lg:gap-8 2xl:gap-14">
          <a className={linkStyle}>
            Resume <RxArrowTopRight />
          </a>
          <a className={linkStyle}>
            Linkedin <RxArrowTopRight />
          </a>
          <a className={linkStyle}>
            Github <RxArrowTopRight />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
