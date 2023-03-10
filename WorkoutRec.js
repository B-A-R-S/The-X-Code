import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Platform, StatusBar, TextInput, Alert} from 'react-native';
import {useDimensions } from '@react-native-community/hooks';
export default function WorkoutRec() {
  console.log("App executed");

  const [text, onChangeText] = React.useState('Input Your Gender');
  const [number1, onChangeNumber1] = React.useState('Input your Age');
  const [number2, onChangeNumber2] = React.useState('Input your Weight');
  const [number3, onChangeNumber3] = React.useState('Input your Height');
  const [number4, onChangeNumber4] = React.useState('Input the no.of calories you want to burn');

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 25}}>Workout Recommendation</Text>
      </View>

      <View style={{flex: 4}}>
        <Text style={{fontSize: 20}}>Input the following to get the workout recommendation :</Text>

        <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        value={text}/>

        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber1}
        value={number1}
        placeholder="useless placeholder"
        keyboardType='numeric'/>

        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="useless placeholder"
        keyboardType='numeric'/>

        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber3}
        value={number3}
        placeholder="useless placeholder"
        keyboardType='numeric'/>

        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber4}
        value={number4}
        placeholder="useless placeholder"
        keyboardType='numeric'/>

      </View>

      <View style={{flex: 1}}>
      <Button
        color="green" 
        title="Get Workout Recommendation"
        onPress={() => Alert.alert("Here is your recommendation", "Ride a bicycle for 30 minutes", [{text: "Got it"}])}
        />
      </View>
       
    <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});

