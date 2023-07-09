import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Switch,Alert } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { ScrollView } from 'react-native';
import axios from 'axios';
import AppHeader from './AppHeader';

export default function MealRecommendation() {

  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [mealType, setMealType] = useState('');
  const [menuNo, setMenuNo] = useState('Unknown');
  const [yNew, setYNew] = useState('');
  const [showRecommended, setShowRecommended] = useState(false);
  const [recCal, setRecCal] = useState('');
  const [recTotCarb, setRecTotCarb] = useState('');
  const [recCarb, setRecCarb] = useState('');

  const [input, setInput] = useState([]);
  const [recommendation, setRecommendation] = useState('');

  useEffect(() => {
    console.log(yNew);
  }, [yNew]);


  const calculateServings = async () => {
    // Calculate recommended servings based on user details
    // ...

    // Set y_new recommendation


    // Show recommended calorie and carbohydrate amounts if the user chooses to do so
    setShowRecommended(true);
    // Set recommended calorie and carbohydrate amounts
    //Calculate the "Recommended Calorie" using a Mifflin St Jeor equation
    let bmr;
    if (gender === '2') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let rec_cal;
    if (activityLevel === '1') {
      rec_cal = bmr * 1.375;
    } else if (activityLevel === '2') {
      rec_cal = bmr * 1.55;
    } else {
      rec_cal = bmr * 1.725;
    }

    //Calculate "Recommended Total Carbohydrate(g)" using the American Diabetes Association (ADA) Recommendations
    let rec_tot_carb = rec_cal * 0.45 * 0.25;

    //Calculate "Recommended Carbohydrate (g)" using the American Diabetes Association (ADA) Recommendations
    let carb_percent;
    if (age >= 3) {
      if ([1, 3, 5].includes(mealType)) {
        carb_percent = 0.30;
      } else {
        carb_percent = 0.05;
      }
    } else if (age >= 4 && age <= 8) {
      if ([1, 3, 5].includes(mealType)) {
        carb_percent = 0.29;
      } else {
        carb_percent = 0.07;
      }
    } else if (age >= 9 && age <= 13) {
      if ([1, 3, 5].includes(mealType)) {
        carb_percent = 0.28;
      } else {
        carb_percent = 0.08;
      }
    } else {
      if ([1, 3, 5].includes(mealType)) {
        carb_percent = 0.26;
      } else {
        carb_percent = 0.11;
      }
    }

    let rec_carb = rec_tot_carb * carb_percent;
    setRecCal(rec_cal);
    setRecTotCarb(rec_tot_carb);
    setRecCarb(rec_carb);

    const input = {
      "Age": Number(age),
      "Gender": Number(gender),
      "Weight": Number(weight),
      "Height": Number(height),
      "Level_of_Activity": Number(activityLevel),
      "Meal_Type": Number(mealType),
      "Menu_No": Number(menuNo)
    };

    const data = {
      input_data : input,
    };

    try {
        await axios.post('https://us-central1-t1-diabetes-management-68efb.cloudfunctions.net/predictMeal_2',data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          const tempString = JSON.stringify(res.data.prediction);
          setRecommendation(tempString);
          setYNew(tempString);
          console.log("Code running..")
          console.log('tempString:', tempString);
          Alert.alert("Here is your recommendation", tempString, [
            { text: "Got it" },
          ]);

        });
      } catch (error) {
        console.log(error);
      }    
  };


  return (
    <ScrollView style={styles.container}>
      <AppHeader />
      <Text style={styles.title}>Meal Recommendation</Text>
      <Text style={styles.subtitle}>Please enter your details:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your gender (1 = Female / 2 = Male)"
        value={gender}
        onChangeText={setGender}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter weight in kgs"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter height in cm"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="How active are you (1 = Light / 2 = Moderate / 3 = Extreme)"
        value={activityLevel}
        onChangeText={setActivityLevel}
        keyboardType="numeric"
      />
      <Picker
        style={{ ...styles.picker }}
        selectedValue={mealType}
        onValueChange={(itemValue) => setMealType(itemValue)}
      >

        <Picker.Item label="Select Meal Type" value="Unknown" />
        <Picker.Item label="Breakfast" value="1" />
        <Picker.Item label="Snack" value="2" />
        <Picker.Item label="Lunch" value="3" />
        <Picker.Item label="Dinner" value="4" />
        <Picker.Item label="Dessert" value="5" />
      </Picker>

      
      <TextInput
        style={styles.input}
        placeholder="Enter menu number"
        value={menuNo}
        onChangeText={setMenuNo}
        keyboardType="numeric"
      />
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Show recommended calorie and carbohydrate amounts</Text>
        <Switch
          style={styles.switch}
          value={showRecommended}
          onValueChange={() => setShowRecommended(!showRecommended)}
        />
      </View>
      <Button
        title="Calculate"
        onPress={calculateServings}
      />
      {yNew !== '' && (
        <Text style={styles.recommendation_y}> {yNew} </Text>
      )}
      {showRecommended && (
        <View style={styles.recommendationContainer}>
          <Text style={styles.recommendation}>
            Recommended Calorie: {recCal.toFixed(2)}
          </Text>
          <Text style={styles.recommendation}>
            Recommended Total Carbohydrate (g): {recTotCarb.toFixed(2)}
          </Text>
          <Text style={styles.recommendation}>
            Recommended Carbohydrate (g): {recCarb.toFixed(2)}
          </Text>
        </View>
      )}
    </ScrollView>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign:'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
    width: '80%',
    alignSelf:'center'
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  recommendation_y:{
    fontSize:18,
    fontStyle:'bold',
  },

});