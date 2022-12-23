import React from 'react'
import TqmCard from './TqmCard'

const TQM = () => {
  return (
    
<div>
<div className="container">
  <div className="row">
    <div className="col text-center">
    <div className="btn-group text-center" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-danger">Quality</button>
  <button type="button" className="btn btn-light light-pill" style={{background: "white"}}>Performance</button>
</div>
    </div>
  </div>
</div>
<div className="container py-4" >
<div className="row ">
        <div className="col-md-3 position-absolute end-0" >
            <div className="input-group ">
            <div className="input-group-text mx-2 bg-dark" style={{borderRadius: "4px"}}><i className="far fa-calendar-alt" style={{background: "white"}}></i></div>
                <input className="form-control py-2 border-right-0 border" type="search" value="search" id="example-search-input"/>
                    <div className="input-group-text" style={{background: "white"}}><i className="fa fa-search"></i></div>
                
            </div>
        </div>
    </div>
    </div>
  <TqmCard/>
</div>
   
  )
}

export default TQM