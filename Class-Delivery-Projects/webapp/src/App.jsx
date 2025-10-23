import React, { Suspense} from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css'
// import Data from './Components/Data';
import ErrorBoundary from './Components/ErrorBoundary';
import BuggyComponent from './Components/Buggy';


function App() {
  return (
    <>
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      {/* <h1>Lazy Loading Example 🚀</h1>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/home" style={{ margin: "0 10px" }}>Home</Link>
        <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
        <Link to="/contact" style={{ margin: "0 10px" }}>Contact</Link>
      </nav>
        <Outlet /> */}
         <h1>React Error Boundary Example 🚧</h1>
      {/* <ErrorBoundary>
      <Data />
      </ErrorBoundary> */}
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
      
    </>
  )
}

export default App
