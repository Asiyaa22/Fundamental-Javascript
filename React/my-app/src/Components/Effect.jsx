import React from 'react'
import { useEffect, useState } from 'react'

const Effect = () => {

  const [count, setCount] = useState(0)
  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  useEffect(() => {
     alert("I will run on every render")
  },[]);

  function handleClick(){
    setCount(count + 1);
  }

  return (
    <div>
      <h3>we are leanring USeEffect</h3>
      <button onClick={handleClick}>Click me!!</button>
    </div>
  )
}

export default Effect