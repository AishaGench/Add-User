import React, {Component} from 'react';

class Form extends Component {
    
    render() {
        
        return (
            <form>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                     />
                <label htmlFor="job">Job</label>
                <input 
                    type="text" 
                    name="job" 
                    id="job"
                     />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
