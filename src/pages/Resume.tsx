import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import '@/SCSS/Resume.scss';

export default function Resume() {
  return (
    <div className="resume-page">

      <div id="skills">
        <h2 className="sectionTitle">Skills</h2>
        <Skills />
      </div>

      <div className="resume-button-wrapper">
        <a
          href="/2024-Resume-Coding-Portfolio-Version.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          Resume
        </a>
      </div>

      <Footer />
    </div>
  );
}
