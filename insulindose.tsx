import React from "react";
import {  StyleSheet, Text,View , Button } from "react-native/types";
const TitleBar = () => {
    return (
      <View style={styles.containertitle}>
        <Text style={styles.title}>X - C O D E</Text>
        
      </View>
    );
  };
const Insulin = () => {
    return(
        <View style={styles.container0}>

            <Text style={styles.title0}>Total Daily Insulin Dose</Text>
            <Text style={styles.title1}>Do you want to re-calculate the dose?</Text>

    
        </View>

    );

}

const CalculateButton = ({ onPress, title }) => {
    return (
      <View style={styles.buttonContainer}>
        <Button onPress={onPress} title={title} />
      </View>
    );
  };
  
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


    container0:{
        backgroundColor:"#D6EAF8"
        
        

    }
,
    title0:{
        fontFamily:"Arial",
        fontSize:18

    },
    title1:{
        fontSize:14,
        textAlign:"justify"
    },
    buttonContainer: {
        margin: 10,
      }



})
export default Insulin;