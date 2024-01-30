import React, { useContext, useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import LoadingComponent from '../Components/LoadingComponent';
import ErrorComponent from '../Components/ErrorComponent';
import fetchActionsHook from '../customHooks/fetchActionsHook';
import axiosActionsHook from '../customHooks/axiosActionsHook';
import CategoryComponentCatApi from '../Components/CategoryComponentCatApi';
import SearchResultsPrint from './SearchResultsPrint';
import { FilterInfosDiv } from '../StyledComponents/StyledSearchFilter';
import { CatApiContext } from '../context/CatApiContext';

function SearchResults() {
  const catApiUrl=import.meta.env.VITE_CAT_API_URL;
  const dogApiUrl=import.meta.env.VITE_DOG_API_URL;

  const [searchParams,setSearchParams]=useSearchParams();
  const query=searchParams.get("q");
 
  const [data,loading,error,getUrl]=fetchActionsHook(`${catApiUrl}breeds`);
  const [axiosData,axiosLoading,axiosError,getUrlbyAxios]=axiosActionsHook(`${dogApiUrl}breeds`);

  useEffect(()=>{
    getUrl();
    getUrlbyAxios();
  },[])
 
  const allBreeds=data.concat(axiosData);
  
   const dataArray=allBreeds.filter(item=>{
    if(typeof(item.id)=="number"){
     item.id=item.id.toString()
    }
    const id=item.id.toLowerCase();
    const name=item.name?.toLowerCase()
    const origin=item.origin?.toLowerCase();
    const countryCode=item.country_code?.toLowerCase();
    if(id.includes(query)  || name.includes(query) ||  origin?.includes(query) || countryCode?.includes(query) ){
      return  item
    }
  })


 const {handleAll,handleDogs,handleCats,isAll,isDogs,isCats}=useContext(CatApiContext);

  return (
    <div className='row row-gap-3'>
    <FilterInfosDiv className="filterInfos">
    <h1 className='lead fs-3  my-3 ms-5'>Results for  <strong> "{query}"</strong> in 
    <div className="btn-group ms-3">
    <button onClick={handleAll}  type='button' className={`btn btn-lg btn-${isAll==true ? "success disabled" : "danger"}`}>All Breeds</button>
    <button onClick={handleDogs} type='button' className={`btn btn-lg btn-${isDogs==true ? "success disabled" : "danger"}`}>Dogs</button>
    <button onClick={handleCats} type='button' className={`btn btn-lg btn-${isCats==true ? "success disabled" : "danger"}`}>Cats</button>
    </div>
    </h1>
    </FilterInfosDiv>
      {
       (loading==true || axiosLoading==true )?
       <LoadingComponent/>
       : 
        ((error==true || axiosError==true) ? 
        <ErrorComponent/>
        :
     (
       ( 
         dataArray?.length>0
         ?
         dataArray.map(item=>{
          return ( 
          <SearchResultsPrint  key={item.id}   item={item}/> )
         }) 
         :
         <div className='alert alert-danger fs-4 text-center'>We have nothing about this</div>
         )
     )
     )
    }
    </div>
  )
}

export default SearchResults