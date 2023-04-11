import { useState } from "react";
import styled from "styled-components";


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
  },2000)

  if (show === true) {
    return (
      <Container>
        Animation...
      </Container>
    )
  }
}


export default Opening ;