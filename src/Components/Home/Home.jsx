import React from 'react'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./home.css"
import ToDoDetail from "../ToDo_Detail/ToDoDetail"
function Home() {
  
  return (
    <>
    <div className='totalPage'>
        <div className="container">
            <div  className="card"  ><ToDoDetail title="ToDo" status="Todo"/></div>
            <div className="card"><ToDoDetail title="In Progress"  status="InProgress"/></div>
            <div  className="card"><ToDoDetail title="Done"  status="Done"/></div>
        </div>
      </div>
    </>
  )
}

export default Home