import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput} from 'react-native';
import axios from 'axios';
import { mass } from './Insulin';
// import {mass} from './Insulin';


const Bolus = () => {
    
  const [number1, onChangeNumber1] = React.useState('');
  const [number2, onChangeNumber2] = React.useState('');
  const [number3, onChangeNumber3] = React.useState('');

  const [bolus, setResult] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

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
  const basal_units = total_daily_insulin * (50 / 100)


  const handleCalculate = async () => {
    const input1 = [Number(35), Number(insulin_sensitivity_factor), Number(number2), Number(number3), Number(basal_units), Number(insulin_carb_ratio), Number(cho_insulin_dose), Number(high_bg_correction_dose), Number(number1), Number(total_daily_insulin)];
    
    try {
        const response = await axios.post('https://us-central1-t1-diabetes-management-68efb.cloudfunctions.net/predict_insulin', { "int_array": input1 });
        setResult(response.data);

        
      } catch (error) {
        console.log(error);
      }    
    
  };

  return (
    <View style={styles.centeredView}>
        
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
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
                style={[styles.button, styles.buttonClose]}
                onPress={handleCalculate}>         
                <Text style={styles.textStyle}>Calculate</Text>
              </Pressable>
              
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            
          </View>
        </View>
      </Modal>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Bolus Dose</Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    
    backgroundColor: '#C8D9CE',
  },
  buttonClose: {
    marginTop:30,
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Bolus;