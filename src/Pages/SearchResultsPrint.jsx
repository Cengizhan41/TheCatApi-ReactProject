import React, { useContext } from 'react'
import CategoryComponentDogApi from '../Components/CategoryComponentDogApi';
import CategoryComponentCatApi from '../Components/CategoryComponentCatApi';
import { CatApiContext } from '../context/CatApiContext';


function SearchResultsPrint({item}) {
  const {isAll,isDogs,isCats}=useContext(CatApiContext)
  return (

     isAll==true ?
     (   item.id.length>3 
        ? 
        <CategoryComponentCatApi item={item}/>
        :
        <CategoryComponentDogApi item={item}/>)
        :
        (
          isDogs==true ?
          ( item.id.length<=3 && <CategoryComponentDogApi item={item}/>  )
          :
          (   item.id.length>3 &&  <CategoryComponentCatApi item={item}/> )
          )
  )
}

export default SearchResultsPrint
