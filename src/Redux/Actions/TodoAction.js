import { HttpRequest } from "http-client-request";

const request = new HttpRequest();

const addNewTodoAction = () => {
  return { type: "addNewTodo", payload: true };
};

const addNewTodoDataAction = (data) => (dispatch) => {
  request
    .post("https://jsonplaceholder.typicode.com/posts", {
      body: request.toJSON(data),
    })
    .then((response) =>
      dispatch({ type: "ADD_NEW_TODO_DATA", payload: response.data })
    )
    .catch((err) => dispatch({ type: "ADD_NEW_TODO_ERROR", payload: err }));
};

const removeTodoDataAction = (data) => {
    return {type:"DELETE_TODO_DATA", payload:data}
}

const updateTodoDataAction = (data) => {
    return {type:"UPDATE_TODO_DATA", payload:data}
}

const updateTodoAction = (status) => {
  return { type: "updateTodo", payload: status };
};

const returnToListAction = () => {
  return { type: "returnToList", payload: false };
};

const completedToListAction = (completed) => {
  return { type: "completedList", payload: completed };
};

const incompletedToListAction = (incompleted) => {
  return { type: "incompletedList", payload: incompleted };
};

const getTodoList = () => (dispatch) => {
  request
    .get("https://jsonplaceholder.typicode.com/todos")
    .then(data => {
        const value50 = data.data.filter((item,index) => index < 50);
        dispatch({ type: "GET_TODO", payload: value50 })
    })
    .catch((err) => dispatch({ type: "ERROR", payload: err }));
};

export {
  addNewTodoAction,
  returnToListAction,
  getTodoList,
  updateTodoAction,
  completedToListAction,
  incompletedToListAction,
  addNewTodoDataAction,
  removeTodoDataAction,
  updateTodoDataAction
};
