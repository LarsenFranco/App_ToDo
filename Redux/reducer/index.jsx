
const initialState = [];

const todos = (state = initialState, action) => {
  switch(action.type) {
    case "AddTodo":
      return state.concat(action.payload);
    
      case "BackTodo":
      return state.map((todo)=>{
        if(todo.id===action.payload){
          todo.status="Todo"
        }
        return todo;
      });

    case "ToInProgress":
      return state.map((todo)=>{
        if(todo.id===action.payload){
          todo.status="InProgress"
        }
        return todo;
      })
    
      case "RemoveTodo":
        return state.filter((todo)=>todo.id!==action.payload);

      case "ToDone":
        return state.map((todo)=>{
          if(todo.id ===action.payload){
            todo.status="Done"
          }
          return todo;
        })
    default: return state;
  }

  
}

export default todos;