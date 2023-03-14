import { StyleSheet, Image,  Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import Lottie from 'lottie-react-native';


const Done =({...props}) => (
  <TouchableOpacity style = {{marginHorizontal:20}} {...props}>
          <Text style={{fontSize:16}}>Let's Start</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
  
    return(
      <Onboarding
      DoneButtonComponent = {Done}
      onDone={() => navigation.replace('Login')}
      onSkip={() => navigation.replace('Login')}


      pages={[
        {
          backgroundColor: '#fff',
          image: <Lottie style={styles.lottie} source={require('../../assets/welcome-1.json')} autoPlay loop />,
          title: 'Hello There..!',
          subtitle: 'Welcome to the T1 Diabetes management by "Team X Code"',
        },

        {
          backgroundColor: '#fff',
          image: <Lottie style={styles.lottie} source={require('../../assets/BloodCheck.json')} autoPlay loop />,
          title: 'Get the right dose of insulin..',
          subtitle: "We'll calculate it based on your blood glucose level",
        },

        {
          backgroundColor: '#fff',
          image: <Lottie style={styles.lottie} source={require('../../assets/Workout.json')} autoPlay loop />,
          title: 'Get workout recomendations..',
          subtitle: 'Get varity of workout plans based on your blood glucose level',
        },

        {
          backgroundColor: '#fff',
          image: <Lottie style={styles.lottie} source={require('../../assets/meal.json')} autoPlay loop />,
          title: 'Get meal recommendations..',
          subtitle: "You'll have well-balanced meals.",
        },

        {
          backgroundColor: '#fff',
          image: <Lottie style={styles.lottie} source={require('../../assets/Knowledge-1.json')} autoPlay loop />,
          title: 'Get Know more about T1D..',
          subtitle: 'Learn about T1 diabetes through our knowledge portal..',
        },

        {
          backgroundColor: '#fff',
          image: <Lottie style={styles.lottie} source={require('../../assets/peerSupport.json')} autoPlay loop />,
          title: "Stay connected..!",
          subtitle: 'Connect with other peers & share your thoughts',
        },

      ]}
    />
  );
}

export default OnboardingScreen

const styles = StyleSheet.create({
  lottie:{
    width:400, 
    height:300, 
    alignSelf:'center',
    marginTop:-10,
  }
})