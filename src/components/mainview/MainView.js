import styled from "styled-components"
import { useSelector  } from "react-redux";

import RecipeView from './RecipeView'
import ProfilView from './ProfilView'
import SearchView from './SearchView'
import SavedView from './SavedView'

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
    { (view === "recipe") && <RecipeView /> }
    { (view === "saved") && <SavedView /> }
    { (view === "search") && <SearchView /> }
    { (view === "profil") && <ProfilView /> }
    </Container>
  )
}


export default MainView ;