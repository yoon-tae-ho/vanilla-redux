import { createStore } from "redux";

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

const countModifier = (state = 0) => {
  return state;
};

const countStore = createStore(countModifier);

console.log(countStore.getState());
