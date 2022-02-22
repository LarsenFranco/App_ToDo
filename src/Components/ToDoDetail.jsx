import React from "react";
import "./tododetail.css"
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import {removeTodo, toInProgress, toDone} from '../../Redux/actions'

function ToDoDetail(props) {
  
  let estado=props.status 
  let tareas = useSelector((tarea) => tarea);
  tareas = tareas.filter((t) => t.status ===estado);

  const dispatch = useDispatch();

    function deleteItem(id){
        dispatch(removeTodo(id))
    }

    function moveTo(id){
        // if(estado==="Todo"){
        //     dispatch(toInProgress(id))
        // }else{
        //     if(estado==="InProgress"){
        //         dispatch(toDone(id))
        //     }
        // }
        switch (estado) {
            case "Todo":
               return dispatch(toInProgress(id));
            case "InProgress":
                return  dispatch(toDone(id));
            default: return;
               
        }
    }

  return (
    <div >
      <h1>{props.title}</h1>
      <div className="list-group">
        {tareas.map((tarea) => (
          <div  key={tarea.id} className={`list-group-item`}>
            <p>{tarea.title}</p>
            <br />
            {
            tarea.status!=="Done"?
            <div>
               <button onClick={(e)=>deleteItem(tarea.id)} className="btn material-icons delete">delete_forever</button>                         
               <button onClick={(e)=>moveTo(tarea.id)} className="btn material-icons move">arrow_right_alt</button>
            </div>
            :
            <div>
                <button onClick={(e)=>deleteItem(tarea.id)} className="btn material-icons delete">delete_forever</button>       
            </div>            
            }
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDoDetail;

