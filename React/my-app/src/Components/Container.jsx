import React from 'react'
import { useState } from 'react'

//I want to print my name

const Container = () => {
    const [name, setName] = useState("")

    const handleChange = (e) => {
        setName(e.target.value)
    }   
  return (
    <div>
        <input type="text" onChange={handleChange} />
        <p>name of person: {name}</p>
    </div>
  )
}

export default Container