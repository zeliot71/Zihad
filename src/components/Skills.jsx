import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const SkillCategory = ({ title, skills, index }) => {
  const categoryRef = useRef(null);

  useEffect(() => {
    const el = categoryRef.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.1,
      }
    );
  }, [index]);

  return (
    <div ref={categoryRef} className="bg-tertiary p-6 rounded-2xl shadow-card">
      <h3 className="text-white text-lg font-bold mb-4 text-center">{title}</h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="bg-black-200 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js", "Three.js", "GSAP", "Framer Motion"]
    },
    {
      title: "Backend Technologies",
      skills: ["Node.js", "Express.js", "ASP.NET Framework", "MongoDB", "MySQL"]
    },
    {
      title: "Programming Languages",
      skills: ["C", "C#", "C++", "Java", "JavaScript"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Database Management Studio", "AWS", "Figma"]
    },
    {
      title: "Currently Exploring",
      skills: ["Python", "Data Structures & Algorithms", "AI/ML", "TypeScript"]
    }
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p ref={subHeadingRef} className={`${styles.sectionSubText} text-center`}>
          Technical Expertise
        </p>
        <h2 ref={headingRef} className={`${styles.sectionHeadText} text-center`}>
          Skills & Tools.
        </h2>
      </motion.div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={`skill-category-${index}`}
            index={index}
            {...category}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");