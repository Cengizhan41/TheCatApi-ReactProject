import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="container text-center my-5">
        <h3>Aradiginiz sayfayi bulamadik.</h3>
        <h4>Anasayfaya gitmek için tıklayın  <Link to={"/"} className='btn btn-success'>Home</Link>  </h4>
    </div>
  )
}

export default NotFound