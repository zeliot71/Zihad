import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const EducationTraining = () => {
  const [activeTab, setActiveTab] = useState("education");
  const tabsRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      tabsRef.current.children,
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: tabsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current.children,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      }
    );
  }, [activeTab]);

  const tabs = [
    { id: "education", label: "Education", icon: "🎓" },
    { id: "training", label: "Training & Fellowship", icon: "🏆" },
  ];

  const educationData = [
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

  const trainingData = [
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

  const EducationCard = ({ edu, index }) => (
    <div className="bg-tertiary p-8 rounded-3xl w-full max-w-lg mx-auto shadow-card border border-gray-800/30 hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-4 h-4 rounded-full ${edu.type === 'current' ? 'bg-green-500 animate-pulse' : 'bg-blue-500'}`}></div>
            <span className={`text-xs font-medium ${edu.type === 'current' ? 'text-green-400' : 'text-blue-400'}`}>
              {edu.type === 'current' ? 'Current' : 'Completed'}
            </span>
          </div>
          <h3 className="text-white text-xl font-bold leading-tight mb-2 hover:text-purple-400 transition-colors duration-200">{edu.degree}</h3>
          <p className="text-secondary text-sm font-medium mb-1">{edu.institution}</p>
          <p className="text-gray-400 text-xs">{edu.duration}</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-lg">🎓</span>
        </div>
      </div>

      {edu.description && (
        <p className="text-white-100 text-sm leading-relaxed">{edu.description}</p>
      )}
    </div>
  );

  const TrainingCard = ({ training, index }) => (
    <div className="bg-tertiary p-8 rounded-3xl w-full max-w-md mx-auto shadow-card hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">{training.icon}</span>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold">{training.batch}</h3>
            <p className="text-secondary text-sm">{training.organization}</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-white text-lg font-semibold mb-2 hover:text-purple-400 transition-colors duration-200">{training.program}</h4>
        <p className="text-secondary text-sm leading-relaxed mb-4">{training.description}</p>
      </div>

      <ul className="space-y-2">
        {training.points.map((point, pointIndex) => (
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

  const renderContent = () => {
    switch (activeTab) {
      case "education":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center">
            {educationData.map((edu, index) => (
              <EducationCard key={`education-${index}`} edu={edu} index={index} />
            ))}
          </div>
        );
      case "training":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center">
            {trainingData.map((training, index) => (
              <TrainingCard key={`training-${index}`} training={training} index={index} />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Academic & Professional Development
        </p>
        <h2 className={`${styles.sectionHeadText} text-center mb-16`}>
          Education & Training.
        </h2>
      </motion.div>

      {/* Tabs */}
      <div ref={tabsRef} className="flex justify-center mb-12">
        <div className="bg-black-200 p-2 rounded-2xl flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "text-secondary hover:text-white hover:bg-tertiary"
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="min-h-[400px]">
        {renderContent()}
      </div>
    </>
  );
};

export default SectionWrapper(EducationTraining, "education-training");