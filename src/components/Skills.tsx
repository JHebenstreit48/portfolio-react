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
      skills: [
        { name: 'HTML', icon: SiHtml5, color: '#E44D26' },
        { name: 'CSS', icon: SiCss3, color: '#1572B6' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
        { name: 'Git', icon: FaGitAlt, color: '#F05032' },
        { name: 'GitHub', icon: FaGithub, color: '#fff' },
      ],
    },
    {
      title: 'Game Development (Learning)',
      skills: [
        { name: 'Unity', icon: SiUnity, color: '#000' },
        { name: 'C#', icon: SiSharp, color: '#9B4F96' },
      ],
    },
    {
      title: 'Cisco / IT / Networking',
      skills: [
        { name: 'Networking', icon: FaNetworkWired, color: '#0AC1D6' },
        { name: 'Wireless', icon: FaWifi, color: '#0AC1D6' },
        { name: 'Cisco (CCNA)', icon: null },
        { name: 'Subnetting', icon: null },
        { name: 'OSI Model', icon: null },
      ],
    },
    {
      title: 'Languages / Shared Tools',
      skills: [
        { name: 'Python', icon: SiPython, color: '#3776AB' },
      ],
    },
  ];
  
  const Skills = () => {
    return (
      <div className="skillsContainer">
        {skillsSections.map((section) => (
          <div key={section.title} className="skillsSection">
            <h2 className="skillsTitle">{section.title}</h2>
            <div className="skillsGrid">
              {section.skills.map((skill) => (
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
        ))}
      </div>
    );
  };
  
  export default Skills;
  