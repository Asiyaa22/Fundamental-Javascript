import React from 'react'

const Listitem = () => {
  const items = [
  {
    id: 1, 
    name: "shirt"
  }, 
  {
    id: 2,
    name: "Jeans"
  },
  {
    id: 3,
    name: "sneakers"
  }
];
  return (
    <div>
        <h2>Shopping List</h2>
        <ul>
          {
            items.map(item => <li key={item.id}>{item.name}</li>)
          }
        </ul>
        
    </div>
  )
}

export default Listitem