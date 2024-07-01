import { Container } from "react-bootstrap"
import styled from "styled-components"

const Welcome = styled.div`
margin-top: 25px;
color: #161616;
:hover{
    color: #1f0091;
}
`;

export default function HomePage() {

return(
    <>
    <Container>
    <Welcome>
    <h1>Hoşgeldiniz</h1>
    
    </Welcome>
    <h4 style={{color:'black'}} >Bu proje Json-placeholder ile hazırlanan,<br></br> bir React çalışmasıdır...</h4>
    
    </Container>
    </>
)}