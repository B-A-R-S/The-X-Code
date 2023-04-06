import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {  Text, SafeAreaView, ScrollView, View , StyleSheet, TextInput,Pressable, TouchableOpacity} from 'react-native';
import Basal from './../auth/Basal';
import Bolus from './../auth/Bolus';
export let mass = 0;

const  Insulin =() => {
  const [result, setResult] = useState('');
  const [number, setNumber1] = useState('');

  const onPresscalculate = () => {
    const sum = parseInt(number) * 0.55
    setResult(sum.toString());
    mass = parseInt(number);
  };
  

  return (

    <SafeAreaView style={styles.container} >
    <ScrollView>
      <Basal number={number} />
      <View style={styles.dailyDose}>

      <Text style={{textAlign:'center'}}>Total Daily Dose:</Text>

      <View style={{borderWidth:1, borderColor:'black',height:80, marginTop:20}}>


            {result ? <Text style={{textAlign:'center',marginTop:30}}>{result}</Text> : null}

      </View>
      

      </View>
      <View style={styles.doseCalarea}>

        <Text> Do you want to Re calculate your dose?</Text>
        
        

        <TextInput style={{borderWidth:2,borderColor:'#C0D0A5',marginTop:20,marginBottom:20,height:50,borderRadius:5}}
          placeholder="Enter weight in Kilograms:"
          keyboardType="numeric"
          textAlign='center'
          onChangeText={(value) => setNumber1(value)}
          value={number}
          
        />


        
          <Pressable style={styles.calculatePress} 
            onPress={onPresscalculate}>
            <Text style={{alignSelf:'center'}}>Calculate</Text>
          </Pressable>
      
            
          
          
        
       

      </View>

      
      <View style={{flex:1,marginTop:200,height:120, borderWidth:2,flexDirection:'row',marginBottom:100, borderRadius:10, borderColor:'#C8D9CE' }}>
            <Basal />
            <Bolus />

      </View>
      

      
    </ScrollView>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4FBE7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dailyDose:{
      Flex:1, 
      borderWidth:2, 
      borderColor:'#C4D1AD', 
      height:180,marginTop:200,
      paddingTop:30,paddingBottom:30,
      marginLeft:10,marginRight:10,
      paddingLeft:80,paddingRight:80,
      backgroundColor:'#C4D1AD',borderRadius:10,
      shadowOpacity:50,
      shadowColor:'#505050'
  },

  doseCalarea:{
      flex:1, 
      borderWidth:0, 
      borderColor:'#C4D1AD', 
      height:20,marginTop:30,
      fontSize:12,
      paddingTop:0,paddingBottom:0,
      marginLeft:10,marginRight:10,
      paddingLeft:50,paddingRight:50,
      backgroundColor:'#F4FBE7',borderRadius:0,
  },

  calculatePress:{
    height:50,
    margin:10,
    paddingTop:15,
    paddingBottom:0,
    marginLeft:10,
    borderRadius:50,
    backgroundColor:'#C8D9CE',
  },

  Btn:{
    flex:1,
    borderWidth:2,
    borderColor:'black'
  },
  button: {
    textAlign:'center',
    alignContent:'center',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    flex:1,
    height:10,
    marginBottom:0,
    marginTop:0,
    paddingTop:10,
    paddingBottom:20,
    backgroundColor:'#C8D9CE',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    alignContent:'center'
  },
  

});

 export default Insulin;

 