import { Container } from "react-bootstrap"
import { Link, useLoaderData, useParams } from "react-router-dom";


interface uPosts{
    userId: number;
    id: number;
    title: string;
    body: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const userPostLoader = async ({params} : { params :{userId : string}}) => {
    const response  = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/posts`);
     const userPost = await response.json();
     return userPost
    }

    
   
       
export default function UserPosts() {
const userPost = useLoaderData() as uPosts[]
const {userId} = useParams();

function handleItemClick(id:number) {
const userPosts: string = userPost[id].body;
localStorage.setItem("userPostComments",userPosts);
}



return(
    <>
    <Container>
    <h2>Posts</h2>
       
    <ul>

      {userPost.map(userPost => (<Link style={{color:'black'}}  to={`/users/${userId}/posts/${userId}`} >  <li key={userPost.id} onClick={() => handleItemClick(userPost.id)}>{userPost.body}</li></Link>))}
    </ul>
    </Container>
    
    </>
    
)}