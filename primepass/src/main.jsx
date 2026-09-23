import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App'
import AboutUs from './AboutUs'
import Seating from './Seating/Seating'
import Theaters from './Theaters/Theaters'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
   {
    path:"/aboutus",
    element:<AboutUs/>
  },
    {
    path:"/seating/:theatnam/:tmid",
    element:<Seating/>
  },{
    path:"/theaters/:id",
    element:<Theaters/>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
