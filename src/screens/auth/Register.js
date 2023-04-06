
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import firebase from 'firebase/app';                                      
import 'firebase/auth';                                                   
import 'firebase/firestore';
import { auth, firestore } from '../../../firebase';
import Checkbox from 'expo-checkbox';


const Register = () => {
  const navigation = useNavigation()
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const [isChecked, setChecked] = useState(false);
  

  const registerUser = async (password, firstName, lastName, email, age, gender) => {
    if (!firstName || !lastName || !gender || !age || !email || !password) {
      alert('Please fill all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email address.');
      return;
    }
    
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }
    
    if (isNaN(parseInt(age)) || age < 1 || age > 120) {
      alert('Please enter a valid age.');
      return;
    }
    if (isChecked) {
      // alert('Checkbox is checked');
    } else {
      alert('Please accept our terms and conditions');
      return
    }

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
      
      <View style = {styles.names}>
        <TextInput
        style={styles.firstName}
        placeholder="First name"
        value={firstName}
        onChangeText={(firstName) => setFirstName(firstName)}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.lastName}
        placeholder="Last name"
        value={lastName}
        onChangeText={(lastName) => setLastName(lastName)}
        autoCapitalize="words"
      />
      </View>

      <View style = {styles.ageAndGender}>
      <TextInput
        style={styles.genderInput}
        placeholder="Gender"
        value={gender}
        onChangeText={(gender) => setGender(gender)}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.ageInput}
        placeholder="Age"
        value={age}
        onChangeText={(age) => setAge(age)}
        keyboardType="numeric"
      />
      </View>
     
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

        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#0782F9' : undefined}
          />
          <Text style={styles.paragraph}>By checking, you confirm that you
            accept our Terms & Conditions and have read our 
          <Text style = {styles.signInText} 
          onPress={() => navigation.navigate('PrivacyPolicy')}> Privacy Policy</Text></Text>
        </View>

      {/* <Button title="Register" onPress={handleRegister} /> */}
      <TouchableOpacity title="Register" onPress={() => registerUser(password, firstName, lastName, email, age, gender)}  style={styles.regButton}>
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
    fontSize:16,
    backgroundColor:'white',
    top:10,
    width:350,
  },
  firstName: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    backgroundColor:'white',
    fontSize:16, 
    width:170,
    marginRight:10
  },

  lastName: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    backgroundColor:'white',
    fontSize:16, 
    width:170,
    // right:-190,
    // bottom:60,
  },

  names:{
    flexDirection:'row',
    top:10,
  },
  
  genderInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    marginRight:10,
    backgroundColor:'white',
    fontSize:16, 
    width:170,
    // right:-190,
    // bottom:60
  },

  ageInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    backgroundColor:'white',
    fontSize:16, 
    width:170,
    // bottom:120
  },

  ageAndGender:{
    flexDirection:'row',
    top:10,
    // padding:10,
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
    marginTop:70,
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
    top:50,
  },

  regButtonText:{
    color:'white',
    fontSize:15,
    fontWeight:'700'
  },

  section: {
    flexDirection: 'row',
    alignItems: 'center',
    top:3,
    right:8,

  },
  
  checkbox: {
    margin: 8,
  },

  paragraph: {
    fontSize: 13,
    top:3,
    flexWrap:'wrap',
    marginRight:30
    
  },
});

export default Register;
