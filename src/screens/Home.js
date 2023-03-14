import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import firebase from 'firebase/app';                                           
import 'firebase/auth';                                                        
import { auth } from '../../firebase';
import { firestore } from '../../firebase';

const Home = () => {
  const navigation = useNavigation()

  // const handleSignOut = () => {
  //   auth
  //     .signOut()
  //     .then(() => {
  //       navigation.replace("Login")
  //     })
  //     .catch(error => alert(error.message))
  // }

  
  const [name, setName] = useState('') 
  useEffect(() => {
    firestore.collection('patients')
    .doc(auth.currentUser.uid)
    .get()

    .then((snapshot) => {
      if(snapshot.exists){
        setName(snapshot.data())
      }
      else{
        console.log('New patient added to the system')
      }
    })
  }, []) 

  return (
    <View style={styles.container}>
      <Text>Hello {name.firstName}..!</Text>
     
      <TouchableOpacity
        onPress={() => 
          auth
          .signOut() 
          .then(() => navigation.replace('Login'))
        }
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})
