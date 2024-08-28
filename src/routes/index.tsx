import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from '../App.tsx'
import Error from '../pages/Error.tsx'
import About from '../pages/About.tsx'


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
  
        },
      ],
    },
  ]);