import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import { skillsData } from '../data/constants';

import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaPuzzlePiece,
  FaProjectDiagram,
  FaFileExcel,
} from 'react-icons/fa';
import {
  SiC, SiCplusplus, SiJavascript, SiPython, SiDart, SiKotlin,
  SiHtml5, SiCss3, SiAngular, SiFlutter, SiFirebase,
  SiGooglecloud, SiFigma, SiRedux, SiGraphql, SiSpringboot,
  SiFlask, SiApachenetbeanside, SiAndroidstudio, SiCodemagic,
} from 'react-icons/si';
import { staggerContainer, fadeSlideUp, cardHover } from '../motion';


const iconMap: { [key: string]: JSX.Element } = {
  SiC: <SiC />,
  SiCplusplus: <SiCplusplus />,
  SiJavascript: <SiJavascript />,
  SiPython: <SiPython />,
  SiDart: <SiDart />,
  SiKotlin: <SiKotlin />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,
  SiAngular: <SiAngular />,
  SiFlutter: <SiFlutter />,
  SiFirebase: <SiFirebase />,
  SiGooglecloud: <SiGooglecloud />,
  SiFigma: <SiFigma />,
  SiRedux: <SiRedux />,
  SiGraphql: <SiGraphql />,
  SiSpringboot: <SiSpringboot />,
  SiMicrosoftexcel: <FaFileExcel />,
  SiFlask: <SiFlask />,
  SiApachenetbeanside: <SiApachenetbeanside />, // fallback for RESTful APIs
  FaReact: <FaReact />,
  FaNodeJs: <FaNodeJs />,
  FaDocker: <FaDocker />,
  FaGitAlt: <FaGitAlt />,
  FaPuzzlePiece: <FaPuzzlePiece />,
  FaAws: <FaAws />,
  FaProjectDiagram: <FaProjectDiagram />,
  SiCodemagic: <SiCodemagic />,
  SiAndroidstudio: <SiAndroidstudio />,

};

const Skills: React.FC = () => {
  // Add this block to force the page to scroll to the top on load!
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Group skills by category
  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-container" id="skills">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <motion.h3
            className="category-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            {category}
          </motion.h3>
          <motion.div
            className="skills-grid"
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <motion.div key={idx} className="skill-card" variants={fadeSlideUp} {...cardHover}>
                <div className="icon">
                  {iconMap[skill.icon] || <FaReact />}
                </div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: string, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
