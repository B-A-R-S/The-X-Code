import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import 'firebase/firestore';
// import { firestore } from '../../../firebase'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useNavigation } from '@react-navigation/native';
import { firestore } from '../../../firebase';
import { async } from '@firebase/util';
import AppHeader from './AppHeader';

const ReadData = () => {
  const navigation = useNavigation()

  const [users, setUsers] = useState([]);  
  const userDocument = firestore.collection('Test');

  const Separator = () => <View style={styles.separator} />;

  

  useEffect( () => {
    userDocument
    .onSnapshot(
      quarySnapshot => {
        const users =[]
        quarySnapshot.forEach((doc) => {
          const {heading, content} = doc.data()
          users.push({
            id: doc.id,
            heading,
            content,
          })
        })
        setUsers(users)
      }
    )
  }, [])

  return (
    <View style = {{flex:1, marginTop:55}}>
      <View style={styles.portalHeader}>
      <AppHeader/>
        <Text style={styles.portalTopic}>Knowledge Portal</Text>
        <Separator/>
      </View>
      <FlatList 
        style={{height:'100%'}}
        data={users}
        numColumns={1}
        renderItem = {({item}) => (
        
          <TouchableOpacity style = 
           {styles.container} 
           onPress={() => navigation.navigate('DisplayData', { item })}>
              <View style = {styles.innerContainer}>
                <Text style = {styles.itemHeading}>{item.heading}</Text>
                {/* <Text style = {styles.itemContent}>{item.content}</Text> */}
              </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default ReadData

const styles = StyleSheet.create({
  container:{
    backgroundColor:'White',
    padding:12,
    borderRadius:10,
    margin:5,
    marginHorizontal:10,
    borderWidth:3,
    borderColor:'#0782F9',
  },

  innerContainer:{
    alignItems:'center',
    flexDirection:'column',
  },

  itemHeading:{
    fontWeight:'bold',
    fontSize:15,
    textAlign:'center',
  },

  itemContent:{
    fontWeight:'300',
  },

  portalHeader:{
    alignContent:'center',
    marginTop:-45,
    marginBottom:15,
  },

  portalTopic:{
    fontSize:40,
    textAlign:'center',
    fontWeight:'bold',
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})