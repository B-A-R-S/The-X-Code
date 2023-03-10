import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons'; // importing FontAwesome icons
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';  // importing Entypo icons
const beeImageUrl ='https://img.freepik.com/free-vector/cute-bee-flying-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector_138676-6016.jpg?w=740&t=st=1678112836~exp=1678113436~hmac=97338f01d435c999c2700266bddc40fc36a530c4a9e5387f22d52cba9dd65107';
//defines a functional component called ChatHome.
const ChatHome = () => {

    const navigation = useNavigation();   // getting navigation object from react-navigation

    useEffect(() => {      // useEffect to set the navigation options for the screen
        navigation.setOptions({
            headerLeft: () => (
                <FontAwesome name="home" size={30} color={colors.gray} style={{marginLeft: 15}}/>  // customizing header left with FontAwesome icon
            ),
            headerRight: () => (
                <Image
                    source={{ uri: beeImageUrl }}   // Setting the header image for the screen
                    style={{
                        width: 40,
                        height: 40,
                        marginRight: 15,
                    }}
                />
            ),
            
        });
    }, [navigation]);   // Adding navigation as a dependency to useEffect to update when navigation changes
    
    

    return (
        // Setting the main view for the screen
        <View style={styles.container}>  
        <Text style={styles.bodyText1}>KIDS</Text>  
        <View style={styles.view1}>
        
            <TouchableOpacity
                onPress={() => navigation.navigate("Kids_Chat")}  // Adding a button that navigates to another screen when pressed
                style={styles.chatButton}
            >
                <Entypo name="arrow-bold-right" size={30} color={colors.lightGray} />  
            </TouchableOpacity>
            

        </View>
        <Text style={styles.bodyText2}>PARENTS</Text>  
        <View style={styles.view2}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Parents_chat")}
                style={styles.chatButton1}
            >
                <Entypo name="arrow-bold-right" size={30} color={colors.lightGray} />
            </TouchableOpacity>
            
        </View>
            
            
        </View>


        
    );
    };
    


    export default ChatHome;

    // Defining styles for the components
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            backgroundColor: "#ff1",
        },
        chatButton: {
            
            alignItems: 'center',
            justifyContent: 'center',
            shadowOffset: {
                width: 10,
                height: 12,
            }, 
            marginRight: 150,
            marginBottom: 100,
            backgroundColor: colors.black,
            height: 150,
            width: 150,
            borderRadius: 125,
        },
        chatButton1: {
            
            alignItems: 'center',
            justifyContent: 'center',
            shadowOffset: {
                width: 10,
                height: 12,
            },
            marginRight: 150,
            marginBottom: 100,
            backgroundColor: colors.primary,
            height: 150,
            width: 150,
            borderRadius: 125,
        },
    
        bodyText1:{
            fontSize:30,
            marginRight:200,
            marginTop:20,
        },
        bodyText2:{
            fontSize:30,
            marginRight:160,
            marginTop:80,
        },
        view1: {
            flex: 0.5,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            backgroundColor: "#ff1",
        },
        view2: {
            flex: 0.5,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            backgroundColor: "#ff1",
        }
    });