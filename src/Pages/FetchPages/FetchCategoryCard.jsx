import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StyledCategoryCard } from '../../StyledComponents/StyledFetchCategoryCard'


function FetchCategoryCard({imgSrc,breedName,description,origin,headLines,life}) {
  let navigasyon = useNavigate()
  return (
  <StyledCategoryCard className='row '>
   <div className="col-lg-12 mx-auto">
    <div className="card mb-3 shadow">
    <div className="row no-gutters">
    <div className="col-md-4 ">
      <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
      <div className="carousel-inner">
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
    <div className="col-md-8">
      <div className="card-body">
        <div className="title  d-flex  align-items-center">
        <h1 className="card-title lead fs-1 fw-semibold me-3">{breedName} </h1>
        <span className="fw-light fs-4">{origin}</span> 
        </div>
        <div className="card-text badges my-2">
          <h5><span className="badge bg-success text-wrap"> {headLines}</span></h5>
        </div>
        <p className="card-text lead">{description}</p>
        <div className="card-end d-flex justify-content-between">
        <p className="card-text badge bg-danger fs-6 align-self-center">{life} Years Life Time</p>
        <button className='btn btn-success' onClick={() => navigasyon(-1)}>Back</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    </StyledCategoryCard>
  )
}

export default FetchCategoryCard


