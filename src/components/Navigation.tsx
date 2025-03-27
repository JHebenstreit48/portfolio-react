import { useLocation, useNavigate } from 'react-router-dom';
import '@/css/navigation.css';

interface NavigationLinks {
  pageTitle: string;
}

const ListItems = (props: NavigationLinks & { isActive: boolean, onClick: () => void }) => {
  return (

    <button
      onClick={props.onClick}
      type="button"
      className={`btn btn-primary btn-lg ${props.isActive ? 'active-link' : ""}`}
      >
      {props.pageTitle}
    </button>
  );
};

export default function Navigation() {
  const navigation = useNavigate();
  const currentTab = useLocation().pathname;



  const navLinks = [

    { pageTitle: 'About', path: () => navigation('/'), location: '/' },
    { pageTitle: 'Contact', path: () => navigation('/contact'), location: '/contact' },
    { pageTitle: 'Portfolio', path: () => navigation('/portfolio'), location: '/portfolio' },
    { pageTitle: 'Resume', path: () => navigation('/resume'), location: '/resume' },

  ];

  return (
    <>
      <ul className="nav-css">
        {
          navLinks.map((navLinks) => (
            <ListItems
              key={navLinks.pageTitle}
              onClick={navLinks.path}
              pageTitle={navLinks.pageTitle}
              isActive={currentTab === navLinks.location} />
          ))
        }
      </ul>

    </>
  );
}
