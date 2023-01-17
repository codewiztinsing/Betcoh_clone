import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useContext, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Auth and Home stacks we have
import {StackAuthScreens, StackHomeScreens} from '../StackNavigationScreens';
import ChatScreen from '../../../screens/ChatScreen';
import Payment from '../../../screens/Payment';
import DrawerNavigator from '../DrawerNavigation';
import {Context} from '../../../GlobalContext/globalContext';
import Profile from '../../../screens/ProfileScreen/profile';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const globalContext = useContext(Context);
  const {isLoggedIn} = globalContext;
  return (
    <Tab.Navigator screenOptions={() => ({tabBarShowLabel: false})}>
      <Tab.Screen
        name="Landing"
        component={DrawerNavigator}
        options={{
          tabBarLabel: 'Home screen',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

        {
          isLoggedIn &&  
          <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile screen',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
  
        }
    <Tab.Screen
            name="Payment"
            component={Payment}
            options={{
              tabBarLabel: 'Profile screen',
              headerShown: false,
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="phone-alert" color={color} size={size} />
              ),
            }}
          />

      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: 'Chat screen',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
