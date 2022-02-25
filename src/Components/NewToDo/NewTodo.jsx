import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../../Redux/actions"
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./newtodo.css";



export function AddTodo(props, edit) {
  
  


  const resetInput = {
    title: "",
    description: "",
    place: "",
    date: "",
  };

  function getFocus  () {
    document.getElementById("inpTitle").focus();
  }

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
    
    setInput(resetInput);
    setError({title:''});
    getFocus();
  };

  function validateData (input){
    let errors = {};  
    if (!input.title) {
      errors.title = 'Title is required';
    }
    
    return errors;
  }


 

  return (
    <div className="card newtodo">
      <form className="form-floating" onSubmit={handleOnSubmit}>
        <h1>New task</h1>
       
        <div className="inputs">
          
          <label className="material-icons">add_task</label>
         
          <input
            className={`form-control ${error.title && 'input-error'}`}
            name="title"
            value={input.title}
            id="inpTitle"
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
            className={`form-control`}
            name="place"
            value={input.place}
            onChange={handleOnChange}
          ></input>           
        </div>

        <div className="inputs">

        <label className="material-icons">today</label>
        <input
        type='date'
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
