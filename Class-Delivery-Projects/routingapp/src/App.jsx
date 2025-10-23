import React from 'react'
import Home from "./Components/Home.jsx"
import About from "./Components/About.jsx"
import Services from "./Components/Services.jsx"
import NavBar from "./Components/NavBar.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <div>
        <NavBar />
        <Home />
      </div>
    },
    {
      path: '/about',
      element: <div>
        <NavBar />
        <About />
      </div>

    },
    {
      path: '/services',
      element: <div>
        <NavBar/>
        < Services/>
      </div>
    }
  ]

)
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App