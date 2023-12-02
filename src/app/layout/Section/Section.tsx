'use client';

import { Element } from 'react-scroll';

interface Props {
  children?: React.ReactNode;
  name: string;
}

function Section({ children, name }: Props) {
  return (
    <section id={name} className="w-screen h-screen odd:bg-red-200 md:snap-start">
      <Element name={name} className="h-screen p-3 xxs:p-4 xl:p-6 2xl:p-8 3xl:p-10">
        {children}
      </Element>
    </section>
  );
}

export default Section;
