// import { StrictMode } from 'react'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componantes/Home/Home';
import AboutMe from './componantes/AboutMe';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       
       <RouterProvider router={router} />
       
  </StrictMode>,
)
