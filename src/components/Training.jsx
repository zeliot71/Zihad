import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TrainingCard = ({ index, batch, organization, program, description, points, icon }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    // GSAP animation with ScrollTrigger
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100,
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

    // Hover animation
    const handleMouseEnter = () => {
      gsap.to(el, {
        scale: 1.05,
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
      className="bg-tertiary p-8 rounded-3xl w-full max-w-md mx-auto shadow-card"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">{icon}</span>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold">{batch}</h3>
            <p className="text-secondary text-sm">{organization}</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-white text-lg font-semibold mb-2">{program}</h4>
        <p className="text-secondary text-sm leading-relaxed mb-4">{description}</p>
      </div>

      <ul className="space-y-2">
        {points.map((point, pointIndex) => (
          <li
            key={pointIndex}
            className="text-white-100 text-sm flex items-start gap-2"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></span>
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-4 border-t border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-xs font-medium">Completed</span>
        </div>
      </div>
    </div>
  );
};

const Training = () => {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);

  useEffect(() => {
    // Heading animation
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

    // Subheading animation
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

  const trainings = [
    {
      batch: "Batch- 49",
      organization: "Bangladesh Youth Leadership Center",
      program: "Building Bridges Through Leadership Training",
      description: "Completed leadership and capacity-building training under BYLC's signature Building Bridges Through Leadership Training (BBLT) program.",
      points: [
        "Attended workshops and interactive sessions to build skills in communication, teamwork, and problem-solving.",
        "Contributed to the branding and outreach efforts of the LIA project through creative marketing materials."
      ],
      icon: "B"
    },
    {
      batch: "Cohort - 3",
      organization: "Aspire Leader Institute (Founded by Harvard University)",
      program: "Aspire Leadership Program",
      description: "Completed the Aspire Leaders Program, a global leadership development initiative founded at Harvard University.",
      points: [
        "Engaged in interactive learning modules focused on leadership, critical thinking, and social impact.",
        "Participated in global peer discussions, fostering cross-cultural collaboration and diverse perspectives."
      ],
      icon: "A"
    }
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p ref={subHeadingRef} className={`${styles.sectionSubText} text-center`}>
          Leadership Development
        </p>
        <h2 ref={headingRef} className={`${styles.sectionHeadText} text-center`}>
          Training & Fellowship.
        </h2>
      </motion.div>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center">
        {trainings.map((training, index) => (
          <TrainingCard
            key={`training-${index}`}
            index={index}
            {...training}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Training, "training");