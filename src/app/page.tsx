import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import HomeSection from './components/HomeSection/HomeSection';
import Navbar from './components/Navbar';
import Main from './layout/Main/Main';
import Section from './layout/Section/Section';

export default function Home() {
  return (
    <>
      <Navbar />
      <BurgerMenu />
      <Main>
        <Section name="header">
          <HomeSection />
        </Section>
        <Section name="knowledge" title="Technologies" />
        <Section name="projects" title="Projects" />
        <Section name="about" title="About" />
      </Main>
    </>
  );
}
