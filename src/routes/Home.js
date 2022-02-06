import React, { useState } from "react";
import { connect } from "react-redux";

import ToDo from "../components/ToDo.js";
import { actionCreator } from "../store.js";

const Home = ({ toDos, addToDo }) => {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addToDo(toDo);
    setToDo("");
  };
  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do"
        />
        <input type="submit" value="Add" />
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (text) => dispatch(actionCreator.addToDo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
