import React from 'react';
import {useState,useEffect} from 'react'
function useAPI(url){
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data));
    },[]);

    return data;
}

export default useAPI;