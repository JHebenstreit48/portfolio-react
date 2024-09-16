import Footer from '../components/Footer';
import '../css/Resume.css'
import '../css/Page.css'

export default function Resume() {
    return (
        <>
            <h1 className='pageHeader'>Resume</h1>

            <div className='skills'>

            <ul>

                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>PostgreSQL</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Responsive Design</li>
                <li>Agile Methodologies</li>
                <li>Problem Solving</li>
                <li>Team Collaboration</li>

            </ul>

            </div>

            <div>

                <a target="_blank" className="resume" href="/2024-Resume-Coding-Portfolio-Version.pdf" download>Resume</a>

            </div>

            <Footer />

        </>
    );
}
