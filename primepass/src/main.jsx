import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App'
import AboutUs from './AboutUs'
import Seating from './Seating/Seating'
import Theaters from './Theaters/Theaters'
import BookDetail from './BookDetail/BookDetail'
import Datevise from './Datevise'
import Timeselec from './Timeselec/Timeselec'
import Organize from './Organize/Organize'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
   {
    path:"/aboutus",
    element:<AboutUs/>
  },{
    path:"/dates/:id",
    element:<Datevise/>
  },
    {
    path:"/seating/:movid/:theatid/:dateid/:timeid",
    element:<Seating/>
  },{
    path:"/theaters/:id",
    element:<Theaters/>
  },{
    path:"/check/:mov/:theat/:date",
    element:<Timeselec/>
  },
  {
    path:"/organize",
    element:<Organize/>
  },
  {
    path:"/bookdetail/:movid",
    element:<BookDetail/>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
