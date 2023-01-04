import React from 'react'

class Vehicle extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (<div>
            <h1>I Like {this.props.details.Color} color {this.props.details.Model} car</h1>
        </div>)
    }
}


class Props extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const vehicle = {Model : "Swift" , Color : "Black"};
        return (<div>
            <h1>My vehicle</h1>
            <Vehicle details = {vehicle}></Vehicle>
        </div>)
    }
}

export default Props