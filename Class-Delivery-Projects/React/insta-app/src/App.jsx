import React from 'react'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Mainsection from './Components/Mainsection'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Mainsection/>
      <Footer />
    </div>
  )
}

export default App