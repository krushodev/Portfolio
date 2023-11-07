import Main from './layout/Main/Main';
import Section from './layout/Section/Section';

export default function Home() {
  return (
    <Main>
      <Section title="Header" />
      <Section title="Technologies" />
      <Section title="Projects" />
      <Section title="About" />
    </Main>
  );
}
