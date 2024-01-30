import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchActionsHook from '../../customHooks/fetchActionsHook';
import FetchCategoryCard from './FetchCategoryCard';
import LoadingComponent from '../../Components/LoadingComponent'
import ErrorComponent from '../../Components/ErrorComponent'

function FetchCategoryDetail() {

  const catApiUrl=import.meta.env.VITE_CAT_API_URL;
  const catApiKey=import.meta.env.VITE_CAT_API_KEY;


  const  {category}=useParams()
  console.log(category)

  const [data,loading,error,getUrl]=fetchActionsHook(
    `${catApiUrl}images/search?limit=5&breed_ids=${category}&api_key=${catApiKey}`
    );
    // https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME
  useEffect(()=>{
    getUrl()
  },[])
  return (
    <div className="container my-5">
         {
       loading==true ?
       <LoadingComponent/>
       : 
        (error==true ? 
        <ErrorComponent/>
        :
     (
           
         <FetchCategoryCard
         key={category}
          imgSrc={data.map(item=>{
            return item.url
          })}
          breedName={data[0]?.breeds[0].name}
          description={data[0]?.breeds[0].description}
          origin={data[0]?.breeds[0].origin}
          life={data[0]?.breeds[0].life_span}
          headLines={data[0]?.breeds[0].temperament}
        />
    
        
     
        )
     )
    }
     
    
    </div>
  )
}

export default FetchCategoryDetail





