import { Container } from "react-bootstrap"
import { Link, useLoaderData, useParams } from "react-router-dom";

interface uAlbums{
    userId: number;
    id:number;
    title:string;
}

// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/no-explicit-any
export const userAlbumsLoader :any = async ({params} : { params :{userId : string}}) => {
    const response  = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/albums`);
     const userAlbums = await response.json();
     return userAlbums
    }

export default function UserAlbums() {
    const userAlbums = useLoaderData() as uAlbums[]
    const {userId} = useParams();
    
    function handleItemClick1(id:number) {
    const userAlbum: string = userAlbums[id].title;
    localStorage.setItem("userAlbumsPhoto",userAlbum);
    }

return(
    <>
    <Container>
    <h2>Albums</h2>
    {userAlbums.map(userAlbums =>(
        <ul>
            <Link style={{color:'white', fontWeight:'600'}} to={`/users/${userId}/albums/${userId}`}><li key={userAlbums.id} onClick={() => handleItemClick1(userAlbums.id)}>{userAlbums.title}</li> </Link>
            
        </ul>
    ))}
    </Container>
    </>
)}