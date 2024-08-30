import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/Error";
import About from "../pages/About";
import Contact from "../pages/Contact";

 
 
 export const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <About />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
      ],
    },
  ]);