import Skills from '@/components/ResumeAndSkills/Skills';
import myResume from '@/assets/Justin-Hebenstreit-Resume-2025.pdf'
import '@/SCSS/Resume.scss';

export default function Resume() {
  return (
    <div className="resume-page">

      <div id="skills">
        <h2 className="sectionTitle">Skills</h2>
        <Skills />
      </div>

      <div className="resumeButtonWrapper">
        <a
          href={myResume}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="resumeButton"
        >
          Resume
        </a>
      </div>

    </div>
  );
}
