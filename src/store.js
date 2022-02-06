import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
    id: Date.now(),
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE:
      return state.filter((toDo) => String(toDo.id) !== String(action.id));
    default:
      return state;
  }
};

export const actionCreator = {
  addToDo,
  deleteToDo,
};

const store = createStore(reducer);

export default store;
