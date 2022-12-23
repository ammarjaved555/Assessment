import React from 'react'
import CustomerList from './home_page/CustomerList'
import Customers from './home_page/Customers'
import Graph from './home_page/Graph'
import TqmButton from './home_page/TqmButton'
const HomeAll = () => {
  return (
    <div>
        <div>
        <TqmButton/>
        </div>
         <div>
      <Graph/>
    </div>
    <div>
      <Customers/>
    </div>
    <div>
      <CustomerList/>
    </div>
    </div>
  )
}

export default HomeAll