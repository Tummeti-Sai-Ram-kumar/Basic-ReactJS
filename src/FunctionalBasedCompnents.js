import React from 'react';
import { useState } from 'react';


/*
function FBC(){
    return <Message/>
}

function Message(){
    const message = 'Hello World.. Ram'
    return <h1>{message}</h1>
}
*/

/*
const Lambda_FBC = () => {
    const message = 'Hello Lambda World.. __!!';
    return <L_Message value={message} />
}

const L_Message = ({value}) => {
    return <h1>{value}</h1>
}
*/

const State_FBC = () => {
    return <S_FBC/>
}
const S_FBC = () => {
    const [message,setMessage] = useState('Hello state World.. __!! ')
    return (
        <div>
            <h1>{message}</h1>
            <input type="text" value={message} onChange={(event) => {
                setMessage(event.target.value)
            }}></input>
        </div>
    )
}




export default State_FBC;
