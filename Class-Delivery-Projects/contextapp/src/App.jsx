
import './App.css'
import ChildA from './Components/ChildA'
import { createContext, useState } from 'react'

// Step - 1: creating context always outside the component
const UserContext = createContext();
function App() {
  //this is my parent component
  //Step - 2: providing context value
  //COntext can contain any type of value
  //string, number, boolean, object, array, function
  // so if we want to share multiple values then we can use
  // objects
  const [user, setUser] = useState("Asiya");
  const [theme, setTheme] = useState("dark");

  const Appdata = {
    user,
    theme,
    setTheme,
    setUser
  }

  return (
    <>
    <UserContext.Provider value={Appdata}>
     <ChildA />
    </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext};
