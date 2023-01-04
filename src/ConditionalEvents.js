import React from 'react'

function Success(){
    return ("Successful")
}
function Fail(){
    return (<h1>Failure</h1>)
}
function Message(props){

    const authStatus = props.authStatus;

    /*
    
    if(authStatus){
        return (<Success/>)
    }
    else{
        return (<Fail/>)
    }
    */

    return (<h1>USer Login is {authStatus ? <Success/> : <Fail/>}</h1>)

}

export default Message