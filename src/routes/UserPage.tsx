import { Container } from "react-bootstrap"
import { Link, useLoaderData } from "react-router-dom";


interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}


// eslint-disable-next-line react-refresh/only-export-components
export const usersLoader = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users
}


export default function UserPage() {
 
const users = useLoaderData() as User[]
    return(
        <>
        <Container>
        
        <ul>
            {users.map(user => (
                <li key={user.id}>
                <Link style={{textDecoration:'none', color:"black", fontSize:'18px',fontWeight:'600'}} to={`/users/${user.id}`}>{user.name}</Link>
                </li>
            ))}
        </ul>
        </Container>
        </>

    )
    
    }