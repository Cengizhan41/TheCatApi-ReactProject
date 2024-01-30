import React, { useEffect } from 'react'
import axiosActionsHook from '../../customHooks/axiosActionsHook';
import LoadingComponent from '../../Components/LoadingComponent';
import ErrorComponent from '../../Components/ErrorComponent';
import CategoryComponentDogApi from '../../Components/CategoryComponentDogApi';

function AxiosCategories() {
  const dogApiUrl=import.meta.env.VITE_DOG_API_URL;

  const [axiosData,axiosLoading,axiosError,getUrlbyAxios]=axiosActionsHook(`${dogApiUrl}breeds`);
  useEffect(()=>{
    getUrlbyAxios()
  },[])
  // console.log(axiosData)
  return (
    <div className="row my-5  row-gap-3">
    {
       axiosLoading==true ?
       <LoadingComponent/>
       : 
        (axiosError==true ? 
        <ErrorComponent/>
        :
     (
        axiosData?.map(item=>{
          return(<CategoryComponentDogApi item={item}  key={item.id}/>)})
     )
     )
    }
   </div>
  )
}

export default AxiosCategories