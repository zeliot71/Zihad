import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const TimelineCard = ({ index, type, title, institution, duration, description, points, icon }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        scale: 0.9,
      },
      {
        opacity: 1,
        x: 0,
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
  }, [index]);

  return (
    <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}>
      <div ref={cardRef} className="relative max-w-lg w-full">
        {/* Timeline connector */}
        <div className={`absolute top-8 ${index % 2 === 0 ? '-right-8' : '-left-8'} w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full z-10`}></div>
        
        <div className="bg-tertiary p-8 rounded-3xl shadow-card hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">{icon}</span>
            </div>
            <div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                type === 'education' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
              }`}>
                {type === 'education' ? 'Education' : 'Training & Fellowship'}
              </span>
              <p className="text-secondary text-sm mt-1">{duration}</p>
            </div>
          </div>

          <h3 className="text-white text-xl font-bold mb-2 hover:text-purple-400 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-purple-400 font-semibold mb-3">{institution}</p>
          <p className="text-secondary text-sm leading-relaxed mb-4">{description}</p>

          {points && (
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
          )}

          <div className="mt-6 pt-4 border-t border-gray-700">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${type === 'education' && title.includes('Present') ? 'bg-blue-500 animate-pulse' : 'bg-green-500'}`}></div>
              <span className={`text-xs font-medium ${type === 'education' && title.includes('Present') ? 'text-blue-400' : 'text-green-400'}`}>
                {type === 'education' && title.includes('Present') ? 'In Progress' : 'Completed'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EducationTraining = () => {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const timelineRef = useRef(null);

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

    // Timeline line animation
    gsap.fromTo(
      timelineRef.current,
      {
        scaleY: 0,
      },
      {
        scaleY: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const educationTrainingData = [
    {
      type: 'education',
      title: "BSC in Computer Science and Engineering",
      institution: "United International University",
      duration: "2023 - Present",
      description: "Currently pursuing Bachelor's degree with focus on software engineering, algorithms, and modern web technologies.",
      icon: "🎓"
    },
    {
      type: 'training',
      title: "Building Bridges Through Leadership Training",
      institution: "Bangladesh Youth Leadership Center",
      duration: "Batch-49, 2024",
      description: "Completed leadership and capacity-building training under BYLC's signature Building Bridges Through Leadership Training (BBLT) program.",
      points: [
        "Attended workshops and interactive sessions to build skills in communication, teamwork, and problem-solving.",
        "Contributed to the branding and outreach efforts of the LIA project through creative marketing materials."
      ],
      icon: "🌟"
    },
    {
      type: 'education',
      title: "Diploma in Computer Technology",
      institution: "Shyamoli Ideal Polytechnic Institute",
      duration: "2018 - 2023",
      description: "Completed comprehensive diploma program covering programming fundamentals, database management, and software development principles.",
      icon: "💻"
    },
    {
      type: 'training',
      title: "Aspire Leadership Program",
      institution: "Aspire Leader Institute (Founded by Harvard University)",
      duration: "Cohort-3, 2024",
      description: "Completed the Aspire Leaders Program, a global leadership development initiative founded at Harvard University.",
      points: [
        "Engaged in interactive learning modules focused on leadership, critical thinking, and social impact.",
        "Participated in global peer discussions, fostering cross-cultural collaboration and diverse perspectives."
      ],
      icon: "🏆"
    }
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p ref={subHeadingRef} className={`${styles.sectionSubText} text-center`}>
          Academic & Professional Development
        </p>
        <h2 ref={headingRef} className={`${styles.sectionHeadText} text-center mb-16`}>
          Education & Training.
        </h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div 
          ref={timelineRef}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-pink-500 origin-top"
          style={{ height: '100%' }}
        ></div>

        <div className="relative z-10">
          {educationTrainingData.map((item, index) => (
            <TimelineCard
              key={`education-training-${index}`}
              index={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(EducationTraining, "education-training");