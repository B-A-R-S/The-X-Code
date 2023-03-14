import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { stringLength } from '@firebase/util'

const Login_1 = () => {

  const navigation = useNavigation()

  return (
    <SafeAreaView style = {styles.upper}>
      <View style = {styles.bottom}>
        
        <TouchableOpacity style = {styles.logins} onPress={() => navigation.navigate('Onboarding')}>
          <Text style = {styles.text_1}>Get Started</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style = {styles.register} onPress={() => navigation.navigate('Login')}>
          <Text style = {styles.text_2}>Login</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
    
  )
}

export default Login_1;

const styles = StyleSheet.create({

  upper:{
    

    width: 490,
    height: 494,
    left: 0,
    top: 0,
    
    backgroundColor: '#F22F5E',
  },

  bottom:{

    width: 412,
    height: 422,
    left: 0,
    top: 269,

    backgroundColor: '#FFFFFF',
    borderRadius: 36,
  },

  logins:{

    width: 342,
    height: 50,
    left: 35,
    top: 159,
    backgroundColor: '#F22F5E',
    shadowColor: '0 4 4 rgba(0, 0, 0, 0.25)',
    borderRadius: 22,
  },

  register:{
    box: 'border-box',
    width: 342,
    height: 50,
    left: 35,
    top: 169,

    background: '#FFFFFF',
    borderRadius: 22,
    borderWidth:3,
    borderColor:'#F22F5E',
  },

  text_1:{
    // width: 83,
    height: 43,
    // left: 135,
    top: 8,

    // fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 30,
    alignSelf: 'center',

    color: '#FFFFFF',
  },

  text_2:{
    position: 'absolute',
    // width: 102,
    height: 30,
    // left: 129,
    top: 5,

    // font-family: 'Inter',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 25,
    lineHeight: 30,
    alignSelf: 'center',

    color: '#F22F5E',


  }
})