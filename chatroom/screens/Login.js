// Importing necessary modules and functions from React Native and Firebase
import React, { useState } from 'react';
import {Text, StyleSheet,  Button , View , TextInput } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

// Login function component
export default function Login({ navigation }) {
  // Defining states for email and password
  const [mail, setEmail] = useState('');
  const [passW, setPassword] = useState('');

  // Defining states for email and password
  const onLoginButton = () => {
    if (mail !== '' && passW !== '') { // Check if email and password are not empty
     signInWithEmailAndPassword(auth, mail, passW)  // Sign in with email and password
        .then(() => console.log('Login success'))  // On successful login, log message to console
        .catch((err) => Alert.alert("Login error", err.message)); // On login error, display error message using Alert
    }
  };

  return ( //Return for Login component
    <View style={styles.container}>
      <Text style={styles.head}>Welcome back chat room!</Text>
      <TextInput
        style={styles.inputItem}
        placeholder='Enter your email'
        value={mail}
        keyboardType='email-address'
        textContentType='emailAddress'
        autoFocus={true}
        onChangeText={text => setEmail(text)}  // Update email state on text change
      />
      <TextInput
        style={styles.inputItem}
        placeholder='Enter your password'
        value={passW}
        autoCorrect={false}
        secureTextEntry={true}
        textContentType='password'
        onChangeText={text => setPassword(text)}
      />
      <Button onPress={onLoginButton} color='#f57700' title='Click to Login' />
      <Button
        onPress={() => navigation.navigate('Signup')}
        title='Go to Signup'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    paddingTop: 65,
    paddingHorizontal: 15
  },
  head: {
    fontSize: 28,
    fontWeight: '600',
    color: '#000',
    alignSelf: 'center',
    paddingBottom: 150
  },
  inputItem: {
    backgroundColor: '#fff',
    marginBottom: 20,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    padding: 12
  }
});