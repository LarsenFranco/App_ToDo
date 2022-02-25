import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./task.css";

function Task() {
  const { id } = useParams();

  const tasks = useSelector((initialState) => initialState);

  let tarea = tasks.find((e) => e.id == id);

  function editTask(e) {
    alert("Algun día");
  }

  return (
    <div className="taskDetail">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{tarea.title}</h1>
          <br />

          <p>
            <span class="material-icons">description</span>

            {tarea.description ? tarea.description : "not specified"}
            
          </p>
          
          <br />
          <p className="card-text">
            <span class="material-icons">location_on</span>
            {tarea.place ? tarea.place : "not specified"}
          </p>
          <br />
          <p className="card-text">
            <span class="material-icons">event</span>
            {tarea.date ? tarea.date : "not specified"}
          </p>
          <br />

          <button onClick={(e) => editTask(e)} type="button" class="btn ">
          
            <span class="material-icons penEdit">edit</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;

/*

function UserDetail() {        

    const dispatch = useDispatch();
    const user = useSelector((state)=>state.user )
    
    const {id} = useParams() 

    useEffect(()=>{
        console.log('efeeeect')
        console.log(user)
        dispatch(getUser(id));
     },[])z
    return (
    <div>
        <h1>EL USUARIO </h1>
         <p>NAME: {user.user}</p>
         <h2>ID: {id}</h2>
    </div>
  )
}




*/
