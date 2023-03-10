// Importing the necessary modules
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import homeR from "./src/screens/homeR";
import InsulinD from "./src/screens/InsulinD";
import MealPlan from "./src/screens/MealPlan";
import Workout from "./src/screens/Workout";

// Creating a new stack navigator called "sanyam"
const sanyam = createStackNavigator(
  {
    // Defining the screens for the navigator
    Home: {
      screen: homeR // The homeR component will be displayed on this screen
    },
    Home1: {
      screen: MealPlan // The MealPlan component will be displayed on this screen
    },
    Home2: {
      screen: InsulinD // The InsulinD component will be displayed on this screen
    },
    Home3: {
      screen: Workout // The Workout component will be displayed on this screen
    }
  },
  {
    // Defining the initial route for the navigator
    initialRouteName: "Home",
    // Defining default navigation options for all screens in the navigator
    defaultNavigationOptions: {
      title: "Recommendations" // The header title for all screens will be "Recommendations"
    }
  }
);

// Creating the app container for the navigator
export default createAppContainer(sanyam);