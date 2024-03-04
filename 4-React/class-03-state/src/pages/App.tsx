import { useState } from "react";

export function App() {
  // let count = 0;
  const [count, setcount] = useState(0) // inference
  const [name, setName] = useState("") 

  function add() {
    setcount((count) => count + 1);
    setName("Antonio Carlos");
  }

  function rem() {
    setcount((count) => count - 1);
  }

  return (
    <>
    <h1>Class States</h1>

    <h2>{name}</h2>

    <p>Count: { count }</p>
    <button onClick = {rem}>{"<<"}</button>
    <button onClick = {add}>{">>"}</button>
    </>
  )
}