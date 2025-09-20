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
    { id: "skills", label: "Skills & Tools", icon: "⚡" },
    { id: "certifications", label: "Certificates", icon: "🏆" },
  ];

  const skillsData = {
    "Frontend Technologies": ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js", "Three.js", "GSAP", "Framer Motion"],
    "Backend Technologies": ["Node.js", "Express.js", "ASP.NET Framework", "MongoDB", "MySQL"],
    "Programming Languages": ["C", "C#", "C++", "Java", "Python", "JavaScript"],
    "Tools & Platforms": ["Git", "GitHub", "Database Management Studio", "AWS", "Figma"],
    "Currently Exploring": ["Data Structures & Algorithms", "AI/ML", "TypeScript"]
  };

  const certifications = [
    {
      title: "Building Bridges Through Leadership Training",
      organization: "Bangladesh Youth Leadership Center",
      date: "2024",
      description: "Leadership and capacity-building training program",
      badge: "🎯",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Aspire Leadership Program",
      organization: "Aspire Leader Institute (Harvard University)",
      date: "2024",
      description: "Global leadership development initiative",
      badge: "🌟",
      image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Full Stack Web Development",
      organization: "DevSkill",
      date: "2022",
      description: "Comprehensive web development training",
      badge: "💻",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "JavaScript Fundamentals",
      organization: "FreeCodeCamp",
      date: "2022",
      description: "Core JavaScript programming concepts",
      badge: "📜",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "React Development",
      organization: "Udemy",
      date: "2023",
      description: "Modern React development with hooks",
      badge: "⚛️",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Node.js Backend Development",
      organization: "Coursera",
      date: "2023",
      description: "Server-side development with Node.js",
      badge: "🟢",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Database Management",
      organization: "MongoDB University",
      date: "2023",
      description: "NoSQL database design and management",
      badge: "🍃",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400"
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
    <div className="bg-tertiary rounded-2xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full max-w-sm mx-auto">
      <div className="relative h-48 overflow-hidden">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <div className="bg-black/70 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
            <span className="text-2xl">{cert.badge}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-white text-lg font-bold mb-2 hover:text-purple-400 transition-colors duration-200">
          {cert.title}
        </h3>
        <p className="text-purple-400 font-semibold text-sm mb-1">{cert.organization}</p>
        <p className="text-secondary text-xs mb-3">{cert.date}</p>
        <p className="text-white-100 text-sm leading-relaxed">{cert.description}</p>
        
        <div className="mt-4 pt-4 border-t border-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-xs font-medium">Verified</span>
          </div>
        </div>
      </div>
    </div>
  );

  const SkillCategory = ({ title, skills }) => (
    <div className="bg-tertiary p-6 rounded-2xl shadow-card hover:shadow-2xl transition-all duration-300">
      <h3 className="text-white text-lg font-bold mb-4 text-center hover:text-purple-400 transition-colors duration-200">{title}</h3>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={`cert-${index}`} cert={cert} index={index} />
            ))}
          </div>
        );
      case "skills":
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skillsData).map(([category, skills], index) => (
                <SkillCategory key={`skill-category-${index}`} title={category} skills={skills} />
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-white text-2xl font-bold text-center mb-8">Technologies I Use</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 justify-items-center">
                {technologies.map((tech, index) => (
                  <TechCard key={`tech-${index}`} tech={tech} index={index} />
                ))}
              </div>
            </div>
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
        <div className="bg-black-200 p-2 rounded-2xl flex gap-2 flex-wrap">
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