import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css"
function NavBar() {


  return (
    <div className="d-flex flex-row bd-highlight mb-3 principal" >
      <div className="p-2 bd-highlight">
         <Link to='/' ><Button variant="primary" >Home</Button></Link>
      </div>
      <div className="p-2 bd-highlight">
          <Link to='/new' ><Button variant="primary" >New</Button></Link>
      </div>
      <div className="p-2 bd-highlight">
         <Link to='/about' ><Button variant="primary" >About</Button></Link>
      </div>
    </div>
  )
}

export default NavBar