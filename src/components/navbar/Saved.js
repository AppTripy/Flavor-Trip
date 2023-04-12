import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  border: 3px solid red;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`


const Saved = () => {


  return (
    <Container id="saved" >
      Saved
    </Container>
  )
}


export default Saved ;