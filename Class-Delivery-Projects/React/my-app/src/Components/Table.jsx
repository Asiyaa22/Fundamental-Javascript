import React from 'react'

const Table = () => {
const tableData = []; 
let count = 1;
for(let i=0; i<10; i++) {
  tableData[i] = []
  for(let j=0; j<10; j++) {
    tableData[i][j] = count++
  }
}
console.log(tableData);
  return (
 <div>
      <table style={{border: '1px solid black', borderCollapse: 'collapse'}}>
        <tbody>
          {
            tableData.map(row => (
              <tr style={{border: '1px solid black', borderCollapse: 'collapse'}}>
                {
                  row.map(cell => (
                    <td style={{border: '1px solid black', borderCollapse: 'collapse', padding: '10px'}}>{cell}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table