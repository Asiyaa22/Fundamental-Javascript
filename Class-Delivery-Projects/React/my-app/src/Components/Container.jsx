import React from 'react'
// import { useState } from 'react'

//I want to print my name

const Container = (props) => {
    
  return (
    <div>
        <input type="text" onChange={(e) => props.setName(e.target.value)} />
        <p>{props.title} name of person: {props.name}</p>
    </div>
  )
}

export default Container