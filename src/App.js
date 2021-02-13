import logo from './logo.svg';
import './App.css';
import Parent from './Parent'
import { useState } from 'react';

function App() {
  let [number, setNumber] = useState(45);

  return (
    <div className="App">
      <Parent num={number} />
      <button onClick={() => { setNumber(++number) }}  >Update Number</button>


    </div>
  );
}

export default App;
