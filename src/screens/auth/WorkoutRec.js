import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
  TextInput,
  Alert,
} from "react-native";
import axios from "axios";
import AppHeader from "./AppHeader";

export default function WorkoutRec() {
  console.log("App executed");

  const [text, onChangeText] = React.useState("");
  const [number1, onChangeNumber1] = React.useState("");
  const [number2, onChangeNumber2] = React.useState("");
  const [number3, onChangeNumber3] = React.useState("");
  const [number4, onChangeNumber4] = React.useState("");

  const [input, setInput] = useState([]);
  const [recommendation, setRecommendation] = useState();

  function mapGenderToNumber(genderText) {
    if (genderText === "Female") {
      return 1;
    } else if (genderText === "Male") {
      return 2;
    } else {
      return 0; // or any other default value
    }
  }

  function mapOutputToExercise(output) {
    switch (output) {
      case 1:
        return "Rope Skipping";
      case 2:
        return "Jumping Jacks";
      case 3:
        return "Burpees";
      case 4:
        return "Burpees";
      case 5:
        return "Burpees";
      case 6:
        return "Burpees";
      case 7:
        return "Burpees";
      case 8:
        return "Burpees";
      case 9:
        return "Burpees";
      case 10:
        return "Burpees";
      case 11:
        return "Burpees";
      case 12:
        return "Burpees";
      default:
        return "Unknown Exercise";
    }
  }

  const validateInput = () => {
    let isValid = true;

    if (text.length === 0) {
      isValid = false;
      Alert.alert("Error", "Please input your gender");
    } else if (!/^[a-zA-Z ]+$/.test(text)) {
      isValid = false;
      Alert.alert(
        "Error",
        "Invalid gender. Gender should only contain alphabets and spaces"
      );
    }

    if (number1.length === 0) {
      isValid = false;
      Alert.alert("Error", "Please input your age");
    } else if (isNaN(number1)) {
      isValid = false;
      Alert.alert("Error", "Invalid age. Age should be a number");
    }

    if (number2.length === 0) {
      isValid = false;
      Alert.alert("Error", "Please input your weight");
    } else if (isNaN(number2)) {
      isValid = false;
      Alert.alert("Error", "Invalid weight. Weight should be a number");
    }

    if (number3.length === 0) {
      isValid = false;
      Alert.alert("Error", "Please input your height");
    } else if (isNaN(number3)) {
      isValid = false;
      Alert.alert("Error", "Invalid height. Height should be a number");
    }

    if (number4.length === 0) {
      isValid = false;
      Alert.alert(
        "Error",
        "Please input the number of calories you want to burn"
      );
    } else if (isNaN(number4)) {
      isValid = false;
      Alert.alert("Error", "Invalid calories. Calories should be a number");
    }

    return isValid;
  };

  const handleButtonPress = async () => {
    if (!validateInput()) {
        return;
    }

    const input1 = [
      mapGenderToNumber(text),
      Number(number1),
      Number(number3),
      Number(number2),
      Number(number4),
    ];
    const data = {
      int_array: input1,
    };
    console.log(data);

    try {
      await axios
        .post(
          "https://us-central1-t1-diabetes-management-68efb.cloudfunctions.net/predict_test",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          const tempString = JSON.stringify(res.data.response);
          setRecommendation(tempString);
          console.log("Code running..")
          console.log(recommendation);

          Alert.alert("Here is your recommendation", tempString, [
            { text: "Got it" },
          ]);
        });
    } catch (error) {
      console.log(error);
    } 
  };

  return (
    
    <SafeAreaView style={styles.container}>
      <AppHeader/>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 25, marginTop:15 }}>Workout Recommendation</Text>
      </View>

      <View style={{ flex: 4, marginTop:-20, }}>
        <Text style={{ fontSize: 20 }}>
          Input the following to get the workout recommendation :
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Input Your Gender"
          value={text}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber1}
          value={number1}
          placeholder="Input your Age"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber2}
          value={number2}
          placeholder="Input your Weight"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber3}
          value={number3}
          placeholder="Input your Height"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber4}
          value={number4}
          placeholder="Input the no.of calories you want to burn"
          keyboardType="numeric"
        />
      </View>

      <View style={{ flex: 1 }}>
        <Button
          color="green"
          title="Get Workout Recommendation"
          onPress={handleButtonPress}
          //onPress={() => Alert.alert("Here is your recommendation", "Ride a bicycle for 30 minutes", [{text: "Got it"}])}
        />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
