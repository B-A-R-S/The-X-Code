import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useCallback
  }from 'react';
  import { TouchableOpacity, Text } from 'react-native';  /*k*/
  import { GiftedChat } from 'react-native-gifted-chat';

  import { signOut } from 'firebase/auth';
  
  // import { auth, firestore } from '../config/firebase';
  import { auth, firestore } from '../../../firebase';
  import { useNavigation } from '@react-navigation/native';
  import 'firebase/firestore';
  import {
    collection,
    addDoc, 
    orderBy,
    query,
    onSnapshot
  } from 'firebase/firestore';

  


  
  
  
  export default function Kids_Chat() {
    // Define  variable to store messages
    const [messages, setMessages] = useState([]);
    // Use the useNavigation hook to access the navigation object
    const navigation = useNavigation(); 

  // Function to sign out of Firebase authentication  
  const onSOut = () => {
      signOut(auth).catch(error => console.log('Error : ', error));
    };
    // Use the useLayoutEffect hook to add a Logout button to the header
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
    
    // Use the useEffect hook to fetch messages from Firebase Firestore
    useEffect(() => {
      const collectionRef = collection(firestore, 'chats');
      const qury = query(collectionRef, orderBy('createdAt', 'desc'));
      
      // Subscribe to changes in the collection and update state accordingly
      const unsubscribe = onSnapshot(qury, querySnapshot => {
        setMessages(
          querySnapshot.docs.map(doc => ({
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user
          }))
        );
      });

      // Return a cleanup function to unsubscribe from the collection when the component unmounts
      return () => unsubscribe();
    }, []);
  
  // Function to handle sending messages and adding them to the Firestore collection
  const onSend = useCallback((messages = []) => {  /*l*/
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages)
      );
      const { _id, createdAt, text, user } = messages[0];  /*j*/  
      addDoc(collection(firestore, 'chats'), {
        _id,
        createdAt,
        text,
        user
      });
    },  []);
  
  return (  //Create the GiftedChat component and add the necessary properties.
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