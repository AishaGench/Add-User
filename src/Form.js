import React, {Component} from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            job:'',
        };

    }

    handleChange=(e)=>{
        if(e.target.name === 'name'){
            console.log(e)
            this.setState({name:e.target.value})
        }else if(e.target.name === 'job'){
            console.log(e)
            this.setState({job:e.target.value})
        }
    }

    handleSubmit =(e)=>{
        e.preventDefault()
        this.props.updateNames({...this.state})
    }
    
    render() {

        console.log(this.state)
        
        return (
            <div>
            
            <form>
               
                <label htmlFor="name">Name</label>
                <input onChange={this.handleChange}
                    type="text" 
                    name="name" 
                    id="name"
                     />
                <label htmlFor="job">Job</label>
                <input onChange={this.handleChange}
                    type="text" 
                    name="job" 
                    id="job"
                     />
                <button onClick={this.handleSubmit} type="submit">
                    Submit
                </button>
            </form>
            <h2> Name: {this.state.name} </h2>
            <h2>Job: {this.state.job}</h2>

            </div>
        );
    }
}

export default Form;
