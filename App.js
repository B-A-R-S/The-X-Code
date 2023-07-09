import React from "react";
import { StyleSheet } from "react-native";


import Home from "./src/screens/Home";
import Login from "./src/screens/auth/Login";
import Register from "./src/screens/auth/Register";
import OnboardingScreen from "./src/screens/auth/OnboardingScreen";
// import HomeMain from "./src/screens/auth/HomeMain";
import PrivacyPolicy from "./src/screens/auth/PrivacyPolicy";
// import WorkoutRecJson from "./src/screens/auth/WorkoutRecJson"
import RecommendationsMenu from "./src/screens/auth/RecommendationsMenu";
import InforPortal from "./src/screens/auth/InforPortal";
import ReadData from "./src/screens/auth/ReadData";
import DisplayData from "./src/screens/auth/DisplayData";

import Chat_Home from "./src/screens/auth/Chat_Home"
import Kids_Chat from './src/screens/auth/Kids_Chat';
import ChatLogin from './src/screens/auth/ChatLogin';
import Signup from './src/screens/auth/Signup';
import Parents_chat from './src/screens/auth/Parents_chat';
import Splash from './src/screens/auth/Splash'
import Insulin from './src/screens/auth/Insulin'
import MealRecommendationNew from "./src/screens/auth/MealRecommendationNew";


// import Login_1 from "./src/screens/auth/Login_1";

// import PdfViewer from "./src/screens/auth/PdfViewer";
// import MyComponent from "./src/screens/auth/MyComponent";
// import TitleBar from "./src/screens/auth/homemenu";
// import container1 from "./src/screens/auth/homemenu";

// import WorkoutRecJson from "./src/screens/auth/WorkoutRecJson"



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WorkoutRec from "./src/screens/auth/WorkoutRec";


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>   
        {/* <Stack.Screen name="Login_1" component={Login_1} />       */}
        {/* <Stack.Screen name="MyComponent" component={MyComponent}/> */}
        {/* <Stack.Screen name="PdfViewer" component={PdfViewer}/> */}

        {/* <Stack.Screen name="TitleBar" component={TitleBar}/> */}
        {/* <Stack.Screen name="homeR" component={homeR}/> */}
        {/* <Stack.Screen name="WorkoutRecJson" component={WorkoutRecJson}/> */}
        {/* <Stack.Screen name="HomeMain" component={HomeMain}/> */}

        <Stack.Screen name="Onboarding" component={OnboardingScreen} />

        
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy}/>
        <Stack.Screen name="RecommendationsMenu" component={RecommendationsMenu}/>
        <Stack.Screen name="WorkoutRec" component={WorkoutRec}/>
        <Stack.Screen name="InforPortal" component={InforPortal} /> 
        <Stack.Screen name="ReadData" component={ReadData} />
        <Stack.Screen name="DisplayData" component={DisplayData} />

        <Stack.Screen name='Chat_Home' component={Chat_Home} />
        <Stack.Screen name='Kids_Chat' component={Kids_Chat} />
        <Stack.Screen name='Parents_chat' component={Parents_chat} />
        <Stack.Screen name='ChatLogin' component={ChatLogin} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Insulin' component={Insulin} />
        <Stack.Screen name="MealRecommendationNew" component={MealRecommendationNew}/>

        



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
