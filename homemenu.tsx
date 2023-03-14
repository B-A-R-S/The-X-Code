import React from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native/types";
import { createDrawerNavigator } from 'react-navigation-drawer';
const TitleBar = () => {
  return (
    <View style={styles.containertitle}>
      <Text style={styles.title}>X - C O D E</Text>
      <Text style={styles.Userwelcometext}>Hello User!</Text>
      <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.toggleDrawer()}>
        <Text style={styles.menuText}>Menu</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
};
const SettingsScreen = () => {
  return (
    <View style={styles.containerS}>
      <Text style={styles.title}>Settings Screen</Text>
    </View>
  );
};
const DropDownMenu =()=> {
    return
        <ul className='flex flex.col gap-4' style={styles.ul}>
            <li>option1</li>
            <li>option2</li>
            <li>option3</li>
            <li>option4</li>
            <li>option5</li>
        </ul>
    
}
const container1 =()=>{
    const Button1 = () => {
    return (
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.buttonText1}>Get Recommendation</Text>
      </TouchableOpacity>
    );
    };
    const Button2 = () => {
    return (
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttonText2}>Knowledge Hub</Text>
      </TouchableOpacity>
    );
     };
    const Button3 = () => {
    return (
      <TouchableOpacity style={styles.button3}>
        <Text style={styles.buttonText3}>Peer Support</Text>
      </TouchableOpacity>
    );
    };}
const styles = StyleSheet.create({

    containertitle:{
      backgroundColor:'#000C66',
      width:"100%",
      height:100


    },
    title:{
      fontSize: 24,
      fontWeight:'bold',
      textAlign:"justify"

    },
    menuIcon: {
      position: 'absolute',
      top: 0,
      left: 0,
      padding: 10,
    },
    menuText: {
      fontSize: 18,
      fontWeight: 'bold',
    },containerS: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    Userwelcometext:{
      fontSize:20,
      textAlign:"right"
      
    }
    
    ,
    container0:{
        backgroundColor: 'light blue',
        width:"100%",
        height:150
    },
    Title:{
        fontSize:15,
        fontWeight:'bold',
        textAlign:'right'



    },
    ul:{
        

    }
    ,
    container1:{
        backgroundColor:'#D4F1F4'


    },
    button1: {
        backgroundColor: '#05445E',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText1: {
        color: '#fff',
        fontSize: 16,
    },
    button2: {
        backgroundColor: '#05445E',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText2: {
        color: '#fff',
        fontSize: 16,
    },
    button3: {
        backgroundColor: '#05445E',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText3: {
        color: '#fff',
        fontSize: 16,
      },

    
    
    
    
})

export default TitleBar;
