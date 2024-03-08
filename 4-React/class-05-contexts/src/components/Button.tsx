import { useContext } from "react";
import { IncrementContext } from "../contexts/IncrementContext";

export function Button() {
  const { IncrementCount } = useContext(IncrementContext);

  return (
    <>
      <button onClick={IncrementCount}>Increment</button>
    </>
  );
}
