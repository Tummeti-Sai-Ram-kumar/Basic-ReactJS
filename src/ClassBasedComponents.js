import React from 'react'

class CBC extends React.Component{
    render(){
        return <h1>Hello World.._ !!</h1>
    }

/*
    render(){
        return (<CBC_Child/>)
    }
    */
}

class CBC_Child extends React.Component{
    render(){
        return <h1>Hello World.._ from child !!</h1>
    }
}

export default CBC;

