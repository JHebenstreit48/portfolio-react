import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const currentTab = useLocation().pathname;

  return (
    <>
    <div>
        <ul className='nav nav-tabs'>

            <li className='nav-button'>

                <Link
                to='/'
                className={currentTab === "/" ? "nav-link active" : 'nav-link'}
                >

                  About-Me

                </Link>

            </li>

            <li className='nav-button'>

              <Link
              to='/Contact'
              className={currentTab === "/Contact" ? "nav-link active" : 'nav-link'}
              >

                Contact

              </Link>

            </li> 


        </ul>

    </div>
    
    </>
  );
}