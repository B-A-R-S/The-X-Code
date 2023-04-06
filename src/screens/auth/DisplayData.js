import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import 'firebase/firestore';
import { firestore } from '../../../firebase';
import ReadData from './ReadData';
import { ScrollView } from 'react-native-gesture-handler';

const Separator = () => <View style={styles.separator} />;

const DisplayData = ({ route }) => {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
        <Text style={styles.itemHeading}>{item.heading}</Text>
      <Separator/>
        <Text style={styles.itemContent}>{item.content}</Text>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  itemContent: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
    textAlign:'center',
    marginBottom:30,
    
  },

  container:{
    margin:10,
    padding:10,
    marginTop:50,
    borderWidth:2,
    borderColor:'gray',
    borderRadius:10,
  },

  itemHeading:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:18,
    color:'#0782F9',
    marginTop:8,
    marginBottom:6,
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default DisplayData;
