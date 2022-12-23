import React from 'react'

const CustomerList = () => {
  return (
    <div className='container my-4'>
        <h5 className=' my-3'>Active Order</h5>
        <table class="table  table-borderless" style={{background: "white"}}>
  <thead className='border text-danger'>
    <tr >
      <th scope="col">  Type</th>
      <th scope="col">Order</th>
      <th scope="col">Customer</th>
      <th scope="col">Zip Code</th>
      <th scope="col">Order Time</th>
      <th scope="col">Vandors</th>
      <th scope="col">Rider</th>
      <th scope="col">Order Amount</th>
      <th scope="col">Performance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><a href="#" className="btn btn-warning text-light btn-sm" style={{borderRadius: "20px"}}>normal</a></th>
      <th>5858</th>
      <a><img src="../card.jpg" class="rounded-circle mx-3" alt="Cinque Terre" width="30" height="24" /></a>
      <th>5858</th>
      <th>3:12 pm</th>
      <a><img src="../card.jpg" class="rounded-circle mx-3"  width="30" height="24" /></a>
      <th>5858</th>
      <th><a href="#" className="btn btn-success text-light btn-sm" style={{borderRadius: "20px"}}>normal</a></th>
      <th><a href="#" className="btn btn-danger text-light btn-lg rounded-circle" style={{borderRadius: "100px"}}></a></th>
    </tr>
    <tr>
      <th><a href="#" className="btn btn-danger text-light btn-sm" style={{borderRadius: "20px"}}>normal</a></th>
      <th>5858</th>
      <a><img src="../card.jpg" class="rounded-circle mx-3" alt="Cinque Terre" width="30" height="24" /></a>
      <th>5858</th>
      <th>3:12 pm</th>
      <a><img src="../card.jpg" class="rounded-circle mx-3"  width="30" height="24" /></a>
      <th>5858</th>
      <th><a href="#" className="btn btn-success text-light btn-sm" style={{borderRadius: "20px"}}>normal</a></th>
      <th><a href="#" className="btn btn-success text-light btn-lg rounded-circle" style={{borderRadius: "100px"}}></a></th>
    </tr>
    <tr>
    <th><a href="#" className="btn btn-danger text-light btn-sm" style={{borderRadius: "20px"}}>normal</a></th>
    <th>5858</th>
    <a><img src="../card.jpg" class="rounded-circle mx-3" alt="Cinque Terre" width="30" height="24" /></a>
    <th>5858</th>
    <th>3:12 pm</th>
    <a><img src="../card.jpg" class="rounded-circle mx-3"  width="30" height="24" /></a>
    <th>5858</th>
      <th><a href="#" className="btn btn-success text-light btn-sm" style={{borderRadius: "20px"}}>normal</a></th>
      <th><a href="#" className="btn btn-warning text-light btn-lg rounded-circle" style={{borderRadius: "100px"}}></a></th>
    </tr>
    <tr>
    <th><a href="#" className="btn btn-danger text-light btn-sm" style={{borderRadius: "20px"}}>normal</a></th>
    <th>5858</th>
    <a><img src="../card.jpg" class="rounded-circle mx-3" alt="Cinque Terre" width="30" height="24" /></a>
    <th>5858</th>
    <th>3:12 pm</th>
    <a><img src="../card.jpg" class="rounded-circle mx-3"  width="30" height="24" /></a>
    <th>5858</th>
      <th><a href="#" className="btn btn-success text-light btn-sm" style={{borderRadius: "20px"}}>normal</a></th>
      <th><a href="#" className="btn btn-success text-light btn-lg rounded-circle" style={{borderRadius: "100px"}}></a></th>
    </tr>
    <tr>
      <th><a href="#" className="btn btn-danger text-light btn-sm" style={{borderRadius: "20px"}}>normal</a></th>
      <th>5858</th>
      <a><img src="../card.jpg" class="rounded-circle mx-3" alt="Cinque Terre" width="30" height="24" /></a>
      <th>5858</th>
      <th>3:12 pm</th>
      <a><img src="../card.jpg" class="rounded-circle mx-3"  width="30" height="24" /></a>
      <th>5858</th>
      <th><a href="#" className="btn btn-success text-light btn-sm" style={{borderRadius: "20px"}}>normal</a></th>
      <th><a href="#" className="btn btn-warning text-light btn-lg rounded-circle" style={{borderRadius: "100px"}}></a></th>
    </tr>
    <tr>
    <th><a href="#" className="btn btn-warning text-light btn-sm" style={{borderRadius: "20px"}}>normal</a></th>
    <th>5858</th>
    <a><img src="../card.jpg" class="rounded-circle mx-3" alt="Cinque Terre" width="30" height="24" /></a>
    <th>5858</th>
    <th>3:12 pm</th>
    <a><img src="../card.jpg" class="rounded-circle mx-3"  width="30" height="24" /></a>
    <th>5858</th>
      <th><a href="#" className="btn btn-success text-light btn-sm" style={{borderRadius: "20px"}}>normal</a></th>
      <th><a href="#" className="btn btn-warning text-light btn-lg rounded-circle" style={{borderRadius: "100px"}}></a></th>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default CustomerList