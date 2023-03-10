import React, { useState } from 'react';
import {Text, View, Button, TextInput,StyleSheet} from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function Signup({ navigation }) {
  const [mail, setEmail] = useState('');
  const [passW, setPassword] = useState('');

  const onSignupButton = () => {
    if (mail !== '' && passW !== '') {
  createUserWithEmailAndPassword(auth, mail, passW)
        .then(() => console.log('Signup success'))
        .catch(err => console.log(`Signup err: ${err}`));
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
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.inputs}
        placeholder='Enter new password'
        value={passW}
        autoCorrect={false}
        secureTextEntry={true}
        textContentType='password'
        onChangeText={text => setPassword(text)}
      />
      <Button onPress={onSignupButton} color='#f57c00' title='Click to Signup' />
      <Button
        onPress={() => navigation.navigate('Login')}
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