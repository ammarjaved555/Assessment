import React from 'react'

const NavBar = () => {
  return (
    <div>
<nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <div>
  <a class="navbar-brand" >
      <img src="../asset/logo-main.png"  width="30" height="24"/>  
    </a>
   <a><i class="fa fa-bars bg-light"></i></a>
    </div>
    <a><img src="../card.jpg" class="rounded-circle mx-3"  width="30" height="24" /></a>
  </div>
  
</nav>

    </div>
  )
}

export default NavBar
