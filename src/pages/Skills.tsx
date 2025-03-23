import React from 'react';
import './Skills.css';
import { skillsData } from '../data/constants';

import {
  FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaPuzzlePiece, FaProjectDiagram,
} from 'react-icons/fa';
import {
  SiC, SiCplusplus, SiJavascript, SiPython, SiDart, SiKotlin,
  SiHtml5, SiCss3, SiAngular, SiFlutter, SiFirebase,
  SiGooglecloud, SiFigma, SiRedux, SiGraphql, SiSpringboot,
  SiMicrosoftexcel, SiFlask, SiApachenetbeanside, SiAndroidstudio, SiCodemagic,
} from 'react-icons/si';


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
  SiMicrosoftexcel: <SiMicrosoftexcel />,
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
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
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
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
