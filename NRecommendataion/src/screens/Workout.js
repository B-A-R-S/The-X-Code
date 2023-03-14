// Importing necessary modules from React Native
import React from 'react';
import { Text, StyleSheet, View, Button, ImageBackground } from "react-native";

// Defining a functional component called "Workout"
const Workout = () => {
  // The component returns a view containing a text element
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Workout</Text>
    </View>
  )
};

// Defining the styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 50
  }
});

// Exporting the Workout component
export default Workout;