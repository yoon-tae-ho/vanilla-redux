import React, { useState } from "react";
import { connect } from "react-redux";

const Home = ({ toDos }) => {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
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
      <ul>{JSON.stringify(toDos)}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { toDos: state };
};

export default connect(mapStateToProps)(Home);
