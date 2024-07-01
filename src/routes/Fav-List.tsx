import { Container } from "react-bootstrap"
import { useFavoritesStore } from "../stores/favoriteList";
import styled from "styled-components";
import { useFavoriteStore } from "../stores/favotite";
import { Link } from "react-router-dom";



interface Photo {
    userId: number;
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }

  const Img = styled.img`
  width : 200px;
  height : 200px;
  gap : 20px;
  padding:20px;
`;
 
const Delete = styled.button`
 width: 100px;
 height: 50px;
 background-color: #aa0412;
 margin-left: 10px;
 margin-bottom: 10px;
 border-radius: 4px;
`;


export default function FavList() {
const {photos, deletePhotoFromFavorites} = useFavoritesStore(); 
const unFav = useFavoriteStore((state) => state.unFav)

const handleDeleteFavorite = (photo: Photo) => {
    deletePhotoFromFavorites(photo);
    unFav();
  };

return(
    <>
    <Container>
    <h2>Sepettekilerin Listesi</h2>
   
   <ul>
   {photos.map(photos =>(
       <><li key={photos.id}>
          <div style={{ fontWeight: 'bold', textDecoration: 'underline',color:'white'}}>
           <Link to={`/users/${photos.albumId}/albums`}><Img src={photos.url}></Img>  <br /></Link>

           <span >AlbumId: </span>{photos.albumId} <br />
           <span >Id: </span> {photos.id}  <br />
           <span >ThumUrl: </span> {photos.thumbnailUrl}  <br />
           <span >Title: </span>{photos.title}  <br />
           <span >Url: </span>  {photos.url}   <br />
           <br />
           <br />
           </div>
       </li><Delete onClick={()=>handleDeleteFavorite(photos.id)}>Sil</Delete></>
))}
</ul>
</Container>
    </>
)}

