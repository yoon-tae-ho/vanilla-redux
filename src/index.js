const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

let counter = 0;

const updateText = () => {
  number.innerText = counter;
};

const handlePlus = () => {
  ++counter;
  updateText();
};
const handleMinus = () => {
  --counter;
  updateText();
};

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);
