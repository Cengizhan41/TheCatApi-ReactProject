import React, { useState } from 'react'

function fetchActionsHook(url) {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);

    async function getUrl(){
        const response= await fetch(url)
        const jsonData= await response.json();
        // console.log(jsonData);
        setData(jsonData);
        setLoading(false)
        if(!response.ok){
            setError(true)
        }
    }
  return [data,loading,error,getUrl]
}

export default fetchActionsHook