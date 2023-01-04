import React from 'react';

class MyForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {value : '10-20'};
        this.ChangeInput = this.ChangeInput.bind(this) // binding the method to the object 
        this.FormSubmit = this.FormSubmit.bind(this)
    }

    ChangeInput(e){
        this.setState({
            value : e.target.value
        })
    }

    FormSubmit(e){
        alert("The entered input is : - " + this.state.value);
        e.preventDefault();
    }
    // <input type="text" value={this.state.value} onChange={this.ChangeInput}></input>
    // <textarea type="text" value={this.state.value} onChange={this.ChangeInput}></textarea>
    render(){
        return (
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.FormSubmit}>
                    <select onChange={this.ChangeInput} value={this.state.value}>
                        <option value="<10">Less than 10</option>
                        <option value="10-20">10 to 20</option>
                    </select>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        )
    }
}

export default MyForm;