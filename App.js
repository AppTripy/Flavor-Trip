import { useState } from 'react';
import LoginSignup from './src/pages/LoginSignup'
import Opening from './src/pages/Opening'
import * as Keychain from 'react-native-keychain';

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

  if (showOpening === true) {
    LogUser()
  }
  
  return (
    <>
      <Opening set={setShowOpening} />
      { !showOpening && <LoginSignup /> }
    </>
  );
}

