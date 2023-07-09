// Importing necessary modules from React Native..............
import React from 'react';
import { Text, StyleSheet, View, Button, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AppHeader from './AppHeader';

// Defining a functional component called "homeR"
const RecommendationsMenu = () => {
  // The component returns a view containing text and three touchable buttons

  const navigation = useNavigation()
  return (
    
    <View>
      <AppHeader/>
      <Text style={styles.text}>Recommendations</Text>

      <View style={styles.container}>

        
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("Insulin")}>
          <Text style={styles.bttnText}>Insulin Dosage</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("MealRecommendationNew")}>
          <Text style={styles.bttnText}>Meal Plan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("WorkoutRec")}>
          <Text style={styles.bttnText}>Workout</Text>
        </TouchableOpacity>

      </View>
    </View>
     
    
  )
};

// Defining the styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  text: {
    fontSize: 35,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginTop:20,
  },
  button1: {

    // padding: 20,
    // color: "white",
    alignSelf:'center',
    margin:10,
    backgroundColor: "#0782F9",
    height: 150,
    width: 280,
    borderRadius: 15,
  },

  bttnText:{
    fontSize: 37,
    textAlign: 'center',
    padding: 30,
    color: "white",
    textAlign:'center',
    fontStyle:'bold',
    fontWeight:'bold',
  },
});

// Exporting the homeR component
export default RecommendationsMenu;