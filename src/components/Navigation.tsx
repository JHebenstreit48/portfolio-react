import { Link, useLocation } from 'react-router-dom';
import '../css/navigation.css';

export default function Navigation() {
  const currentTab = useLocation().pathname;

  return (
    <>
    <div>
        <ul className='nav-css'>

            <li className='nav-button'>

                <Link
                to='/'
                className={currentTab === "/" ? "nav-link active" : 'nav-link'}
                >

                  About Me

                </Link>

            </li>

            <li className='nav-button'>

              <Link
              to='/contact'
              className={currentTab === "/contact" ? "nav-link active" : 'nav-link'}
              >

                Contact

              </Link>

            </li>

            <li className='nav-button'>

              <Link
              to='/portfolio'
              className={currentTab === "/portfolio" ? "nav-link active" : 'nav-link'}
              >

                Portfolio

              </Link>

            </li>

            <li className='nav-button'>

              <Link
              to='/resume'
              className={currentTab === "/resume" ? "nav-link active" : 'nav-link'}
              >

                Resume

              </Link>

            </li>


        </ul>

    </div>
    
    </>
  );
}