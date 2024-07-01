import { Container } from "react-bootstrap"
import { Link, useLoaderData,useParams } from "react-router-dom";
import styled from "styled-components";
import { useFavoriteStore } from "../../stores/favotite";
import {useFavoritesStore} from "../../stores/favoriteList";
import { FaHeart, FaHeartBroken  } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


interface uAlbumsPhotos{
    albumId:number;
    id: number;
    title:string;
    url: string;
    thumbnailUrl: string;
}

const Img = styled.img`
  width : 200px;
  height : 200px;
  gap : 20px;
  padding:20px;
`;

const Favorite = styled.button`
 width: 75px;
 height: 50px;
 background-color: #df3b7f;
 margin-left: 20px;
 margin-bottom: 10px;
 border-radius: 4px;
`;
const UnFavorite = styled.button`
 width: 75px;
 height: 50px;
 background-color: #643a61;
 margin-left: 10px;
 margin-bottom: 10px;
 border-radius: 4px;
`;


// eslint-disable-next-line react-refresh/only-export-components
export const UserAlbumsPhotosLoader = async ({params} : { params :{albumId : string}}) => {
    const response  = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumId}/photos`);
     const usersAlbumsPhotos = await response.json();
     return  usersAlbumsPhotos
    }
    

export default function UserAlbumsPhotos() {
    const usersAlbumsPhotos = useLoaderData() as uAlbumsPhotos[]
    const {albumId} = useParams();
    const increase = useFavoriteStore((state) => state.increase)
    const unFav = useFavoriteStore((state) => state.unFav)
   
    const { photos, addPhotoToFavorites } = useFavoritesStore();
    const handleAddFavorite = (photo: uAlbumsPhotos) => {
        addPhotoToFavorites(photo);
        increase();
      };
    
 
   console.log(photos);
    
 
return(
    <>
    <Container>
    
    <h2>Albums : ...{localStorage.getItem("userAlbumsPhoto")}</h2>
     <Link style={{color:'white', fontSize:'18px'}} to={`/users/${albumId}`}>Kullanıcı Adı:{localStorage.getItem("userName")} </Link>
    
      {usersAlbumsPhotos.map(usersAlbumsPhotos=>(
        <Row> 
        <Col md={4}>
        <ul> 
        <li key={usersAlbumsPhotos.id}>
          
            <Img src={usersAlbumsPhotos.url}></Img>
            <div>
            <Favorite onClick={()=> handleAddFavorite(usersAlbumsPhotos)}> <FaHeart /></Favorite>
            <UnFavorite onClick={unFav}> <FaHeartBroken /></UnFavorite>
            </div>  
        </li>
        </ul>
        </Col>
        </Row>
      ))}
    
    </Container>
    </>
)}



