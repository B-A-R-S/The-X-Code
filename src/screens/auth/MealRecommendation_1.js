import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MealRecommendation() {
  const navigation = useNavigation()
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [mealOption, setMealOption] = useState('');

  const calculateServings = () => {
    // Calculate recommended servings based on user details
    // ...

    // Set meal recommendation
    setMealOption('Meal Option 1');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meal Recommendation</Text>
      <Text style={styles.subtitle}>Please enter your details:</Text>
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (lbs)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Height (in)"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Physical Activity Level"
        value={activityLevel}
        onChangeText={setActivityLevel}
      />
      <Button title="Recommend my servings" onPress={calculateServings} />
      {mealOption !== '' && (
        <Text style={styles.subtitle}>Recommended Meal Option:</Text>
      )}
      <Text style={styles.description}>{mealOption}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
