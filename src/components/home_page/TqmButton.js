import React from 'react'


const TqmButton = () => {

  return (
    <>
    <div className='container d-flex justify-content-between tqm-btn'>
        <button  className="btn btn-light btn-sm" style={{background: "white"}}>Filter By</button>
        <button type="button" className="btn btn-danger d-grid gap-2 col-2 ">TQM</button>
    </div>
    </>
  )
}

export default TqmButton