import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../Redux/actions";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./newtodo.css";
export function AddTodo(props) {
  const resetInput = {
    title: "",
    description: "",
    place: "",
    date: "",
  };

  const [input, setInput] = React.useState(resetInput);

  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    props.addTodo(input);
    setInput(resetInput);
  };

  return (
    <div className="container newtodo">
      <form className="form-floating" onSubmit={handleOnSubmit}>
        <h1>Add a task</h1>
        <div className="inputs">
          <label className="material-icons">add_task</label>
          <input
            className="form-control"
            name="title"
            value={input.title}
            onChange={handleOnChange}
          ></input>
        </div>

        <div className="inputs">
          <label className="material-icons">description</label>
          <textarea
            className="form-control"
            name="description"
            value={input.description}
            onChange={handleOnChange}
          ></textarea>
        </div>

        <div className="inputs">
          <label className="material-icons">location_on</label>
          <input
            className="form-control"
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
        
        <button className="btn material-icons" type="submit">
          send
        </button>
      </form>
    </div>
  );
}
export default connect(null, { addTodo })(AddTodo);
