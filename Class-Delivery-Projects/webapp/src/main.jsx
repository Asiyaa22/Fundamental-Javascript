import { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import NotFound from './pages/NotFound.jsx'
// import Home from './pages/Home.jsx'
// import About from './pages/About.jsx'
// import Contact from './pages/Contact.jsx'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
const Home = lazy(()=> import('./pages/Home.jsx'));
const About = lazy(()=> import('./pages/About.jsx'));
const Contact = lazy(()=> import('./pages/Contact.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> }, // default page
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> }, // <-- nested catch-all route
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<h3>Loading Page...</h3>}>
  <RouterProvider router={router} />
  </Suspense>
)
