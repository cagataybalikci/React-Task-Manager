import React from "react";

const Button = ({ onClick, showAddTask }) => {
  return (
    <button onClick={onClick} className="btn">
      {showAddTask ? "Close" : "Add"}
    </button>
  );
};

export default Button;
