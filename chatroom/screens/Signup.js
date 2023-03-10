import React, { useState } from 'react';
import {Text, View, Button, TextInput,StyleSheet} from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Importing Firebase authentication functions
import { auth } from '../config/firebase';  // Importing Firebase authentication object

export default function Signup({ navigation }) {
  const [mail, setEmail] = useState(''); // Setting up state for email
  const [passW, setPassword] = useState(''); // Setting up state for password

  const onSignupButton = () => {
    if (mail !== '' && passW !== '') {
  createUserWithEmailAndPassword(auth, mail, passW) // Using createUserWithEmailAndPassword function from Firebase to create a new user account
        .then(() => console.log('Signup success'))  // Logging success message on successful account creation
        .catch(err => console.log(`Signup err: ${err}`));  // Logging error message on unsuccessful account creation
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Create new chat room account</Text>
      <TextInput
        style={styles.inputs}
        placeholder='Enter your email'
        value={mail}
        keyboardType='email-address'
        textContentType='emailAddress'
        onChangeText={text => setEmail(text)}   // Updating email state on text input
      />
      <TextInput
        style={styles.inputs}
        placeholder='Enter new password'
        value={passW}
        autoCorrect={false}
        secureTextEntry={true}
        textContentType='password'
        onChangeText={text => setPassword(text)}  // Updating password state on text input
      />
      <Button onPress={onSignupButton} color='#f57c00' title='Click to Signup' /> // Calling onSignupButton function on button press
      <Button
        onPress={() => navigation.navigate('Login')}   // Navigation to Login screen on button press
        title='Go to Login'
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
  inputs: {
    backgroundColor: '#fff',
    marginBottom: 20,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    padding: 12
  }
});