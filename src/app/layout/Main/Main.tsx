import styles from './Main.module.css';

interface Props {
  children: React.ReactNode;
}

function Main({ children }: Props) {
  return <main className={styles.container}>{children}</main>;
}

export default Main;
