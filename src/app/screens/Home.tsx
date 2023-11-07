import Section from '../layout/Section/Section';
import styles from './Home.module.css';

console.log(styles);

function Home() {
  return (
    <main className={styles.container}>
      <Section />
      <Section />
      <Section />
      <Section />
    </main>
  );
}

export default Home;
