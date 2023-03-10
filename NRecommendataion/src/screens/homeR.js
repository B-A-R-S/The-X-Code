// Importing necessary modules from React Native
import React from 'react';
import { Text, StyleSheet, View, Button, ImageBackground, TouchableOpacity } from "react-native";

// Defining a functional component called "homeR"
const homeR = ({ navigation }) => {
  // The component returns a view containing text and three touchable buttons
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recommendation</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Home2")}>
        <Text style={styles.button1}>Insulin Dosage</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Home1")}>
        <Text style={styles.button1}>Meal Plan</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Home3")}>
        <Text style={styles.button1}>Workout</Text>
      </TouchableOpacity>

    </View>
  )
};

// Defining the styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 35,
    textAlign: 'center',
    color: '#006400',
    fontWeight: 'bold',
  },
  button1: {
    fontSize: 40,
    textAlign: 'center',
    padding: 30,
    color: "blue",
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 80,
    marginBottom: 50,
    marginTop: 20,
    backgroundColor: "black",
    height: 160,
    width: 260,
    borderRadius: 15,
  },
});

// Exporting the homeR component
export default homeR;