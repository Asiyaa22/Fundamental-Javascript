import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import Home from './Components/Home.jsx'
// import About from './Components/About.jsx'

// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <Home />
//     },
//     {
//       path: '/about',
//       element: <About />
//     }
//   ]
// )

createRoot(document.getElementById('root')).render(
  // <RouterProvider router={router} />
  <App />
)
