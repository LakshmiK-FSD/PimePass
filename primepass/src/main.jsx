import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@assets/index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from '@/App'
import AboutUs from '@pages/AboutUs'
import Seating from '@pages/Seating/Seating'
import Theaters from '@pages/Theaters/Theaters'
import BookDetail from '@pages/BookDetail/BookDetail'
import Datevise from '@pages/Datevise'
import Timeselec from '@pages/Timeselec/Timeselec'
import Organize from '@pages/Organize/Organize'
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
