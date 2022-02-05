import { createStore } from "redux";

const form = document.querySelector("form");
const input = form.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDoAction = (text) => {
  return { type: ADD_TODO, text, id: Date.now() };
};

const deleteToDoAction = (id) => {
  return { type: DELETE_TODO, id };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE_TODO:
      return state.filter((toDo) => String(toDo.id) !== String(action.id));
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
  paintToDo();
});

const dispatchAddToDo = (text) => {
  store.dispatch(addToDoAction(text));
};

const dispatchDeleteToDo = (event) => {
  const id = event.target.parentElement.id;
  store.dispatch(deleteToDoAction(id));
};

const paintToDo = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.addEventListener("click", dispatchDeleteToDo);
    li.innerText = toDo.text;
    li.id = toDo.id;
    delBtn.innerText = "❌";
    li.appendChild(delBtn);
    ul.appendChild(li);
  });
};

const handleSubmit = (event) => {
  event.preventDefault();
  const value = input.value;
  input.value = "";
  dispatchAddToDo(value);
};

form.addEventListener("submit", handleSubmit);
