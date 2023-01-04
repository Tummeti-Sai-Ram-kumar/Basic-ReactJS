import React from "react";

class LCC extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : 0
        }
        this.setNewNumber = this.setNewNumber.bind(this)
    };

    setNewNumber(){
        this.setState({data : this.state.data + 1})
    }
    render(){
        return (<div className="App">
            <button onClick={this.setNewNumber}> Increment Counter </button>
            <NumberCounter myNumber= {this.state.data}></NumberCounter>
        </div>)
    }
}

class NumberCounter extends React.Component{
    componentWillMount(){
        console.log("Component Will Mount ..!!");
    }
    componentDidMount(){
        console.log("Component Did Mount..!!")
    }
    shouldComponentUpdate(newProps,newState){
        console.log("Component Should Update..!!");  // Write some logic for allowing it to get updated
        return true;
    }

    componentWillUpdate(newProps,newState){
        console.log("Component Will Update ..!!")
    }

    componentDidUpdate(newProps,newState){
        console.log("Component Did Updated..!!")
    }

    componentWillUnmount(){
        console.log("Component UnMounted ..!! ");
    }

    render(){
        return (<div><h3>{this.props.myNumber}</h3></div>)
    }

}


export default LCC