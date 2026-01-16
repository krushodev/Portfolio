'use client';

import { Element } from 'react-scroll';

interface Props {
  children?: React.ReactNode;
  name: string;
}

function Section({ children, name }: Props) {
  return (
    <section
      id={name}
      className="w-screen h-screen odd:bg-[#dbd9d3] odd:text-black even:bg-black even:text-[#ecebe8] selection:odd:bg-black selection:odd:text-[#dbd9d3] selection:even:bg-[#dbd9d3] selection:even:text-black md:snap-start animate-fade-in"
    >
      <Element name={name} className="h-screen p-3 xxs:p-4 xl:p-6 2xl:p-8 3xl:p-10">
        {children}
      </Element>
    </section>
  );
}

export default Section;
