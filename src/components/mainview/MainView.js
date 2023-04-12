import styled from "styled-components"
import { useSelector  } from "react-redux";


const Container = styled.div`
  width: 100%;
  height: 93vh;
  border: 3px solid red;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`


const MainView = () => {

  const view = useSelector((state) =>  state.mainview.view)

  return (
    <Container>
      {view}
    </Container>
  )
}


export default MainView ;