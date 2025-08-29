import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  useEffect(() => {
    gsap.fromTo(
      ".tech-icon",  
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.1, 
        scrollTrigger: {
          trigger: ".tech-icons-wrapper", 
          start: "top 80%", 
          end: "bottom 70%", 
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section>
      <div className="tech-icons-wrapper grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 justify-items-center">
        {technologies.map((technology) => (
          <div className="w-20 h-20 hover:scale-110 transition-transform duration-300" key={technology.name}>
            <img
              src={technology.icon}
              alt={technology.name}
              className="tech-icon w-full h-full object-contain filter hover:drop-shadow-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
