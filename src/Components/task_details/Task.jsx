import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./task.css";
import {editTask} from "../../../Redux/actions"
import { useDispatch } from "react-redux";


function Task() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const tasks = useSelector((initialState) => initialState);
  let tarea = tasks.find((e) => e.id == id);

  


  function editar(inputs) {
    dispatch(editTask(inputs))
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

          <button onClick={(e) => editar(tarea)} type="button" class="btn ">
          
            <span className="material-icons penEdit">edit</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
