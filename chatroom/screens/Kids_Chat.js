import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useCallback
  }from 'react';
  import { TouchableOpacity, Text } from 'react-native';  /*k*/
  import { GiftedChat } from 'react-native-gifted-chat';
  import { signOut } from 'firebase/auth';
  
  import { auth, database } from '../config/firebase';
  import { useNavigation } from '@react-navigation/native';
  import {
    collection,
    addDoc, 
    orderBy,
    query,
    onSnapshot
  } from 'firebase/firestore';
  
  
  
  export default function Kids_Chat() {
    const [messages, setMessages] = useState([]);
    const navigation = useNavigation();   
    
  const onSOut = () => {
      signOut(auth).catch(error => console.log('Error : ', error));
    };
  
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
  
    useEffect(() => {
      const collectionRef = collection(database, 'chats');
      const qury = query(collectionRef, orderBy('createdAt', 'desc'));
  
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
  
      return () => unsubscribe();
    }, []);
  
  
  const onSend = useCallback((messages = []) => {  /*l*/
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages)
      );
      const { _id, createdAt, text, user } = messages[0];  /*j*/  
      addDoc(collection(database, 'chats'), {
        _id,
        createdAt,
        text,
        user
      });
    },  []);
  
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