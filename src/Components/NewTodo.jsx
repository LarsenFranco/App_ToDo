import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../Redux/actions";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./newtodo.css";
import { useState } from "react";


export function AddTodo(props) {
  
  const resetInput = {
    title: "",
    description: "",
    place: "",
    date: "",
  };



  const [input, setInput] = React.useState(resetInput);
  const[error,setError]  =React.useState({
    title:''}
    );


  const handleOnChange = (e) => {
    
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setError(validateData({
      ...input,
      [e.target.name]: e.target.value
    }));


  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    props.addTodo(input);
    alerta();
    setInput(resetInput);
    setError({title:''});
  };

  function validateData (input){
    let errors = {};  
    if (!input.title) {
      errors.title = 'Title is required';
    }
    if (!input.description) {
      errors.description = 'Description is required';
    }
    if (!input.place) {
      errors.place = 'Place is required';
    }
    return errors;
  }


  function alerta(){
        setTimeout(() => {          
         alert('hola')
        }, 0); 
  }


  return (
    <div className="container newtodo">
      <form className="form-floating" onSubmit={handleOnSubmit}>
        <h1>New task</h1>
       
        <div className="inputs">
          
          <label className="material-icons">add_task</label>
         
          <input
            className={`form-control ${error.title && 'input-error'}`}
            name="title"
            value={input.title}
            onChange={handleOnChange}
          > 
          </input>
        </div>

        <div className="inputs">
          
          <label className="material-icons">description</label>
          <textarea
            className={`form-control ${error.description && 'input-error'}`}
            name="description"
            value={input.description}
            onChange={handleOnChange}
          ></textarea>
        </div>

        <div className="inputs">
          <label className="material-icons">location_on</label>
          <input
            className={`form-control ${error.place && 'input-error'}`}
            name="place"
            value={input.place}
            onChange={handleOnChange}
          ></input>
           

        </div>

        <div className="inputs">

        <label className="material-icons">today</label>
        <input
          className="form-control"
          name="date"
          value={input.date}
          onChange={handleOnChange}
        ></input>
       


        </div>
        {
           Object.keys(error).length === 0? 
          (
            <button className="btn material-icons" type="submit">
            send
          </button>
          ) :
          (
            <div>
              <span className="btn material-icons" type="submit" disabled>
              warning
              </span>
              <p>
               Please complete all required fields.
              </p>
            </div>
          )

        }
       
      </form>
     

    </div>
  );
}
export default connect(null, { addTodo })(AddTodo);
