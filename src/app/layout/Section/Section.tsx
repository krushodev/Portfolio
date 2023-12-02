'use client';

import { Element } from 'react-scroll';

interface Props {
  children?: React.ReactNode;
  name: string;
}

function Section({ children, name }: Props) {
  return (
    <section id={name} className="w-screen h-screen p-3 bg-red-300 odd:bg-red-100 xxs:p-4 md:snap-start xl:p-6 2xl:p-8 3xl:p-10">
      <Element name={name} className="h-full">
        {children}
      </Element>
    </section>
  );
}

export default Section;
