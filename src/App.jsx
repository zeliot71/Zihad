import { BrowserRouter } from "react-router-dom";

import { Contact, Hero, Navbar, StarsCanvas } from "./components";
import AboutMe from "./components/AboutMe";
import SkillsSection from "./components/SkillsSection";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <AboutMe />
        <SkillsSection />
        <Blog />
        <div className='relative z-0'>
          <Contact />

          <StarsCanvas />
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
