import React, { useContext } from "react";
import ValueContext from "./ValueContext";

function Child(props) {
  let value = useContext(ValueContext);
  return <div>Child - Har har mahadev number {value}</div>;
}

export default Child;
