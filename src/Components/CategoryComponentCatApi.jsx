import React, { useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom'
import fetchActionsHook from '../customHooks/fetchActionsHook';
import { StyledDiv } from '../StyledComponents/StyledCategoryComponent';


function CategoryComponentCatApi({item}) {
  return (
      <StyledDiv className='col-lg-4 col-md-6 col-sm-6 col-6 bg-image hover-zoom'>
    <Link  to={`/catbreed/${item.id}`} style={{textDecoration:"none"}}>  
    <div className="card text-center shadow">
        <div className="img-wrap">
        <img src={`https://cdn2.thecatapi.com/images/${item.reference_image_id}.jpg`} className="card-img-top rounded" alt={item.id}/>
        </div>
        <div className="card-body pt-1">
        <h5 className="card-title lead fw-semibold fs-4">{item.name}</h5>
    </div>
    </div>
    </Link>
    </StyledDiv>
 
    
    
  )
}

export default CategoryComponentCatApi
