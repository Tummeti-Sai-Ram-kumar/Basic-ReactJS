import React from 'react';
import useAPI from './useApi';

function CallAPI(props){
    const content = useAPI();

    return(
        <div>
            <ul>
                {
                    content.map(value => {<li key={value.id} >{value.item}</li>})
                }
            </ul>
        </div>
    )
}

export default CallAPI;