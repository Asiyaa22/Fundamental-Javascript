import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/about')
    }
  return (
    <div>
        <h3>Home Page</h3>
        <button onClick={handleClick}>About page</button>
    </div>
  )
}

export default Home;