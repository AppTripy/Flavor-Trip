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

  setTimeout(()=>{
    props.set(false)
  },300)

  return (
    <Container>
      <img src={logo} />

    </Container>
  )

}


export default Opening ;