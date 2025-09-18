import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { projects, technologies } from "../constants";
import { github } from "../assets";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");
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
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "skills", label: "Tech Stack", icon: "⚡" },
    { id: "certifications", label: "Certifications", icon: "🏆" },
  ];

  const certifications = [
    {
      title: "Building Bridges Through Leadership Training",
      organization: "Bangladesh Youth Leadership Center",
      date: "2024",
      description: "Leadership and capacity-building training program",
      badge: "🎯"
    },
    {
      title: "Aspire Leadership Program",
      organization: "Aspire Leader Institute (Harvard University)",
      date: "2024",
      description: "Global leadership development initiative",
      badge: "🌟"
    },
    {
      title: "Full Stack Web Development",
      organization: "DevSkill",
      date: "2022",
      description: "Comprehensive web development training",
      badge: "💻"
    }
  ];

  const ProjectCard = ({ project, index }) => (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative w-full h-[230px] group">
        <img
          src={project.image}
          alt="project_image"
          className="w-full h-full object-cover object-left rounded-2xl transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            onClick={() => window.open(project.source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px] hover:text-purple-400 transition-colors duration-200">
          {project.name}
        </h3>
        <p className="mt-2 text-secondary text-[14px] leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <p
            key={`${project.name}-${tag.name}`}
            className={`text-[14px] px-3 py-1 rounded-full bg-black-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );

  const CertificationCard = ({ cert, index }) => (
    <div className="bg-tertiary p-6 rounded-2xl shadow-card hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <div className="flex items-start gap-4">
        <div className="text-4xl">{cert.badge}</div>
        <div className="flex-1">
          <h3 className="text-white text-xl font-bold mb-2 hover:text-purple-400 transition-colors duration-200">
            {cert.title}
          </h3>
          <p className="text-purple-400 font-semibold mb-1">{cert.organization}</p>
          <p className="text-secondary text-sm mb-3">{cert.date}</p>
          <p className="text-white-100 text-sm leading-relaxed">{cert.description}</p>
        </div>
      </div>
    </div>
  );

  const TechCard = ({ tech, index }) => (
    <div className="w-28 h-28 hover:scale-110 transition-all duration-300 group">
      <div className="w-full h-full bg-tertiary rounded-2xl flex items-center justify-center shadow-card hover:shadow-2xl transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-purple-500/20 group-hover:to-pink-500/20">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-16 h-16 object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
        />
      </div>
      <p className="text-center text-white text-sm mt-2 group-hover:text-purple-400 transition-colors duration-200">
        {tech.name}
      </p>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "projects":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center">
            {projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} project={project} index={index} />
            ))}
          </div>
        );
      case "certifications":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={`cert-${index}`} cert={cert} index={index} />
            ))}
          </div>
        );
      case "skills":
        return (
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 justify-items-center">
            {technologies.map((tech, index) => (
              <TechCard key={`tech-${index}`} tech={tech} index={index} />
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
          My Work & Expertise
        </p>
        <h2 className={`${styles.sectionHeadText} text-center mb-16`}>
          Portfolio.
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

export default SectionWrapper(Portfolio, "portfolio");