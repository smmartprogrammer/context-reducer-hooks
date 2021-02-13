import React, { useContext, useReducer } from "react";
import numberReducer from "./numberReducer";

function Child2() {
  let [state, dispatch] = useReducer(numberReducer, 52);

  return (
    <div>
      Child 2 - Har har mahadev number {state}
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT", val: 67 });
        }}
      >
        INCREMENT
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT", val: 34 });
        }}
      >
        DECREMENT
      </button>
    </div>
  );
}

export default Child2;
