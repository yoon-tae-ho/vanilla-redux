import { createStore } from "redux";

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

number.innerText = 0;

const countModifier = (state = 0, action) => {
  const { type } = action;
  if (type === "PLUS") {
    return state + 1;
  } else if (type === "MINUS") {
    return state - 1;
  } else {
    return state;
  }
};

const countStore = createStore(countModifier);
countStore.subscribe(() => (number.innerText = countStore.getState()));

plus.addEventListener("click", () => countStore.dispatch({ type: "PLUS" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));
