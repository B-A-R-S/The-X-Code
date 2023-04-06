// import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { StyleSheet, Text, SafeAreaView, ScrollView,Pressable,View, } from 'react-native';
// import Recommendation from './Recommendation';
// import KnowledgeHub from './KnowledgeHub';
// import Peersupport from './Peersupport';
// import ScreenHeaderBtn from './ScreenHeaderBtn';
import {useNavigation} from '@react-navigation/native'
import AppHeader from './AppHeader';
import Footer from './Footer';


const  Home = () => {
  const navigation = useNavigation()
  

  return (  

  

    <SafeAreaView style={styles.container}>
    
      <ScrollView style={{}} >
      
      <AppHeader/>
        

      <View style={styles.bttnArea} >
        <Button 
        title="Get Recommendation"
        // onPress={() => navigation.navigate(Recommendation)}
        />
      
        <Button 
        title="Knowledge Hub"
      
        // onPress={() => navigation.navigate(KnowledgeHub)}
        />
      
        <Button
        title="Peer Support"
        // onPress={() => navigation.navigate(Peersupport)}
        />


      </View>
      
      <StatusBar style='auto'   />
      <View style={{marginTop:300,width:86}}>
          <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => { navigation.navigate("Insulin"); } }>
              <View>
                <Text style={styles.textStyle}>Next Page</Text>
              </View>
              
          </Pressable>
      </View> 

      
      <Footer/>
      </ScrollView>
      
    <View/>
    
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

  bttnArea:{
    Flex:1, borderWidth:2, 
      borderColor:'#C4D1AD', 
      height:180,marginTop:200,
      paddingTop:30,paddingBottom:30,
      marginLeft:50,marginRight:50,
      paddingLeft:60,paddingRight:60,
      flexDirection:'column',
      backgroundColor:'#C4D1AD',borderRadius:10,
      shadowOpacity:50,
      shadowColor:'#505050'
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    marginTop:30,
    backgroundColor:'#A9B8AF',
  },

  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius:20,
  }),
});

export default Home;