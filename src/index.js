import { createStore } from "redux";

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

const countModifier = (state = 0, action) => {
  console.log(state, action);
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

countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState());
