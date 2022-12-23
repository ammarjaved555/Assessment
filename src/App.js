import React from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import TqmButton from './components/home_page/TqmButton'
import HomeAll from './components/HomeAll'
import TQM from './components/TQM-Page/TQM'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


const App = () => {
  return (
    <>
    <div>
    <NavBar/>
    </div>
    <div>
   <SideBar/>
   </div>
   <div>
   
   </div>
   <div>
   <HomeAll/>
  </div>
  </>
  )
}

export default App