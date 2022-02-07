import { createStore } from "redux";

const LS_KEY = "state";

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

const reducer = (
  state = JSON.parse(localStorage.getItem(LS_KEY)) || [],
  action
) => {
  switch (action.type) {
    case ADD:
      const addedState = [{ text: action.text, id: action.id }, ...state];
      localStorage.setItem(LS_KEY, JSON.stringify(addedState));
      return addedState;
    case DELETE:
      const deletedState = state.filter(
        (toDo) => String(toDo.id) !== String(action.id)
      );
      localStorage.setItem(LS_KEY, JSON.stringify(deletedState));
      return deletedState;
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
