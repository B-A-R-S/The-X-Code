import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput} from 'react-native';

const Bolus = () => {
    
  const [number1, onChangeNumber1] = React.useState('');
  const [number2, onChangeNumber2] = React.useState('');
  const [result, setResult] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const handleCalculate = () => {
    const sum = parseInt(number1) + parseInt(number2)
    setResult(sum.toString());
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

            {result ? <Text >Bolus Dose is :    {result}</Text> : null}   

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