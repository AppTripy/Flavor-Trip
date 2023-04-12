import { useState } from "react";
import styled from "styled-components";
const logo = require('../media/logo.png')


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`




const Opening = (props) => {

  

  const [ show , setShow ] = useState(true)

  setTimeout(()=>{
    setShow(false)
    props.set(false)
  },1000)

  if (show === true) {
    return (
      <Container>
        <img src={logo} />

      </Container>
    )
  }
}


export default Opening ;