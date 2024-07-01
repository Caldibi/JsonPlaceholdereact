import { Container } from "react-bootstrap"
import { useLoaderData } from "react-router-dom";

interface uTodos {
    userId: number; 
    id: number;
    title: string;
    completed: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
export const userTodosLoader = async ({params} : { params :{userId : string}}) => {
    const response  = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/todos`);
     const userTodos = await response.json();
     return userTodos
    }

export default function UserTodos() {
    const userTodos = useLoaderData() as uTodos[]
return(
    <>
    <Container>
    <h2>Todos</h2>
    <ul>
      {userTodos.map(userTodos => (
        <li style={{color:'white', fontWeight:'600'}}  key={userTodos.id}>
        <input type="checkbox" checked={userTodos.completed} readOnly/> {userTodos.title}
        </li>
        
      ))}
    </ul>
    </Container>
    </>
)}