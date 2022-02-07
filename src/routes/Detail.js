import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const Detail = ({ toDos }) => {
  const { id } = useParams();
  const toDo = toDos.find((toDo) => String(toDo.id) === String(id));
  return (
    <div>
      <h1>{toDo.text}</h1>
      <small>Id: {toDo.id}</small>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    toDos: state,
  };
};

export default connect(mapStateToProps)(Detail);
