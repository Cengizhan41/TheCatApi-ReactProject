import React, { useContext, useEffect, useState } from 'react'
import fetchActionsHook from '../customHooks/fetchActionsHook';
import { CatApiContext } from '../context/CatApiContext';
import LoadingComponent from '../Components/LoadingComponent';
import ErrorComponent from '../Components/ErrorComponent';
import { useSelector } from 'react-redux';
import CategoryComponentCatApi from '../Components/CategoryComponentCatApi';

function FetchSearchResults() {

    const catApiUrl=import.meta.env.VITE_CAT_API_URL;
    const [data,loading,error,getUrl]=fetchActionsHook(`${catApiUrl}breeds`);
    useEffect(()=>{
      getUrl();
    },[])
    const {myInput}=useContext(CatApiContext)

  return (
    <div className='row container  row-gap-3'>
    <h1 className='lead fs-3  my-3 ms-5'>Results for : <strong> {myInput}</strong></h1>
      {
       loading==true ?
       <LoadingComponent/>
       : 
        (error==true ? 
        <ErrorComponent/>
        :
     (
      data.map(item=>{
        const id=item.id;
        const name=item.name.toLowerCase()
        console.log(id,name,myInput)
        if(id.includes(myInput)  || name.includes(myInput) ){
          return  (
          <CategoryComponentCatApi key={item.id} item={item}/>
          )
        }
     
      })
     )
     )
    }
    </div>
  )
}

export default FetchSearchResults