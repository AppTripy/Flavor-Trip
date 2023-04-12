import styled from "styled-components";
import Profil from "./Profil";
import Recipe from "./Recipe";
import Search from "./Search";
import Saved from "./Saved";

import {dispatch} from '../../redux/store'
import { setView } from '../../redux/viewSlice'


const Container = styled.div`
  width: 100%;
  height: 7vh;
  position :absolute ;
  bottom: 0;
  border: 3px solid blue;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 0 30px ;
  align-items: center;
  gap:30px;
`

const Navbar = () => {

  

  return(
    <Container onClick={(e)=>(dispatch(setView(e.target.id)))}>
      <Search />
      <Recipe  />
      <Saved />
      <Profil />
    </Container>
  )
}


export default Navbar ;