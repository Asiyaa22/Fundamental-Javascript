import React, {useState} from 'react'

const NewHover = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
      setCount(count + 1);
  }   
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onMouseOver={handleClick}>Hover</button>
    </div>
  )
}

export default NewHover