import Main from './layout/Main';
import Landing from './layout/Landing';
import Section from './layout/Section';

import Header from './components/Header/Header';
import Knowledge from './components/Knowledge/Knowledge';
import Work from './components/Work/Work';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import VerticalNavbar from './components/VerticalNavbar/VerticalNavbar';
import AnimatedCursor from 'react-animated-cursor';

export default function Home() {
  return (
    <Main>
      <VerticalNavbar />
      <BurgerMenu />
      <Landing>
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
      </Landing>
      <AnimatedCursor
        innerSize={8}
        outerSize={38}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: '#a59f92'
        }}
        outerStyle={{
          border: '2px solid #a59f92'
        }}
      />
    </Main>
  );
}
