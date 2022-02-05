import { createStore } from "redux";

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

number.innerText = 0;

const PLUS = "PLUS";
const MINUS = "MINUS";

const countModifier = (state = 0, action) => {
  switch (action.type) {
    case PLUS:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};

const countStore = createStore(countModifier);
countStore.subscribe(() => (number.innerText = countStore.getState()));

plus.addEventListener("click", () => countStore.dispatch({ type: PLUS }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
