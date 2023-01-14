import { onValue, ref } from 'firebase/database';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { SystemMessage } from 'react-native-gifted-chat';
import { database } from '../../../config/firebase';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from './styles';




// const Messages = [
//   {
//     id: '1',
//     userName: 'Jenny Doe',
//     // userImg: require('../assets/users/user-3.jpg'),
//     messageTime: '4 mins ago',
//     messageText:
//       'Hey there, this is my test for a post of my social app in React Native.',
//   },
//   {
//     id: '2',
//     userName: 'John Doe',
//     // userImg: require('../assets/users/user-1.jpg'),
//     messageTime: '2 hours ago',
//     messageText:
//       'Hey there, this is my test for a post of my social app in React Native.',
//   },
//   {
//     id: '3',
//     userName: 'Ken William',
//     // userImg: require('../assets/users/user-4.jpg'),
//     messageTime: '1 hours ago',
//     messageText:
//       'Hey there, this is my test for a post of my social app in React Native.',
//   },
//   {
//     id: '4',
//     userName: 'Selina Paul',
//     // userImg: require('../assets/users/user-6.jpg'),
//     messageTime: '1 day ago',
//     messageText:
//       'Hey there, this is my test for a post of my social app in React Native.',
//   },
//   {
//     id: '5',
//     userName: 'Christy Alex',
//     // userImg: require('../assets/users/user-7.jpg'),
//     messageTime: '2 days ago',
//     messageText:
//       'Hey there, this is my test for a post of my social app in React Native.',
//   },
// ];


const Messages = []

const _message = () => {
const db = database
const getAllUsers = ref(db, 'users/');
onValue(getAllUsers, (snapshot) => {
  const data = snapshot.val();
  const key = snapshot.key
     console.log(key)

});
}

_message()
const MessagesScreen = ({navigation}) => {


  // const [Messages,setMessages] = useState([])


    return (
      <Container>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
              <UserInfo>
                <UserImgWrapper>
                  {/* <UserImg source={item.userImg} /> */}
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      </Container>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});