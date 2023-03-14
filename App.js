import React from "react";
import Home from "./src/screens/Home";
import Login from "./src/screens/auth/Login";
import Register from "./src/screens/auth/Register";
import { StyleSheet, Text, View } from "react-native";
import OnboardingScreen from "./src/screens/auth/OnboardingScreen";
import Login_1 from "./src/screens/auth/Login_1";
import InforPortal from "./src/screens/auth/InforPortal";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>   
        <Stack.Screen name="Login_1" component={Login_1} />     
        <Stack.Screen name="InforPortal" component={InforPortal} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
