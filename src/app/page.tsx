import AboutSection from './components/AboutSection/AboutSection';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import ContactSection from './components/ContactSection/ContactSection';
import HeaderSection from './components/HeaderSection/HeaderSection';
import KnowledgeSection from './components/KnowledgeSection/KnowledgeSection';
import Navbar from './components/Navbar/Navbar';
import WorkSection from './components/WorkSection/WorkSection';
import Main from './layout/Main/Main';
import Section from './layout/Section/Section';

export default function Home() {
  return (
    <>
      <Navbar />
      <BurgerMenu />
      <Main>
        <Section name="header">
          <HeaderSection />
        </Section>
        <Section name="knowledge">
          <KnowledgeSection />
        </Section>
        <Section name="work">
          <WorkSection />
        </Section>
        <Section name="about">
          <AboutSection />
        </Section>
        <Section name="contact">
          <ContactSection />
        </Section>
      </Main>
    </>
  );
}
