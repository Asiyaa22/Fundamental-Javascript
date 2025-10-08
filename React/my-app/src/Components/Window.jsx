import React from 'react'
import { useEffect, useState } from 'react'

const Window = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
      const handleSize = () => setWindowWidth(window.innerWidth);
        console.log("Event Listener Added");

        window.addEventListener('resize', handleSize);
        return () => {
            console.log("Event Listener Removed");
            window.removeEventListener('resize', handleSize);
        }
    }, [])
    
  return (
    <div>Window size: {windowWidth}</div>
  )
}

export default Window