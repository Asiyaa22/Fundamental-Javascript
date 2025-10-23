import React from 'react'
import { UserContext } from '../App'
import { useContext } from 'react'

const ChildC = () => {
    // const user = useContext(UserContext)
    const {user, theme, setTheme} = useContext(UserContext)
    function handleClick(){
        setTheme(theme == 'light' ? 'dark' : 'light');  
    }
  return (
   <div style={{background : theme == "light" ? '#fff' : '#333',
    color: theme == 'light' ? '#000' : '#fff'
   }}>
    <h3>ChildC</h3>
    <h4>Hello {user}</h4>
    <p>Current theme {theme}</p>
    <button onClick={handleClick}>
        Change Theme
    </button>
   </div>
   
  )
}

export default ChildC