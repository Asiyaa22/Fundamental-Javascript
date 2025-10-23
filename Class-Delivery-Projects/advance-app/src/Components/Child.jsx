import React from 'react'

const Child = React.memo((props) => {
  console.log("Child Component Rendered")
  return (
    <div>I am child {props.name} {props.age}</div>
  )
})

export default Child;