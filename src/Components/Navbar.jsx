import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
// import { CatApiContext } from '../context/CatApiContext';
import Theme from './Theme';

function Navbar() {
// const {setMyInput,myInput}=useContext(CatApiContext)
const navigasyon=useNavigate();
function handleSubmit(e){
  e.preventDefault();
  // setMyInput(e.target.elements[0].value.toLowerCase())
  //  navigasyon(`/results`)
  const search=e.target.elements[0].value.toLowerCase()
  navigasyon(`/search?q=${search}`)
 
  e.target.elements[0].value=""
}
  return (
   <nav  className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
      <NavLink className="navbar-brand fs-2 lead" to={"/"}>Pets</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <NavLink  className="nav-link" to={"/"}>Home</NavLink>
          <NavLink className="nav-link" to={"/fetchcat"}>Fetch : Cats</NavLink>
          <NavLink className="nav-link" to={"/axioscat"}>Axios : Dogs</NavLink>
        </div>
        <form onSubmit={handleSubmit} className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Find A Pet" aria-label="Search" required/>
        <button className="btn btn-success" type="submit">Search</button> 
      </form>
      <div className='ms-sm-3 mb-sm-1'><Theme/></div>
      </div>
    </div>
  </nav>


  )
}

export default Navbar






    
 