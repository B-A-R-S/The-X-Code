import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Platform, StatusBar, } from 'react-native'
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

    <SafeAreaView style={styles.container}>

      <View style={{flex: 1}}>
        <Text style={{fontSize: 25}}>Welcome to home page</Text>
      </View>

      <View style={{flex: 5}}>
        <TouchableOpacity>
          <View>
            <Text
            style={[styles.buttons, styles.parent]}
            onPress={() => navigation.navigate('RecommendationsMenu')}
            >Get recommendations</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <View>
            <Text
            style={[styles.buttons, styles.child]}
            onPress={() => navigation.navigate('ReadData')}
            >Knowlege hub</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <View>
            <Text
            style={[styles.buttons, styles.signUp]}
            onPress={() => navigation.navigate('Chat_Home')}
            >Get peer support</Text>
          </View>
        </TouchableOpacity>
        
      </View>
      <StatusBar style="auto" />
      
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

          
    </SafeAreaView>
  )
}



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






  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "space-around",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
  buttons: {
    fontSize: 20,
    padding: 35,
    margin: 20,
    textAlign: "center",
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 20
  },
  parent: {
    backgroundColor: "#9cdb9e",
    borderColor: "#457346",
  },
  child: {
    backgroundColor: "#f2b1f1",
    borderColor: "#6e3c6d",
  },
  signUp: {
    backgroundColor: "#97dae6",
    borderColor: "#4a7a82",
  },












})

export default Home