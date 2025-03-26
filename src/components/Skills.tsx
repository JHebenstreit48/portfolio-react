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
  
  const sections = [
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
      <div className="space-y-16 px-6 xl:px-16 2xl:px-96">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">{section.title}</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {section.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 flex flex-col items-center justify-center w-32 h-24 rounded-2xl shadow-lg bg-white/20 backdrop-blur-lg"
                >
                  {skill.icon ? (
                    <skill.icon style={{ color: skill.color, fontSize: '20px' }} />
                  ) : (
                    <div className="text-xl font-bold mb-1">🔧</div>
                  )}
                  <p className="mt-2 text-white text-sm font-semibold text-center">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Skills;
  