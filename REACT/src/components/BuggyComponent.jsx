import React from "react";

function BuggyComponent({ name }) {
  if (!name) {
    throw new Error("The 'name' prop is missing!");
  }

  return <h1>Hello, {name}!</h1>;
}

export default BuggyComponent;
