import { ButtonApp } from "../components/ButtonApp";
import { UserCard } from "../components/UserCard";

export function App() {
  return (
    <>
    <h1>Class 02 Components</h1>
    <ButtonApp name = "<<"/>
    <ButtonApp name = "Play"/>
    <ButtonApp name = "Stop"/>
    <ButtonApp name = ">>"/>

    <UserCard name="Antonio Carlos" role="Web Developer" color="lightgray"/>
    <UserCard name="Hamilton" role="Web Developer" color="lightpink"/>
    </>
  )
}

