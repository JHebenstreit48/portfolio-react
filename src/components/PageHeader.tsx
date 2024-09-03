import { useLocation } from "react-router-dom";

export default function PageHeader() {
    const location = useLocation();
    const currentPath = location.pathname;

    const getHeaderText = (path: string) => {
        switch (path) {
            case "/":
            return "About";
            case "/contact":
            return "Contact";
            case "/portfolio":
            return "Portfolio";
            case "/resume":
            return "Resume";
            default:
            return "Page";
        }
    };

    const headerText = getHeaderText(currentPath);

    return (
      <>
      <div>
        <h1 className='pageHeader'>{headerText}</h1>
      </div>
      
      </>
    )
  }