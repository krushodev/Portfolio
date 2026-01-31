'use client';

import Header from '../layout/Header/Header';
import Work from '../layout/Work/Work';
import Knowledge from '../layout/Knowledge/Knowledge';
import About from '../layout/About/About';
import Contact from '../layout/Contact/Contact';
import Section from '../layout/Section';
import VerticalNavbar from '../components/VerticalNavbar/VerticalNavbar';
import CustomCursor from '../components/CustomCursor/CustomCursor';
import BurgerMenu from '../components/BurgerMenu/BurgerMenu';
import LanguagePicker from '../components/LanguagePicker/LanguagePicker';

function Home() {
  return (
    <div className="w-screen h-screen bg-black text-[#ecebe8] selection:bg-[#dbd9d3] selection:text-black overflow-hidden">
      <CustomCursor>
        <LanguagePicker />
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
      </CustomCursor>
    </div>
  );
}

export default Home;
