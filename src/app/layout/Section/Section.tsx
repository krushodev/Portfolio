'use client';

import { Element } from 'react-scroll';
import styles from './Section.module.css';

interface SectionProps {
  children?: React.ReactNode;
  title: string;
  name: string;
}

function Section({ children, title, name }: SectionProps) {
  return (
    <section className={styles.container}>
      <Element name={name}>
        <h2>{title}</h2>
        {children}
      </Element>
    </section>
  );
}

export default Section;
