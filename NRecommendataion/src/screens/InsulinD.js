// Importing necessary modules from React Native
import React from 'react';
import { Text, StyleSheet, View, Button, ImageBackground } from "react-native";

// Defining a functional component called "InsulinD"
const InsulinD = () => {
  // The component returns a view containing a text element with the text "Insulin"
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Insulin</Text>
    </View>
  )
};

// Defining the styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the container take up the full height of the parent element
    backgroundColor: '#fff', // Set the background color of the container to white
    alignItems: 'center', // Align child elements horizontally in the center
    justifyContent: 'center' // Align child elements vertically in the center
  },
  text: {
    fontSize: 50 // Set the font size of the text to 50
  }
});

// Exporting the InsulinD component
export default InsulinD;