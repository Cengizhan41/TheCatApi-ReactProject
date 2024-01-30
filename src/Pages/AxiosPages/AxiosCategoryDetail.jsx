import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AxiosCategoryCard from './AxiosCategoryCard';
import LoadingComponent from '../../Components/LoadingComponent'
import ErrorComponent from '../../Components/ErrorComponent'
import axiosActionsHook from '../../customHooks/axiosActionsHook';

function AxiosCategoryDetail() {
  const dogApiUrl=import.meta.env.VITE_DOG_API_URL;
  const catApiKey=import.meta.env.VITE_CAT_API_KEY;//key aynı

  const  {category}=useParams()

  const [axiosData,axiosLoading,axiosError,getUrlbyAxios]=axiosActionsHook(
    `${dogApiUrl}images/search?limit=5&breed_ids=${category}&api_key=${catApiKey}`
    );
    // https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME
  useEffect(()=>{
    getUrlbyAxios()
  },[])


  return (
    <div className="container my-5">
         {
       axiosLoading==true ?
       <LoadingComponent/>
       : 
        (axiosError==true ? 
        <ErrorComponent/>
        :
     (
           
         <AxiosCategoryCard
         key={category}
          imgSrc={axiosData.map(item=>{
            return item.url
          })}
          kimlik={category}
        />
        )
     )
    } 
    </div>
  )
}
export default AxiosCategoryDetail





