import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {  Text, Modal, Alert, SafeAreaView, ScrollView, View , StyleSheet, TextInput,Pressable, TouchableOpacity} from 'react-native';
// import Basal from './../auth/Basal';
// import Bolus from './../auth/Bolus';
import AppHeader from './AppHeader';

export let mass = 0;

const  Insulin =() => {
  const [result, setResult] = useState('');
  const [number, setNumber1] = useState('');

  const [number1, onChangeNumber1] = React.useState('');
  const [number2, onChangeNumber2] = React.useState('');
  const [number3, onChangeNumber3] = React.useState('');

  const onPresscalculate = () => {
    const sum = parseInt(number) * 0.55
    setResult(sum.toString());
    mass = parseInt(number);
  };

    const [modalVisibleBas, setModalVisibleBas] = useState(false);
    const [bolus, setBolResult] = useState('');
    const [modalVisibleBos, setModalVisibleBos] = useState(false);

    const sum = mass * 0.55
  
    // Calculate "Basal (40-50%) units" using the formula you provided
    const basal_units = sum * (50 / 100)

    //-------------------------------//

    // Calculate "Total Daily Insulin dosage"
    const total_daily_insulin = mass * 0.55
    
    // Calculate "Insulin sensitivity Factor" using the 1888 rule
    const insulin_sensitivity_factor = 1800 / total_daily_insulin

    // Calculate "Insulin to carbohydrate Ratio" using the 500 rule
    const insulin_carb_ratio = 500 / total_daily_insulin

    // Calculate "CHO insulin dose" by dividing "Total CHO in a meal" by "Insulin to carbohydrate Ratio"
    const cho_insulin_dose = number1 / insulin_carb_ratio

    // Calculate "High blood sugar correction dose" using the formula you provided
    const high_bg_correction_dose = (number2 - number3) / insulin_sensitivity_factor

    // Calculate "Basal (40-50%) units" using the formula you provided
    const bolas_units = total_daily_insulin * (50 / 100)


    const handleCalculate = async () => {
      const input1 = [Number(35), Number(insulin_sensitivity_factor), Number(number2), Number(number3), Number(bolas_units), Number(insulin_carb_ratio), Number(cho_insulin_dose), Number(high_bg_correction_dose), Number(number1), Number(total_daily_insulin)];
      
      try {
          const response = await axios.post('https://us-central1-t1-diabetes-management-68efb.cloudfunctions.net/predict_insulin', { "int_array": input1 });
          setBolResult(response.data);

          
        } catch (error) {
          console.log(error);
        }    
    };
  return (

    <SafeAreaView style={styles.container} >
      <AppHeader/>
      <ScrollView>

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
              
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisibleBas}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisibleBas(!modalVisibleBas);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Your Basal Insulin Dose is: </Text> 
                <View>{basal_units ? (<Text style={{textAlign:'center',marginTop:10}}>{basal_units}</Text>) : null}</View>
                <Pressable
                  style={[styles.buttonBas_Bos, styles.buttonClose]}
                  onPress={() => setModalVisibleBas(!modalVisibleBas)}>
                  <Text style={styles.textStyleBas_Bol}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          
          <Pressable
            style={[styles.buttonBas_Bos, styles.buttonOpen]}
            onPress={() => setModalVisibleBas(true)}>
            <Text style={styles.textStyleBas_Bol}>Basal Dose</Text>
          </Pressable>
        </View>


             {/* // -- Bolus -- */}

         <View style={styles.centeredView}>
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleBos}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisibleBos(!modalVisibleBos);
          }}>
  
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            
            
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber1}
                value={number1}
                placeholder="Enter CHO value in your systems: "
                keyboardType="numeric"
              />
  
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber2}
                value={number2}
                placeholder="Enter Current Blood Glucos Levels: "
                keyboardType="numeric"
              /> 
  
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber3}
                value={number3}
                placeholder="Enter Target Blood Glucos Levels: "
                keyboardType="numeric"
              /> 
  
              {bolus ? <Text >Bolus Dose is :    {bolus}</Text> : null}   
  
                <Pressable
                  style={[styles.buttonBas_Bos, styles.buttonClose]}
                  onPress={handleCalculate}>         
                  <Text style={styles.textStyleBas_Bol}>Calculate</Text>
                </Pressable>
                
                <Pressable
                  style={[styles.buttonBas_Bos, [styles.buttonClose, {marginTop:15}]]}
                  onPress={() => setModalVisibleBos(!modalVisibleBos)}>
                  <Text style={styles.textStyleBas_Bol}>Close</Text>
                </Pressable>
              
            </View>
          </View>
        </Modal>
  
        <Pressable
          style={[styles.buttonBas_Bos, styles.buttonOpen]}
          onPress={() => setModalVisibleBos(true)}>
          <Text style={styles.textStyleBas_Bol}>Bolus Dose</Text>
        </Pressable>
  
      </View>
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
      height:180,marginTop:40,
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
  //-------------------------//
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonBas_Bos: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    
    backgroundColor: '#C8D9CE',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    flexDirection:'row',
  },
  textStyleBas_Bol: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  //-----------------------//
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

});

 export default Insulin;

 