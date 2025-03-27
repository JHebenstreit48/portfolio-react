import ProfilePicture from '@/assets/images/profilePicture.jpg';
import '@/css/About.css';

export default function About() {
  return (

    <>

      <div>

        <h1>About Me</h1>

        <img className='profilePicture' src={ProfilePicture} alt='Profile Picture' />

      <div className='about'>

      <p >
          I am a Full-Stack Web Developer with a background in photography and music. I have a passion for music, automotive, photography, and gaming. I recently completed a 6 month long Full-Stack Web Development coding bootcamp through Washington University St. Louis in partnership with Edx. I am skilled in HTML, CSS, JavaScript, TypeScript, Node.js, Express.js, PostgreSQL, and React. I am a creative thinker and a team player. I am excited to bring my skills to any team.
        </p>

      </div>
        

      </div>

    </>





  );
}
