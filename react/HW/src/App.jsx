import { useState } from "react";
import Parent from "./Hw3/Parent";

import "./App.css";
import Hw2 from "./Hw2/Hw2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Parent />
    </>
  );
}

export default App;
