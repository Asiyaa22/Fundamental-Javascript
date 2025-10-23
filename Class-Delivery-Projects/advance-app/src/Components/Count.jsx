import React from 'react'

const Count = React.memo(({increment}) => {
    console.log("Child / Count Component Rendered")
  return (
    <div>
        <h3>Counter Component</h3>
        <button onClick={increment}>Count</button>
    </div>
  )
})

export default Count