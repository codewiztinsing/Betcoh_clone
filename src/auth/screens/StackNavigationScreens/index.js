import * as React from 'react';
import {SafeAreaView, Text, TextInput, View,StyleSheet, Keyboard, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


//home stack screens
import HomeScreen from '../../../screens/HomeScreen';
import ProductScreen from '../../../screens/ProductScreen';

// auth screens
import LoginScreen from '../LoginScreen';
import SignupScreen from '../SignupScreen';
import { Searchbar } from 'react-native-paper';
import SearchBar from '../../../componets/SeachBar';
import OrderScreen from '../../../screens/OrderScreens';
import SearchScreen from '../../../screens/SeachScreen';


// stacks we gonna use
const HomeStack = createStackNavigator();


// home stack navigators
function StackHomeScreens() {
 


     return (
         <HomeStack.Navigator 
         screenOptions={{
            headerStyle: {
              backgroundColor: "#9AC4F8",
            },
            headerShown:false,
            headerTintColor: "white",
            headerBackTitle: "Back",
          }}
         >
            <HomeStack.Screen name="Home" component={HomeScreen}/>
            <HomeStack.Screen name="Search" component={SearchScreen}/>
            <HomeStack.Screen name="Product" component={ProductScreen}/>
            <HomeStack.Screen name="Order" component={OrderScreen}/>
         </HomeStack.Navigator>
      );
    }



// auth screens screens
function StackAuthScreens() {
      return (
          <HomeStack.Navigator
          
          screenOptions={{
             headerStyle: {
               backgroundColor: "#9AC4F8",
             },
             headerShown:false,
             headerTintColor: "white",
             headerBackTitle: "Back",
           }}
          >
             <HomeStack.Screen name="_Login" component={LoginScreen}/>
             <HomeStack.Screen name="SignUp" component={SignupScreen}/>
          </HomeStack.Navigator>
       );
     }

export {StackHomeScreens,StackAuthScreens};



