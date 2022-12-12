import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Auth and Home stacks we have
import { StackAuthScreens, StackHomeScreens } from '../StackNavigationScreens';
import ChatScreen from '../../../screens/ChatScreen';
import Payment from '../../../screens/Payment';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Landing" component={StackHomeScreens}
         options={
          {
            tabBarLabel:'Home screen',
            headerShown:false,
            tabBarIcon:({color,size}) => (
              <MaterialCommunityIcons name='home' color={color} size={size}/>
            )
          }
        }
      />

     <Tab.Screen name="Chat" component={ChatScreen}
         options={
          {
            tabBarLabel:'Chat screen',
            headerShown:false,
            tabBarIcon:({color,size}) => (
              <MaterialCommunityIcons name='chat' color={color} size={size}/>
            )
          }
        }
      />


     <Tab.Screen name="Payment" component={Payment}
         options={
          {
            tabBarLabel:'payment screen',
            headerShown:false,
            tabBarIcon:({color,size}) => (
              <MaterialCommunityIcons name='contactless-payment' color={color} size={size}/>
            )
          }
        }
      />
    
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
