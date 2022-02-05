const form = document.querySelector("form");
const input = form.querySelector("input");
const ul = document.querySelector("ul");

const createToDo = (text) => {
  const li = document.createElement("li");
  li.innerText = text;
  ul.appendChild(li);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const value = input.value;
  input.value = "";
  createToDo(value);
};

form.addEventListener("submit", handleSubmit);
