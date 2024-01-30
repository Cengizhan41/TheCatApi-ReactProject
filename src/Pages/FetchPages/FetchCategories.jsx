import React, { useContext, useEffect, useState } from 'react'
import LoadingComponent from '../../Components/LoadingComponent'
import ErrorComponent from '../../Components/ErrorComponent'
import fetchActionsHook from '../../customHooks/fetchActionsHook'
import CategoryComponentCatApi from '../../Components/CategoryComponentCatApi'


function FetchCategories() {
 
  const catApiUrl=import.meta.env.VITE_CAT_API_URL;
  const [data,loading,error,getUrl]=fetchActionsHook(`${catApiUrl}breeds`);
  useEffect(()=>{
    getUrl();
  },[])
  return (
   <div className="row my-5  row-gap-3">
    {
       loading==true ?
       <LoadingComponent/>
       : 
        (error==true ? 
        <ErrorComponent/>
        :
     (
        data?.filter(item=>item.id !="mala").map(item=>{
          return(<CategoryComponentCatApi item={item}  key={item.id}/>)})
     )
     )
    }
   </div>
  )
}

export default FetchCategories