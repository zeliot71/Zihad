import { BrowserRouter } from "react-router-dom";

import { Contact, Hero, Navbar, StarsCanvas, Feedbacks } from "./components";
import AboutMe from "./components/AboutMe";
import EducationTraining from "./components/EducationTraining";
import Portfolio from "./components/Portfolio";
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
        <EducationTraining />
        <Portfolio />
        <Feedbacks />
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
