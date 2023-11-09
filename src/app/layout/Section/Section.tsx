'use client';

import { Element } from 'react-scroll';
import styles from './Section.module.css';

interface Props {
  children?: React.ReactNode;
  title: string;
  name: string;
}

function Section({ children, title, name }: Props) {
  return (
    <section id={name} className={styles.container}>
      <Element name={name}>
        <h2>{title}</h2>
        {children}
      </Element>
    </section>
  );
}

export default Section;
