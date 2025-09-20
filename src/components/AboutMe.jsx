import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { FaDownload, FaCode, FaProjectDiagram, FaCertificate, FaGlobe } from "react-icons/fa";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const photoRef = useRef(null);
  const textRef = useRef(null);
  const headingRef = useRef(null);
  const statsRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // Photo animation with glow effect
    gsap.fromTo(
      photoRef.current,
      {
        opacity: 0,
        scale: 0.8,
        x: 100,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.5,
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
        x: -100,
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

    // Stats animation
    gsap.fromTo(
      statsRef.current.children,
      {
        opacity: 0,
        y: 30,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        delay: 0.6,
      }
    );

    // Buttons animation
    gsap.fromTo(
      buttonsRef.current.children,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: buttonsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        delay: 0.8,
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

  const StatCard = ({ icon: Icon, number, label, delay = 0 }) => (
    <div className="bg-black-200/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 group">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
          <Icon className="text-white text-lg" />
        </div>
        <div>
          <h4 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">{number}</h4>
          <p className="text-secondary text-sm">{label}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-black-100 to-primary opacity-90">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10">
        <motion.div variants={textVariant()}>
          <div ref={headingRef} className="text-center mb-16">
            <h2 className={`${styles.sectionHeadText} mb-4`}>
              About Me
            </h2>
            <p className="text-lg text-secondary flex items-center justify-center gap-2">
              Transforming ideas into digital experiences <span className="text-2xl">✨</span>
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <div ref={textRef} className="space-y-8">
            {/* Greeting */}
            <div className="space-y-4">
              <h3 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Hello,
                </span>{" "}
                <span className="text-white">I'm Zihad Shariar</span>
              </h3>
              
              <p className="text-secondary text-lg leading-relaxed">
                I'm a passionate Computer Science student and skilled software developer with expertise in 
                <span className="text-purple-400 font-semibold"> JavaScript, React, Node.js, Three.js, and ASP.NET</span>. 
                Currently pursuing my BSC in Computer Science and Engineering at United International University, 
                I combine academic knowledge with practical experience. I'm a quick learner who collaborates 
                closely with clients to create efficient, scalable, and user-friendly solutions that solve 
                real-world problems. Let's work together to bring your ideas to life!
              </p>
            </div>

            {/* Motivational Quote */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 backdrop-blur-sm">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-xl"></div>
              <p className="relative text-white font-medium text-center italic">
                "Leveraging AI as a professional tool, not a replacement."
              </p>
            </div>

            {/* Action Buttons */}
            <div ref={buttonsRef} className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                <FaDownload />
                Download CV
              </button>
              <button className="flex items-center gap-3 px-6 py-3 border-2 border-purple-500 text-purple-400 font-medium rounded-xl hover:bg-purple-500/10 transition-all duration-300 hover:scale-105">
                <FaCode />
                View Projects
              </button>
            </div>

            {/* Statistics */}
            <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              <StatCard icon={FaProjectDiagram} number="13" label="Total Projects" />
              <StatCard icon={FaCertificate} number="7" label="Certificates" />
              <StatCard icon={FaGlobe} number="3" label="Years Experience" />
            </div>
          </div>

          {/* Right Column - Photo */}
          <div ref={photoRef} className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-primary"></div>
              </div>
              
              {/* Main photo container */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 p-2 backdrop-blur-sm">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden border-2 border-purple-500/30">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce shadow-lg shadow-purple-500/50"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full animate-pulse shadow-lg shadow-pink-500/50"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-500 rounded-full animate-ping shadow-lg shadow-blue-500/50"></div>
              <div className="absolute bottom-1/4 -right-6 w-5 h-5 bg-cyan-500 rounded-full animate-bounce delay-300 shadow-lg shadow-cyan-500/50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(AboutMe, "aboutme");