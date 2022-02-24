import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
function NavBar() {
  return (
    <div className="navbar navbar-dark bg-dark principal">
      
      <div >
        <Link to="/">
          <button className="navbar-toggler btnNav" >Home</button>
        </Link>
      </div>
      
      <div>
        <Link to="/new">
        <button className="navbar-toggler btnNav" >New task</button>
        </Link>
      </div>
     
      <div>
        <Link to="/about">
        <button className="navbar-toggler btnNav" >About me</button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
