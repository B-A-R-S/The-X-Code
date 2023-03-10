import { StyleSheet, Text, View, SafeAreaView, Image, Button, Platform, StatusBar, TouchableOpacity} from 'react-native';
import WorkoutRec from "./WorkoutRec";
import {useDimensions } from '@react-native-community/hooks';
export default function SelectAccount() {
  console.log("App executed");
  
  return (
    <SafeAreaView style={styles.container}>

      <View style={{flex: 1}}>
        <Text style={{fontSize: 25}}>Select Your Account</Text>
      </View>

      <View style={{flex: 5}}>
        <TouchableOpacity>
          <View>
            <Text
            style={[styles.buttons, styles.parent]}>Parent Account</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <View>
            <Text
            style={[styles.buttons, styles.child]}>Child Account</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <View>
            <Text
            style={[styles.buttons, styles.signUp]}>Sign Up</Text>
          </View>
        </TouchableOpacity>
        
      </View>
    <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "space-around",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
  buttons: {
    fontSize: 20,
    padding: 35,
    margin: 20,
    textAlign: "center",
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 20
  },
  parent: {
    backgroundColor: "#9cdb9e",
    borderColor: "#457346",
  },
  child: {
    backgroundColor: "#f2b1f1",
    borderColor: "#6e3c6d",
  },
  signUp: {
    backgroundColor: "#97dae6",
    borderColor: "#4a7a82",
  },
  
});
