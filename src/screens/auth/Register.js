
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import firebase from 'firebase/app';                                      
import 'firebase/auth';                                                   
import 'firebase/firestore';
import { auth, firestore } from '../../../firebase';






const Register = () => {
  const navigation = useNavigation()
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  // const handleRegister = () => {
  //   console.log(`First Name: ${firstName} Last Name: ${lastName} Gender: ${gender} Age: ${age} Email: ${email}`);
  //   // validate the form and register the user

  //   auth
  //   .createUserWithEmailAndPassword(email, password)
  //   .then((userCredential) => {
  //   // Signed in 
  //     const user = userCredential.user;
  //     console.log('Registered with:', user.email);
  //   })
  //   .catch(error => alert(error.message))
      
  // };


  const registerUser = async (password, firstName, lastName, email, age, gender) => {
    try {
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          auth.currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url:'https://t1-diabetes-management-68efb.firebaseapp.com',
          })
            .then(() => {
              alert('Verification mail is sent')
              firestore
                .collection('patients')
                .doc(auth.currentUser.uid)
                .set({
                  
                  password,
                  firstName,
                  lastName,
                  email,
                  age,
                  gender,
                })
                .catch((error) => {
                  alert(error.message)
                })
            })
            .catch((error) => {
              alert(error.message)
            })
        })
    } catch (error) {
      alert(error.message)
    }
  }
  
  



  const handleAlreadyUser = () => {
    console.log('Sign In');
    // navigate to the forgot password screen or show a modal to reset password
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.userRegistration}>User Registration</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your first name"
        value={firstName}
        onChangeText={(firstName) => setFirstName(firstName)}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your last name"
        value={lastName}
        onChangeText={(lastName) => setLastName(lastName)}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your gender"
        value={gender}
        onChangeText={(gender) => setGender(gender)}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        value={age}
        onChangeText={(age) => setAge(age)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(email) => setEmail(email)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter new Password"
        value={password}
        onChangeText={(password) => setPassword(password)}
        keyboardType="password"
        autoCapitalize="none"
      />
      {/* <Button title="Register" onPress={handleRegister} /> */}
      <TouchableOpacity title="Register" onPress={() => registerUser(password, firstName, lastName, email, age, gender)} style={styles.regButton}>
        <Text style={styles.regButtonText}>Create My Account</Text>
      </TouchableOpacity>

      <View style={styles.signInContainer}>
        <Text>Already have an account? <Text style={styles.signInText} onPress={() => navigation.navigate('Login')}> Sign In</Text></Text> 
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 100
  },
  label: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 0,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    textAlign:'center',
    fontSize:16
  },
  userRegistration:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:20, 
    marginTop:-30,
    marginBottom: 20,
  },

  signInContainer:{
    alignItems:'center',
    marginTop:10,
  },

  signInText:{
    color: 'blue',
    textDecorationLine: 'underline',
    fontWeight:'bold'
  },

  regButton:{
    backgroundColor:'#0782F9',
    width:'100%',
    alignItems:'center',
    borderRadius:10,
    padding:10,
  },

  regButtonText:{
    color:'white',
    fontSize:15,
    fontWeight:'700'
  }
});

export default Register;
