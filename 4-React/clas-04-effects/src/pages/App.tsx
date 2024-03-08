import { useEffect, useState } from "react";
import { PropsUserData, UserCard } from "../components/UserCard";

export function App() {
  const [count, setcount] = useState(0);
  const [count2, setcount2] = useState(0);
  const [dataUser, setDateUser] = useState({} as PropsUserData);

  useEffect(() => {
    console.log(`Effects ${count}`); // componentDidMount
    setcount2((value) => value + 1); // derived state

    return () => console.log("Closed");
  }, [count]); // componentDidUpdate

  console.log("Render"); // componentWillMount

  useEffect(() => {
  fetch("https://api.github.com/users/Antonio-Carlos-Leite").then((resp) => resp.json()).then((data) => setDateUser(data)).catch((error) => console.error(error));
  }, []);
  return (
    <>
      <h1>Class 04 Effects</h1>
      <p>Count: {count}</p>
      <p>Count2: {count2}</p>
      <button onClick={() => setcount((value) => value + 1)}>Add</button>

      <UserCard 
      avatar_url={dataUser.avatar_url}
      name={dataUser.name}
      bio={dataUser.bio} 
      />
    </>
  );
}
