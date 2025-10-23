import React from 'react'
import { Link,NavLink} from "react-router-dom"
import './bas.css'

const NavBar = () => {
  return (
    <div >
        <ul className='navbar'>
            <li><NavLink to='/' className={({isActive}) => isActive ? "active-link" : "" }>Home</NavLink></li>
            <li><NavLink to='/about' className={({isActive}) => isActive ? "active-link" : "" }>About</NavLink></li>
            <li><NavLink to='/services' className={({isActive}) => isActive ? "active-link" : "" }>Services</NavLink></li>
        </ul>
    </div>
  )
}

export default NavBar;