import React from 'react'

const List = () => {
  const names = ['Alice', 'Bob', 'Charlie', 'David'];
  return (
    <div>{
        names.map(name => <h2>{name}</h2>)
    }</div>
  )
}

export default List