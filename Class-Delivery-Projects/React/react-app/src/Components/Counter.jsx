import React from 'react'
import { useState } from 'react'
import './counter.css'

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='counter'>
      <p>I am Clicked {count} times</p>
      <button id='btn'onClick={() => setCount(count+1)}>Click me</button>
    </div>
  )
}

export default Counter