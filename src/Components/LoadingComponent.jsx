import React, { useContext } from 'react'
import { CatApiContext } from '../context/CatApiContext'

function LoadingComponent() {
  return (  
  <div className="col-sm-6 container  p-5 my-5  mx-auto d-flex align-items-center justify-content-center" >
  <div className="spinner-grow" role="status">
  <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow" role="status">
  <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow" role="status">
  <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow" role="status">
  <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow" role="status">
  <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow" role="status">
  <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow" role="status">
  <span className="visually-hidden">Loading...</span>
  </div>


</div>
  )
}

export default LoadingComponent