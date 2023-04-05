import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Switch } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { ScrollView } from 'react-native';
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

  const calculateServings = () => {
    // Calculate recommended servings based on user details
    // ...

    // Set y_new recommendation
    setYNew('10 servings');

    // Show recommended calorie and carbohydrate amounts if the user chooses to do so
    setShowRecommended(true);
     // Set recommended calorie and carbohydrate amounts
    //Calculate the "Recommended Calorie" using a Mifflin St Jeor equations
if (Gender == '2'){
        bmr = 10 * Weight + 6.25 * Height - 5 * Age + 5
}else {
        bmr = 10 * Weight + 6.25 * Height - 5 * Age - 161
}

if (Level_of_Activity == '1') {
  rec_cal = bmr * 1.375;
} else if (Level_of_Activity == '2') {
  rec_cal = bmr * 1.55;
} else {
  rec_cal = bmr * 1.725;
}
     

//Calculate "Recommended Total Carbohydrate(g)" using the American Diabetes Association (ADA) Recommendations
rec_tot_carb = rec_cal * 0.45  * 0.25

//Calculate "Recommended Carbohydrate (g)" using the American Diabetes Association (ADA) Recommendations
if (Age >= 3){
    if (Meal_Type in [1, 3, 5]){
      carb_percent = 0.30;
    }else{
      carb_percent = 0.05;
    }
}else if (Age >= 4 && Age <= 8){
    if (Meal_Type in [1, 3, 5]){
        carb_percent = 0.29;
    }else{
        carb_percent = 0.07;
    }
}else if (Age >= 9 && Age <= 13){
    if (Meal_Type in [1, 3, 5]){
        carb_percent = 0.28;
    }else{
        carb_percent = 0.08;
    }
}else {
    if (Meal_Type in [1, 3, 5]){
        carb_percent = 0.26;
    }else{
        carb_percent = 0.11;
    }
}

    
rec_carb = rec_tot_carb * carb_percent
      setRecCal(rec_cal);
      setRecTotCarb(rec_tot_carb);
      setRecCarb(rec_carb);
  };

  return (
    <View style={styles.container}>
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
      <TextInput
        style={styles.input}
        placeholder="Enter your meal type (1 = Breakfast / 2 = Morning Snack / 3 = Lunch / 4 = Afternoon Snack / 5 = Dinner)"
        value={mealType}
        onChangeText={setMealType}
        keyboardType="numeric"
      />
      
<View style={styles.screen}>
      <Text style={styles.input}>Menu No</Text>
      <Picker
        selectedValue={menuNo}
        onValueChange={(value, index) => setMenuNo(value)}
        //mode="dropdown" // Android only
        style={styles.picker}
      >
          
         <Picker.Item label="Breakfast" value="Unknown" />
        <Picker.Item label="Kiribath -1 slice " value="1" />
        <Picker.Item label="Pol Roti -1 piece " value="2" />
        <Picker.Item label="Pittu -1 piece " value="3" />
        <Picker.Item label="Mung (Green gram) -1 cup " value="4" />
        <Picker.Item label="Kadala (Chickpea) -1 cup " value="5" />
        <Picker.Item label="Roasted bread with fish -1 piece " value="6" />
        <Picker.Item label="Uppuma -1 cup " value="7" />
         
         <Picker.Item label="Morning Snack" value="Unknown" />
        <Picker.Item label="Low fat milk -1 cup " value="8" />
        <Picker.Item label="Kola Kanda -1 glass " value="9" />
        <Picker.Item label="Yogurt -1 cup " value="10" />
        <Picker.Item label="Avocado -1/2 medium " value="11" />
        <Picker.Item label="Fruit juice -1 glass " value="12" />
        <Picker.Item label="Dark chocolate -1 piece " value="13" />
        <Picker.Item label="Banana -1 medium " value="14" />

        <Picker.Item label="Lunch" value="Unknown" />
<Picker.Item label="Red rice, chicken curry, beetroot curry, and gotukola sambol -1 plate" value="15" />
<Picker.Item label="Red rice, fish curry, green bean curry, and tomato and onion sambol -1 plate" value="16" />
<Picker.Item label="Red rice, jackfruit curry, eggplant moju, and cabbage mallung -1 plate" value="17" />
<Picker.Item label="Red rice, mung bean curry, pumpkin curry, and cucumber salad -1 plate" value="18" />
<Picker.Item label="Chicken curry, dhal curry, and mixed vegetable curry with rice -1 plate" value="19" />
<Picker.Item label="Fish curry, beetroot curry, and okra curry with rice -1 plate" value="20" />
<Picker.Item label="Potato curry, jackfruit curry, and green bean curry with rice -1 plate" value="21" />

<Picker.Item label="Afternoon Snack" value="Unknown" />
<Picker.Item label="Orange -1 medium" value="22" />
<Picker.Item label="Guava -1 medium" value="23" />
<Picker.Item label="Apple -1 medium" value="24" />
<Picker.Item label="Peanuts -25 g" value="25" />
<Picker.Item label="Veralu -4-5 fruits" value="26" />
<Picker.Item label="Watermelon -1 cup" value="27" />
<Picker.Item label="Ambarella -1 medium" value="28" />

<Picker.Item label="Dinner" value="Unknown" />
<Picker.Item label="String hoppers with fish -2 hoppers" value="29" />
<Picker.Item label="Hoppers with lunu miris -1 hopper" value="30" />
<Picker.Item label="Dosa with sambar -1 dosa" value="31" />
<Picker.Item label="Bread with dhal curry -1 slice" value="32" />
<Picker.Item label="Kurakkan thalapa with chicken curry -1 piece" value="33" />
<Picker.Item label="Egg noodles -1 cup" value="34" />
<Picker.Item label="Chapathi with gravy -1 piece" value="35" />

      </Picker>
        <Text style={styles.text}>You selected: {menuNo}</Text>
    </View>


      <Button title="Recommend my servings" onPress={calculateServings} />
      {yNew !== '' && (
        <>
          <Text style={styles.subtitle}>Predicted Serving Size:</Text>
          <Text style={styles.description}>{yNew}</Text>
        </>
      )}
      <View style={styles.switchContainer}>
        <Text style={styles.subtitle}>Do you want to know your Recommended
        </Text>
        <Switch value={showRecommended} onValueChange={setShowRecommended} />
      </View>
      {showRecommended && (
        <>
          <Text style={styles.subtitle}>Recommended Daily Calorie Intake:</Text>
          <Text style={styles.description}>{recCal}</Text>
          <Text style={styles.subtitle}>Recommended Total Carbohydrate Intake:</Text>
          <Text style={styles.description}>{recTotCarb}</Text>
          <Text style={styles.subtitle}>Recommended Carbohydrate Intake Per Meal:</Text>
          <Text style={styles.description}>{recCarb}</Text>
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
title: {
fontSize: 32,
fontWeight: 'bold',
marginBottom: 16,
},
subtitle: {
fontSize: 18,
fontWeight: 'bold',
marginVertical: 8,
},
description: {
fontSize: 16,
marginVertical: 8,
},
input: {
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 4,
padding: 8,
marginVertical: 8,
width: '80%',
},
switchContainer: {
flexDirection: 'row',
alignItems: 'center',
marginVertical: 8,
},

});
