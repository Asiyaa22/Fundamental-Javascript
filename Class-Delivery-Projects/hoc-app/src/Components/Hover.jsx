import React from 'react'
import withCounter from './withCounter'


const Hover = ({count, increment}) => {
  return (
    <div>
        <h3>Count: {count}</h3>
        <button onMouseOver={increment}>Hover</button>
    </div>
  )
}
const EnhancedComponent = withCounter(Hover)

export default EnhancedComponent;