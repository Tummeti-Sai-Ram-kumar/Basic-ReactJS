import React from 'react'

class HelloWorld extends React.Component{
    constructor(props){
        super(props)
    }
    HW = () => {
        alert("Hello World..!!");
    }
    render(){
        return (
            <div>
                <button onClick={this.HW}>Click HW</button>
            </div>
        )
    }
}

export default HelloWorld