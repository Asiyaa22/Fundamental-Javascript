import React from 'react'
import withCounter from './withCounter'

const Click = ({count, increment}) => {
  return (
    <div>
        <h3>Count: {count}</h3>
        <button onClick={increment}>Click</button>
    </div>
  )
}
const EnhamcedClick = withCounter(Click)

export default EnhamcedClick;