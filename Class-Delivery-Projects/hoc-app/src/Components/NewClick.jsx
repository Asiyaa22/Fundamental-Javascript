import React from 'react'
import withCounter from './withCounter'

const NewClick = ({count, increment}) => {
  return (
    <div>
        <h3>Count: {count}</h3>
        <button onClick={increment}>Click</button>
    </div>
  )
}

const EnhancedNewClick = withCounter(NewClick)

export default EnhancedNewClick;