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
      const collectionRef = collection(database, 'chats2');
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
  
  
  const onSend = useCallback((messages = []) => {
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages)
      );
      const { _id, createdAt, text, user } = messages[0];    
      addDoc(collection(database, 'chats2'), {
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