import Main from './layout/Main/Main';
import Section from './layout/Section/Section';

import Header from './components/Header/Header';
import Knowledge from './components/Knowledge/Knowledge';
import Work from './components/Work/Work';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import VerticalNavbar from './components/VerticalNavbar/VerticalNavbar';

export default function Home() {
  return (
    <>
      <VerticalNavbar />
      <BurgerMenu />
      <Main>
        <Section name="header">
          <Header />
        </Section>
        <Section name="work">
          <Work />
        </Section>
        <Section name="knowledge">
          <Knowledge />
        </Section>
        <Section name="about">
          <About />
        </Section>
        <Section name="contact">
          <Contact />
        </Section>
      </Main>
    </>
  );
}
