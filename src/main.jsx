import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { HashRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home.jsx';
import About from './component/About.jsx';


// Use parentheses instead of brackets to create the router
const router = HashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
