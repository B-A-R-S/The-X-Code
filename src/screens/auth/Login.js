import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase';
import Lottie from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';




const Separator = () => <View style={styles.separator} />;

// 



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation()


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        navigation.navigate("Splash")
      }
    })
  
    return unsubscribe
  },[])


  const handleLogin = () => {
    // validate the email and password and authenticate the user  
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
      // Signed in 
        const user = userCredential.user;
        console.log('Patient logged in with:', user.email);
      })
    .catch(error => alert(error.message))
  }

  
  
  

  const handleForgotPassword = () => {
    console.log('Forgot Password');
    // navigate to the forgot password screen or show a modal to reset password
    
  };

  return (
    
    
    <SafeAreaView style={styles.container}>
      <Lottie style={styles.lottie} source={require('../../assets/Login.json')} autoPlay loop />


      <Text style={styles.t1Login}>Welcome back..!</Text>
      {/* <Text style={styles.label}>Email</Text> */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {/* <Text style={styles.label}>Password</Text> */}
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />

      <Separator />
      
      {/* <Button title="Sign In" onPress={handleLogin} style={styles.loginButton} /> */}

      <TouchableOpacity title='Login' onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* <View style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText} onPress={handleForgotPassword}>Forgotten password?</Text>
      </View> */}

      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate('Login_1')}>
          <Text style={styles.forgotPasswordText}>Forgotten password?</Text>
        </TouchableOpacity>
      </View>

      <Separator />

      <View style={styles.signUpButtonContainer}>

        <TouchableOpacity title='Create An Account' onPress={() => navigation.navigate('Register')} style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonText2}>CREATE NEW ACCOUNT</Text>
        </TouchableOpacity>

        {/* <Button title='Create An Account' style={styles.signUpButton}></Button> */}
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 180
  },
  label: {
    fontWeight: 'bold',
    fontSize:15,
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    backgroundColor:'white',
    textAlign:'center',
    fontSize:15,
    fontWeight:'700',
    
  },
  forgotPasswordContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
    marginBottom: 10,
  },
  forgotPasswordText: {
    color: '#0782F9',
    // textDecorationLine: 'underline',
    textAlign:'center',
    marginBottom:10,
    fontWeight:'700',
    fontSize:16,
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  loginButton: {
    borderRadius: 10,
    color:'#841584'
  },

  signUpButtonContainer:{
    marginTop:10,
  },

  t1Login:{
    marginBottom:20,
    marginTop:-10,
    fontSize:24,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    fontWeight:'700',
    fontStyle:''
  },

  button:{
    backgroundColor:'#0782F9',
    width:'100%',
    alignItems:'center',
    borderRadius:10,
    padding:10,
  },

  buttonOutline:{
    backgroundColor:'white',
    borderWidth:2,
    borderColor:'#0782F9'
  },

  buttonText2:{
    color:'#0782F9',
    fontSize:15,
    fontWeight:'700'
    
  },

  buttonText:{
    color:'white',
    fontSize:15,
    fontWeight:'700'
    
  },

  lottie:{
    width:300, 
    height:200, 
    alignSelf:'center',
    marginTop:-45,
    marginBottom:-40
  }


});

export default Login;
