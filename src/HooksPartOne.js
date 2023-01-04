import React from 'react';
import { useState } from 'react';

class Normal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : 'Ram'
        }
        this.ChangeText = this.ChangeText.bind(this);
        this.Submit = this.Submit.bind(this);
    }

    ChangeText(e){
        this.setState({
            name : e.target.value
        })
    }

    Submit(e){
        alert("Hello " + this.state.name + "  !!");
    }

    render(){
        return(
            <div>
                <h1>Normal Component</h1>
                <form onSubmit={this.Submit}>
                    <input type="text" value={this.state.name} onChange={this.ChangeText}></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }

}

// export default Normal;


function Hookie(props){
    const [name,setName] = useState('Ram');
    function ChangeText(e){
        setName(e.target.value)
    }

    function Submit(e){
        alert("Hello " + name + "  !!");
    }

    return(
        <div>
            <h1>Hooks Component</h1>
            <form onSubmit={Submit}>
                <input type="text" value={name} onChange={ChangeText}></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default Hookie;