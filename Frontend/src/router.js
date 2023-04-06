import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "../screen/Home";
import Splash from "../screen/Splash";
import Insulin from "../screen/Insulin";
// import Recommendation from "../screen/Recommendation";
// import Peersupport from "../screen/Peersupport";
// import KnowledgeHub from "../screen/KnowledgeHub";
import { TouchableOpacity } from "react-native";
// import ScreenHeaderBtn from "../screen/ScreenHeaderBtn";

const Stack = createNativeStackNavigator();
const AppRouter = () => {

    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen  name="Insulin" component={Insulin} options={{title: 'Insulin'}} />
            {/* <Stack.Screen   name="Recommendation " component={Recommendation}  options={{title: 'Recommendation'}}/> */}
            {/* <Stack.Screen   name="KnowledgeHub " component={KnowledgeHub} options={{title: 'KnowledgeHub'}} /> */}
            {/* <Stack.Screen   name="Peersupport " component={Peersupport} options={{title: 'Peersupport'}}/> */}

          </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppRouter;