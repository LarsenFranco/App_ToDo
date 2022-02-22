import React from 'react'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./home.css"
import ToDoDetail from './ToDoDetail';
import { useEffect } from 'react';

function Home() {
  useEffect(()=>{
    // alert("hola")
  })


  return (
    <>
        <div className="container">
            <div  className="card"  ><ToDoDetail title="ToDo" status="Todo"/></div>
            <div className="card"><ToDoDetail title="In Progress"  status="InProgress"/></div>
            <div  className="card"><ToDoDetail title="Done"  status="Done"/></div>
        </div>
    </>
  )
}

export default Home