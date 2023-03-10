//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Platform, StatusBar} from 'react-native';
import SelectAccount from "./src/SelectAccount";
import WorkoutRec from "./src/WorkoutRec";
import Home from "./src/Home";
import {useDimensions } from '@react-native-community/hooks';
import 'react-native-gesture-handler';

export default function App() {
  return<WorkoutRec/>
}