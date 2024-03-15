import { ContainerUserCard } from "../style";

type Props = {
    name: string;
    phone: string;
    email: string;
  }
  
  export function UserCard({ name, phone, email}: Props) {
    return (
        <ContainerUserCard>
        <strong>{name}</strong>
        <p>{phone}</p>
        <p>{email}</p>
        </ContainerUserCard>
    );
  }