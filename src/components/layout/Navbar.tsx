import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Link, NavLink } from 'react-router-dom';
import { useFavoriteStore } from "../../stores/favotite";
import { MdFavorite } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";


function BasicExample() {
  const fav = useFavoriteStore((state) => state.fav)
 
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark" >
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/"><h4><IoHomeSharp /></h4></Nav.Link>
            <Nav.Link style={{marginLeft:'20px'}} as={NavLink} to="/users"><h4><FaUsers /></h4></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        
        
        <Link style={{textDecoration:'none'}} to={"/FavList"}><h4 ><MdFavorite />({fav})</h4></Link>
      </Container>
    </Navbar>
  );
}

export default BasicExample;