import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const photoRef = useRef(null);
  const textRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    // Photo animation
    gsap.fromTo(
      photoRef.current,
      {
        opacity: 0,
        scale: 0.8,
        x: -100,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: photoRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Text animation
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 50,
        x: 100,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        delay: 0.3,
      }
    );

    // Heading animation
    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p ref={headingRef} className={`${styles.sectionSubText} text-center`}>
          Get to know me
        </p>
        <h2 className={`${styles.sectionHeadText} text-center mb-16`}>
          About Me.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Photo */}
        <div ref={photoRef} className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-tertiary flex items-center justify-center overflow-hidden">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <span className="text-6xl text-white">👨‍💻</span>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Right Column - Text */}
        <div ref={textRef} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white mb-4">
              Hello, I'm <span className="text-purple-400">Zihad Shariar</span>
            </h3>
            
            <p className="text-secondary text-lg leading-relaxed">
              I'm a passionate Computer Science student and skilled software developer with expertise in 
              <span className="text-purple-400 font-semibold"> JavaScript, React, Node.js, Three.js, and ASP.NET</span>. 
              Currently pursuing my BSC in Computer Science and Engineering at United International University.
            </p>

            <p className="text-secondary text-lg leading-relaxed">
              I combine academic knowledge with practical experience to create efficient, scalable, and 
              user-friendly solutions that solve real-world problems. I'm a quick learner who collaborates 
              closely with clients to bring their ideas to life.
            </p>

            <p className="text-secondary text-lg leading-relaxed">
              Beyond coding, I'm actively involved in leadership development programs and community service 
              initiatives, always striving to make a positive impact through technology and collaboration.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-700">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-purple-400">2+</h4>
              <p className="text-secondary text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-pink-400">15+</h4>
              <p className="text-secondary text-sm">Projects Completed</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-blue-400">5+</h4>
              <p className="text-secondary text-sm">Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(AboutMe, "aboutme");