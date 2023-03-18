import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/logo.png')}
      />
      <Text style={styles.title}>About Our App</Text>
      <Text style={styles.description}>
        Our app is designed to help children and adolescents with Type 1 Diabetes manage their condition more effectively. We offer personalized recommendations for insulin dosage, meal planning, and workouts based on the user's individual needs and preferences.
      </Text>
      <Text style={styles.title}>Knowledge Portal</Text>
      <Text style={styles.description}>
        Our app also includes a knowledge portal where users can learn more about Type 1 Diabetes, including symptoms, treatments, and tips for self-care. We believe that education and awareness are key to managing this condition successfully, and we want to provide our users with the tools they need to live healthy and fulfilling lives.
      </Text>
      <Text style={styles.title}>Peer Support</Text>
      <Text style={styles.description}>
        We understand that living with Type 1 Diabetes can be challenging, which is why we've included a peer support feature in our app. This allows users to connect with others who have similar experiences and share tips, advice, and emotional support. We believe that community is an important part of managing any chronic condition, and we want to provide our users with a safe and supportive space to connect with others.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});
