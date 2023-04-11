import { useState } from 'react';
import LoginSignup from './src/components/LoginSignup'
import Opening from './src/pages/Opening'

export default function App() {

  const [ showOpening , setShowOpening ] = useState(true)
  return (
    <>
      <Opening set={setShowOpening} />
      { !showOpening && <LoginSignup /> }
    </>
  );
}

