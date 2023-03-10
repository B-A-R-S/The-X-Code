import React, { useState } from 'react';
import {Text, StyleSheet,  Button , View , TextInput } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';


export default function Login({ navigation }) {
  const [mail, setEmail] = useState('');
  const [passW, setPassword] = useState('');

  const onLoginButton = () => {
    if (mail !== '' && passW !== '') {
     signInWithEmailAndPassword(auth, mail, passW)
        .then(() => console.log('Login success'))
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Welcome back chat room!</Text>
      <TextInput
        style={styles.inputItem}
        placeholder='Enter your email'
        value={mail}
        keyboardType='email-address'
        textContentType='emailAddress'
        autoFocus={true}
        onChangeText={text => setEmail(text)}
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