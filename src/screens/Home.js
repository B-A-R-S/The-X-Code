// import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { StyleSheet, Text, SafeAreaView, ScrollView,Pressable,View, TouchableOpacity } from 'react-native';
// import Recommendation from './Recommendation';
// import KnowledgeHub from './KnowledgeHub';
// import Peersupport from './Peersupport';
// import ScreenHeaderBtn from './ScreenHeaderBtn';
import {useNavigation} from '@react-navigation/native'
import AppHeader from '../screens/auth/AppHeader';
import Footer from '../screens/auth/Footer';



const  Home = () => {
  const navigation = useNavigation()
  

  return (  

  

    <ScrollView style={styles.container}>
    
    
      
      
      <AppHeader/>

      {/* <ScrollView> */}
        <View style={styles.welcomeContainer}>
          <Text style={{fontSize: 25, fontWeight:'bold'}}>Welcome to home page</Text>
        </View>
          

        <View style={styles.containerHome}>

          
          <TouchableOpacity style={styles.hButton} 
            onPress={() => navigation.navigate("RecommendationsMenu")}>
            <Text style={styles.hButtonTxt}>Recommendations</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.hButton} 
            onPress={() => navigation.navigate("ReadData")}>
            <Text style={styles.hButtonTxt}>Knowledge Portal</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.hButton} 
            onPress={() => navigation.navigate("Chat_Home")}>
            <Text style={styles.hButtonTxt}>Peer Support</Text>
          </TouchableOpacity>

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

            <Footer/>

        </View> 

        
      
      {/* </ScrollView> */}

     
      

    
    </ScrollView>
  );
  
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4FBE7',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    marginTop:25,
    fontWeight:'bold'
  },

  containerHome:{
    flex: 1,

    marginTop: 20,
  },

  // bttnArea:{
  //   Flex:1, borderWidth:2, 
  //     borderColor:'#C4D1AD', 
  //     height:180,marginTop:200,
  //     paddingTop:30,paddingBottom:0,
  //     marginLeft:50,marginRight:50,
  //     paddingLeft:60,paddingRight:60,
  //     flexDirection:'column',
  //     backgroundColor:'#C4D1AD',borderRadius:10,
  //     shadowOpacity:50,
  //     shadowColor:'#505050'
  // },

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

  hButton:{
    alignSelf:'center',
    margin:10,
    backgroundColor: "#0782F9",
    height: 110,
    width: 280,
    borderRadius: 15,
    alignContent:'center',
    alignItems:'center',
    marginTop:20,
  },

  hButtonTxt:{
    fontSize: 25,
    textAlign: 'center',
    padding: 30,
    color: "white",
    textAlign:'center',
    fontStyle:'bold',
    fontWeight:'bold'
  },
});

export default Home;