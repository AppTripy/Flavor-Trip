import styled from "styled-components";
import Profil from "./Profil";
import Recipe from "./Recipe";
import Search from "./Search";

const Container = styled.div`
  width: 100%;
  height: 50px;
  position :absolute ;
  bottom: 0;
  border: 3px solid blue;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 0 30px ;
  align-items: center;
  gap:40px;
`

const Navbar = () => {


  return(
    <Container>
      <Profil />
      <Recipe />
      <Search />
    </Container>
  )
}


export default Navbar ;