import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts] = useState([
    {
      id: 1,
      title: "Building Modern Web Applications with React and Three.js",
      excerpt: "Explore how to create immersive 3D experiences in web applications using React Three Fiber and modern web technologies.",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Web Development",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `
        <h2>Introduction</h2>
        <p>Modern web development has evolved tremendously, and today we can create stunning 3D experiences directly in the browser. In this post, I'll walk you through building immersive web applications using React and Three.js.</p>
        
        <h2>Getting Started with React Three Fiber</h2>
        <p>React Three Fiber is a React renderer for Three.js that brings declarative, reusable, and self-contained components to 3D graphics. It makes working with Three.js much more intuitive for React developers.</p>
        
        <h2>Key Benefits</h2>
        <ul>
          <li>Declarative approach to 3D graphics</li>
          <li>Better performance with React's reconciliation</li>
          <li>Easier state management</li>
          <li>Component reusability</li>
        </ul>
        
        <h2>Best Practices</h2>
        <p>When building 3D web applications, it's important to consider performance optimization, user experience, and accessibility. Always test your applications across different devices and browsers.</p>
        
        <h2>Conclusion</h2>
        <p>The combination of React and Three.js opens up endless possibilities for creating engaging web experiences. Start experimenting with these technologies and push the boundaries of what's possible on the web.</p>
      `
    },
    {
      id: 2,
      title: "The Future of Full-Stack Development: Trends to Watch",
      excerpt: "Discover the emerging trends and technologies that are shaping the future of full-stack development in 2024 and beyond.",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Technology",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `
        <h2>The Evolution of Full-Stack Development</h2>
        <p>Full-stack development continues to evolve rapidly, with new frameworks, tools, and methodologies emerging regularly. As developers, staying current with these trends is crucial for career growth and project success.</p>
        
        <h2>Key Trends for 2024</h2>
        <h3>1. AI-Powered Development Tools</h3>
        <p>AI assistants and code generation tools are becoming integral parts of the development workflow, helping developers write better code faster.</p>
        
        <h3>2. Edge Computing</h3>
        <p>Moving computation closer to users for better performance and reduced latency is becoming increasingly important.</p>
        
        <h3>3. Serverless Architecture</h3>
        <p>Serverless continues to gain traction, offering scalability and cost-effectiveness for many applications.</p>
        
        <h2>Preparing for the Future</h2>
        <p>To stay relevant in this rapidly changing landscape, developers should focus on continuous learning, understanding core principles, and adapting to new technologies as they emerge.</p>
      `
    },
    {
      id: 3,
      title: "Leadership in Tech: Lessons from My Journey",
      excerpt: "Reflections on leadership development, community building, and the importance of giving back to the tech community.",
      date: "December 5, 2024",
      readTime: "5 min read",
      category: "Leadership",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `
        <h2>The Intersection of Technology and Leadership</h2>
        <p>Throughout my journey in technology, I've learned that technical skills alone aren't enough. Leadership, communication, and community building are equally important for creating meaningful impact.</p>
        
        <h2>Key Leadership Lessons</h2>
        <h3>1. Listen First, Code Second</h3>
        <p>Understanding the problem and the people affected by it is more important than jumping straight into coding solutions.</p>
        
        <h3>2. Empower Others</h3>
        <p>Great leaders create more leaders. Sharing knowledge and mentoring others multiplies your impact beyond what you can achieve alone.</p>
        
        <h3>3. Embrace Failure</h3>
        <p>Every failure is a learning opportunity. The key is to fail fast, learn quickly, and iterate based on feedback.</p>
        
        <h2>Building Communities</h2>
        <p>Through initiatives like Shikhon Utshob, I've learned that building communities around shared learning goals creates lasting positive impact. Technology should serve people, not the other way around.</p>
        
        <h2>Looking Forward</h2>
        <p>As I continue my journey, I'm committed to using technology as a force for positive change, whether through innovative projects or community initiatives that make education more accessible.</p>
      `
    }
  ]);

  const postsRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    // Animate heading
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

    // Animate blog posts
    if (postsRef.current) {
      gsap.fromTo(
        postsRef.current.children,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: postsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [selectedPost]);

  const BlogPost = ({ post }) => (
    <article className="bg-tertiary rounded-2xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group">
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-secondary text-sm mb-3">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        
        <h3 className="text-white text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <button
          onClick={() => setSelectedPost(post)}
          className="text-purple-400 font-medium hover:text-pink-400 transition-colors duration-200 flex items-center gap-2 group"
        >
          Read More
          <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
        </button>
      </div>
    </article>
  );

  const BlogPostModal = ({ post, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-tertiary rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-200"
          >
            ✕
          </button>
          <div className="absolute bottom-4 left-4">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex items-center gap-4 text-secondary text-sm mb-4">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          
          <h1 className="text-white text-3xl font-bold mb-6">
            {post.title}
          </h1>
          
          <div 
            className="prose prose-invert prose-purple max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p ref={headingRef} className={`${styles.sectionSubText} text-center`}>
          Thoughts & Insights
        </p>
        <h2 className={`${styles.sectionHeadText} text-center mb-16`}>
          Blog.
        </h2>
      </motion.div>

      <div ref={postsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>

      {selectedPost && (
        <BlogPostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}

      {/* Blog Management Note */}
      <div className="mt-16 p-6 bg-black-200 rounded-2xl border border-gray-700">
        <h3 className="text-white text-lg font-bold mb-3">📝 Blog Management</h3>
        <p className="text-secondary text-sm leading-relaxed">
          This blog system is currently using a simple array-based approach for easy demonstration. 
          For production use, I recommend integrating with a headless CMS like <span className="text-purple-400">Contentful</span>, 
          <span className="text-purple-400"> Strapi</span>, or <span className="text-purple-400">Sanity</span> for easier content management, 
          or implementing a file-based system with Markdown files for technical blogs.
        </p>
      </div>
    </>
  );
};

export default SectionWrapper(Blog, "blog");