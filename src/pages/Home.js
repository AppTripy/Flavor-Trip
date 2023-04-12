import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";
import MainView from "../components/mainview/MainView";
import { useState } from "react";
const Container = styled.div`
  height: 100vh;
  width: 100%;
`

const Home = () => {


  return (
    <Container>
      <MainView  />
      <Navbar  />
    </Container>
  )
}



export default Home ;