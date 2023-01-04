import React from 'react';

class States extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            model : "DZire",
            year : 2010,
            color : "Black"
        }
    };

    ChangeModel = () => {
        this.setState({
            model : "Swift Dzire"
        })
    };

    render(){
        return (
            <div>
                <h1>My Vehicle</h1>
                <h3>I bought a {this.state.color} color {this.state.model} car in {this.state.year}</h3>

                <button type="submit" onClick={this.ChangeModel}>Change Model</button>

            </div>
        )
    }
}

export default States
