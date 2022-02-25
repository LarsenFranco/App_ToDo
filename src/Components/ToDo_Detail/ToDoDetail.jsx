//! BOTON MODAL
import React from "react";
import "./tododetail.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toInProgress, toDone, backToDo } from "../../../Redux/actions"
import { Link } from "react-router-dom";




function ToDoDetail(props) {
  let estado = props.status;
  let tareas = useSelector((tarea) => tarea);
  tareas = tareas.filter((t) => t.status === estado);

  const dispatch = useDispatch();

  function deleteItem(id) {
    dispatch(removeTodo(id));
  }


  function moveTo(id, direction) {
    if(estado==='InProgress' && direction==='next'){
      return dispatch(toDone(id));
    }
    if(estado==='InProgress' && direction==='prev'){
      return dispatch(backToDo(id));
    }

    if(estado==='Todo' && direction==='next'){
      return dispatch(toInProgress(id));
    }
    if(estado==='Done' && direction==='next'){
      return dispatch(removeTodo(id));
    }
   
    if(estado==='Done' && direction==='prev'){
      return dispatch(toInProgress(id));
    }
   


  }

  return (
    <div>
      <h1>{props.title}</h1>
      <div className="list-group tarjeta">
        {tareas.map((tarea) => (
          <div key={tarea.id} className={`list-group-item cajaItem`}>
            
           <Link  className="link" to={`/detail/${tarea.id}`} ><p>{tarea.title}</p>    </Link> 
           
            <br />
            {
                 tarea.status!=="Done"?
              <>
                <button  onClick={(e)=>moveTo(tarea.id, 'prev')}  className="carousel-control-prev ">
                  <span className="material-icons">arrow_back_ios</span>
                </button>
                <button onClick={(e)=>moveTo(tarea.id, 'next')}  className="carousel-control-next ">
                  <span className="material-icons ">arrow_forward_ios</span>
                </button>
              </>:
              <div>
                <button  onClick={(e)=>deleteItem(tarea.id)} className="carousel-control-next ">
                  <span className="material-icons">close</span>
                </button>
                
                <button onClick={(e)=>moveTo(tarea.id, 'prev')}  className="carousel-control-prev ">
                  <span className="material-icons delete">arrow_back_ios</span>
                </button>
              </div>
            }       
        
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default ToDoDetail;

/*

tarea.status!=="Done"?
            <div>
               <button onClick={(e)=>deleteItem(tarea.id)} className="btn material-icons delete">delete_forever</button>                         
               <button onClick={(e)=>moveTo(tarea.id)} className="btn material-icons move">arrow_right_alt</button>
            </div>
            :
            <div>
                <button onClick={(e)=>deleteItem(tarea.id)} className="btn material-icons delete">delete_forever</button>       
            </div>            

*/
