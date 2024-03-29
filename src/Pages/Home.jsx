import React from 'react'
import Pets from '../images/pets.jpg'
import LoadingComponent from '../Components/LoadingComponent'

function Home() {
  return (
    <div className="row " style={{overflow:"auto",width:"100%"}}>
      <div className="col-sm-12">
      <div className="row flex-lg-row-reverse align-items-center pt-sm-5 py-2">
      <div className="col-10 col-sm-8 col-lg-6 mb-3">
        <img src={Pets} className="d-block mx-lg-auto img-fluid rounded shadow" alt="Pets" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">Todo App with CAT API</h1>
        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Home