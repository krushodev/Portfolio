import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import Navbar from './components/Navbar';
import Main from './layout/Main/Main';
import Section from './layout/Section/Section';

export default function Home() {
  return (
    <>
      <Navbar />
      <BurgerMenu />
      <Main>
        <Section name="header" title="Header" />
        <Section name="knowledge" title="Technologies" />
        <Section name="projects" title="Projects" />
        <Section name="about" title="About" />
      </Main>
    </>
  );
}
