import styles from './Section.module.css';

interface SectionProps {
  children?: React.ReactNode;
  title: string;
}

const Section: React.FC<SectionProps> = ({ children, title }) => {
  return (
    <section className={styles.container}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
