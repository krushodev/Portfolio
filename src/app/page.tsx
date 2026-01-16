'use client';

import Header from './components/Header/Header';
import Work from './components/Work/Work';
import Knowledge from './components/Knowledge/Knowledge';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Section from './layout/Section';
import VerticalNavbar from './components/VerticalNavbar/VerticalNavbar';
import AnimatedCursor from 'react-animated-cursor';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';

function Home() {
  return (
    <div className="w-screen h-screen bg-black text-[#ecebe8] selection:bg-[#dbd9d3] selection:text-black overflow-hidden">
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

      <div className="h-full w-full fixed left-0 top-0 pointer-events-none opacity-[0.1] after:absolute after:w-[calc(100%+20rem)] after:h-[calc(100%+20rem)] after:top-[-10rem] after:left-[-10rem] after:bg-[url('/images/noise.jpg')] after:animate-bgNoise"></div>

      <BurgerMenu />
      <VerticalNavbar />

      <div className="h-screen w-screen overflow-y-auto md:snap-y md:snap-mandatory">
        <Section name="home">
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
      </div>
    </div>
  );
}

export default Home;
