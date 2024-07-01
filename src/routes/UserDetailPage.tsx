import { Container } from "react-bootstrap"
import { useParams, useLoaderData, Link } from "react-router-dom";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const userLoader = async ({params} : { params :{userId : string}}) => {
const response  = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
 const user = await response.json();
 return user
}



export default function UserDetailPage() {
 const user = useLoaderData() as User 
 const {userId} = useParams();
 const userNames: string = user.name;
 localStorage.setItem("userName",userNames);
return(
    <>
    <Container>
    
    <h1>{user.name}</h1>
    <p>Kullanıcı Adı : {user.name}</p>
    <p>E-posta : {user.email}</p>
    <div>
        <ul>
            <li>
                <Link to={`/users/${userId}/posts`}>Posts</Link>
            </li>
            <li>
                <Link to={`/users/${userId}/albums`}>Albums</Link>
            </li>
            <li>
                <Link to={`/users/${userId}/todos`}>Todos</Link>
            </li>
        </ul>
    </div>
    </Container>
    </>
    
)

}