import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import State_FBC from './FunctionalBasedCompnents'
// import Lambda_FBC from './FunctionalBasedCompnents'

// import CBC from './ClassBasedComponents'
// import LCC from './LifeCycleComponents'
// import States from './states'

// import HelloWorld from './events'

// import Props from './props'

// import Message from './ConditionalEvents';

import StateList from './ListsAndKeys';

import reportWebVitals from './reportWebVitals';

// import MyForm from './ReactForms';

// import AdvForm from './ReactForms2'

import Normal from './HooksPartOne';
import Hookie from './HooksPartOne';


const root = ReactDOM.createRoot(document.getElementById('root'));
const States = [{
  stateVal : "Ap",
  key : "10"
},
{
  stateVal : "Mp",key : "20"
},
{
  stateVal : "Up",key : "30"
}
];
root.render(
  <React.StrictMode>
    <StateList states={States}/>
  </React.StrictMode>
);


// ReactDOM.render(<CBC/>,document.getElementById('root'));

// setTimeout(() => ReactDOM.unmountComponentAtNode(document.getElementById('root')),10000);


 // ReactDOM.render(<CBC/>,document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

