import { UserCard } from "../components/UserCard";
import { useQueryCep } from "../hooks/useQueryCep";

type User = {
  name: string;
  phone: string;
  email: string;
  id: number;
};

export function App() {
  const { data, isLoading, error } = useQueryCep();
  console.log(data);

  if (error) {
    console.error(error);
  }

  return (
    <>
      <h1>Class 09 Queries</h1>
      {isLoading && <div>Loading...</div>}
      {!isLoading && error && <div>Error...</div>}
      {data?.map((user: User) => {
        return <UserCard key={user.id} name={user.name} phone={user.phone} email={user.email}/>;
      })}
    </>
  );
}
