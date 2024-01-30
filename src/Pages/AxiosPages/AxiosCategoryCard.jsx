import React, { useEffect, useState } from 'react'
import { StyledCategoryCard } from '../../StyledComponents/StyledFetchCategoryCard'
import { useNavigate } from 'react-router-dom'
import axiosActionsHook from '../../customHooks/axiosActionsHook';

function AxiosCategoryCard({imgSrc,kimlik}) {
  const navigasyon=useNavigate()
  const dogApiUrl=import.meta.env.VITE_DOG_API_URL;

  const [axiosData,axiosLoading,axiosError,getUrlbyAxios]=axiosActionsHook(`${dogApiUrl}breeds`);
  useEffect(()=>{
    getUrlbyAxios()
  },[])
   const chosenBreed=axiosData.find(item=>{
    if(item.id==kimlik){
      return item
    }
   })



  return (
    <StyledCategoryCard className='row '>
     <div className="col-lg-12 mx-auto">
      <div className="card mb-3 shadow">
      <div className="row no-gutters">
      <div className="col-md-4 align-self-center">
        <div id="carouselExampleControlsNoTouching" className="carousel slide " data-bs-touch="false">
        <div className="carousel-inner ">
            {
              imgSrc.map((item,index)=>{
                return(
                  <div key={index} className={`carousel-item ${index==0 ? "active" : ""}`}>
                    <div className="img-wrap">
                  <img  src={item} className=" w-100 rounded" alt="..."/>
                  </div>
                  </div>
                )
              })
            }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        </div>
      </div>
      <div className="col-md-8  position-relative ">
        <div className="card-body">
          <div className="title  d-flex  align-items-center">
          <h1 className="card-title lead fs-3 fw-semibold me-3">{chosenBreed?.name}</h1>
          <span className="fw-light fs-4">{chosenBreed?.origin ? chosenBreed?.origin  : chosenBreed?.country_code}</span> 
          </div>
          <div className="card-text badges my-2">
            <h5><span className="badge bg-success text-wrap">{chosenBreed?.temperament}</span></h5>
          </div>
          <p className="card-text lead">{chosenBreed?.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="badges">
              <p className="card-text badge bg-danger fs-6 my-2 mx-2 p-2">{chosenBreed?.life_span} Years Life Time</p>
              <p className="card-text badge bg-warning fs-6 my-2 mx-2 p-2">{chosenBreed?.weight.metric} KG</p>
              </div>
              
            </div>
            <button className='btn btn-success position-absolute me-5 mb-3 bottom-0 end-0'  onClick={() => navigasyon(-1)}>Back</button>
        </div>
      </div>
    </div>
  </div>
      </div>
      </StyledCategoryCard>
    )
}

export default AxiosCategoryCard