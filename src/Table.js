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

const TableBody = (props) => { 

  console.log(props.users);
  const handleDelete=(name)=>{
    props.delete(name);
    

  }
    return (
        <tbody>
          {props.users.map((item,index)=>{
             return (
            <tr key={index}>
             <td>{item.name}</td>
             <td>{item.job}</td>
             <td><button onClick={()=>handleDelete(item.name)}>DELETE</button></td>
            </tr>
             )
          })}
           
        </tbody>
      )
}

class Table extends Component {
    render() {
      return (
        <table>
          <TableHeader />
          <TableBody users={this.props.users} delete={this.props.delete}/>
        </table>
      )
    }
  }

export default Table;