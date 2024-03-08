import { PropsWithChildren, createContext, useState } from "react";

type Context = {
    count: number;
    IncrementCount: () => void;
}

export const IncrementContext = createContext({} as Context);

export function IncrementProvider({ children }: PropsWithChildren) {
  const [count, setCount] = useState(0);

  function IncrementCount() {
    setCount((value) => value + 1);
  }
  return (
    <IncrementContext.Provider value={{ count: count, IncrementCount }}>
      {children}
    </IncrementContext.Provider>
  );
}
