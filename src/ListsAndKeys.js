import React from "react";
import './index.css';
function StateList(props){

    const state = props.states;
    console.log(props);
    console.log(state);

    const stateClick = (e) => {
        console.log(e.target.getAttribute("index")  + " " + e.target.getAttribute("key"))
    }

const ListItems = state.map((s) => <li key={s.stateVal} index ={s.key} onClick={stateClick}>{s.stateVal}</li>)

    return (<ul>{ListItems}</ul>)
}

export default StateList;