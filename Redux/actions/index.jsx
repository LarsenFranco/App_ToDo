// Podes usar esta variable para generar un ID por cada Todo.
let todoId = 0;

export const addTodo = (inputs) => {
    todoId += 1;
    return {
        type: "AddTodo",
        payload: {          
            ...inputs,
            status: "Todo",
            id: todoId
        }
    }
};

export const removeTodo = (id) => {
    return {
        type: "RemoveTodo",
        payload: id
    }
}
export const toInProgress = (id) => {
    return {
        type: "ToInProgress",
        payload: id
    }
};

export const toDone = (id) => {
    return {
        type: "ToDone",
        payload: id
    }
};