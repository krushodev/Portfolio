import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import HomeSection from './components/HomeSection/HomeSection';
import Skills from './components/SkillsSection/SkillsSection';
import Navbar from './components/Navbar/Navbar';
import Main from './layout/Main/Main';
import Section from './layout/Section/Section';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <BurgerMenu />
      <Main>
        <Section name="header">
          <HomeSection />
        </Section>
        <Section name="skills">
          <Skills />
        </Section>
        <Section name="projects">
          <ProjectsSection />
        </Section>
        <Section name="about" />
      </Main>
    </>
  );
}
