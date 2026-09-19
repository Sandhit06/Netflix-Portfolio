import React from 'react';
import { motion } from 'framer-motion';
import './Blogs.css';
import { FaMedium } from 'react-icons/fa';
import { staggerContainer, fadeSlideUp, cardHover } from '../motion';

const blogs = [
  {
    title: "The Netflix Tech Blog",
    platform: "Medium",
    link: "https://netflixtechblog.com/",
    description: "The Netflix Tech Blog shares insights on Netflix's engineering, AI, cloud infrastructure, and innovations powering its streaming platform.",
    icon: <FaMedium />,
  },
  {
    title: "Level Up Coding",
    platform: "Medium",
    link: "https://levelup.gitconnected.com/",
    description: "Level Up (GitConnected) is a platform featuring developer-focused articles, tutorials, and insights on programming, tech, and software engineering.",
    icon: <FaMedium />,
  },
  {
    title: "Docker for Beginners",
    platform: "Medium",
    link: "https://blog.bitsrc.io/",
    description: "The Bit Blog covers modern web development, JavaScript, React, and component-driven architecture insights.",
    icon: <FaMedium />,
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <motion.h2
        className="blogs-title"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ✍️ Blog Posts
      </motion.h2>
      <motion.p
        className="blogs-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        A collection of best thoughts and tutorials on software development.
      </motion.p>
      <motion.div
        className="blogs-grid"
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {blogs.map((blog, index) => (
          <motion.a
            href={blog.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card"
            variants={fadeSlideUp}
            {...cardHover}
          >
            <div className="blog-icon">{blog.icon}</div>
            <div className="blog-info">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Blogs;
