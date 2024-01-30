import React from 'react'
import { Link } from 'react-router-dom'

function ErrorComponent() {
  return (
    <div className="col-sm-6 bg-secondary text-light my-5 p-5 mx-auto rounded text-centerw">
    <h3 className=''>We have nothing about this</h3>
    <h4>To go to Home Page <Link className='btn btn-danger fs-5 vertical-align-center' to={"/"}>Click</Link></h4>
    </div> 
  )
}

export default ErrorComponent