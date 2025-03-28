import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaNetworkWired,
  FaWifi,
} from 'react-icons/fa';
import {
  SiAngular,
  SiCss3,
  SiGraphql,
  SiHtml5,
  SiInsomnia,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiSharp,
  SiTypescript,
  SiUnity,
  SiVuedotjs,
} from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { BsTools } from "react-icons/bs";
import '@/SCSS/Skills.scss';

const skillsSections = [
  {
    title: 'Web Development',
    subcategories: [
      {
        type: 'proficiency',
        level: 'fluent',
        skills: [
          { name: 'HTML', icon: SiHtml5, color: '#E44D26' },
          { name: 'CSS', icon: SiCss3, color: '#1572B6' },
          { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
          { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
          { name: 'React', icon: FaReact, color: '#61DAFB' },
          { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
          { name: 'MongoDB', icon: SiMongodb, color: '#47A248' }
        ],
      },
      {
        type: 'proficiency',
        level: 'learning',
        skills: [
          { name: 'Angular', icon: SiAngular, color: '#DD0031' },
          { name: 'Apollo Server', icon: null },
          { name: 'Drupal', icon: null },
          { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
          { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
          { name: 'Vue.js', icon: SiVuedotjs, color: '#42B883' }

        ],
      },
      {
        type: 'tools',
        label: 'Tools',
        skills: [
          { name: 'Insomnia', icon: SiInsomnia, color: '#4000BF' },
          { name: 'Postman', icon: null },
        ],
      },
    ],
  },
  {
    title: 'Game Development',
    subcategories: [
      {
        type: 'proficiency',
        level: 'learning',
        skills: [
          { name: 'Unity', icon: SiUnity, color: '#000' },
          { name: 'C#', icon: SiSharp, color: '#9B4F96' },
          { name: 'Python', icon: SiPython, color: '#3776AB' },
        ],
      },
      {
        type: 'tools',
        label: 'Tools',
        skills: [
          { name: 'Unity Hub', icon: null },
          { name: 'Rider', icon: null },
        ],
      },
    ],
  },
  {
    title: 'Cisco / IT / Networking',
    subcategories: [
      {
        type: 'proficiency',
        level: 'refreshing',
        skills: [
          { name: 'Cisco (CCNA)', icon: null },
          { name: 'Security Protocols', icon: null },
          { name: 'Packet Tracer', icon: null },
          { name: 'Networking', icon: FaNetworkWired, color: '#0AC1D6' },
          { name: 'Wireless', icon: FaWifi, color: '#0AC1D6' },
          { name: 'Subnetting', icon: null },
          { name: 'OSI Model', icon: null },
        ],
      },
      {
        type: 'tools',
        label: 'Tools',
        skills: [
          { name: 'GNS3', icon: null },
          { name: 'Wireshark', icon: null },
        ],
      },
    ],
  },
  {
    title: 'Shared Tools & Environments',
    subcategories: [
      {
        type: 'proficiency',
        level: 'fluent',
        skills: [
          { name: 'Python', icon: SiPython, color: '#3776AB' },
          { name: 'VS Code', icon: BiLogoVisualStudio, color: '#007ACC' },
          { name: 'Git', icon: FaGitAlt, color: '#F05032' },
          { name: 'GitHub', icon: FaGithub, color: '#fff' },
        ],
      },
      {
        type: 'proficiency',
        level: 'learning',
        skills: [
          { name: 'Android Studio', icon: null },
          { name: 'Visual Studio', icon: DiVisualstudio, color: '#5C2D91' },
        ],
      },
    ],
  },
];

const Skills = () => {
  return (
    <div className="skillsContainer">
      {skillsSections.map((section) => (
        <div key={section.title} className="skillsSection">
          <h2 className="skillsTitle">{section.title}</h2>

          {section.subcategories.map((subcategory) =>
            subcategory.skills.length > 0 ? (
              <div
                key={subcategory.label || subcategory.level}
                className="skillsSubsection"
              >
                <h3
                  className={
                    subcategory.type === 'tools'
                      ? 'toolsTitle'
                      : `subsectionTitle ${subcategory.level}`
                  }
                >
                  {subcategory.type === 'proficiency' && subcategory.level === 'fluent' && '✅ Fluent'}
                  {subcategory.type === 'proficiency' && subcategory.level === 'learning' && '🧠 Learning'}
                  {subcategory.type === 'proficiency' && subcategory.level === 'refreshing' && '🔁 Refreshing'}
                  {subcategory.type === 'tools' && (
                    <span className="toolsHeader">
                      <BsTools className="toolsIcon" />
                      {subcategory.label}
                    </span>
                  )}

                </h3>
                <div className="skillsGrid">
                  {subcategory.skills.map((skill) => (
                    <div key={skill.name} className="skillCard">
                      {skill.icon ? (
                        <skill.icon className="icon" style={{ color: skill.color }} />
                      ) : (
                        <div className="icon">🔧</div>
                      )}
                      <p className="label">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
      ))}
    </div>
  );
};

export default Skills;
