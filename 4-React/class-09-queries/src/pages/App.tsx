import { useQueryCep } from "../hooks/useQueryCep"

export function App() {
  const {data, isLoading, error} = useQueryCep()
  console.log(data);
  console.error(error);
  
  return (
    <>
      <h1>Class 09 Queries</h1>
      {isLoading && <div>Loading...</div>}
      {!isLoading && error &&<div>Error...</div>}
      <pre>{data}</pre>
    </>
  )
}
