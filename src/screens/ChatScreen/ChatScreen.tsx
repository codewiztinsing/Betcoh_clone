import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { w3cwebsocket as W3CWebSocket } from "websocket";



class ChatScreen extends React.Component {

  state = {
    isLoggedIn: false,
    messages: [],
    value: '',
    name: '',
    room: 'vacad',
  }
  client = new W3CWebSocket('ws://openport.io:46738/ws/chat/' + this.state.room + '/');




  componentDidMount(){
   
    this.client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
 
}



  onSend(_messages){
  
 
    this.setState({
      messages:[this.state.messages,_messages]
    })
    

}
  renderSend (props){
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };

  renderBubble(props){
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#2e64e5',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  scrollToBottomComponent()  {
    return(
      <FontAwesome name='angle-double-down' size={22} color='#333' />
    );
  }


  render(){
  return (
    <GiftedChat
      messages={this.state.messages}
      onSend={(messages) => this.onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={this.renderBubble}
      alwaysShowSend
      renderSend={this.renderSend}
      scrollToBottom
      scrollToBottomComponent={this.scrollToBottomComponent}
    />
  );
};
}
export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});