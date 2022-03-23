const INITIAL_STATE = {
  data: [],
  newTodo: false,
  updateTodo: false,
  onlyCompleted: {
    status: false,
    data: [],
  },
  onlyInCompleted: {
    status: false,
    data: [],
  },
  newTodoData: [],
  remnantDatas: [],
};

export const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "addNewTodo":
      return { ...state, newTodo: payload };
    case "ADD_NEW_TODO_DATA":
      if (state.newTodoData.length === 0 && state.remnantDatas.length === 0) {
        return { ...state, newTodoData: [...state.data, payload] };
      } else if (state.newTodoData.length > 0 && state.remnantDatas.length === 0) {
        return { ...state, newTodoData: [...state.newTodoData, payload] };
      } else if(state.remnantDatas.length > 0 && state.newTodoData.length === 0){
        return { ...state, newTodoData: [...state.remnantDatas , payload] };
      }
    case "ADD_NEW_TODO_ERROR":
      return { ...state, newTodoData: payload };
    case "DELETE_TODO_DATA":
      if (state.remnantDatas.length === 0) {
        return {
          ...state,
          remnantDatas: [...state.data.filter((item) => item !== payload)],
        };
      } else if (state.remnantDatas.length > 0) {
        return {
          ...state,
          remnantDatas: [
            ...state.remnantDatas.filter((item) => item !== payload),
          ],
        };
      }
      else if (state.remnantDatas.length === 0 && state.newTodoData.length > 0) {
        return {
          ...state,
          remnantDatas: [
            ...state.newTodoData.filter((item) => item !== payload),
          ],
        };
      }
      else if (state.remnantDatas.length > 0 && state.newTodoData.length > 0) {
        return {
          ...state,
          remnantDatas: [
            ...state.remnantDatas.filter((item) => item !== payload),
          ],
        };
      }
      case "UPDATE_TODO_DATA":
        if (state.remnantDatas.length === 0) {
          return {
            ...state,
            remnantDatas: [...payload],
          };
        } else if (state.remnantDatas.length > 0) {
          return {
            ...state,
            remnantDatas: [
              ...state.remnantDatas,
            ],
          };
        }
    case "returnToList":
      return { ...state, newTodo: payload };
    case "updateTodo":
      return { ...state, updateTodo: payload };
    case "completedList":
      return {
        ...state,
        onlyCompleted: {
          ...state.onlyCompleted,
          status: payload.status,
          data: payload.data,
        },
      };
    case "incompletedList":
      return { ...state, onlyInCompleted: {...state.onlyInCompleted , status: payload.status , data: payload.data} };
    case "GET_TODO":
      return { ...state, data: payload };
    default:
      return state;
  }
};
