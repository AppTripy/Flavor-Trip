import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import styled from 'styled-components';
import * as Keychain from 'react-native-keychain';

const BadLogin = styled.div`
  color: red;
  text-align: center;
  font-family: 'Arial';
  font-size: 16 ; 
  font-weight: 500;
`

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ badLogin , setBadLogin ] = useState(false)


  const handleLog = async function (res)  {
    console.log('------- RES OF AXIOS',res);
    if (res) {
      // Store the credentials
      await Keychain.setGenericPassword(email, password);
    }
  }
  const handleAuth = () => {
    if (isLogin) {
      // Handle Login
      axios.post('https://brr.com', {email:email , password:password})
      .then((res)=> {handleLog(res)})
      .catch(function(err){
        console.log('Error signing in!');
        setBadLogin(true)

      })
    } else {
      // Handle Signup
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? 'Login' : 'Signup'}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
        { !isLogin && <TextInput
          style={styles.input}
          placeholder="Re-enter Password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        /> }
        { badLogin && <BadLogin>Incorrect Password or Username </BadLogin> }
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAuth}>
        <Text style={styles.buttonText}>{isLogin ? 'Login' : 'Signup'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
        <Text style={styles.switchText}>{isLogin ? 'Need an account? Signup' : 'Already have an account? Login'}</Text>
        
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#007aff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  switchText: {
    color: '#007aff',
    fontSize: 16,
  },
});

