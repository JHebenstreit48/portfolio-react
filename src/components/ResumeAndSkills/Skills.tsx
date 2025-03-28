import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaNetworkWired,
  FaWifi,
} from 'react-icons/fa';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiUnity,
  SiSharp,
  SiPython,
} from 'react-icons/si';
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
        ],
      },
      {
        type: 'proficiency',
        level: 'learning',
        skills: [
          { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
          { name: 'GraphQL', icon: null },
          { name: 'Apollo Server', icon: null },
          { name: 'Angular', icon: null },
          { name: 'Vue.js', icon: null },
          { name: 'Drupal', icon: null },
        ],
      },
      {
        type: 'tools',
        label: 'Web Tools',
        skills: [
          { name: 'Insomnia', icon: null },
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
          { name: 'Python', icon: SiPython, color: '#3776AB' }, // Crossover
        ],
      },
      {
        type: 'tools',
        label: 'Game Tools',
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
        label: 'Networking Tools',
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
          { name: 'VS Code', icon: null },
          { name: 'Git', icon: FaGitAlt, color: '#F05032' },
          { name: 'GitHub', icon: FaGithub, color: '#fff' },
        ],
      },
      {
        type: 'proficiency',
        level: 'learning',
        skills: [
          { name: 'Android Studio', icon: null },
          { name: 'Visual Studio', icon: null },
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
                <h3 className={`subsectionTitle ${subcategory.level || subcategory.type}`}>
                  {subcategory.type === 'proficiency' && subcategory.level === 'fluent' && '✅ Fluent'}
                  {subcategory.type === 'proficiency' && subcategory.level === 'learning' && '🧠 Learning'}
                  {subcategory.type === 'proficiency' && subcategory.level === 'refreshing' && '🔁 Refreshing'}
                  {subcategory.type === 'tools' && `🧰 ${subcategory.label}`}
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

