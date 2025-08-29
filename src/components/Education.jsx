import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const EducationCard = ({ index, degree, institution, duration, description, type }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 80,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.2,
      }
    );

    const handleMouseEnter = () => {
      gsap.to(el, {
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="bg-tertiary p-8 rounded-3xl w-full max-w-lg mx-auto shadow-card border border-gray-800/30"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-4 h-4 rounded-full ${type === 'current' ? 'bg-green-500 animate-pulse' : 'bg-blue-500'}`}></div>
            <span className={`text-xs font-medium ${type === 'current' ? 'text-green-400' : 'text-blue-400'}`}>
              {type === 'current' ? 'Current' : 'Completed'}
            </span>
          </div>
          <h3 className="text-white text-xl font-bold leading-tight mb-2">{degree}</h3>
          <p className="text-secondary text-sm font-medium mb-1">{institution}</p>
          <p className="text-gray-400 text-xs">{duration}</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-lg">🎓</span>
        </div>
      </div>

      {description && (
        <p className="text-white-100 text-sm leading-relaxed">{description}</p>
      )}
    </div>
  );
};

const Education = () => {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      subHeadingRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subHeadingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        delay: 0.3,
      }
    );
  }, []);

  const education = [
    {
      degree: "BSC in Computer Science and Engineering",
      institution: "United International University",
      duration: "2023 - Present",
      type: "current",
      description: "Currently pursuing Bachelor's degree with focus on software engineering, algorithms, and modern web technologies."
    },
    {
      degree: "Diploma in Computer Technology",
      institution: "Shyamoli Ideal Polytechnic Institute",
      duration: "2018 - 2023",
      type: "completed",
      description: "Completed comprehensive diploma program covering programming fundamentals, database management, and software development principles."
    }
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p ref={subHeadingRef} className={`${styles.sectionSubText} text-center`}>
          Academic Background
        </p>
        <h2 ref={headingRef} className={`${styles.sectionHeadText} text-center`}>
          Education.
        </h2>
      </motion.div>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center">
        {education.map((edu, index) => (
          <EducationCard
            key={`education-${index}`}
            index={index}
            {...edu}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");