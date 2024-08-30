import './index.css'

import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import Contact from './pages/Contact.tsx'
import Error from './pages/Error.tsx'
import About from './pages/About.tsx'

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
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

const rootElement = document.getElementById('root');

  if (rootElement) {

    ReactDOM.createRoot(rootElement).render(
      <RouterProvider router={router} />
    );
  } else {
    console.error('Root element found');
  }
