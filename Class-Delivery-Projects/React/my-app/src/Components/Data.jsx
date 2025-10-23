import React from 'react'

const Data = () => {
    const tableData = [];
    let count = 1;

    // nested loops
    // outer loop is responsible for creating rows from 1 to 10
    []
    // inner loop is responmsible for data 1 to 10 count++
    tableData[i][j] = count++
    console.log(tableData)
  return (
    <div>
        <h2>Creating a data structure 2D - array</h2> 
        <table style={{border: '1px solid black', borderCollapse: 'collapse'}}>
            <tbody>
                {
                    tableData.map(row => (
                        <tr style={{border: '1px solid black', borderCollapse: 'collapse'}}>
                            {
                                row.map(cell => (
                                    <td style={{border: '1px solid black', borderCollapse: 'collapse'}}>{cell}</td>
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

export default Data