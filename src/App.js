import React, { Component } from 'react';
import Table from "./Table";
import Form from "./Form";

class App extends Component {
constructor(props) {
  super(props)

  this.state = {
     users : [
          {
            name: 'Charlie',
            job: 'Janitor',
          },
          {
            name: 'Mac',
            job: 'Bouncer',
          },
          {
            name: 'Dee',
            job: 'Aspring actress',
          }
        ]
  }
}
updateNames=(param)=>{
  
  const {users} = this.state;
  users.push(param)
  this.setState({users:users})

}

deleteItems = (e)=>{
  const deletion = this.state.users.filter(item =>item.name !== e)
  this.setState({users:deletion})
}


    render() {
        return (
            <div className="container">
                <h1>React List</h1>
                <p>Add a character with a name and a job to the table.</p>
                <Form updateNames={this.updateNames}/>
                <Table delete={this.deleteItems} users={this.state.users}/>
            </div>
        )
      }
}

export default App;