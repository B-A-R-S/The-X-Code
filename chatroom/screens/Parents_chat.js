import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useCallback
  }from 'react';
  import { TouchableOpacity, Text } from 'react-native';
  import { GiftedChat } from 'react-native-gifted-chat';
  import { signOut } from 'firebase/auth';
  import { useNavigation } from '@react-navigation/native';
  import { auth, database } from '../config/firebase';
  import {
    collection,
    addDoc, 
    orderBy,
    query,
    onSnapshot
  } from 'firebase/firestore';
  
  
  
  export default function Parents_chat() {
    // Initialize state variable for messages
    const [messages, setMessages] = useState([]);
    // Get navigation object from react-navigation hook
    const navigation = useNavigation(); 
  
  // Define function to handle sign out
  const onSOut = () => {
      signOut(auth).catch(error => console.log('Error : ', error));
    };
  
    // Use useLayoutEffect hook to set options for the navigation header
    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            style={{
              marginRight: 10
            }}
            onPress={onSOut}
          >
            <Text>Logout</Text>
          </TouchableOpacity>
        )
      });
    }, [navigation]);
  
    // Use useEffect hook to subscribe to the Firebase Firestore database
    useEffect(() => {
      // Create a reference to the 'chats2' collection in Firestore
      const collectionRef = collection(database, 'chats2');
      const qury = query(collectionRef, orderBy('createdAt', 'desc')); // Define a query to order documents in the collection by creation time in descending order
      
      // Use the onSnapshot function to listen for updates to the query result in real time
      const unsubscribe = onSnapshot(qury, querySnapshot => {
        // Update the state variable for messages with the new data
        setMessages(
          querySnapshot.docs.map(doc => ({
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user
          }))
        );
      });
  
      // Return a function to unsubscribe from the query when the component unmounts
      return () => unsubscribe();
    }, []);
  
  // Define function to handle sending a new message
  const onSend = useCallback((messages = []) => {
    // Update the state variable for messages with the new message
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages)
      );
      // Extract information from the new message and add it to the Firestore collection
      const { _id, createdAt, text, user } = messages[0];    
      addDoc(collection(database, 'chats2'), {
        _id,
        createdAt,
        text,
        user
      });
    },  []);
  
    // Render the GiftedChat component with the state variable for messages and handlers for sending messages and displaying the current user's avatar
  return (
    <GiftedChat
      messages={messages}
      
      onSend={messages => onSend(messages)}
      user={{
        _id: auth?.currentUser?.email,
        avatar: 'https://i.pravatar.cc/200'
      }}
      showAvatarForEveryMessage={true}
    />
  );
  }