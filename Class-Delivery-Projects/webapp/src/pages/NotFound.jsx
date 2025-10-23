import React from 'react'
import { useNavigate } from 'react-router-dom';
import notFoundImg from '../assets/download.jpeg';

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div>
        <img src={notFoundImg} alt="" />
        <br />
        <button onClick={() => navigate('/home')}>Back to home</button>
    </div>
  )
}

export default NotFound