import { useState } from 'react';
import LoginSignup from './src/pages/LoginSignup'
import Opening from './src/pages/Opening'
import * as Keychain from 'react-native-keychain';
import Home from './src/pages/Home';
import styled from 'styled-components';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';


const Container = styled.div`
  width: 100vw;
  height: 100%;
  
`

const LogUser = async () => {
  try {
    // Retrieve the credentials
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      console.log(
        'Credentials successfully loaded for user ' + credentials.email
      );
    } else {
      console.log('No credentials stored');
    }
  } catch (error) {
    console.log("Keychain couldn't be accessed ossaf !", error);
  }
}

export default function App() {

  const [ showOpening , setShowOpening ] = useState(true)
  const [ showLogReg , setShowLogReg ] = useState(true)

  // if (showOpening === true) {
  //   LogUser()
  // }
  
  return (
    <Provider store={store}>
      <Container>
        {/* { showOpening && <Opening set={setShowOpening} /> }
        { !showOpening && showLogReg && <LoginSignup set={setShowLogReg} /> } */}
        { showLogReg && <Home /> }
      </Container>
    </Provider>
  );
}

