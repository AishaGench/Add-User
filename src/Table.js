import React, { Component } from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = () => { 
    return (
        <tbody>
           <tr>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      )
}

class Table extends Component {
    render() {
      return (
        <table>
          <TableHeader />
          <TableBody />
        </table>
      )
    }
  }

export default Table;