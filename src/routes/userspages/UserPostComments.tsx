import { Container } from "react-bootstrap"
import { Link, useLoaderData,useParams } from "react-router-dom";


interface uPostsComments{
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const userPostCommentsLoader = async ({params} : { params :{postsId : string}}) => {
    const response  = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postsId}/comments`);
     const userPostsComments = await response.json();
    
     return  userPostsComments
    
    }
    

 
export default function UserPostsComments() {
    const userPostsComments = useLoaderData() as uPostsComments[]
    const {postsId} = useParams();

   
return(
    <>
    <Container>
    <h2>Post : ...{localStorage.getItem("userPostComments")}</h2>
    <ul>
     <Link  style={{color:'white', fontSize:'18px'}} to={`/users/${postsId}`}>Kullanıcı Adı:{localStorage.getItem("userName")} </Link> 
      {userPostsComments.map(userPostsComments => (
      <li key={userPostsComments.id}> {userPostsComments.body}</li>
    ))}
    </ul>
    
    </Container>
    </>
)}