import logo from "./logo.svg";
import "./App.css";
import Parent from "./Parent";
import { useState } from "react";
import ValueContext from "./ValueContext";

function App() {
  // let [number, setNumber] = useState(45);
  let value = 81;
  return (
    // <ValueContext.Provider value={value}>
    <div className="App">
      <Parent
      //  num={number}
      />
      {/* <button
          onClick={() => {
            setNumber(++number);
          }}
        >
          Update Number
        </button> */}
    </div>
    // </ValueContext.Provider>
  );
}

export default App;
