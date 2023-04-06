import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {View,Image,Text,StyleSheet} from 'react-native';


const Splash = () =>{

    

    const [isGo,setIsGo]=useState(true);
    const navigation = useNavigation()
     
    useEffect(() => {
        if(isGo==true){
            setTimeout(() => {

            
                navigation.navigate("Home");
                setIsGo(false);
              
            

        },2000);

    }});

    return (
        <View style={styles.container}>

            <Image source={require('./../../assets/logo.png')} style={styles.img}/> 
            <Text style={styles.xcodeText}> X - C O D E</Text>
        </View>
            

    );
}

const styles = StyleSheet.create({

container:{
    flex:1, 
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F4FBE7'
},

img:{
    width:50, 
    height:50,
},

xcodeText:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
},
})


export default Splash;